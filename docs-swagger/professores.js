export default {
  "/Professor": {
    get: {
      summary: "Listar todos os professores",
      description:
        "Retorna uma lista com todos os professores cadastrados no sistema.",
      tags: ["Professores"],
      responses: {
        200: {
          description: "Lista de professores retornada com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id_professor: {
                      type: "integer",
                      description: "ID único do professor",
                    },
                    nome_completo: {
                      type: "string",
                      description: "Nome completo do professor",
                    },
                    email: {
                      type: "string",
                      description: "E-mail do professor",
                    },
                    telefone: {
                      type: "string",
                      description: "Telefone do professor",
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
      summary: "Cadastrar novo professor",
      description: "Cria um novo registro de professor no sistema.",
      tags: ["Professores"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                nome_completo: {
                  type: "string",
                  description: "Nome completo do professor",
                  example: "Ana Maria Silva",
                },
                email: {
                  type: "string",
                  description: "E-mail do professor",
                  example: "ana.silva@escola.com",
                },
                telefone: {
                  type: "string",
                  description: "Telefone do professor",
                  example: "(11) 98888-8888",
                },
              },
              required: ["nome_completo", "email", "telefone"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Professor cadastrado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id_professor: {
                    type: "integer",
                    description: "ID do professor criado",
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
  "/Professor/{id}": {
    get: {
      summary: "Obter professor por ID",
      description: "Retorna os dados de um professor específico pelo seu ID.",
      tags: ["Professores"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do professor",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Dados do professor retornados com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id_professor: {
                    type: "integer",
                    description: "ID único do professor",
                  },
                  nome_completo: {
                    type: "string",
                    description: "Nome completo do professor",
                  },
                  email: {
                    type: "string",
                    description: "E-mail do professor",
                  },
                  telefone: {
                    type: "string",
                    description: "Telefone do professor",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Professor não encontrado",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
    put: {
      summary: "Atualizar dados do professor",
      description: "Atualiza os dados de um professor específico.",
      tags: ["Professores"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do professor",
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
                nome_completo: {
                  type: "string",
                  description: "Nome completo do professor",
                },
                email: {
                  type: "string",
                  description: "E-mail do professor",
                },
                telefone: {
                  type: "string",
                  description: "Telefone do professor",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Professor atualizado com sucesso",
        },
        404: {
          description: "Professor não encontrado",
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
      summary: "Excluir professor",
      description: "Remove um professor do sistema.",
      tags: ["Professores"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do professor",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Professor excluído com sucesso",
        },
        404: {
          description: "Professor não encontrado",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
  },
};
