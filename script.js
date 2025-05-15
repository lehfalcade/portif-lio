let num1;
let num2;
let resultado;

num1 = Number(window.prompt("Digite aqui o primeiro número:"));
num2 = Number(window.prompt("Digite o segundo número:"));

resultado = num1 + num2;

parOuImpar = resultado % 2;

if(parOuImpar == 0){
    alert("O número " + resultado + " é par");
} else {
    alert("O número " + resultado + " é ímpar");
}

/*if(resultado > 10){
    alert("o número " + resultado + " é maior do que 10");
} else {
    alert("o número " + resultado + " é menor ou igual a que 10");
}*/

