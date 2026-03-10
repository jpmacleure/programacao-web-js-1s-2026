// Function - bloco de código que pode ser acionado
// DRY - Dont Repeat Yourself
function imprimirOlaMundo(){
    console.log("Olá, mundo!");    
}

imprimirOlaMundo(); // chamada de função

function somar(A, B) {
    let soma = A + B;
    console.log(`${A}+${B}=${soma}`);
}
somar(2, 5);
somar(3, 1);
somar(3.14, 0);

// Estruturas de repetição
let i;
for(i=0; i<=10; i++){
    console.log(i);
}
console.log(i);
i = 0;
while(i<=5){
    console.log(i);
    i++;
}

// Estrutura condicional
let idade = 18;
if(idade >= 18){
    console.log(`${idade} anos é maior de idade.`);
}
else{
    console.log(`${idade} anos não é maior de idade.`);
}