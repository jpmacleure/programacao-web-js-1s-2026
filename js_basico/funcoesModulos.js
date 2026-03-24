const operacoes = require('./operacoes');

/**
 * 
 * Cria uma funlção que imprime um dado texto
 */
function imprimirTexto(texto){
    console.log(texto);
}

// Testa a função com diferentes argumentos
imprimirTexto("Olá, WEB!");
imprimirTexto("Vai teia...");

/**
 * Função que imprime o resultado
 * De uma operação dada
 */
function executarOperacao(operacao, a, b){
    return operacao(a, b);
}

console.log(`3 + 5 = ${executarOperacao(operacoes.somar, 3, 5)}`);
console.log(`3 - 5 = ${executarOperacao(operacoes.subtrair, 3, 5)}`);