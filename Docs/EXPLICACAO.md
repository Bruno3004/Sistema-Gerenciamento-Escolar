# Documentação do Modelo Entidade-Relacionamento (MER) - Sistema de Gestão Escolar

O sistema foi modelado com base em um cenário de **gestão escolar**, identificando as principais entidades:

- **Professor**
- **Turma**
- **Aluno**
- **Pagamento**
- **Presença**
- **Atividade**
- **Usuário**

Cada entidade representa um elemento real do contexto acadêmico, com atributos definidos de acordo com suas propriedades.

## Relacionamentos e Regras do Negócio

- Um **professor** pode ministrar várias **turmas** (**1:N**).
- Um **aluno** pertence a uma **turma** (**N:1**).
- Cada **aluno** pode ter múltiplos registros de **presença** (**1:N**) e **pagamentos** (**1:N**).

## Legendas

- **chaves primárias (PK)**
- **chaves estrangeiras (FK)**
