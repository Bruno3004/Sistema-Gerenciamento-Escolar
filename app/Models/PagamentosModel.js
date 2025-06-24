import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";
import AlunoModel from "./AlunoModel.js";

export default (function () {
  return sequelize.define(
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
          model: AlunoModel,
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
      tableName: "pagamentos",
      timestamps: false,
    }
  );
})();
