# API Finaceira

## Contexto
Este projeto é uma API Rest para um aplicativo de investimento em ações, com algumas funcionalidades de conta digital.

## Metodologia aplicada no desafio.

Após análise do projeto, optei por trabalhar com a linguagem *JavaScript*, o banco de dados *MySql* e ORM *Sequelize*, este último, para agilizar o acesso aos dados. Mesmo tendo feito apenas um projeto com o uso da ORM, o desafio me deu alento para aprender mais sobre ORM, como dados é a base da informação, ter acesso a maior quantidade com um menor tempo é uma ótima vantagem.  
Elaborei um [mapa mental](https://github.com/douglasdossantos00/Desafio-Tecnico-XP/blob/main/images/Mapa%20mental%20desafio%20XP.png) utilizando a plataforma de colaboração visual *Miro*, para ter uma visão macro da funcionalidade da API, e assim conseguir partir para o próximo passo que foi o modelamento das tabelas e suas associações.
No [modelamento do banco](https://github.com/douglasdossantos00/Desafio-Tecnico-XP/blob/main/images/Modelagem%20do%20banco.png) criei três tabelas, optei por relacionar a conta com o ativo, para tentar reduzir ao máximo o número de tabelas.  
Dei inicio a programação, foi meu primeiro projeto literalmente do zero, pois nos projetos da Trybe boa parte das dependências já vem predefinidas, e com um simples comando install elas estão prontas, foi aí meu primeiro percalço. Depois de configurado e instalado as dependências, a conexão com o banco de dados e o *Sequelize* me tomou algum tempo, mas procurando informações, lendo documentação e vendo alguns vídeos pude avançar até o relacionamento das tabelas, foi outro ponto de aprendizado.  
A parte lógica fluiu bem, até que necessitei fazer uma solicitação ao banco de dados com uma função do *Sequelize* e não conseguia trazer o que queria ao consultar as tabelas associadas, foi necessário uma nova busca de aprendizado consultando a documentação. Assim, foi possível encontrar uma alternativa sem alterar a lógica. 
Para dar mais segurança a API utilizei a autenticação Bearer Token (*JWT*).
Usei o *Swagger* para documentar a API, trazendo as informações e possibilitando testar a usuabilidade.

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


O servidor inciará na porta:3000 - acesse <http://localhost:3000>               
A documentação com usubilidade no link - <http://localhost:3000/api-docs>  
```
Para acesso externo a API está disponível - [https://api-financeira-001.herokuapp.com/api-docs/](https://api-financeira-001.herokuapp.com/api-docs/)




### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [MySQL](https://dev.mysql.com/)
- [Docker](https://docker.com/)
- [Sequelize](https://sequelize.org/)
- [JavaScript](https://www.javascript.com/)
