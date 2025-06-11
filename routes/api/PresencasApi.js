import { Router } from 'express';
import ListPresencasController from '../../app/Http/Controllers/PresencasApi/ListPresencasController.js';
import InsertPresencasController from '../../app/Http/Controllers/PresencasApi/InsertPresencasController.js';
import UpdatePresencasController from '../../app/Http/Controllers/PresencasApi/UpdatePresencasController.js';
import GetPresencasController from '../../app/Http/Controllers/PresencasApi/GetPresencasController.js';
import DeletePresencasController from '../../app/Http/Controllers/PresencasApi/DeletePresencasController.js';

export default (function () {

    const router = Router();

    // GET Listar
    router.get('/Presencas', ListPresencasController);

    // GET Obter
    router.get('/Presencas/:id', GetPresencasController);

    // POST Inserir
    router.post('/Presencas', InsertPresencasController);

    // PUT Atualizar
    router.put('/Presencas/:id', UpdatePresencasController);

    // DELETE Excluir
    router.delete('/Presencas/:id', DeletePresencasController);

    return router;

})();