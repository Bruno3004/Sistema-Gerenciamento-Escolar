import { Router } from "express";
import InsertAtividadeController from "../../app/Http/Controllers/AtividadesApi/InsertAtividadeController.js";
import DeleteAtividadeController from "../../app/Http/Controllers/AtividadesApi/DeleteAtividadeController.js";
import SelectAtividadeController from "../../app/Http/Controllers/AtividadesApi/SelectAtividadeController.js";
import UpdateAtividadeController from "../../app/Http/Controllers/AtividadesApi/UpdateAtividadeController.js";

export default (function () {
  const router = Router();

  // POST inserir atividade
  router.post("/atividades", InsertAtividadeController);

  // GET Obter
  router.get("/atividades/", SelectAtividadeController);

  // GET Obter
  router.get("/atividades/:id", SelectAtividadeController);

  // PUT Atualizar
  router.put("/atividades/:id", UpdateAtividadeController);

  // DELETE excluir atividade
  router.delete("/atividades/:id", DeleteAtividadeController);

  return router;
})();
