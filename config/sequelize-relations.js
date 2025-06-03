import AlunoModel from "../app/Models/AlunoModel";
import AtividadesModel from "../app/Models/AtividadesModel";
import PagamentosModel from "../app/Models/PagamentosModel";
import PresencasModel from "../app/Models/PresencasModel";
import ProfessorModel from "../app/Models/ProfessorModel";
import TurmaModel from "../app/Models/TurmaModel";

AlunoModel.belongsTo(TurmaModel, {
  foreignKey: "id_turma",
  as: "turma",
});

TurmaModel.hasMany(AlunoModel, {
  foreignKey: "id_turma",
  as: "aluno",
});

TurmaModel.belongsTo(ProfessorModel, {
  foreignKey: "id_professor",
  as: "professor",
});

PresencasModel.hasMany(TurmaModel, {
  foreignKey: "id_professor",
  as: "turma",
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
  foreignKey: "aluno_id",
  as: "aluno",
});

AlunoModel.hasMany(PresencasModel, {
  foreignKey: "aluno_id",
  as: "presenca",
});

AtividadesModel.belongsTo(AlunoModel, {
  foreignKey: "aluno_id",
  as: "aluno",
});

AlunoModel.hasMany(AtividadesModel, {
  foreignKey: "aluno_id",
  as: "atividades",
});
