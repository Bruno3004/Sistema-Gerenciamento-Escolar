import ProfessorModel from "../../../Models/ProfessorModel.js";
import TurmaModel from "../../../Models/TurmaModel.js";
import CONSTANTS from "../../../../config/constants.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;

  try {
    let result;

    if (id) {
      // Busca um professor específico pelo ID com suas turmas
      result = await ProfessorModel.findByPk(id, {
        include: [
          {
            model: TurmaModel,
            as: "turma",
          },
        ],
      });

      if (!result) {
        return response
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ error: "Professor não encontrado." });
      }
    } else {
      // Busca todos os professores
      result = await ProfessorModel.findAll({
        include: [
          {
            model: TurmaModel,
            as: "turma",
          },
        ],
      });
    }

    return response.status(HTTP_STATUS.SUCCESS).json(result);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};