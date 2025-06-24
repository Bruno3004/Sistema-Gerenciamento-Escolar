import ProfessorModel from "../../../Models/ProfessorModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;

  try {
    let result;

    if (id) {
      result = await ProfessorModel.findByPk(id);

      if (!result) {
        return response
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ error: "Professor não encontrado." });
      }
    } else {
      // Busca todos os professores
      result = await ProfessorModel.findAll();
    }

    return response.status(HTTP_STATUS.SUCCESS).json(result);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor.", message: error.message });
  }
};
