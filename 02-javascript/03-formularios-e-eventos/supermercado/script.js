    const frm = document.querySelector("form");
    const resp1 = document.querySelector("h3");
    const resp2 = document.querySelector("h4");
    const resp3 = document.querySelector("h2");

//Criar um ouvinte de evento quando clicar no botao submit
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value; //nome do produto
    const preco = Number(frm.inPreco.value); // preço do produto
    const promo = (preco * 3); // calcula o valor a pagar
    const economia = (preco * 0.5); // calcula o valor do terceiro produto
    const valor = promo - economia; // calcula o valor a pagar com a promoção
// exibir os resultados

    resp1.innerText = `Promoção ${produto}`;
    resp2.innerText = `Leve 3 por apenas: R$ ${valor.toFixed(2)}`;
    resp3.innerText = `O terceiro produto sai por apenas: R$ ${economia.toFixed(2)}`;

    e.preventDefault(); //evitar envio do form

})
