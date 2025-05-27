var nota1 = Number(window.prompt("Digite aqui a primeira nota:"));
var nota2 = Number(window.prompt("Digite a segunda nota:"));
var nota3 = Number(window.prompt("Digite aqui a terceira nota:"))

let total = (nota1 + nota2 + nota3) / 3;


alert("Média final: " + total)

if (total => 60){
    alert("Você atingiu a média. " + total);
    alert("Aprovado!")
} else {
    pontosfaltando = 60 - resultado
        alert ("Reprovado, faltaram: " + pontosfaltando + " pontos.");
}

