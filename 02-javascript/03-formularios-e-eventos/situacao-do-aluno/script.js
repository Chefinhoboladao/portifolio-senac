//criar referencia ao form e aos elementos de resposta
const frm = document.querySelector("form");
const resp1=document.querySelector("h3")
const resp2=document.querySelector("h4")

//criar um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {

 e.preventDefault(); //evita reenvio do formulario

 const nome = frm.inNome.value; // obtém o nome do aluno
 const nota1 = Number(frm.inNota.value);
 const nota2 = Number(frm.inNota1.value);

 const media = (nota1 + nota2) / 2; //calcula a média

// cria as condições
    resp1.innerText = `Nome: ${nome} - Média: ${media.toFixed(1)}`;

    if (media >= 7) {
        //alterar a cor
        resp2.style.color = "green";
        resp2.innerText = `Parabéns ${nome}, você foi aprovado(a)`;
    } else if (media >= 4) {
        resp2.style.color = "orange";
        resp2.innerText = `${nome}, você está em recuperação`;
    } else {
        resp2.style.color = "red";
        resp2.innerText = `${nome}, você foi reprovado(a)`;
    }
})
