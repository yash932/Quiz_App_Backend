const express = require("express");
const { createQuiz, getAllQuizzes , getQuizById } = require("../Controllers/quizController");
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

// Create a aquiz
router.post("/create", authenticateUser, createQuiz);

// Get all quizzes
router.get("/all", getAllQuizzes);

// Get quiz by Id
router.get("/:quizId", getQuizById);

module.exports = router;