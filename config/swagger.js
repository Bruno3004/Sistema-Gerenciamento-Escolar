// swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import fs from "fs/promises";
import path from "path";

const docsDir = path.join(CONSTANTS.DIR, "docs-swagger");

const loadPaths = async (docsDir) => {
  const files = await fs.readdir(docsDir);
  const pathObjects = [];

  for (const file of files) {
    if (file.endsWith(".js")) {
      const fullPath = path.join(docsDir, file);
      const module = await import(fullPath);
      pathObjects.push(module.default);
    }
  }

  // mescla todos os objetos de path
  const mergedPaths = Object.assign({}, ...pathObjects);
  return mergedPaths;
};

const resources = await loadPaths(docsDir);

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API - Documentação dinâmica",
    version: "1.0.0",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 3000}`,
      description: "Servidor local",
    },
  ],
  paths: resources,
};

const options = {
  swaggerDefinition,
  apis: [], // Nenhum arquivo de docblock
};

export default swaggerJSDoc(options);
