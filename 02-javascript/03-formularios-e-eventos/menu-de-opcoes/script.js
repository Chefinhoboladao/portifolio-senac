        const frm = document.querySelector("form")
        const resp = document.querySelector("h3")

        frm.addEventListener("submit", (e) => {
        e.preventDefault();
        let opcaoMenu = Number(frm.inOpcao.value);

                switch (opcaoMenu){
            case 1:                
                resp.innerText = "Você escolheu o sistema Contas a Pagar";
                break;
            case 2:                
                resp.innerText = "Você escolheu o sistema Contas a Receber";
                break;
            case 3:                
                resp.innerText = "Você escolheu o sistema Controle de Estoque";
                break;
            case 4:                
                resp.innerText = "Você escolheu o sistema Relatório";
                break;
            case 5:                
                resp.innerText = "Você escolheu o sistema Backup";
                break;
            default:
                resp.innerText = "Essa opção é inválida";
        }
        });
