const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fruta = frm.inFruta.value;
    const num = Number(frm.inNumero.value);

    // 1. Começamos com uma string vazia
    let resposta = "";

    // 2. O laço repete o número de vezes que o usuário digitou
    for (let i = 1; i <= num; i++) {
        resposta = resposta + fruta + " * ";
    }

    // 3. Mostra na tela o resultado final
    resp.innerText = resposta;
});
