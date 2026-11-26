const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit" , (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);

    let numDivisores = 0;

    



    // for (let i = 1; i <= num; i++) {        // percorre todos os possiveis divisores de num
    //     if(num % i == 0){                   // verifica se i (1,2,3....) é diviosor do num 
    //         numDivisores++;                 // se é, incrementa contador
    //     }
    // }
    // if (numDivisores == 2) {                      // se possuiu dois divisores é primo
    //     resp.innerText = `${num} é primo.`;
    // } else {
    //     resp.innerText = `${num} não é primo.`;
    // }



        let temDivisor = 0;                          // declara e inicializa a variavel tipo flag
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            temDivisor = 1;
            break;
        }
    }
 
    if (num > 1 && !temDivisor) {                  // se numero é maior que 1 e não possui divisor
        resp.innerText = `${num} É primo`;
    } else {
        resp.innerText = `${num} Não é primo`;
    }



})
