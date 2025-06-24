import AlunoModel from "../app/Models/AlunoModel.js";
import AtividadesModel from "../app/Models/AtividadesModel.js";
import PagamentosModel from "../app/Models/PagamentosModel.js";
import PresencasModel from "../app/Models/PresencasModel.js";
import ProfessorModel from "../app/Models/ProfessorModel.js";
import TurmaModel from "../app/Models/TurmaModel.js";

AlunoModel.belongsTo(TurmaModel, {
  foreignKey: "id_turma",
  as: "turma",
});

TurmaModel.hasMany(AlunoModel, {
  foreignKey: "id_turma",
  as: "alunos",
});

TurmaModel.belongsTo(ProfessorModel, {
  foreignKey: "id_professor",
  as: "professor",
});

ProfessorModel.hasMany(TurmaModel, {
  foreignKey: "id_professor",
  as: "turmas",
});

PagamentosModel.belongsTo(AlunoModel, {
  foreignKey: "id_aluno",
  as: "aluno",
});

AlunoModel.hasMany(PagamentosModel, {
  foreignKey: "id_aluno",
  as: "pagamentos",
});

PresencasModel.belongsTo(AlunoModel, {
  foreignKey: "id_aluno",
  as: "aluno",
});

AlunoModel.hasMany(PresencasModel, {
  foreignKey: "id_aluno",
  as: "presencas",
});

AtividadesModel.belongsTo(AlunoModel, {
  foreignKey: "id_aluno",
  as: "aluno",
});

AlunoModel.hasMany(AtividadesModel, {
  foreignKey: "id_aluno",
  as: "atividades",
});
