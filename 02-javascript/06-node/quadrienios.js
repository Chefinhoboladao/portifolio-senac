
// adiciona node ao programa
const prompt = require('prompt-sync')();
// lê o salário do funcionário
const salário = Number(prompt("salário: "))
// lê o tempo de trabalho do funcionário
const tempo = Number(prompt("tempo de trabalho: "))
// calcula o número de quadriênios
const quadriênios = Math.floor(tempo / 4);
// calcula o acréscimo salarial
const acréscimo = salário * 0.01 * quadriênios;
// calcula o salário final
const salárioFinal = salário + acréscimo;
// exibe o salário final
console.log(`Número de quadriênios: ${quadriênios}`);
console.log(`Salário final: R$ ${salárioFinal.toFixed(2)}`);
