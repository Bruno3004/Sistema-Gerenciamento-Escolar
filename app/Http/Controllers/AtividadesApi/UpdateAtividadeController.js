import AtividadesModel from "../../../Models/AtividadesModel.js";
import AlunoModel from "../../../Models/AlunoModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;
  const requestBody = request.body;

  if (!id) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: "ID da atividade não fornecido." });
  }

  try {
    // Verifica se a atividade existe
    const atividade = await AtividadesModel.findByPk(id);

    if (!atividade) {
      return response
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "Atividade não encontrada." });
    }

    // Atualiza os dados da atividade
    await atividade.update({
      descricao: requestBody.descricao || atividade.descricao,
      data_atividade: requestBody.data_atividade || atividade.data_atividade,
      link_atividade: requestBody.link_atividade || atividade.link_atividade,
      aluno_id: requestBody.aluno_id || atividade.aluno_id,
    });

    return response.status(HTTP_STATUS.SUCCESS).json(atividade);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
