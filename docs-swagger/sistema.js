export default {
  "/": {
    get: {
      summary: "Página inicial do sistema",
      description:
        "Retorna uma página HTML com a lista de arquivos públicos disponíveis no sistema.",
      tags: ["Sistema"],
      responses: {
        200: {
          description: "Página inicial retornada com sucesso",
          content: {
            "text/html": {
              schema: {
                type: "string",
                description: "Página HTML com lista de arquivos",
              },
            },
          },
        },
        500: {
          description: "Erro interno no servidor",
        },
      },
    },
  },
  "/docs": {
    get: {
      summary: "Documentação da API",
      description:
        "Acessa a interface do Swagger UI para visualizar e testar todas as rotas da API.",
      tags: ["Sistema"],
      responses: {
        200: {
          description: "Interface do Swagger UI carregada com sucesso",
          content: {
            "text/html": {
              schema: {
                type: "string",
                description: "Interface do Swagger UI",
              },
            },
          },
        },
      },
    },
  },
};
