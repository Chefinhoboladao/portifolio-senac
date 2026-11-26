const prompt = require('prompt-sync')(); //adiciona pacote para entrada de dados
// Peso da ração em kg
 const peso = Number(prompt("Peso da ração (kg): "));
// Quantidade que o animal consome por dia em gramas
 const consumo = Number(prompt("Quantidade que o animal consome (g): "));
// Calcula quanto tempo a ração irá durar
 const pesoEmGramas = peso * 1000;
 const dias = Math.floor(pesoEmGramas / consumo);
 // sobra
 const sobra = pesoEmGramas % consumo;

 console.log(`Quantos dias irá durar a ração: ${dias}`);
 console.log(`Sobra: ${sobra} gramas`);
