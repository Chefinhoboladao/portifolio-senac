const frm = document.querySelector("form");
const resp = document.querySelector("h3");
 
frm.addEventListener("submit" , (e) =>{
    e.preventDefault()
    const velocidadepermitida = Number(frm.inVelPermitida.value);
 
    const velocidadecondutor = Number(frm.inVelCondutor.value);
 
    const limiteLeve = velocidadepermitida * 1.2;     // até 20% acima

    if (velocidadecondutor <= velocidadepermitida){
        resp.innerText = "Sem multa"
    }
    else if (velocidadecondutor <= limiteLeve){
        resp.innerText = "Multa leve, atenção"
    }
    else {
        resp.innerText = "Multa grave"
    }
})
