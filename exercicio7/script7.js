//acessa a parte texto que vai ser modificada no html
let mostraHTML = document.getElementById("mostraHTML");

let numero = 0;

function aleatorio() {
    numero = parseInt(Math.random() * 101)
    mostraHTML.innerHTML += `<p>Pensei no número ${numero}!</p>`;   
}

function zerador() {
    numero = 0;
    mostraHTML.innerHTML = `<p>Pensei no número ${numero}!</p>`;
}