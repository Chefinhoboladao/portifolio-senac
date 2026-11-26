const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit" , (e) => {
    e.preventDefault();
 
    const num = Number(frm.inNumero.value);                     //obtem numero informado
    let estrelas = "";                                          //variavel que ira concatenar as estrelas

    for (let i = 1; i <= num; i++) {                            //laço de repetição de 1 até num
        if (i % 2 == 1) {
            estrelas = estrelas + "*";                          // na posição impar do i: *
        }  else {
            estrelas = estrelas + "_";                          // na posição par: _
        }
    }
    resp.innerText = estrelas;                                  //exibe as estrelas


})
