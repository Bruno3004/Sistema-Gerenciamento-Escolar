import { Router } from 'express';
import ListTurmaController from '../../app/Http/Controllers/TurmaApi/ListTurmaController.js';
import InsertTurmaController from '../../app/Http/Controllers/TurmaApi/InsertTurmaController.js';
import UpdateTurmaController from '../../app/Http/Controllers/TurmaApi/UpdateTurmaController.js';
import GetTurmaController from '../../app/Http/Controllers/TurmaApi/GetTurmaController.js';
import DeleteTurmaController from '../../app/Http/Controllers/TurmaApi/DeleteTurmaController.js';

export default (function () {

    const router = Router();

    // GET Listar
    router.get('/Turma', ListTurmaController);

    // GET Obter
    router.get('/Turma/:id', GetTurmaController);

    // POST Inserir
    router.post('/Turma', InsertTurmaController);

    // PUT Atualizar
    router.put('/Turma/:id', UpdateTurmaController);

    // DELETE Excluir
    router.delete('/Turma/:id', DeleteTurmaController);

    return router;

})();