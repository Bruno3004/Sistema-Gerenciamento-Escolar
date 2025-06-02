const Aluno = require("../app/Models/AlunoModel");
const Turma = require("../app/Models/TurmaModel");
const Professor = require("../app/Models/ProfessorModel");
const Pagamentos = require("../app/Models/PagamentosModel");
const Presencas = require("../app/Models/PresencasModel");
const Atividades = require("../app/Models/AtividadesModel");

Aluno.belongsTo(Turma, { foreignKey: "id_turma" });
Turma.hasMany(Aluno, { foreignKey: "id_turma" });
Turma.belongsTo(Professor, { foreignKey: "id_professor" });
Professor.hasMany(Turma, { foreignKey: "id_professor" });
Pagamentos.belongsTo(Aluno, { foreignKey: "id_aluno" });
Aluno.hasMany(Pagamentos, { foreignKey: "id_aluno" });
Presencas.belongsTo(Aluno, { foreignKey: "aluno_id" });
Aluno.hasMany(Presencas, { foreignKey: "aluno_id" });
Atividades.belongsTo(Aluno, { foreignKey: "aluno_id" });
Aluno.hasMany(Atividades, { foreignKey: "aluno_id" });
