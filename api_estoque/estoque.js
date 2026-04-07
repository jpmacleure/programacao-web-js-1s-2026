// Mantém a lista de produtos em memória
const produtos = [];

function cadastrar_produto(nome, qtd){
    let produto = {
        nome: nome,
        qtd: qtd
    };
    produtos.push(produto);
}

function listar_produtos(){
    return produtos;
}

module.exports = {
    cadastrar_produto,
    listar_produtos
};