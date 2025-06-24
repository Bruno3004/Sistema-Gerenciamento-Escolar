import { Router } from "express";
import SelectPresencaController from "../../app/Http/Controllers/PresencasApi/SelectPresencaController.js";
import InsertPresencasController from "../../app/Http/Controllers/PresencasApi/InsertPresencaController.js";
import UpdatePresencasController from "../../app/Http/Controllers/PresencasApi/UpdatePresencaController.js";
import DeletePresencasController from "../../app/Http/Controllers/PresencasApi/DeletePresencaController.js";

export default (function () {
  const router = Router();

  // GET Listar
  router.get("/Presencas", SelectPresencaController);

  // GET Obter
  router.get("/Presencas/:id", SelectPresencaController);

  // POST Inserir
  router.post("/Presencas", InsertPresencasController);

  // PUT Atualizar
  router.put("/Presencas/:id", UpdatePresencasController);

  // DELETE Excluir
  router.delete("/Presencas/:id", DeletePresencasController);

  return router;
})();
