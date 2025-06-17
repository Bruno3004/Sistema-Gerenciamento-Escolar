import AlunoModel from "../../../Models/AlunoModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;

  try {
    let result;

    if (id) {
      // Busca um aluno específico pelo ID
      result = await AlunoModel.findByPk(id);

      if (!result) {
        return response
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ error: "Aluno não encontrado." });
      }
    } else {
      // Busca todos os alunos
      result = await AlunoModel.findAll();
    }

    return response.status(HTTP_STATUS.SUCCESS).json(result);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
