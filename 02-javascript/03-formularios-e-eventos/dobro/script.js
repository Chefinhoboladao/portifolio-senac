
const frm = document.querySelector ("form"); 
const resp = document.querySelector("h3");

 
frm.addEventListener("submit" , (e) => {
    e.preventDefault(); // impede o envio do form
    const numero = frm.inNome.value;  

    resp.innerText = ` Resposta ${numero * 2}`; 


})
