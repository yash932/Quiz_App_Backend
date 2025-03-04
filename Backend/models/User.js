const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const User = sequelize.define("User", {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,  // ✅ Ensures auto-increment
  //   primaryKey: true,
  // },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  }
});

module.exports = User;
