//cria a referencia ao form e ao elemento h3
const frm = document.querySelector ("form")
const resp = document.querySelector("h3")

// ouvinte de eventos
frm.addEventListener("submit" , (e) => {
    e.preventDefault();   //evita o envio do form

    //obter e converter o conteudo do campo inHoraBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value);
    let horaFranca = horaBrasil + 5;   //calcula o horario da frança
    if(horaFranca >= 24) horaFranca = horaFranca - 24;
    // exibir a resposta
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)} hs`;

})
