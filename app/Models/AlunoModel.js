import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

export default (function () {
  return sequelize.define(
    "Aluno",
    {
      id_aluno: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_completo: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      nome_responsavel: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      telefone_responsavel: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email_responsavel: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      informacoes_adicionais: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "aluno",
      timestamps: false,
    }
  );
})();
