export default {
  "/atividades": {
    get: {
      summary: "Listar todas as atividades",
      description:
        "Retorna uma lista com todas as atividades cadastradas no sistema.",
      tags: ["Atividades"],
      responses: {
        200: {
          description: "Lista de atividades retornada com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: {
                      type: "integer",
                      description: "ID único da atividade",
                    },
                    id_aluno: {
                      type: "integer",
                      description: "ID do aluno relacionado à atividade",
                    },
                    descricao: {
                      type: "string",
                      description: "Descrição da atividade",
                    },
                    data_atividade: {
                      type: "string",
                      format: "date-time",
                      description: "Data e hora da atividade",
                    },
                    link_atividade: {
                      type: "string",
                      description: "Link relacionado à atividade (opcional)",
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
      summary: "Cadastrar nova atividade",
      description: "Cria um novo registro de atividade no sistema.",
      tags: ["Atividades"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                id_aluno: {
                  type: "integer",
                  description: "ID do aluno relacionado à atividade",
                  example: 1,
                },
                descricao: {
                  type: "string",
                  description: "Descrição da atividade",
                  example: "Exercícios de matemática - Capítulo 5",
                },
                data_atividade: {
                  type: "string",
                  format: "date-time",
                  description: "Data e hora da atividade",
                  example: "2024-03-15T14:30:00Z",
                },
                link_atividade: {
                  type: "string",
                  description: "Link relacionado à atividade (opcional)",
                  example: "https://exemplo.com/atividade",
                },
              },
              required: ["id_aluno", "descricao", "data_atividade"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Atividade cadastrada com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    description: "ID da atividade criada",
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
  "/atividades/{id}": {
    get: {
      summary: "Obter atividade por ID",
      description: "Retorna os dados de uma atividade específica pelo seu ID.",
      tags: ["Atividades"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID da atividade",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Dados da atividade retornados com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    description: "ID único da atividade",
                  },
                  id_aluno: {
                    type: "integer",
                    description: "ID do aluno relacionado à atividade",
                  },
                  descricao: {
                    type: "string",
                    description: "Descrição da atividade",
                  },
                  data_atividade: {
                    type: "string",
                    format: "date-time",
                    description: "Data e hora da atividade",
                  },
                  link_atividade: {
                    type: "string",
                    description: "Link relacionado à atividade (opcional)",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Atividade não encontrada",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
    put: {
      summary: "Atualizar dados da atividade",
      description: "Atualiza os dados de uma atividade específica.",
      tags: ["Atividades"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID da atividade",
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
                  description: "ID do aluno relacionado à atividade",
                },
                descricao: {
                  type: "string",
                  description: "Descrição da atividade",
                },
                data_atividade: {
                  type: "string",
                  format: "date-time",
                  description: "Data e hora da atividade",
                },
                link_atividade: {
                  type: "string",
                  description: "Link relacionado à atividade (opcional)",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Atividade atualizada com sucesso",
        },
        404: {
          description: "Atividade não encontrada",
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
      summary: "Excluir atividade",
      description: "Remove uma atividade do sistema.",
      tags: ["Atividades"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID da atividade",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Atividade excluída com sucesso",
        },
        404: {
          description: "Atividade não encontrada",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
  },
};
