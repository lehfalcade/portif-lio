function contar(){
    let mostraHTML = document.getElementById("mostraHTML");

    let contador = 1;

    while (contador <= 10) {
        mostraHTML.innerHTML += `${contador} &#128073;`;
        contador++;
    }

    mostraHTML.innerHTML += `${contador} &#127937;`;
}

parOuImpar = resultado % 2;
if(parOuImpar == 0){
    <mark></mark>
}