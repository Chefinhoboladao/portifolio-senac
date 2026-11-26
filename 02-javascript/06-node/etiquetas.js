const prompt = require('prompt-sync')();
const produto = prompt("Produto: ");               // lê nome de produtos
const num = Number(prompt("Número de etiquetas:")) // qtd de etiquetas

for (let i = 1; i <= Math.floor(num / 2); i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`); //padEnd() completa com espaços
}


if (num % 2 == 1) {               // se a quantidade solicitada for impar
    console.log(produto);         // imprime mais uma etiqueta 
}
