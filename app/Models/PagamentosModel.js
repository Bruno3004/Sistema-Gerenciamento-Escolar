const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const Aluno = require("./AlunoModel"); // Importando a model Aluno

const Pagamentos = sequelize.define(
  "Pagamentos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_aluno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Aluno,
        key: "id_aluno",
      },
    },
    data_pagamento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [["Pago", "Pendente"]],
      },
    },
  },
  {
    tableName: "Pagamentos",
    timestamps: false,
  }
);

module.exports = Pagamentos;
