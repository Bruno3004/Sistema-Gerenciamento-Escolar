const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const Aluno = require("./AlunoModel"); // Importando a model Aluno
const Presencas = sequelize.define(
  "Presencas",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    aluno_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Aluno,
        key: "id_aluno",
      },
    },
    data_presenca: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "Presencas",
    timestamps: false,
  }
);

module.exports = Presencas;
