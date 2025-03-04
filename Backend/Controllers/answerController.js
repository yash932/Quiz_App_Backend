const { Answer, Question } = require("../models");

// Submit answers for a quiz
const submitAnswers = async (req, res) => {
    try {
        const {quizId, answers } = req.body;
        const userId = req.user.userId;

        let score = 0;

        // check answers
        for (const ans of answers) {
            const question = await Question.findByPk(ans.questionId);
            if(question && question.correctAnswer === ans.selectedAnswer) {
                score += 1;
            }

            // save users answer
            await Answer.create({
                quizId,
                userId,
                questionId: ans.questionId,
                selectedAnswer: ans.selectedAnswer,
            });
        }

        res.status(200).json({message: "Answers submitted succesfully", score });
    } catch(error) {
        console.error("Submit Answer Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { submitAnswers };