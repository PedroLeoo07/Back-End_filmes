## Filmes

### Descrição

O projeto consiste em uma API que permite o gerenciamento de filmes, sendo possível adicionar, atualizar e deletar filmes.

### Tecnologias

- Node.js
- Express
- JSON
- CORS
- UUID

### Instalação

1. Clone o repositório
2. Entre na pasta do projeto
3. Rode o comando `npm install` para instalar as dependências
4. Rode o comando `npm start` para iniciar o servidor
5. Acesse a URL `http://localhost:1417/` para ver a lista de filmes
6. Acesse a URL `http://localhost:1417/api/movies` para ver a lista de filmes

## Código em XML

  <router>
    <movie>
        <title>Velozes e Furiosos 5</title>
        <director>Justin Lin</director>
        <distribution>Universal</distribution>
        <lancamento>15 de abril de 2011</lancamento>
    </movie>
    <movie>
        <title>Velozes e Furiosos 7</title>
        <director>James Wan</director>
        <distribution>Universal</distribution>
        <lancamento>15 de abril de 2015</lancamento> 
    </movie>
    <movie>
        <title>Velozes e Furiosos 10</title>
        <director>James Wan</director>
        <distribution>Universal</distribution>
        <lancamento>15 de abril de 2015</lancamento>
    </movie>
    <movie>
        <title>Velozes e Furiosos 4</title>
        <director>James Wan</director>
        <distribution>Universal</distribution>
        <lancamento>15 de abril de 2015</lancamento>
    </movie>
    <routes>
        <route name="addMovie">
            <method>POST</method>
            <endpoint>/addMovie</endpoint>
            <params>
                <param>title</param>
                <param>director</param>
                <param>distribution</param>
                <param>releaseDate</param>
            </params>
        </route>
        <route name="getAllMovies">
            <method>GET</method>
            <endpoint>/getAllMovies</endpoint>
        </route>
        <route name="getMovieById">
            <method>GET</method>
            <endpoint>/getMovieById/{id}</endpoint>
            <params>
                <param>id</param>
            </params>
        </route>
        <route name="updateMovie">
            <method>PUT</method>
            <endpoint>/updateMovie/{id}</endpoint>
            <params>
                <param>id</param>
                <param>updateData</param>
            </params>
        </route>
        <route name="deleteMovie">
            <method>DELETE</method>
            <endpoint>/deleteMovie/{id}</endpoint>
            <params>
                <param>id</param>
            </params>
        </route>
    </routes>
    </router>