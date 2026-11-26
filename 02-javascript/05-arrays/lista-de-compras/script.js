const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const respQtde = document.querySelector("#qtde");

const lista = [];

function atualizarLista() {
    respLista.innerText = lista.map((item, i) => `${i + 1}. ${item}`).join("\n");
    respQtde.innerText = `Itens na lista: ${lista.length}`;
}

// lê o campo, adiciona no início ou no final e limpa o formulário
function adicionar(noInicio) {
    const produto = frm.inProduto.value.trim();
    if (produto == "") {
        alert("Informe o produto");
        frm.inProduto.focus();
        return;
    }
    if (noInicio) {
        lista.unshift(produto);
    } else {
        lista.push(produto);
    }
    atualizarLista();
    frm.reset();
    frm.inProduto.focus();
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    adicionar(false);
});

frm.btInicio.addEventListener("click", () => adicionar(true));

frm.btRemoverInicio.addEventListener("click", () => {
    lista.shift();
    atualizarLista();
});

frm.btRemoverFinal.addEventListener("click", () => {
    lista.pop();
    atualizarLista();
});

atualizarLista();
