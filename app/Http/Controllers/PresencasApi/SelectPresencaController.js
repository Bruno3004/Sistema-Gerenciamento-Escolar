import PresencasModel from "../../../Models/PresencasModel.js";
import AlunoModel from "../../../Models/AlunoModel.js";
import CONSTANTS from "../../../../config/constants.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;
  const aluno_id = request.query.aluno_id || null;

  try {
    let result;

    if (id) {
      // Busca uma presença específica pelo ID
      result = await PresencasModel.findByPk(id, {
        include: [
          {
            model: AlunoModel,
            as: "aluno",
          },
        ],
      });

      if (!result) {
        return response
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ error: "Registro de presença não encontrado." });
      }
    } else if (aluno_id) {
      // Busca presenças de um aluno específico
      result = await PresencasModel.findAll({
        where: { aluno_id: aluno_id },
        include: [
          {
            model: AlunoModel,
            as: "aluno",
          },
        ],
      });
    } else {
      // Busca todas as presenças
      result = await PresencasModel.findAll({
        include: [
          {
            model: AlunoModel,
            as: "aluno",
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
