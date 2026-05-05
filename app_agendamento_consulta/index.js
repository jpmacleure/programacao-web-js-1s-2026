const express = require('express');
const mustacheExpress = require('mustache-express')
const PORT = 8080;
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{

    let dados_erros = {
        erro_nome: req.query.erro_nome,
        erro_sobrenome: req.query.erro_sobrenome,
        erro_cpf: req.query.erro_cpf,
        erro_data_nascimento: req.query.erro_data_nascimento
    }
    
    let dados_form = {
        nome: req.query.nome,
        sobrenome: req.query.sobrenome,
        cpf: req.query.cpf,
        data_nascimento: req.query.data_nascimento
    }
    
    res.render("index.html", {dados_erros, dados_form});
});

app.post('/agendamento', (req, res)=>{
    let dados_agendamento = req.body;
    console.log(dados_agendamento);

    let query_erros = ""
    let existe_erro = false;

    if(
        dados_agendamento.nome == null ||
        dados_agendamento.nome.length == 0 || 
        dados_agendamento.nome.trim() == ""
    ){
        query_erros += "erro_nome=true&";
        existe_erro = true;
    }
    else{
        query_erros += `nome=${dados_agendamento.nome}&`;
    }

    if(
        dados_agendamento.sobrenome == null ||
        dados_agendamento.sobrenome.length == 0 || 
        dados_agendamento.sobrenome.trim() == ""
    ){
        query_erros += "erro_sobrenome=true&";
        existe_erro = true;
    }
    else{
        query_erros += `sobrenome=${dados_agendamento.sobrenome}&`;
    }

    if(
        dados_agendamento.cpf == null ||
        dados_agendamento.cpf.length == 0 || 
        dados_agendamento.cpf.trim() == ""
    ){
        query_erros += "erro_cpf=true&";
        existe_erro = true;
    }
    else{
        query_erros += `cpf=${dados_agendamento.cpf}&`;
    }

    if(
        dados_agendamento.data_nascimento == null ||
        dados_agendamento.data_nascimento.length == 0 || 
        dados_agendamento.data_nascimento.trim() == ""
    ){
        query_erros += "erro_data_nascimento=true&";
        existe_erro = true;
    }
    else{
        query_erros += `data_nascimento=${dados_agendamento.data_nascimento}&`;
    }

    if(existe_erro){
        res.redirect('/?'+query_erros);
    }
    else{
        res.render('agendamento.html', {dados_agendamento});
    }
    
});


app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});
