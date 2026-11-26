const frm = document.querySelector("form");
const resp = document.querySelector("h3");
 
frm.addEventListener ("submit" , (e) => {
    e.preventDefault();
 
    const numero = Number(frm.inNumero.value);
 
   // if (numero % 2 == 0 ) {
      //  resp.innerText = "O número é par "
   // }
   // else {
    //    resp.innerText = "O número é ímpar"
    //}
    let parouimpar = (numero % 2 == 0) ? "O número é par" : "O número é ímpar";
    resp.innerText = parouimpar
 
})
