import { Router } from 'express';
import ListPagamentosController from '../../app/Http/Controllers/PagamentosApi/ListPagamentosController.js';
import InsertPagamentosController from '../../app/Http/Controllers/PagamentosApi/InsertPagamentosController.js';
import UpdatePagamentosController from '../../app/Http/Controllers/PagamentosApi/UpdatePagamentosController.js';
import GetPagamentosController from '../../app/Http/Controllers/PagamentosApi/GetPagamentosController.js';
import DeletePagamentosController from '../../app/Http/Controllers/PagamentosApi/DeletePagamentosController.js';

export default (function () {

    const router = Router();

    // GET Listar
    router.get('/Pagamentos', ListPagamentosController);

    // GET Obter
    router.get('/Pagamentos/:id', GetPagamentosController);

    // POST Inserir
    router.post('/Pagamentos', InsertPagamentosController);

    // PUT Atualizar
    router.put('/Pagamentos/:id', UpdatePagamentosController);

    // DELETE Excluir
    router.delete('/Pagamentos/:id', DeletePagamentosController);

    return router;

})();