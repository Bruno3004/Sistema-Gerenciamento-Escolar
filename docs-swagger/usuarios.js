export default {
  "/users": {
    get: {
      summary: "Listar todos os usuários",
      description:
        "Retorna uma lista com todos os usuários cadastrados no sistema.",
      tags: ["Usuários"],
      responses: {
        200: {
          description: "Lista de usuários retornada com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id_usuario: {
                      type: "integer",
                      description: "ID único do usuário",
                    },
                    nome_completo: {
                      type: "string",
                      description: "Nome completo do usuário",
                    },
                    email: {
                      type: "string",
                      description: "E-mail do usuário",
                    },
                    cargo: {
                      type: "string",
                      description: "Cargo do usuário no sistema",
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
      summary: "Cadastrar novo usuário",
      description: "Cria um novo registro de usuário no sistema.",
      tags: ["Usuários"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                nome_completo: {
                  type: "string",
                  description: "Nome completo do usuário",
                  example: "João Silva Santos",
                },
                email: {
                  type: "string",
                  description: "E-mail único do usuário",
                  example: "joao.silva@escola.com",
                },
                senha: {
                  type: "string",
                  description: "Senha do usuário",
                  example: "senha123",
                },
                cargo: {
                  type: "string",
                  description: "Cargo do usuário no sistema",
                  example: "Secretário",
                },
              },
              required: ["nome_completo", "email", "senha", "cargo"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Usuário cadastrado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id_usuario: {
                    type: "integer",
                    description: "ID do usuário criado",
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
  "/users/{id}": {
    get: {
      summary: "Obter usuário por ID",
      description: "Retorna os dados de um usuário específico pelo seu ID.",
      tags: ["Usuários"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do usuário",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Dados do usuário retornados com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id_usuario: {
                    type: "integer",
                    description: "ID único do usuário",
                  },
                  nome_completo: {
                    type: "string",
                    description: "Nome completo do usuário",
                  },
                  email: {
                    type: "string",
                    description: "E-mail do usuário",
                  },
                  cargo: {
                    type: "string",
                    description: "Cargo do usuário no sistema",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Usuário não encontrado",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
    put: {
      summary: "Atualizar dados do usuário",
      description: "Atualiza os dados de um usuário específico.",
      tags: ["Usuários"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do usuário",
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
                  description: "Nome completo do usuário",
                },
                email: {
                  type: "string",
                  description: "E-mail único do usuário",
                },
                senha: {
                  type: "string",
                  description: "Senha do usuário",
                },
                cargo: {
                  type: "string",
                  description: "Cargo do usuário no sistema",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Usuário atualizado com sucesso",
        },
        404: {
          description: "Usuário não encontrado",
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
      summary: "Excluir usuário",
      description: "Remove um usuário do sistema.",
      tags: ["Usuários"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do usuário",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Usuário excluído com sucesso",
        },
        404: {
          description: "Usuário não encontrado",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
  },
};
