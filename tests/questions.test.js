// Data integrity tests for all question category files.
// Catches typos in correct indices, empty options, and length imbalances
// before they reach a live event.
// Run with: node --test tests/questions.test.js

"use strict";

const { describe, test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const CATEGORIES_DIR = path.join(__dirname, "../data/categories");
const categoryFiles = fs.readdirSync(CATEGORIES_DIR)
  .filter(f => f.endsWith(".js"))
  .sort();

const LANGS = ["es", "en"];

// ─── Per-category checks ───────────────────────────────────────────────────────

for (const file of categoryFiles) {
  const name = file.replace(".js", "");

  describe(`Category: ${name}`, () => {
    const questions = require(path.join(CATEGORIES_DIR, file));

    test("loads as a non-empty array", () => {
      assert.ok(Array.isArray(questions), "Not an array");
      assert.ok(questions.length >= 5, `Expected ≥5 questions, got ${questions.length}`);
    });

    test("exports questions with the required bilingual fields", () => {
      for (const [i, q] of questions.entries()) {
        // text
        assert.ok(q.text && typeof q.text === "object",
          `Q${i + 1}: 'text' must be a bilingual object`);
        for (const lang of LANGS) {
          assert.ok(typeof q.text[lang] === "string" && q.text[lang].trim().length > 0,
            `Q${i + 1}: 'text.${lang}' is missing or empty`);
        }
        // options
        assert.ok(q.options && typeof q.options === "object" && !Array.isArray(q.options),
          `Q${i + 1}: 'options' must be a bilingual object`);
        for (const lang of LANGS) {
          assert.ok(Array.isArray(q.options[lang]),
            `Q${i + 1}: 'options.${lang}' is not an array`);
        }
        // correct
        assert.ok(typeof q.correct === "number",
          `Q${i + 1}: 'correct' is not a number`);
        // explanation
        assert.ok(q.explanation && typeof q.explanation === "object",
          `Q${i + 1}: 'explanation' must be a bilingual object`);
        for (const lang of LANGS) {
          assert.ok(typeof q.explanation[lang] === "string" && q.explanation[lang].trim().length > 0,
            `Q${i + 1}: 'explanation.${lang}' is missing or empty`);
        }
        // both languages have the same number of options
        assert.strictEqual(q.options.es.length, q.options.en.length,
          `Q${i + 1}: options.es and options.en have different lengths`);
      }
    });

    test("every correct index is within the options array bounds", () => {
      for (const [i, q] of questions.entries()) {
        assert.ok(
          q.correct >= 0 && q.correct < q.options.es.length,
          `Q${i + 1} "${q.text.es.slice(0, 40)}": correct=${q.correct} is out of bounds (${q.options.es.length} options)`
        );
      }
    });

    test("every question has at least 2 non-empty options in each language", () => {
      for (const [i, q] of questions.entries()) {
        for (const lang of LANGS) {
          assert.ok(q.options[lang].length >= 2,
            `Q${i + 1} [${lang}]: only ${q.options[lang].length} option(s)`);
          for (const [j, opt] of q.options[lang].entries()) {
            assert.ok(typeof opt === "string" && opt.trim().length > 0,
              `Q${i + 1} [${lang}] option[${j}] is empty or not a string`);
          }
        }
      }
    });

    test("correct answer is not more than 2 words longer than the longest wrong answer (both languages)", () => {
      for (const [i, q] of questions.entries()) {
        for (const lang of LANGS) {
          const wordCounts = q.options[lang].map(o => o.split(/\s+/).length);
          const correctLen = wordCounts[q.correct];
          const maxWrongLen = Math.max(...wordCounts.filter((_, j) => j !== q.correct));
          const diff = correctLen - maxWrongLen;
          assert.ok(diff <= 2,
            `Q${i + 1} [${lang}] "${q.text[lang].slice(0, 40)}": correct answer is ${diff} words longer than the longest wrong answer (makes it guessable by length)`
          );
        }
      }
    });

    test("no duplicate option text within a question (both languages)", () => {
      for (const [i, q] of questions.entries()) {
        for (const lang of LANGS) {
          const lower = q.options[lang].map(o => o.trim().toLowerCase());
          const unique = new Set(lower);
          assert.strictEqual(unique.size, lower.length,
            `Q${i + 1} [${lang}]: has duplicate answer options`);
        }
      }
    });
  });
}

// ─── Cross-category checks ─────────────────────────────────────────────────────

describe("All categories combined", () => {
  test("each category file can be required without errors", () => {
    for (const file of categoryFiles) {
      assert.doesNotThrow(
        () => require(path.join(CATEGORIES_DIR, file)),
        `Category file "${file}" threw on require`
      );
    }
  });

  test("total question bank has at least 50 questions", () => {
    const total = categoryFiles.reduce((sum, file) => {
      return sum + require(path.join(CATEGORIES_DIR, file)).length;
    }, 0);
    assert.ok(total >= 50, `Only ${total} questions in total`);
  });
});
