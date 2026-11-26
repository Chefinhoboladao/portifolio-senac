// Criar referencia ao form h3 e h4
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Criar um ouvinte de evento quando clicar no botao submit
frm.addEventListener("submit", (e) => {
    const remedio = frm.inRemedio.value; //nome do remedio
    const preco = Number(frm.inPreco.value); // preco do remdio
    const valor = Math.floor(preco * 2); // calcula o valor a pagar

    resp1.innerText = `Promoção ${remedio}`;
    resp2.innerText = `Leve 2 por apenas: R$ ${valor.toFixed(2)}`;
    

    e.preventDefault(); //evitar envio do form

})
