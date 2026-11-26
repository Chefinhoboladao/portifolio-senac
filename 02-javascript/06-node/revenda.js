// adiciona pacote node ao programa 
const prompt = require('prompt-sync')();
// lê o nome do veículo
const veiculo = prompt("veículo: ");
// lê o preço do veículo
const preco = Number(prompt("preço: "));
// calcula o valor da entrada
const entrada = preco * 0.5;
// calcula o valor da parcela 
const parcela = preco * 0.5 / 12;
// exibe o nome do veículo e demais saídas
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada: R$ ${entrada.toFixed(2)}`);
console.log(`12x de: R$ ${parcela.toFixed(2)}`);
