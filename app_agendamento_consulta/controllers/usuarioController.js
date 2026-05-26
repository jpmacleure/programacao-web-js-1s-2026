const Usuario = require('../models/UsuarioModel');

function getLoginView(req, res){
    let erro = req.query.erro;
    res.render('login.html', {erro});
}

function getCadastroView(req, res){
    let erro = req.query.erro;
    res.render('cadastro.html', {erro});
}

function postCadastrarUsuario(req, res){
    let dados_usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
    }
    Usuario.create(dados_usuario).then(()=>{
        res.redirect('/login');
    }).catch((err)=>{
        res.redirect('/cadastrar_usuario?erro=1');
    });
}

async function postLogin(req, res){
    dados_login = {
        email: req.body.email,
        senha: req.body.senha
    }
    // SELECT * FROM USUARIOS WHERE EMAIL=${EMAIL} AND SENHA=${SENHA}
    let usuario = await Usuario.findOne({
        where: {
            email: dados_login.email,
            senha: dados_login.senha
        }
    });

    if(usuario != null){
        console.log('USUÁRIO AUTENTICADO');
        req.session.autorizado = true;
        req.session.usuario_nome = usuario.nome;
        req.session.usuario_email = usuario.email;
        res.redirect('/');
    }
    else{
        console.log('USUÁRIO NÃO AUTENTICADO');
        res.redirect('/login?erro=1');
    }

}

function verificarAutenticacao(req, res, next){
    if(req.session.autorizado){
        // AUTORIZADO
        console.log('usuário autorizado');
        next();
    }
    else{
        console.log('usuário NÃO autorizado');
        res.redirect('/login');
    }
}

module.exports = {
    getLoginView,
    getCadastroView,
    postCadastrarUsuario,
    postLogin,
    verificarAutenticacao
}