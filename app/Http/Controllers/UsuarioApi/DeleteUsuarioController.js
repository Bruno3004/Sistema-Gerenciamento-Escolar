import UsuarioModel from "../../../Models/UsuarioModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;

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

    // Remove o usuário
    await usuario.destroy();

    return response
      .status(HTTP_STATUS.SUCCESS)
      .json({ message: "Usuário removido com sucesso." });
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
