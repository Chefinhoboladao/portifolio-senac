// criar referencias do form e os elementos de resposta (h3)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// criar um ouvinte de evento pro submit 
frm.addEventListener("submit", (e) => {
    // obter os valores dos campos de entrada 
    const veiculo = frm.inVeiculo.value; 
    const preco = Number(frm.inPreco.value);

const entrada = preco * 0.50;  // calculo valor da entrada
const parcelas = (preco * 0.50) / 12; // calculo valor das parcelas

//exibir a resposta
resp1.innerText = `Promoção ${veiculo}`;
resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;
resp3.innerText = `+12x de R$ ${parcelas.toFixed(2)}`;

e.preventDefault(); // evitar envio do form 

})
