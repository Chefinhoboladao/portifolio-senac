// Abordagem procedural (dados e funções separados)
// Os dados ficam em um objeto simples (estrutura)

const contaProcedural = { titular: "Ana", saldo: 100};

// A função é isolada e recebe os dados como argumento
function depositar(conta, valor) {
    conta.saldo += valor;
}

// Execução: passa o dado para a função
depositar(contaProcedural, 50);
console.log(`Procedural: ${contaProcedural.titular} tem R$${contaProcedural.saldo}`);
//---------------------------------------------------------------------------------------

// abordagem orientada a objetos (dados e comportamentos unidos)
// A classe (molde) encapsula o estado (atributos) e o comportamento (metodos)
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {            // metodo
        this.saldo += valor;
    }
}

// Execução deve instanciar o objeto e chamar seu método

const contaPOO = new ContaBancaria("Ana", 100);
contaPOO.depositar(50);

console.log(`POO: ${contaPOO.titular} tem ${contaPOO.saldo}`);
