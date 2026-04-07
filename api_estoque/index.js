const express   = require('express');
const estoque   = require('./estoque');
const app       = express();
const PORT      = 8080;

app.get('/', (req, res)=>{
    let msg = "<h1>Rotas disponíveis</h1>";
    msg     += "<p>Para cadastrar produtos: /api/cadastrar/:nome/:qtd</p>";
    msg     += "<p>Para listar os produtos: /api/listar</p>";
    res.send(msg);
});

app.get('/api/cadastrar/:nome/:qtd', (req, res)=>{
    let nome = req.params.nome;
    let qtd  = req.params.qtd;
    estoque.cadastrar_produto(nome, qtd);
    res.send('produto cadastrado com sucesso');
});

app.get('/api/listar', (req, res)=>{
    res.send(estoque.listar_produtos());
});

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});