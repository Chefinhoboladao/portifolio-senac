const prompt = require('prompt-sync')();

const valor = Number(prompt("valor em R$:"));
const num = Number(prompt("Número de Parcelas:"));

const valorparcela = Math.floor(valor / num);                               //calcula valor sem decimais 
const valorfinal = valorparcela + (valor % num);                             //calcula parcela final
 
for (let i = 1; i < num; i++) {
    console.log(`${i}ª parcela: R$ ${valorparcela.toFixed(2)}`);
}

console.log(`${num}ª parcela: R$ ${valorfinal.toFixed(2)}`);            // ultima parcela
