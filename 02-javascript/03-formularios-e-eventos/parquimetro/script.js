const frm = document.querySelector("form");
const respTempo = document.querySelector("#outTempo");
const respTroco = document.querySelector("#outTroco");
 
frm.addEventListener("submit" , (e) => {
    e.preventDefault()
   
    const valor = Number(frm.inValor.value);
 
    let Tempo;
    let Troco;
 
    if (valor < 1){
        respTempo.innerText = "Saldo insuficiente";
        respTroco.innerText = "";
        return;
    }
 
    if (valor >= 1 && valor < 1.75){
 
        Tempo = 30
        Troco = valor - 1
        respTempo.innerText = "Tempo: " + Tempo + " min";
        respTroco.innerText = "Troco R$: " + Troco.toFixed(2);
    }
    else if (valor >=  1.75 && valor < 3){
        Tempo = 60
        Troco = valor - 1.75
        respTempo.innerText = "Tempo: " + Tempo + " min";
        respTroco.innerText = "Troco R$: " + Troco.toFixed(2);
 
    }
    else {
 
        Tempo = 120
        Troco = valor - 3
        respTempo.innerText = "Tempo: " + Tempo + " min";
        respTroco.innerText = "Troco R$: " + Troco.toFixed(2);
 
    }
 
       
   
})
