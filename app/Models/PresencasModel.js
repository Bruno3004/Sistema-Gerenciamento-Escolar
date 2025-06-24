import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";
import Aluno from "./AlunoModel.js";

export default (function () {
  return sequelize.define(
    "Presencas",
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
      data_presenca: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "presencas",
      timestamps: false,
    }
  );
})();
