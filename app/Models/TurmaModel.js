import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";
import ProfessorModel from "./ProfessorModel.js";

export default (function () {
  return sequelize.define(
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
          model: ProfessorModel,
          key: "id_professor",
        },
      },
      horario: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      tableName: "turma",
      timestamps: false,
    }
  );
})();
