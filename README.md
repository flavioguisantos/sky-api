<!-- ## <img src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif" width="30px"> Olá seja bem-vindo(a)!</h2> -->

## <h2> Olá seja bem-vindo(a)!</h2>

Sou <strong>Engenheiro de Software</strong> e <strong>Engenheiro Civil</strong> com Pós <strong> Graduação em Empreendedorismo e Novas Tecnologias</strong>.<br />

Criei essa <strong>API Rest</strong>
rapidamente, gostaria de ter tido mais tempo para fazer alguns ajustes e criar mais testes unitários. Logo deixarei 100%</strong>.

Utilizei: <strong>MongoDB Atlas, NodeJS e JavaScript.</strong>

<strong>O banco de dados esta hospedado em MongoDB Atlas e a aplicação back-end esta no Heroku.</strong>

frameworks: <strong>bcryptjs, uuid, eslint, prettier, cors, dotenv, express, express-validator, Jest, jsonwebtoken e mongodb</strong>

## Tecnologias & Ferramentas

<img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" height="25"/><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="25"/><img src="https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm" height="25"/><img src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github" height="25"/><img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" height="25"/>

Para acessar a API, deve ser chamada a rota: `https://teste-app-sky.herokuapp.com/api/sign-up`, para realizar o cadastro do usuário, usando o verbo `POST`, passando como parâmetro:

```json
{
    "nome": "xxxx",
    "email": "xxxx@xxxx",
    "senha": "xxx",
    "telefones": [
        {
            "numero": "xxxxxxxxx",
            "ddd": "xx"
        }
    ]
}
```

Será retornado os dados do usuário cadastro e o Token gerado com validade de 30 minutos.

```json
{
    "_id": "84c2380a-e6ad-4a85-ad31-dc09d89916b6",
    "nome": "Flavio",
    "email": "flavio.guilherme@outlook.com.br",
    "data_criacao": "2021-05-27T00:40:06.889Z",
    "data_atualizacao": "2021-05-27T00:40:06.889Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJpZCI6MSwidXNlciI6IjExMDY3NyIsImlhdCI6MTYyMTI3MjI5NSwiZXhwIjoxNjIxMjc1ODk1fQ.
    55zzl5rlU-mf4uDEYkwr5eVt9kZnC4yKDGsofmbqs75"
}
```

Atráves da rota `GET` `https://teste-app-sky.herokuapp.com/sky/search-user`, juntamente com o token gerado, passamos o `Authorization Bearer: token`
e temos como resultado os dados do usuário.

Parâmetros de retorno:

```json
{
    "_id": "84c2380a-e6ad-4a85-ad31-dc09d89916b1",
    "nome": "Flavio",
    "email": "flavio.guilherme@outlook.com.br",
    "data_criacao": "2021-05-27T00:40:06.889Z",
    "data_atualizacao": "2021-05-27T00:40:06.889Z"
}
```

Atráves da rota `POST` `https://teste-app-sky.herokuapp.com/api/sign-in`, passamos como parâmetros o email e a senha outrorá cadastrados e teremos o seguinte retorno:

```json
{
    "_id": "84c2380a-e6ad-4a85-ad31-dc09d89916b1",
    "nome": "Flavio",
    "email": "flavio.guilherme@outlook.com.br",
    "data_criacao": "2021-05-27T00:40:06.889Z",
    "data_atualizacao": "2021-05-27T00:40:06.889Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJub21lIjoiRmxhdmlvIiwiZW1haWwiOiJmbGF2aW8uZ3VpbGhlcm1lQG91dGxvb2suY29tLmJyIiwiaWF0IjoxN
    jIyMTIzNjU4LCJleHAiOjE2MjIxMjU0NTh9.jz8N_5MAwWRZUiYW2RJXFPNcUtJC1hvgA9TPZvmE5C1"
}
```
