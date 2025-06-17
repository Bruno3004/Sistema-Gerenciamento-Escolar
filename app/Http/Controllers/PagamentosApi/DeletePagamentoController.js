import PagamentosModel from "../../../Models/PagamentosModel.js";
import AlunoModel from "../../../Models/AlunoModel.js";

export default async (request, response) => {
    const HTTP_STATUS = CONSTANTS.HTTP;
    const id = request.params.id || null;

    if (!id) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'ID do pagamento não fornecido.' });
    }

    try {
        // Verifica se o pagamento existe
        const pagamento = await PagamentosModel.findByPk(id);
        
        if (!pagamento) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Pagamento não encontrado.' });
        }

        // Remove o pagamento
        await pagamento.destroy();

        return response.status(HTTP_STATUS.SUCCESS).json({ message: 'Pagamento removido com sucesso.' });
    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
    }
};