export default {
  "/Presencas": {
    get: {
      summary: "Listar todas as presenças",
      description:
        "Retorna uma lista com todas as presenças registradas no sistema.",
      tags: ["Presenças"],
      responses: {
        200: {
          description: "Lista de presenças retornada com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: {
                      type: "integer",
                      description: "ID único da presença",
                    },
                    id_aluno: {
                      type: "integer",
                      description: "ID do aluno relacionado à presença",
                    },
                    data_presenca: {
                      type: "string",
                      format: "date",
                      description: "Data da presença",
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
      summary: "Registrar nova presença",
      description: "Cria um novo registro de presença no sistema.",
      tags: ["Presenças"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                id_aluno: {
                  type: "integer",
                  description: "ID do aluno relacionado à presença",
                  example: 1,
                },
                data_presenca: {
                  type: "string",
                  format: "date",
                  description: "Data da presença",
                  example: "2024-03-15",
                },
              },
              required: ["id_aluno", "data_presenca"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Presença registrada com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    description: "ID da presença criada",
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
  "/Presencas/{id}": {
    get: {
      summary: "Obter presença por ID",
      description: "Retorna os dados de uma presença específica pelo seu ID.",
      tags: ["Presenças"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID da presença",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Dados da presença retornados com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    description: "ID único da presença",
                  },
                  id_aluno: {
                    type: "integer",
                    description: "ID do aluno relacionado à presença",
                  },
                  data_presenca: {
                    type: "string",
                    format: "date",
                    description: "Data da presença",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Presença não encontrada",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
    put: {
      summary: "Atualizar dados da presença",
      description: "Atualiza os dados de uma presença específica.",
      tags: ["Presenças"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID da presença",
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
                  description: "ID do aluno relacionado à presença",
                },
                data_presenca: {
                  type: "string",
                  format: "date",
                  description: "Data da presença",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Presença atualizada com sucesso",
        },
        404: {
          description: "Presença não encontrada",
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
      summary: "Excluir presença",
      description: "Remove uma presença do sistema.",
      tags: ["Presenças"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID da presença",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Presença excluída com sucesso",
        },
        404: {
          description: "Presença não encontrada",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
  },
};
