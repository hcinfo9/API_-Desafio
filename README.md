# Projeto To-Do-List

Projeto consiste em uma **API que realiza o CRUD de suas Tasks**, a aplicação foi desenvolvida com **NodeJS**, com **Express**,  **Prisma**, **PostGreSQL** e **Docker**  no backend.


## Tecnologias Utilizadas


- **[NodeJS](https://nodejs.org/)**: Utilizado para criar o Servidor, comunicação com banco de dados e as rotas da API.
- **[PostGreSQL](https://www.postgresql.org/)**: Banco de dados utilizado para organizar e manter nossas metas guardadas.
- **[Docker](https://www.docker.com/)**: Utilizado para criar uma imagem Postgres, assim permitindo executar o banco de dados mesmo sem instala-lo na maquina.
- **[Prisma](https://www.prisma.io/)**: utilizado para integrar o servidor com o PostgreSQL e migrações automáticas e suporte a consultas complexas, além de ser otimizado para desempenho.



## Funcionalidades 

- Criar tasks.
- atualizar tasks e excluir tasks.
- Atualiza o status das tasks para completada.
- Recupera as tasks Cadastradas.
- Cria as tasks importando os dados de um arquivo CSV.

  

## Pré-requisitos

- **NodeJS**: [Instalar NodeJS](https://nodejs.org/)
- **npm**: (Gerenciador de pacotes) ou Yarn
- **Docker**:[Instalar Docker](https://www.docker.com/products/docker-desktop/)


## Instalação 

Siga as etapas para instalar e executar o projeto localmente:

1. Clone o repositório:

   ```bash
   https://github.com/hcinfo9/API_-Desafio.git
   ```

2. Acesse o diretório do projeto:
   
   ```bash
   cd API_-Desafio
   ```

3. Instale as dependências:
    
   ```bash
   npm install
   ```

   ou, se estiver utilizando Yarn:

   ```bash
   yarn install
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

5. Crie e inicie o container docker rodando a imagem do PostgreSQL:

    ```bash
   docker-compose up
   ```

6. Para testar a aplicação:

  - Utilize um Client como Postman, Insomnia ou Thunder Client(extensão do VS Code), para testar as rotas da API.

    Rota GET:
     ```
     # execute está url para testar a rota get    
     http://localhost:3000/user
     ```
   
     Rota POST:
       ```
       # execute está url para testar a rota post, no corpo da requisição informe o title e description na estrutura do JSON. 
       http://localhost:3000/user
       ```

     Rota PUT:
       ```
       # execute está url para testar a rota put, no corpo da requisição informe o title e description na estrutura do JSON e não             esqueca de informar o ID da task a ser atualizada 
       http://localhost:3000/user/id
       ```

     Rota DELETE:
      ```
       # execute está url para testar a rota delete, informe o ID da task a ser deletada 
       http://localhost:3000/user/id
      ```

     Rota PATCH:
      ```
       # execute está url para testar a rota Patch, informe o ID da task a ser atualizada o status para  *complete* 
       http://localhost:3000/user/id
      ```
7. Para criar as tasks importando do arquivo CSV:
   
     ```bash
       # execute este comando para testar a rota Patch, informe o ID da task a ser atualizada o status para  *complete* 
       npm run csv
     ```

9. Execute o comando abaixo para visualizar o banco de dados pela Interface do prisma:

    ```bash 
       npx prisma studio
     ```
   

## Scripts Disponíveis

## BackEnd
- **`npm run dev`**: Executa o servidor de desenvolvimento Node.js.
- **`npm run csv`**: Executa a criação de tasks recebendo os dados  de um arquivo CSV.





## Estrutura de Pastas

A estrutura principal do projeto é a seguinte:

```bash
# BackEnd
├── prisma/            # Arquivo com o schema do banco de dados. 
├── src/
│   ├── controllers/   # Arquivo que chama as funcoes dentro de services que fazem o acesso ao banco dados.
│   ├── routes/        # Arquivo que inicia o caminho das nossas rotas e chamam as funções Controllers
│   ├── services/      # Arquivo com a funções para criar, atualizar, excluir, recuperar as tasks.
|   └── server.js      # Arquivo que executa nosso servidor.
|
├── streams/
|    ├── file.csv      # arquivo .CSV de teste para criar as tasks com base nos dados importados do .CSV
|    └── importCSV.js  # Arquivo que cria tasks importando do .CSV
|  
├── docker-compose.yml # Configuração do docker compose para rodar nossa imagem PostGreSQL
├── .env.example       # Arquivo de exemplo das variaveis de ambiente, crie o arquivo  .env e configure o corretamente.
└── package.json       # Dependências e scripts do projeto.

```


## Autor

Este projeto foi desenvolvido por Henrique Donato como parte de um desafio pra aprimorar minhas habilidades.

