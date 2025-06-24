# Unifaat Projeto - Sistema de Gerenciamento Escolar

## Descrição Breve

### Requisitos

Gostaríamos de solicitar o desenvolvimento de um sistema computacional para otimizar as atividades da escola. Atualmente, toda a gestão é feita manualmente em cadernos, o que dificulta o acompanhamento das informações, especialmente com o crescimento da instituição.

### Objetivo

O objetivo do sistema é modernizar e facilitar o gerenciamento escolar, permitindo um controle mais eficiente de dados acadêmicos, administrativos e operacionais. Com essa solução, será possível organizar registros de alunos e professores, acompanhar o desempenho escolar e melhorar a comunicação interna, tornando os processos mais ágeis e precisos.

### Mais detalhes

Wiki do Projeto

https://github.com/Bruno3004/Sistema-Gerenciamento-Escolar/wiki

## Tecnologias Utilizadas

1. Java Script
2. Html
3. Docker
4. Postgres
5. Nginx
6. Node
7. Sequelize

## Pré-requisitos

1. Docker
2. Docker compose
3. Git

## Instalação/Configurar

### Siga os passos abaixo para rodar o projeto via Docker:

1. Clonar o repositório:

   ```sh
   git clone https://github.com/Bruno3004/Sistema-Gerenciamento-Escolar.git
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd Sistema-Gerenciamento-Escolar
   ```

3. Criar o arquivo `.env` na raiz do projeto copiando o .env.example:

   > No windows:

   ```ini
   copy .env.example .env
   ```

   > No linux

   ```ini
   cp .env.example .env
   ```

4. Subir a aplicação com Docker Compose:

   ```sh
   docker compose up --build
   ```

   > ou, dependendo da versão do Docker:
   >
   > - Usuários com versões **mais antigas** ou com Docker Compose instalado separadamente usam:

   ```sh
   docker-compose up --build
   ```

   > - Usuários com **Docker moderno** devem usar:

   ```sh
   docker compose up --build
   ```

Observação: ./Insomnia_Collection.yml pode ser utilizado no insomnia

## Variáveis de Ambiente

1. PORT=8080

2. POSTGRES_HOST=postgres_host
3. POSTGRES_PORT=5432
4. POSTGRES_USER=admin_escola
5. POSTGRES_PASSWORD=admin_2025
6. POSTGRES_DB=db_escola

## Como Usar

O servidor estará disponível em: [http://localhost:8080](http://localhost:8080)

Documentação de como consumir as api: http://localhost:8080/docs

## Contribuição

Para passo a passo completo acessar a wiki do projeto

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (git checkout -b sujestao-melhoria)
3. Commit suas mudanças (git commit -m 'Sujestao de Melhoria')
4. Push para a Branch (git push origin sujestao-melhoria)
5. Abra um Pull Request
