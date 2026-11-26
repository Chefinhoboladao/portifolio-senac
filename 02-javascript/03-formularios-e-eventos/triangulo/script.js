const frm = document.querySelector("form");
const resp1 = document.querySelector("#outSimNao");
const resp2 = document.querySelector("#outTipo");
 
frm.addEventListener("submit" , (e) => {
    e.preventDefault()
 
    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);
 
    if ( ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
 
        resp1.innerText = "É um triângulo";
        if( ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
            resp2.innerText = " TRIÂNGULO EQUILÁTERO"
        }
        else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
            resp2.innerText = "TRIÂNGULO ISÓSCELES"
 
        }
        else {
            resp2.innerText = "TRIÂNGULO ESCALENO"
        }
       
    }
    else {
       
        resp1.innerText = "Não é um triângulo";
        resp2.innerText = "";
        frm.inLadoA.focus(); //focu() coloca o cursor no campo do lado A
        return;
    }
 
})
