# Desafio-Técnico-XP

## Contexto
Este projeto é uma API Rest para um aplicativo de investimento em ações, com algumas funcionalidades de conta digital.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Docker](https://docker.com/) ou [MySQL](https://dev.mysql.com/), [Node.js](https://nodejs.org/en/) e [Sequelize](https://sequelize.org/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/douglasdossantos00/Desafio-Tecnico-XP.git>

# Entre no diretório
$ cd Desafio-Tecnico-XP
```
#### Os dois próximos passos são exclusivos para o uso com Docker.
```
# Suba o container
$ docker-compose up -d

# Execute o container
$ docker exec -it desafio_xp bash
```
```
# Instale as dependências
$ npm install
```
crie um arquivo .env com suas configurações de acordo com o arquivo .env.exemplo

# Executando aplicação
```
# Crie o banco de dados
$ npx sequelize db:create

# Crie as tabelas
$ npx sequelize db:migrate

# Popule o banco de dados
$ npx sequelize db:seed:all

# Execute a aplicação
$ npm run debug


# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```



### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://dev.mysql.com/)
- [Docker](https://docker.com/)
- [Sequelize](https://sequelize.org/)
- [JavaScript](https://www.javascript.com/)
