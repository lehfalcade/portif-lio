let pontosfaltando
var nome = Number(window.prompt("Digite aqui o seu nome:"))
var nota1 = Number(window.prompt("Digite aqui a primeira nota:"));
var nota2 = Number(window.prompt("Digite aqui a segunda nota:"));
var nota3 = Number(window.prompt("Digite aqui a terceira nota:"));

let total = (nota1 + nota2 + nota3) / 3;

alert("Média final: " + total);

if (total => 6.0){
    alert("Parabéns " + nome + " você atingiu a média com: " + total);
    alert("Aprovado!");
} else {
    pontosfaltando = 6.0 - total;
        alert ("Reprovado " + nome + " você atingiu: " + total);
        alert ("Confira esse link para conseguir aprender mais: " + "https://pt.khanacademy.org/")
}


