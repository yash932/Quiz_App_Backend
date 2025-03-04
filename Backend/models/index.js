const { sequelize } = require("../config");

const User = require("./User");
const Quiz = require("./Quiz");
const Question = require("./Question");
const Answer = require("./Answer");

// Sync Database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // `alter: true` keeps existing data while updating tables
    console.log("✅ Database synced successfully.");
  } catch (error) {
    console.error("❌ Error syncing database:", error);
  }
};

module.exports = { sequelize, syncDatabase, User, Quiz, Question, Answer };
