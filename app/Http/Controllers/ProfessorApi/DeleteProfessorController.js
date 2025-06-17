import ProfessorModel from "../../../Models/ProfessorModel.js";
import CONSTANTS from "../../../../config/constants.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;

  if (!id) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: "ID do professor não fornecido." });
  }

  try {
    // Verifica se o professor existe
    const professor = await ProfessorModel.findByPk(id);

    if (!professor) {
      return response
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "Professor não encontrado." });
    }

    // Remove o professor
    await professor.destroy();

    return response
      .status(HTTP_STATUS.SUCCESS)
      .json({ message: "Professor removido com sucesso." });
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
