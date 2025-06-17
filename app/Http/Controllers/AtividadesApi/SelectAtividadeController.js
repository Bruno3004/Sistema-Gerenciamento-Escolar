import AtividadesModel from "../../../Models/AtividadesModel.js";
import AlunoModel from "../../../Models/AlunoModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;
  const aluno_id = request.query.aluno_id || null;

  try {
    let result;

    if (id) {
      // Busca uma atividade específica pelo ID
      result = await AtividadesModel.findByPk(id, {
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
          .json({ error: "Atividade não encontrada." });
      }
    } else if (aluno_id) {
      // Busca atividades de um aluno específico
      result = await AtividadesModel.findAll({
        where: { aluno_id: aluno_id },
        include: [
          {
            model: AlunoModel,
            as: "aluno",
          },
        ],
      });
    } else {
      // Busca todas as atividades
      result = await AtividadesModel.findAll({
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
