const express = require('express');
const mustacheExpress = require('mustache-express');
const agendamentoRouter = require('./routers/agendamentoRouter');
const db = require('./db');

const PORT = 8080;
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.use('/', agendamentoRouter);

db.sync();

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});
