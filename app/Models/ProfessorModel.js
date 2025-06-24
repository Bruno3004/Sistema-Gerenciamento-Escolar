import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

export default (function () {
  return sequelize.define(
    "ProfessorModel",
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
      tableName: "professor",
      timestamps: false,
    }
  );
})();
