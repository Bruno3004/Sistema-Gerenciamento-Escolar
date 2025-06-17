import PresencasModel from "../../../Models/PresencasModel.js";
import CONSTANTS from "../../../../config/constants.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const requestBody = request.body;

  const aluno_id = requestBody.aluno_id || null;
  const data_presenca = requestBody.data_presenca || new Date();

  if (aluno_id === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "aluno_id" não preenchido.' });
  }

  try {
    const row = await PresencasModel.create({
      aluno_id: aluno_id,
      data_presenca: data_presenca,
    });

    return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};