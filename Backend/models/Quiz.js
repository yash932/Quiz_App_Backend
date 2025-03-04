const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const User = require("./User");

const Quiz = sequelize.define("Quiz", {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true, // This makes it auto-increment
  //   allowNull: false,
  //   primaryKey: true
  // },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

// Define relationship: A User can create multiple quizzes
User.hasMany(Quiz, { foreignKey: "userId", onDelete: "CASCADE" });
Quiz.belongsTo(User, { foreignKey: "userId" });

module.exports = Quiz;
