// carrega framework express
const express = require('express');

const calculadora = require('./calculadora');

// Cria um app do tipo express()
const app     = express();

// Declara porta de execução da aplicação
const PORT = 8080;

// Cria um array para armazenar respostas ao usuário
const LOG = [];

// Define rota raiz "/" e resposta da aplicação
app.get('/', (req, res)=>{
    res.send('Olá, WEB!');
});

// URL fixa
app.get('/ola/joao', (req, res)=>{
    res.send('Olá, João!');
});

// URL com parâmetro
app.get('/ola/:nome', (req, res)=>{
    res.send(`Olá, ${req.params.nome}!`);
});

// URL com múltiplos parâmetros
app.get('/calculadora/somar/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    let resultado = calculadora.somar(a, b);
    let string_resultado = `<h1>${a} + ${b} = ${resultado}</h1>`;
    LOG.push(string_resultado)
    res.send(string_resultado);
});

app.get('/calculadora/log', (req, res)=>{
    resultado = "";
    LOG.forEach(log => {
        resultado += log;
    });
    res.send(resultado);
});

// Inicializar a aplicação na porta definida
app.listen(PORT, ()=>{
    console.log("app rodando na porta " + PORT);
});
