import UsuarioModel from "../../../Models/UsuarioModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const id = request.params.id || null;

  try {
    let result;

    if (id) {
      // Busca um usuário específico pelo ID
      result = await UsuarioModel.findByPk(id);

      if (!result) {
        return response
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ error: "Usuário não encontrado." });
      }
    } else {
      // Busca todos os usuários
      result = await UsuarioModel.findAll();
    }

    return response.status(HTTP_STATUS.SUCCESS).json(result);
  } catch (error) {
    return response
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: "Erro de servidor." });
  }
};
