const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Aluno = require("./Aluno"); // Importando a model Aluno

const Atividades = sequelize.define(
  "Atividades",
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
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    data_atividade: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    link_atividade: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "Atividades",
    timestamps: false,
  }
);

module.exports = Atividades;
