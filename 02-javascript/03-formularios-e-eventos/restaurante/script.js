// Criar referencia ao form e ao h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//Criar um ouvinte de evento quando clicar no botao submit
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value); // obtem o valor do quilo
    const consumo = Number(frm.inConsumo.value); // obtem o valor do consumo
    const valor = (quilo / 1000) * consumo; // calcula o valor a pagar

    resp.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`; // exibe o valor a pagar com 2 casas decimais

    e.preventDefault(); // evitar envio do form

})
