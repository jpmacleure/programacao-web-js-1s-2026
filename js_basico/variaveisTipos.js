// Strings
let nome = "Pedro"; // let permite que o valor da variável seja alterado
const sobrenome = 'Santos'; // const não permite alteração do valor
nome = 'João';
//sobrenome = 'Nunes'; TypeError
let templateString = `O meu nome é ${nome} ${sobrenome}`;
console.log(templateString);

// Number - não diferencia por ponto flutuante
let A = 2;
let B = 5.56;
let C = -3.14;
const PI = 3.14;
let potencia = A ** C; // Outros operadores: +, -, *, /, %
console.log(typeof A);
console.log(typeof C);
console.log(`${A}^${C}=${potencia}`);

// Boolean
let verdadeiro = true;
let falso = false;
console.log(typeof verdadeiro);

// Operadores lógicos
let E = verdadeiro && falso;
let Ou = verdadeiro || falso;
console.log(E);
console.log(Ou);

let maior_que = B > A; // Outros: >=, <, <=, ==, !=
console.log(`${B}>${A}=${maior_que}`);

// Arrays
let numeros = [1, 3.14, -7, 99, 505.67];
console.log(numeros);
console.log(`numeros[0]=${numeros[0]}`); // Usando o índice para acessar os elementos
console.log(`numeros[3]=${numeros[3]}`); // Começa na posição 0
console.log(typeof numeros);

// Object
// Podem ser compostos por atributos de todos os tipos
let pessoa = {
    nome: 'João',
    cpf: 123,
    telefones: [61999999999, 61999999998]
};
console.log(pessoa);
console.log(`pessoa.nome=${pessoa.nome}`);