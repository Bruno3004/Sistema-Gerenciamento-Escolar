import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

export default (function () {
  return sequelize.define(
    "Usuario",
    {
      id_usuario: {
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
        unique: true,
      },
      senha: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cargo: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "usuario",
      timestamps: false,
    }
  );
})();
