const { Quiz, Question } = require("../models");

// Create a new quiz
const createQuiz = async (req, res) => {
    try {
        const { title, description, questions } = req.body;
        const userId = req.user.userId;

        // Create quiz
        const quiz = await Quiz.create({
            title, description,
            userId,
        });

        // Create questions linked to the quiz
        const quizQuestions = questions.map((q) => ({
            quizId: quiz.id,
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
        }));

        await Question.bulkCreate(quizQuestions);

        res.status(201).json({ message: "Quiz created succesfully", quizId: quiz.id });
    } catch (error) {
        console.error("Quiz Creation Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get all quizzes
const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll({
            attributes: ["id", "title", "description", "createdAt"],
        });

        res.status(200).json({ quizzes });
    } catch (error) {
        console.error("Error fetching quizzes:", error);
        res.status(500).json({ message: "Server error" });
    }
};


// Get a quiz by id with questions
const getQuizById = async (req, res) => {
    try {
        const { quizId } = req.params;

        const quiz = await Quiz.findByPk(quizId, {
            attributes: ["id", "title", "description", "createdAt"],
            include: [
                {
                    model: Question,
                    attributes: ["id", "questionText", "options"],
                },
            ],
        });

        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        res.status(200).json({ quiz });
    } catch (error) {
        console.error("Error fetching quiz by id:", error);
        res.status(500).json({message: "Server error" });
    }
};

module.exports = { createQuiz, getAllQuizzes, getQuizById };