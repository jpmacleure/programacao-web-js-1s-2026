const express = require('express');
const mustacheExpress = require('mustache-express')
const PORT = 8080;
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.render("index.html");
});

app.post('/agendamento', (req, res)=>{
    dados_agendamento = req.body;
    console.log(dados_agendamento);
    res.render('agendamento.html', {dados_agendamento});
});


app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});
