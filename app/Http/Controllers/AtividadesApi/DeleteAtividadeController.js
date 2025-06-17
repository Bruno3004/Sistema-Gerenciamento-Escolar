import AtividadesModel from "../../../Models/AtividadesModel.js";
import AlunoModel from "../../../Models/AlunoModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;

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

    // Remove a atividade
    await atividade.destroy();

    return response
      .status(HTTP_STATUS.SUCCESS)
      .json({ message: "Atividade removida com sucesso." });
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
