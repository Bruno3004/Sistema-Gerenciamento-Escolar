import { Router } from "express";
import SelectPagamentosController from "../../app/Http/Controllers/PagamentosApi/SelectPagamentoController.js";
import InsertPagamentosController from "../../app/Http/Controllers/PagamentosApi/InsertPagamentoController.js";
import UpdatePagamentosController from "../../app/Http/Controllers/PagamentosApi/UpdatePagamentoController.js";
import DeletePagamentosController from "../../app/Http/Controllers/PagamentosApi/DeletePagamentoController.js";

export default (function () {
  const router = Router();

  // GET Listar
  router.get("/Pagamentos", SelectPagamentosController);

  // GET Listar
  router.get("/Pagamentos:id", SelectPagamentosController);

  // POST Inserir
  router.post("/Pagamentos", InsertPagamentosController);

  // PUT Atualizar
  router.put("/Pagamentos/:id", UpdatePagamentosController);

  // DELETE Excluir
  router.delete("/Pagamentos/:id", DeletePagamentosController);

  return router;
})();
