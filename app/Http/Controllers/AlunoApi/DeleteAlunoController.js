import AlunoModel from "../../../Models/AlunoModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;

  if (!id) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: "ID do aluno não fornecido." });
  }

  try {
    // Verifica se o aluno existe
    const aluno = await AlunoModel.findByPk(id);

    if (!aluno) {
      return response
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "Aluno não encontrado." });
    }

    // Remove o aluno
    await aluno.destroy();

    return response
      .status(HTTP_STATUS.SUCCESS)
      .json({ message: "Aluno removido com sucesso." });
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
