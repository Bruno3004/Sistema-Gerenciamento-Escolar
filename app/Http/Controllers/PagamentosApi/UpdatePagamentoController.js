import PagamentosModel from "../../../Models/PagamentosModel.js";
import AlunoModel from "../../../Models/AlunoModel.js";

export default async (request, response) => {
    const HTTP_STATUS = CONSTANTS.HTTP;
    const id = request.params.id || null;
    const requestBody = request.body;

    if (!id) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'ID do pagamento não fornecido.' });
    }

    try {
        // Verifica se o pagamento existe
        const pagamento = await PagamentosModel.findByPk(id);
        
        if (!pagamento) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Pagamento não encontrado.' });
        }

        // Atualiza os dados do pagamento
        await pagamento.update({
            data_pagamento: requestBody.data_pagamento || pagamento.data_pagamento,
            valor: requestBody.valor || pagamento.valor,
            status: requestBody.status || pagamento.status,
            id_aluno: requestBody.id_aluno || pagamento.id_aluno
        });

        return response.status(HTTP_STATUS.SUCCESS).json(pagamento);
    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
    }
};