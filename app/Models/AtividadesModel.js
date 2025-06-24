import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";
import AlunoModel from "./AlunoModel.js";

export default (function () {
  return sequelize.define(
    "Atividades",
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
})();
