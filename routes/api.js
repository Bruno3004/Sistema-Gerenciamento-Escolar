import { Router } from "express";
import AlunoApi from "./api/AlunoApi.js";
import AtividadesApi from "./api/AtividadesApi.js";
import PagamentosApi from "./api/PagamentosApi.js";
import PresencasApi from "./api PresencasApi.js";
import ProfessorApi from "./api/ProfessorApi.js";
import TurmaApi from "./api/TurmaApi.js";

export default (function () {
  const router = Router();


  router.use("/", AlunoApi);


  router.use("/", AtividadesApi);


  router.use("/", PagamentosApi);


  router.use("/", PresencasApi);


  router.use("/", ProfessorApi);

  
  router.use("/", TurmaApi);

  return router;
})();
