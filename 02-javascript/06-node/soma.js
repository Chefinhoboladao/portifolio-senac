const prompt = require('prompt-sync')(); //adiciona pacote para entrada de dados 
const num1 = Number(prompt("Primeiro número: ")); //solicita o primeiro número e converte para número
const num2 = Number(prompt("Segundo número: ")); //solicita o segundo número e converte para número
const soma = num1 + num2; //realiza a soma dos dois números

console.log(`Soma é ${soma}`); //exibe o resultado da soma no console
