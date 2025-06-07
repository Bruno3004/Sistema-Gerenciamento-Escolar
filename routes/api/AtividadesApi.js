import { Router } from 'express';
import InsertAtividadeController from '../../app/Http/Controllers/AtividadeApi/InsertAtividadeController.js';
import DeleteAtividadeController from '../../app/Http/Controllers/AtividadeApi/DeleteAtividadeController.js';

export default (function () {

    const router = Router();

    // POST inserir atividade
    router.post('/atividades', InsertAtividadeController);

    // DELETE excluir atividade
    router.delete('/atividades/:id', DeleteAtividadeController);

    return router;

})();