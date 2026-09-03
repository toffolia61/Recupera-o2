let ligado = false;

const status = document.getElementById("status");
const fundo = document.getElementById("fundo");
const inputCor = document.getElementById("cor");

function trocarCor(){
    fundo.style.backgroundColor = cor.value;

}

function reset(){
    fundo.style.backgroundColor = "#ffffff"; 
}

function ligaDesliga(){
    if(ligado===false){
        status.innerText = "Status: Ligado"
        status.style.backgroundColor = "#55C386"
        ligado = true;
        cor.disabled = false;
    }
    else if(ligado===true){
        ligado = false;
        status.innerText = "Status: Desligado"
        cor.disabled = true;
        status.style.backgroundColor = "#D9503D"

    }
}