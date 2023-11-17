# To-do list
Tecnologias utilizada: NodeJS, Express, Graphql, Postgres e Prisma.

Para executar este projeto siga o passo a passo a seguir.

1. Clone este repositório e baixe as dependências com ``` npm install ```.
2. Crie um arquivo ```.env``` e dentro do mesmo insira uma variável ```DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"```. 
    - OBS.: Substitua a informações "user" e "password" de acordo com seu usuário do banco de dados e "dbname" pelo banco de dados que deseja criar.
3. No seu terminal execute o comando do Prisma ```npx prisma migrate dev```.
    - OBS: Este comando cria o banco de dados e tabelas de acordo com o arquivo ```schema.prisma```.
4. Por fim executar o comando ```npm start```.
