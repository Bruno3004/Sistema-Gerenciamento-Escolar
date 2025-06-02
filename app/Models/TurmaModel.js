const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db"); // Conexão com o banco de dados
const Professor = require("./ProfessorModel"); // Importando a model de Professor
const Turma = sequelize.define(
  "Turma",
  {
    id_turma: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_turma: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    id_professor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Professor,
        key: "id_professor",
      },
    },
    horario: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "Turma",
    timestamps: false,
  }
);

module.exports = Turma;
