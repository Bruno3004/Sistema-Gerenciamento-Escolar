import { Router } from "express";
import InsertProfessorController from "../../app/Http/Controllers/ProfessorApi/InsertProfessorController.js";
import UpdateProfessorController from "../../app/Http/Controllers/ProfessorApi/UpdateProfessorController.js";
import DeleteProfessorController from "../../app/Http/Controllers/ProfessorApi/DeleteProfessorController.js";
import SelectProfessorController from "../../app/Http/Controllers/ProfessorApi/SelectProfessorController.js";

export default (function () {
  const router = Router();

  // GET Listar
  router.get("/Professor", SelectProfessorController);

  // GET Obter
  router.get("/Professor/:id", SelectProfessorController);

  // POST Inserir
  router.post("/Professor", InsertProfessorController);

  // PUT Atualizar
  router.put("/Professor/:id", UpdateProfessorController);

  // DELETE Excluir
  router.delete("/Professor/:id", DeleteProfessorController);

  return router;
})();
