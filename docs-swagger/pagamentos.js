export default {
  "/Pagamentos": {
    get: {
      summary: "Listar todos os pagamentos",
      description:
        "Retorna uma lista com todos os pagamentos cadastrados no sistema.",
      tags: ["Pagamentos"],
      responses: {
        200: {
          description: "Lista de pagamentos retornada com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: {
                      type: "integer",
                      description: "ID único do pagamento",
                    },
                    id_aluno: {
                      type: "integer",
                      description: "ID do aluno relacionado ao pagamento",
                    },
                    data_pagamento: {
                      type: "string",
                      format: "date",
                      description: "Data do pagamento",
                    },
                    valor: {
                      type: "number",
                      format: "decimal",
                      description: "Valor do pagamento",
                    },
                    status: {
                      type: "string",
                      enum: ["Pago", "Pendente"],
                      description: "Status do pagamento",
                    },
                  },
                },
              },
            },
          },
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
    post: {
      summary: "Cadastrar novo pagamento",
      description: "Cria um novo registro de pagamento no sistema.",
      tags: ["Pagamentos"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                id_aluno: {
                  type: "integer",
                  description: "ID do aluno relacionado ao pagamento",
                  example: 1,
                },
                data_pagamento: {
                  type: "string",
                  format: "date",
                  description: "Data do pagamento",
                  example: "2024-03-15",
                },
                valor: {
                  type: "number",
                  format: "decimal",
                  description: "Valor do pagamento",
                  example: 150.5,
                },
                status: {
                  type: "string",
                  enum: ["Pago", "Pendente"],
                  description: "Status do pagamento",
                  example: "Pago",
                },
              },
              required: ["id_aluno", "data_pagamento", "valor", "status"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Pagamento cadastrado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    description: "ID do pagamento criado",
                  },
                  message: {
                    type: "string",
                    description: "Mensagem de sucesso",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Dados inválidos fornecidos",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
  },
  "/Pagamentos/{id}": {
    get: {
      summary: "Obter pagamento por ID",
      description: "Retorna os dados de um pagamento específico pelo seu ID.",
      tags: ["Pagamentos"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do pagamento",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Dados do pagamento retornados com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    description: "ID único do pagamento",
                  },
                  id_aluno: {
                    type: "integer",
                    description: "ID do aluno relacionado ao pagamento",
                  },
                  data_pagamento: {
                    type: "string",
                    format: "date",
                    description: "Data do pagamento",
                  },
                  valor: {
                    type: "number",
                    format: "decimal",
                    description: "Valor do pagamento",
                  },
                  status: {
                    type: "string",
                    enum: ["Pago", "Pendente"],
                    description: "Status do pagamento",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Pagamento não encontrado",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
    put: {
      summary: "Atualizar dados do pagamento",
      description: "Atualiza os dados de um pagamento específico.",
      tags: ["Pagamentos"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do pagamento",
          schema: {
            type: "integer",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                id_aluno: {
                  type: "integer",
                  description: "ID do aluno relacionado ao pagamento",
                },
                data_pagamento: {
                  type: "string",
                  format: "date",
                  description: "Data do pagamento",
                },
                valor: {
                  type: "number",
                  format: "decimal",
                  description: "Valor do pagamento",
                },
                status: {
                  type: "string",
                  enum: ["Pago", "Pendente"],
                  description: "Status do pagamento",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Pagamento atualizado com sucesso",
        },
        404: {
          description: "Pagamento não encontrado",
        },
        400: {
          description: "Dados inválidos fornecidos",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
    delete: {
      summary: "Excluir pagamento",
      description: "Remove um pagamento do sistema.",
      tags: ["Pagamentos"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do pagamento",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Pagamento excluído com sucesso",
        },
        404: {
          description: "Pagamento não encontrado",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
  },
};
