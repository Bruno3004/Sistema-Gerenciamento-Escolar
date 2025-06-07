import { Router } from 'express';
import ListAlunoController from '../../app/Http/Controllers/AlunoApi/ListAlunoController.js';
import InsertAlunoController from '../../app/Http/Controllers/AlunoApi/InsertAlunoController.js';
import UpdateAlunoController from '../../app/Http/Controllers/AlunoApi/UpdateAlunoController.js';
import GetAlunoController from '../../app/Http/Controllers/AlunoApi/GetAlunoController.js';
import DeleteAlunoController from '../../app/Http/Controllers/AlunoApi/DeleteAlunoController.js';

export default (function () {

    const router = Router();

    // GET Listar
    router.get('/alunos', ListAlunoController);

    // GET Obter
    router.get('/alunos/:id', GetAlunoController);

    // POST Inserir
    router.post('/alunos', InsertAlunoController);

    // PUT Atualizar
    router.put('/alunos/:id', UpdateAlunoController);

    // DELETE Excluir
    router.delete('/alunos/:id', DeleteAlunoController);

    return router;

})();