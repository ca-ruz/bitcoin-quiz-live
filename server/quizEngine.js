// quizEngine.js — manages all quiz room state
// Rooms are stored in memory; restart clears all active sessions.

class QuizEngine {
  constructor() {
    // Map of roomCode -> room object
    this.rooms = new Map();
  }

  // ─── Room lifecycle ────────────────────────────────────────────────────────

  createRoom(hostSocketId, questions) {
    const roomCode = this._generateRoomCode();
    const room = {
      code: roomCode,
      hostSocketId,
      questions,                // array of questions selected for this room
      players: new Map(),       // playerId -> player object
      state: "lobby",           // lobby | question | results | finished
      currentQuestionIndex: -1, // index into room.questions
      questionTimer: null,      // server-side auto-end timeout handle
      questionStartTime: null,  // Date.now() when question started
      currentAnswers: new Map() // playerId -> { answerIndex, timestamp }
    };
    this.rooms.set(roomCode, room);
    return roomCode;
  }

  // ─── Player management ─────────────────────────────────────────────────────

  /**
   * Join or rejoin a room.
   * - If the game is in lobby state, adds a new player.
   * - If the game is running and the same nickname already exists, reconnects that player.
   * Returns { playerId, player, rejoined? } or { error }
   */
  joinRoom(roomCode, nickname, socketId) {
    const room = this.rooms.get(roomCode);
    if (!room) return { error: "Sala no encontrada. Verifica tu código." };

    // Normalize nickname for duplicate checking
    const nicknameLC = nickname.toLowerCase();

    // Check if this nickname already exists in the room (rejoin case)
    for (const [playerId, player] of room.players.entries()) {
      if (player.nickname.toLowerCase() === nicknameLC) {
        if (room.state !== "lobby") {
          // Game in progress — allow reconnect by updating socket
          player.socketId = socketId;
          return { playerId, player, rejoined: true };
        } else {
          return { error: "Ese apodo ya está en uso. Elige otro." };
        }
      }
    }

    // Reject new joins once the game has started
    if (room.state !== "lobby") {
      return { error: "El juego ya está en curso." };
    }

    const playerId = this._generateId();
    const player = {
      id: playerId,
      nickname,
      socketId,
      score: 0,
      answers: [] // per-question answer history
    };
    room.players.set(playerId, player);
    return { playerId, player };
  }

  // ─── Lookup helpers ────────────────────────────────────────────────────────

  getRoom(roomCode) {
    return this.rooms.get(roomCode);
  }

  getRoomByHostSocket(socketId) {
    for (const room of this.rooms.values()) {
      if (room.hostSocketId === socketId) return room;
    }
    return null;
  }

  /** Returns { room, player } or null */
  getRoomByPlayerSocket(socketId) {
    for (const room of this.rooms.values()) {
      for (const player of room.players.values()) {
        if (player.socketId === socketId) return { room, player };
      }
    }
    return null;
  }

  getPlayers(roomCode) {
    const room = this.rooms.get(roomCode);
    if (!room) return [];
    return Array.from(room.players.values());
  }

  // ─── Question flow ─────────────────────────────────────────────────────────

  startQuestion(roomCode, questionIndex) {
    const room = this.rooms.get(roomCode);
    if (!room) return false;
    room.state = "question";
    room.currentQuestionIndex = questionIndex;
    room.questionStartTime = Date.now();
    room.currentAnswers = new Map(); // clear previous answers
    return true;
  }

  submitAnswer(roomCode, playerId, answerIndex) {
    const room = this.rooms.get(roomCode);
    if (!room || room.state !== "question") return { error: "No hay pregunta activa." };
    if (room.currentAnswers.has(playerId)) return { error: "Ya respondiste esta pregunta." };

    room.currentAnswers.set(playerId, {
      answerIndex,
      timestamp: Date.now()
    });
    return { success: true };
  }

  /**
   * Score all answers for the current question.
   * Scoring: correct answer → 500 base + up to 500 speed bonus.
   * Wrong / no answer → 0 points.
   * Returns a map of playerId -> { score, correct }
   */
  scoreQuestion(roomCode, question, timeLimit) {
    const room = this.rooms.get(roomCode);
    if (!room) return {};

    const results = {};

    for (const [playerId, player] of room.players.entries()) {
      const answer = room.currentAnswers.get(playerId);
      let score = 0;
      let correct = false;

      if (answer !== undefined) {
        correct = answer.answerIndex === question.correct;
        if (correct) {
          const elapsed = (answer.timestamp - room.questionStartTime) / 1000;
          const speedRatio = Math.max(0, Math.min(1, (timeLimit - elapsed) / timeLimit));
          score = Math.floor(50 + 50 * speedRatio); // 50–100
        }
      }

      player.score += score;
      player.answers.push({
        questionIndex: room.currentQuestionIndex,
        answerIndex: answer ? answer.answerIndex : -1,
        correct,
        score
      });
      results[playerId] = { score, correct };
    }

    room.state = "results";
    return results;
  }

  // ─── Stats & leaderboard ───────────────────────────────────────────────────

  /** Returns sorted array of { id, nickname, score } */
  getLeaderboard(roomCode) {
    const room = this.rooms.get(roomCode);
    if (!room) return [];
    return Array.from(room.players.values())
      .map(p => ({ id: p.id, nickname: p.nickname, score: p.score }))
      .sort((a, b) => b.score - a.score);
  }

  /** Returns per-option answer counts and percentages */
  getAnswerStats(roomCode, numOptions) {
    const room = this.rooms.get(roomCode);
    if (!room) return [];
    const counts = Array(numOptions).fill(0);
    for (const ans of room.currentAnswers.values()) {
      if (ans.answerIndex >= 0 && ans.answerIndex < numOptions) {
        counts[ans.answerIndex]++;
      }
    }
    const total = room.players.size;
    return counts.map((count, i) => ({
      index: i,
      count,
      percentage: total > 0 ? Math.round((count / total) * 100) : 0
    }));
  }

  allPlayersAnswered(roomCode) {
    const room = this.rooms.get(roomCode);
    if (!room || room.players.size === 0) return false;
    return room.currentAnswers.size >= room.players.size;
  }

  // ─── End quiz ──────────────────────────────────────────────────────────────

  endQuiz(roomCode) {
    const room = this.rooms.get(roomCode);
    if (!room) return null;
    if (room.questionTimer) clearTimeout(room.questionTimer);
    room.state = "finished";
    return this.getLeaderboard(roomCode);
  }

  removeRoom(roomCode) {
    this.rooms.delete(roomCode);
  }

  // ─── Helpers ───────────────────────────────────────────────────────────────

  _generateRoomCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I confusion
    let code;
    do {
      code = Array.from({ length: 4 }, () =>
        chars[Math.floor(Math.random() * chars.length)]
      ).join("");
    } while (this.rooms.has(code));
    return code;
  }

  _generateId() {
    return Math.random().toString(36).slice(2, 11);
  }
}

// Export a singleton — the whole server shares one engine instance
module.exports = new QuizEngine();
