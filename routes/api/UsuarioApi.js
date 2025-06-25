import { Router } from "express";
import SelectUsuarioController from "../../app/Http/Controllers/UsuarioApi/SelectUsuarioController.js";
import InsertUsuarioController from "../../app/Http/Controllers/UsuarioApi/InsertUsuarioController.js";
import DeleteUsuarioController from "../../app/Http/Controllers/UsuarioApi/DeleteUsuarioController.js";
import UpdateUsuarioController from "../../app/Http/Controllers/UsuarioApi/UpdateUsuarioController.js";

export default (function () {
  const router = Router();

  // GET Listar
  router.get("/users", SelectUsuarioController);

  // GET Obter
  router.get("/users/:id", SelectUsuarioController);

  // POST Inserir
  router.post("/users", InsertUsuarioController);

  // PUT Atualizar
  router.put("/users/:id", UpdateUsuarioController);

  // DELETE Excluir
  router.delete("/users/:id", DeleteUsuarioController);

  return router;
})();
