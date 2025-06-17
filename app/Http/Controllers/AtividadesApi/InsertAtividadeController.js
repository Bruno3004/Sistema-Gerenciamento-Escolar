import AtividadesModel from "../../../Models/AtividadesModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const requestBody = request.body;

  const descricao = requestBody.descricao || null;
  const data_atividade = requestBody.data_atividade || null;
  const link_atividade = requestBody.link_atividade || null;
  const aluno_id = requestBody.aluno_id || null;

  if (descricao === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "descricao" não preenchido.' });
  }

  if (data_atividade === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "data_atividade" não preenchido.' });
  }

  if (aluno_id === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "aluno_id" não preenchido.' });
  }

  try {
    const row = await AtividadesModel.create({
      descricao: descricao,
      data_atividade: data_atividade,
      link_atividade: link_atividade,
      aluno_id: aluno_id,
    });

    return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
