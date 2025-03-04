const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const Quiz = require("./Quiz");
const User = require("./User");
const Question = require("./Question");

const Answer = sequelize.define("Answer", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, // This makes it auto-increment
    allowNull: false,
    primaryKey: true
  },
  selectedAnswer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define relationships: Users answer Questions in a Quiz
User.hasMany(Answer, { foreignKey: "userId", onDelete: "CASCADE" });
Answer.belongsTo(User, { foreignKey: "userId" });

Quiz.hasMany(Answer, { foreignKey: "quizId", onDelete: "CASCADE" });
Answer.belongsTo(Quiz, { foreignKey: "quizId" });

Question.hasMany(Answer, { foreignKey: "questionId", onDelete: "CASCADE" });
Answer.belongsTo(Question, { foreignKey: "questionId" });

module.exports = Answer;
