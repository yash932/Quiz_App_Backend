const express = require("express");
const { submitAnswers } = require("../Controllers/answerController");
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

// Submit answers 
router.post("/submit", authenticateUser, submitAnswers);

module.exports = router;
