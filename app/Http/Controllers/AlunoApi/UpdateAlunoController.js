import AlunoModel from "../../../Models/AlunoModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;
  const requestBody = request.body;

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

    // Atualiza os dados do aluno
    await aluno.update({
      nome_completo: requestBody.nome_completo || aluno.nome_completo,
      data_nascimento: requestBody.data_nascimento || aluno.data_nascimento,
      id_turma: requestBody.id_turma || aluno.id_turma,
      nome_responsavel: requestBody.nome_responsavel || aluno.nome_responsavel,
      telefone_responsavel:
        requestBody.telefone_responsavel || aluno.telefone_responsavel,
      email_responsavel:
        requestBody.email_responsavel || aluno.email_responsavel,
      informacoes_adicionais:
        requestBody.informacoes_adicionais || aluno.informacoes_adicionais,
    });

    return response.status(HTTP_STATUS.SUCCESS).json(aluno);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
