REALIZADO DESAFIO BACKEND - 
Crie uma API RESTful usando Node.js, TypeScript e NestJS para gerenciar um sistema de usuários com as seguintes funcionalidades:

- **Listar todos os usuários**
- **Criar um novo usuário**
- **Atualizar um usuário existente**
- **Excluir um usuário**

**Requisitos:**

- Utilize Postgres para armazenar os dados dos usuários.
- Inclua validação de entrada e tratamento de erros.
- Forneça um arquivo `Dockerfile` e um `docker-compose.yml` para criar e gerenciar os containers da aplicação e do banco de dados.
- Forneça documentação básica para a API.
3. Trabalho com Banco de Dados

Tarefa:Crie um esquema de banco de dados para um sistema de gerenciamento de localização de pontos de interesse usando Postgres e PostGIS. O esquema deve incluir tabelas para pontos de interesse e categorias.

Requisitos:

- Crie as tabelas e relacionamentos necessários com suporte a dados geoespaciais.
- Escreva consultas SQL para listar todos os pontos de interesse em uma determinada área geográfica e para adicionar um novo ponto de interesse à base de dados.

4. Teste de Integração e APIs

Tarefa: Desenvolva um conjunto de testes utilizando Jest para a API criada no Desafio de Codificação. Os testes devem:

- Testar todas as rotas da API (Listar, Criar, Atualizar, Excluir).
- Validar as respostas da API.
- Garantir que os erros sejam tratados corretamente.

Após a criação peço que envie o repositório com o código para que possamos avaliar tudo que foi desenvolvido. Também preciso que me informe qual será o prazo de entrega. 
Aguardo retorno!

![Modelagem do Banco de Dados](/images/Banco.jpeg)

Este projeto usa Docker e Docker Compose para gerenciar contêineres e configurar o ambiente de desenvolvimento. Siga as instruções abaixo para configurar e executar o projeto localmente.

Clone o repositório para o seu ambiente local:
Execute os seguintes comandos:
docker-compose up --build
yarn migration:run
yarn run start:dev

Depois inicie o swagger pela url
http://localhost:3000/docs