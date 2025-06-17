import TurmaModel from "../../../Models/TurmaModel.js";
import AlunoModel from "../../../Models/AlunoModel.js";
import ProfessorModel from "../../../Models/ProfessorModel.js";
import CONSTANTS from "../../../../config/constants.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;

  try {
    let result;

    if (id) {
      // Busca uma turma específica pelo ID com seus alunos e professor
      result = await TurmaModel.findByPk(id, {
        include: [
          {
            model: AlunoModel,
            as: "aluno",
          },
          {
            model: ProfessorModel,
            as: "professor",
          },
        ],
      });

      if (!result) {
        return response
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ error: "Turma não encontrada." });
      }
    } else {
      // Busca todas as turmas com seus alunos e professores
      result = await TurmaModel.findAll({
        include: [
          {
            model: AlunoModel,
            as: "aluno",
          },
          {
            model: ProfessorModel,
            as: "professor",
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