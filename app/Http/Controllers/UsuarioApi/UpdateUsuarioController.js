import UsuarioModel from "../../../Models/UsuarioModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;
  const requestBody = request.body;

  if (!id) {
    return response
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ error: "ID do usuário não fornecido." });
  }

  try {
    // Verifica se o usuário existe
    const usuario = await UsuarioModel.findByPk(id);

    if (!usuario) {
      return response
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "Usuário não encontrado." });
    }

    // Atualiza os dados do usuário
    await usuario.update({
      nome_completo: requestBody.nome_completo || usuario.nome_completo,
      email: requestBody.email || usuario.email,
      senha: requestBody.senha || usuario.senha,
      cargo: requestBody.cargo || usuario.cargo,
    });

    return response.status(HTTP_STATUS.SUCCESS).json(usuario);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
