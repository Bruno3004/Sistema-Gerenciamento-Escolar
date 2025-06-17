import PagamentosModel from "../../../Models/PagamentosModel.js";
import AlunoModel from "../../../Models/AlunoModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const requestBody = request.body;

  const data_pagamento = requestBody.data_pagamento || null;
  const valor = requestBody.valor || null;
  const status = requestBody.status || null;
  const id_aluno = requestBody.id_aluno || null;

  if (data_pagamento === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "data_pagamento" não preenchido.' });
  }

  if (valor === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "valor" não preenchido.' });
  }

  if (status === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "status" não preenchido.' });
  }

  if (id_aluno === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "id_aluno" não preenchido.' });
  }

  try {
    const row = await PagamentosModel.create({
      data_pagamento: data_pagamento,
      valor: valor,
      status: status,
      id_aluno: id_aluno,
    });

    return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
