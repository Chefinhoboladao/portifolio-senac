const frm = document.querySelector("form");
const resp = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    const Preco = Number(frm.inPreco.value); // obtem o valor do Preco
    const Tempo = Number(frm.inTempo.value); // obtem o valor do Tempo
    const Valor = Preco * Math.ceil(Tempo / 15); // calcula o valor a pagar

    resp.innerText = `Valor a pagar: R$ ${Valor.toFixed(2)}`; // exibe o valor a pagar com 2 casas decimais

    e.preventDefault(); // evitar envio do form

})
