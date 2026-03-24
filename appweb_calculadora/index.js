// Carrega framework express
const express = require('express');

// Cria um app usando a função express()
const app     = express();

// Define porta da aplicação
const PORT = 8080;

app.get('/', function (req, res){
    res.send('<h1>Olá, mundo!</h1> <p>Estou na web...</p>');
});

app.get('/bem-vindo', function (req, res){
    res.send('<h1>Bem-vindo ao desenvolvimento WEB!</h1>');
});


app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});