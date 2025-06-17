import PresencasModel from "../../../Models/PresencasModel.js";
import CONSTANTS from "../../../../config/constants.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;
  const requestBody = request.body;

  if (!id) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: "ID da presença não fornecido." });
  }

  try {
    // Verifica se o registro de presença existe
    const presenca = await PresencasModel.findByPk(id);

    if (!presenca) {
      return response
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "Registro de presença não encontrado." });
    }

    // Atualiza os dados da presença
    await presenca.update({
      aluno_id: requestBody.aluno_id || presenca.aluno_id,
      data_presenca: requestBody.data_presenca || presenca.data_presenca,
    });

    return response.status(HTTP_STATUS.SUCCESS).json(presenca);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
