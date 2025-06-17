import TurmaModel from "../../../Models/TurmaModel.js";
import CONSTANTS from "../../../../config/constants.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const requestBody = request.body;

  const nome_turma = requestBody.nome_turma || null;
  const horario = requestBody.horario || null;
  const id_professor = requestBody.id_professor || null;

  if (nome_turma === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "nome_turma" não preenchido.' });
  }

  if (horario === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "horario" não preenchido.' });
  }

  try {
    const row = await TurmaModel.create({
      nome_turma: nome_turma,
      horario: horario,
      id_professor: id_professor,
    });

    return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};