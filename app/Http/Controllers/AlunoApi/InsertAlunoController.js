import AlunoModel from "../../../Models/AlunoModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;

    const nome_completo = requestBody.nome_completo || null;
    const data_nascimento = requestBody.data_nascimento || null;
    const id_turma = requestBody.id_turma || null;
    const nome_responsavel = requestBody.nome_responsavel || null;
    const telefone_responsavel = requestBody.telefone_responsavel || null;
    const email_responsavel = requestBody.email_responsavel || null;
    const informacoes_adicionais = requestBody.informacoes_adicionais || null



    if (nome_completo === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" não preenchido.' });
    }


    try {

        const row = await AlunoModel.create({
            nome_completo: nome_completo,
            data_nascimento: data_nascimento,
            id_turma: id_turma,
            nome_responsavel: nome_responsavel,
            telefone_responsavel: telefone_responsavel,
            email_responsavel: email_responsavel,
            informacoes_adicionais: informacoes_adicionais
        });

        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }

};