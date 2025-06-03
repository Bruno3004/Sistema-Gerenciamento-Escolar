import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize";

export default (function () {
  return sequelize.define(
    "Presencas",
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
