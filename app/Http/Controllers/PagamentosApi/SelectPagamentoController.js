import PagamentosModel from "../../../Models/PagamentosModel.js";
import AlunoModel from "../../../Models/AlunoModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;
  const id_aluno = request.query.id_aluno || null;

  try {
    let result;

    if (id) {
      // Busca um pagamento específico pelo ID
      result = await PagamentosModel.findByPk(id, {
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
          .json({ error: "Pagamento não encontrado." });
      }
    } else if (id_aluno) {
      // Busca pagamentos de um aluno específico
      result = await PagamentosModel.findAll({
        where: { id_aluno: id_aluno },
        include: [
          {
            model: AlunoModel,
            as: "aluno",
          },
        ],
      });
    } else {
      // Busca todos os pagamentos
      result = await PagamentosModel.findAll({
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
