const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const Quiz = require("./Quiz");

const Question = sequelize.define("Question", {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true, // This makes it auto-increment
  //   allowNull: false,
  //   primaryKey: true
  // },
  questionText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  options: {
    type: DataTypes.JSON, // Storing multiple-choice options as JSON
    allowNull: false,
  },
  correctAnswer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define relationship: A Quiz has many Questions
Quiz.hasMany(Question, { foreignKey: "quizId", onDelete: "CASCADE" });
Question.belongsTo(Quiz, { foreignKey: "quizId" });

module.exports = Question;
