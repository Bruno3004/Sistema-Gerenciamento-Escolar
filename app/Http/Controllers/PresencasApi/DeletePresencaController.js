import PresencasModel from "../../../Models/PresencasModel.js";
import CONSTANTS from "../../../../config/constants.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;

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

    // Remove o registro de presença
    await presenca.destroy();

    return response
      .status(HTTP_STATUS.SUCCESS)
      .json({ message: "Registro de presença removido com sucesso." });
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};