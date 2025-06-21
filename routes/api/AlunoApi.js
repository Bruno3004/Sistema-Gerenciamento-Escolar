import { Router } from "express";
import InsertAlunoController from "../../app/Http/Controllers/AlunoApi/InsertAlunoController.js";
import UpdateAlunoController from "../../app/Http/Controllers/AlunoApi/UpdateAlunoController.js";
import SelectAlunoController from "../../app/Http/Controllers/AlunoApi/SelectAlunoController.js";
import DeleteAlunoController from "../../app/Http/Controllers/AlunoApi/DeleteAlunoController.js";

export default (function () {
  const router = Router();

  // GET Listar
  router.get("/alunos", SelectAlunoController);

  // GET Obter
  router.get("/alunos/:id", SelectAlunoController);

  // POST Inserir
  router.post("/alunos", InsertAlunoController);

  // PUT Atualizar
  router.put("/alunos/:id", UpdateAlunoController);

  // DELETE Excluir
  router.delete("/alunos/:id", DeleteAlunoController);

  return router;
})();
