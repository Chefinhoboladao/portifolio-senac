// referencia 
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Quando o formulário for enviado...
frm.addEventListener("submit", function (event) {
    event.preventDefault();

    const numero = Number(frm.inNumero.value);
    const raiz = Math.sqrt(numero);                 // Calcula a raiz quadrada do número

    
    if (Number.isInteger(raiz)) {                   // Verifica se a raiz é um número inteiro (raiz exata)

        resp.innerText = `A raiz quadrada de ${numero} é ${raiz}.`;             // Exibe o resultado

    } else {
 
        resp.innerText = `Não há raiz quadrada exata para ${numero}.`;          // Caso não exista raiz exata
    }

});
