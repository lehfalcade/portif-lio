function Calcular(){
let num1 = Number(window.prompt("Digite aqui o primeiro número:"));
let num2 = Number(window.prompt("Digite aqui o segundo número:"));

    if(num1 > num2){
       alert(num1 + " é maior que " + num2)
    }else{
       alert(num2 + " é maior que " + num1)
    }
}