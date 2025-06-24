export default {
  "/alunos": {
    get: {
      summary: "Listar todos os alunos",
      description:
        "Retorna uma lista com todos os alunos cadastrados no sistema.",
      tags: ["Alunos"],
      responses: {
        200: {
          description: "Lista de alunos retornada com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id_aluno: {
                      type: "integer",
                      description: "ID único do aluno",
                    },
                    nome_completo: {
                      type: "string",
                      description: "Nome completo do aluno",
                    },
                    data_nascimento: {
                      type: "string",
                      format: "date",
                      description: "Data de nascimento do aluno",
                    },
                    id_turma: {
                      type: "integer",
                      description: "ID da turma do aluno",
                    },
                    nome_responsavel: {
                      type: "string",
                      description: "Nome do responsável pelo aluno",
                    },
                    telefone_responsavel: {
                      type: "string",
                      description: "Telefone do responsável",
                    },
                    email_responsavel: {
                      type: "string",
                      description: "E-mail do responsável",
                    },
                    informacoes_adicionais: {
                      type: "string",
                      description: "Informações adicionais sobre o aluno",
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
      summary: "Cadastrar novo aluno",
      description: "Cria um novo registro de aluno no sistema.",
      tags: ["Alunos"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                nome_completo: {
                  type: "string",
                  description: "Nome completo do aluno",
                  example: "João Silva Santos",
                },
                data_nascimento: {
                  type: "string",
                  format: "date",
                  description: "Data de nascimento do aluno",
                  example: "2010-05-15",
                },
                id_turma: {
                  type: "integer",
                  description: "ID da turma do aluno",
                  example: 1,
                },
                nome_responsavel: {
                  type: "string",
                  description: "Nome do responsável pelo aluno",
                  example: "Maria Silva Santos",
                },
                telefone_responsavel: {
                  type: "string",
                  description: "Telefone do responsável",
                  example: "(11) 99999-9999",
                },
                email_responsavel: {
                  type: "string",
                  description: "E-mail do responsável",
                  example: "maria@email.com",
                },
                informacoes_adicionais: {
                  type: "string",
                  description: "Informações adicionais sobre o aluno",
                  example: "Aluno com necessidades especiais",
                },
              },
              required: [
                "nome_completo",
                "data_nascimento",
                "id_turma",
                "nome_responsavel",
                "telefone_responsavel",
                "email_responsavel",
              ],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Aluno cadastrado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id_aluno: {
                    type: "integer",
                    description: "ID do aluno criado",
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
  "/alunos/{id}": {
    get: {
      summary: "Obter aluno por ID",
      description: "Retorna os dados de um aluno específico pelo seu ID.",
      tags: ["Alunos"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do aluno",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Dados do aluno retornados com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id_aluno: {
                    type: "integer",
                    description: "ID único do aluno",
                  },
                  nome_completo: {
                    type: "string",
                    description: "Nome completo do aluno",
                  },
                  data_nascimento: {
                    type: "string",
                    format: "date",
                    description: "Data de nascimento do aluno",
                  },
                  id_turma: {
                    type: "integer",
                    description: "ID da turma do aluno",
                  },
                  nome_responsavel: {
                    type: "string",
                    description: "Nome do responsável pelo aluno",
                  },
                  telefone_responsavel: {
                    type: "string",
                    description: "Telefone do responsável",
                  },
                  email_responsavel: {
                    type: "string",
                    description: "E-mail do responsável",
                  },
                  informacoes_adicionais: {
                    type: "string",
                    description: "Informações adicionais sobre o aluno",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Aluno não encontrado",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
    put: {
      summary: "Atualizar dados do aluno",
      description: "Atualiza os dados de um aluno específico.",
      tags: ["Alunos"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do aluno",
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
                  description: "Nome completo do aluno",
                },
                data_nascimento: {
                  type: "string",
                  format: "date",
                  description: "Data de nascimento do aluno",
                },
                id_turma: {
                  type: "integer",
                  description: "ID da turma do aluno",
                },
                nome_responsavel: {
                  type: "string",
                  description: "Nome do responsável pelo aluno",
                },
                telefone_responsavel: {
                  type: "string",
                  description: "Telefone do responsável",
                },
                email_responsavel: {
                  type: "string",
                  description: "E-mail do responsável",
                },
                informacoes_adicionais: {
                  type: "string",
                  description: "Informações adicionais sobre o aluno",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Aluno atualizado com sucesso",
        },
        404: {
          description: "Aluno não encontrado",
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
      summary: "Excluir aluno",
      description: "Remove um aluno do sistema.",
      tags: ["Alunos"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID do aluno",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Aluno excluído com sucesso",
        },
        404: {
          description: "Aluno não encontrado",
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
  },
};
