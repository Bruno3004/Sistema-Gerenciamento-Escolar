import { Router } from "express";
import AlunoApi from "./api/AlunoApi.js";
import AtividadesApi from "./api/AtividadesApi.js";
import PagamentosApi from "./api/PagamentosApi.js";
import PresencasApi from "./api PresencasApi.js";
import ProfessorApi from "./api/ProfessorApi.js";
import TurmaApi from "./api/TurmaApi.js";

export default (function () {
  const router = Router();

  // Rotas da API Aluno
  router.use("/", AlunoApi);

  // Rotas da API Atividades
  router.use("/", AtividadesApi);

  // Rotas da API Pagamentos
  router.use("/", PagamentosApi);

  // Rotas da API Presencas
  router.use("/", PresencasApi);

  // Rotas da API Professor
  router.use("/", ProfessorApi);

  // Rotas da API Turma
  router.use("/", TurmaApi);

  return router;
})();
