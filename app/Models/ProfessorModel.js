const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db"); // Conexão com o banco de dados

const Professor = sequelize.define(
  "Professor",
  {
    id_professor: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_completo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    telefone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    tableName: "Professor",
    timestamps: false,
  }
);

module.exports = Professor;
