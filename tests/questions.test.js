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

// ─── Per-category checks ───────────────────────────────────────────────────────

for (const file of categoryFiles) {
  const name = file.replace(".js", "");

  describe(`Category: ${name}`, () => {
    const questions = require(path.join(CATEGORIES_DIR, file));

    test("loads as a non-empty array", () => {
      assert.ok(Array.isArray(questions), "Not an array");
      assert.ok(questions.length >= 5, `Expected ≥5 questions, got ${questions.length}`);
    });

    test("exports questions with the required fields", () => {
      for (const [i, q] of questions.entries()) {
        assert.ok(typeof q.text === "string" && q.text.trim().length > 0,
          `Q${i + 1}: 'text' is missing or empty`);
        assert.ok(Array.isArray(q.options),
          `Q${i + 1}: 'options' is not an array`);
        assert.ok(typeof q.correct === "number",
          `Q${i + 1}: 'correct' is not a number`);
        assert.ok(typeof q.explanation === "string" && q.explanation.trim().length > 0,
          `Q${i + 1}: 'explanation' is missing or empty`);
      }
    });

    test("every correct index is within the options array bounds", () => {
      for (const [i, q] of questions.entries()) {
        assert.ok(
          q.correct >= 0 && q.correct < q.options.length,
          `Q${i + 1} "${q.text.slice(0, 40)}": correct=${q.correct} is out of bounds (${q.options.length} options)`
        );
      }
    });

    test("every question has at least 2 non-empty options", () => {
      for (const [i, q] of questions.entries()) {
        assert.ok(q.options.length >= 2,
          `Q${i + 1}: only ${q.options.length} option(s)`);
        for (const [j, opt] of q.options.entries()) {
          assert.ok(typeof opt === "string" && opt.trim().length > 0,
            `Q${i + 1} option[${j}] is empty or not a string`);
        }
      }
    });

    test("correct answer is not more than 2 words longer than the longest wrong answer", () => {
      for (const [i, q] of questions.entries()) {
        const wordCounts = q.options.map(o => o.split(/\s+/).length);
        const correctLen = wordCounts[q.correct];
        const maxWrongLen = Math.max(...wordCounts.filter((_, j) => j !== q.correct));
        const diff = correctLen - maxWrongLen;
        assert.ok(diff <= 2,
          `Q${i + 1} "${q.text.slice(0, 40)}": correct answer is ${diff} words longer than the longest wrong answer (makes it guessable by length)`
        );
      }
    });

    test("no duplicate option text within a question", () => {
      for (const [i, q] of questions.entries()) {
        const lower = q.options.map(o => o.trim().toLowerCase());
        const unique = new Set(lower);
        assert.strictEqual(unique.size, lower.length,
          `Q${i + 1}: has duplicate answer options`);
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
