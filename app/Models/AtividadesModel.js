import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

export default (function () {
  return sequelize.define(
    "Atividades",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      tableName: "atividades",
      timestamps: false,
    }
  );
});
