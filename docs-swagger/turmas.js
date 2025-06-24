export default {
  "/Turma": {
    get: {
      summary: "Listar todas as turmas",
      description:
        "Retorna uma lista com todas as turmas cadastradas no sistema.",
      tags: ["Turmas"],
      responses: {
        200: {
          description: "Lista de turmas retornada com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id_turma: {
                      type: "integer",
                      description: "ID único da turma",
                    },
                    nome_turma: {
                      type: "string",
                      description: "Nome da turma",
                    },
                    id_professor: {
                      type: "integer",
                      description: "ID do professor responsável pela turma",
                    },
                    horario: {
                      type: "string",
                      description: "Horário de funcionamento da turma",
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
      summary: "Cadastrar nova turma",
      description: "Cria um novo registro de turma no sistema.",
      tags: ["Turmas"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                nome_turma: {
                  type: "string",
                  description: "Nome da turma",
                  example: "Turma A - 1º Ano",
                },
                id_professor: {
                  type: "integer",
                  description: "ID do professor responsável pela turma",
                  example: 1,
                },
                horario: {
                  type: "string",
                  description: "Horário de funcionamento da turma",
                  example: "Segunda a Sexta - 08:00 às 12:00",
                },
              },
              required: ["nome_turma", "id_professor", "horario"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Turma cadastrada com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id_turma: {
                    type: "integer",
                    description: "ID da turma criada",
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
  "/Turma/{id}": {
    get: {
      summary: "Obter turma por ID",
      description: "Retorna os dados de uma turma específica pelo seu ID.",
      tags: ["Turmas"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID da turma",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Dados da turma retornados com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id_turma: {
                    type: "integer",
                    description: "ID único da turma",
                  },
                  nome_turma: {
                    type: "string",
                    description: "Nome da turma",
                  },
                  id_professor: {
                    type: "integer",
                    description: "ID do professor responsável pela turma",
                  },
                  horario: {
                    type: "string",
                    description: "Horário de funcionamento da turma",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Turma não encontrada",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
    put: {
      summary: "Atualizar dados da turma",
      description: "Atualiza os dados de uma turma específica.",
      tags: ["Turmas"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID da turma",
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
                nome_turma: {
                  type: "string",
                  description: "Nome da turma",
                },
                id_professor: {
                  type: "integer",
                  description: "ID do professor responsável pela turma",
                },
                horario: {
                  type: "string",
                  description: "Horário de funcionamento da turma",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Turma atualizada com sucesso",
        },
        404: {
          description: "Turma não encontrada",
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
      summary: "Excluir turma",
      description: "Remove uma turma do sistema.",
      tags: ["Turmas"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID da turma",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Turma excluída com sucesso",
        },
        404: {
          description: "Turma não encontrada",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
  },
};
