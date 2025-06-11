import { Router } from 'express';
import ListProfessorController from '../../app/Http/Controllers/ProfessorApi/ListProfessorController.js';
import InsertProfessorController from '../../app/Http/Controllers/ProfessorApi/InsertProfessorController.js';
import UpdateProfessorController from '../../app/Http/Controllers/ProfessorApi/UpdateProfessorController.js';
import GetProfessorController from '../../app/Http/Controllers/ProfessorApi/GetProfessorController.js';
import DeleteProfessorController from '../../app/Http/Controllers/ProfessorApi/DeleteProfessorController.js';

export default (function () {

    const router = Router();

    // GET Listar
    router.get('/Professor', ListProfessorController);

    // GET Obter
    router.get('/Professor/:id', GetProfessorController);

    // POST Inserir
    router.post('/Professor', InsertProfessorController);

    // PUT Atualizar
    router.put('/Professor/:id', UpdateProfessorController);

    // DELETE Excluir
    router.delete('/Professor/:id', DeleteProfessorController);

    return router;

})();