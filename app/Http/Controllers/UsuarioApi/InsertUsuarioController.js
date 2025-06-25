import UsuarioModel from "../../../Models/UsuarioModel.js";
import CONSTANTS from "../../../../config/constants.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const requestBody = request.body;

  const nome_completo = requestBody.nome_completo || null;
  const email = requestBody.email || null;
  const senha = requestBody.senha || null;
  const cargo = requestBody.cargo || null;

  if (nome_completo === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "nome_completo" não preenchido.' });
  }

  if (email === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "email" não preenchido.' });
  }

  if (senha === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "senha" não preenchido.' });
  }

  if (cargo === null) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: 'Campo "cargo" não preenchido.' });
  }

  try {
    const row = await UsuarioModel.create({
      nome_completo: nome_completo,
      email: email,
      senha: senha,
      cargo: cargo,
    });

    return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
