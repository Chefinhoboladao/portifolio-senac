const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);
    
    const peso = masculino == true ?  22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)    //operador ternario if else mais pratico


    // let peso;        //declara a variavel chamada peso
    // if (masculino == true){
    //         peso = 22 * Math.pow(altura, 2);      //Math.pow eleva ao quadrado
    // } else {
    //     peso = 21 * Math.pow(altura, 2);
    // }

    resp.innerText = `${nome}: seu peso ideal é ${peso.toFixed(3)} kg`;

})

frm.addEventListener("reset", () =>   {
    resp.innerText = "";  //limpa o conteudo do campo do elemento h3
})
