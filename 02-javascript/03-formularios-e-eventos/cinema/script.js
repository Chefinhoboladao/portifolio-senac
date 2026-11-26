//criar referencia ao form e aos elementos h3 e h4 
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//criar um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit" , (e) => {
    const titulo = frm.inTitulo.value; //capturar o valor do campo
    const duracao = Number(frm.inDuracao.value); //capturar o valor do campo e converter para número

    // converter a duração para horas e minutos
    const horas = Math.floor(duracao / 60); //arredondar para baixo o resultado da divisão
    const minutos = duracao % 60; //obter o resto da divisão

    // exibir os resultados
    resp1.innerText = titulo;
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

    e.preventDefault(); //evitar envio do form


})
