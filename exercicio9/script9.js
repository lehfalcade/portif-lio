let mostraHTML = document.getElementById("mostraHTML");
function estacao(){
    let mes = prompt("Digite um mês do ano: ").toUpperCase();

    console.log(mes);
    if(mes == "JANEIRO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é verão! </p>`
    }
    if(mes == "FEVEREIRO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é verão! </p>`
    }
    if(mes == "MARÇO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é outono! </p>`
    }
    if(mes == "ABRIL"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é outono! </p>`
    }
    if(mes == "MAIO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é outono! </p>`
    }
    if(mes == "JUNHO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é inverno! </p>`
    }
    if(mes == "JULHO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é inverno! </p>`
    }
    if(mes == "AGOSTO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é inverno! </p>`
    }
    if(mes == "SETEMBRO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é primavera! </p>`
    }
    if(mes == "OUTUBRO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é primavera! </p>`
    }
    if(mes == "NOVEMBRO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é primavera! </p>`
    }
    if(mes == "DEZEMBRO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é verão! </p>`
    }
}