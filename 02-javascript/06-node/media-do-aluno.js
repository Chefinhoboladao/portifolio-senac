const prompt = require('prompt-sync')();

const nome = prompt("Nome do aluno: ");
const nota1 = Number(prompt("Nota de Português: "))
const nota2 = Number(prompt("Nota de Matemática: "))
const nota3 = Number(prompt("Nota de Inglês: "))

const notafinal = (nota1 + nota2 + nota3) / 3


console.log(`Média: ${notafinal.toFixed(1)}`)

 if (notafinal >= 7) {
     console.log(`Parabéns ${nome}, você passou!`);
 }  else { 
     console.log(`${nome}, você não atingiu a média.`);
 }
