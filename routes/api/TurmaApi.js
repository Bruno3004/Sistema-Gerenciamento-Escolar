import { Router } from "express";
import SelectTurmaController from "../../app/Http/Controllers/TurmaApi/SelectTurmaController.js";
import InsertTurmaController from "../../app/Http/Controllers/TurmaApi/InsertTurmaController.js";
import UpdateTurmaController from "../../app/Http/Controllers/TurmaApi/UpdateTurmaController.js";
import DeleteTurmaController from "../../app/Http/Controllers/TurmaApi/DeleteTurmaController.js";

export default (function () {
  const router = Router();

  // GET Listar
  router.get("/Turma", SelectTurmaController);

  // GET Obter
  router.get("/Turma/:id", SelectTurmaController);

  // POST Inserir
  router.post("/Turma", InsertTurmaController);

  // PUT Atualizar
  router.put("/Turma/:id", UpdateTurmaController);

  // DELETE Excluir
  router.delete("/Turma/:id", DeleteTurmaController);

  return router;
})();
