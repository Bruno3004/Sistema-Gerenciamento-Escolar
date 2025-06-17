import TurmaModel from "../../../Models/TurmaModel.js";
import CONSTANTS from "../../../../config/constants.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;
  const requestBody = request.body;

  if (!id) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: "ID da turma não fornecido." });
  }

  try {
    // Verifica se a turma existe
    const turma = await TurmaModel.findByPk(id);

    if (!turma) {
      return response
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "Turma não encontrada." });
    }

    // Atualiza os dados da turma
    await turma.update({
      nome_turma: requestBody.nome_turma || turma.nome_turma,
      horario: requestBody.horario || turma.horario,
      id_professor: requestBody.id_professor || turma.id_professor,
    });

    return response.status(HTTP_STATUS.SUCCESS).json(turma);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};