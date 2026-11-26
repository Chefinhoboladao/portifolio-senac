class ContaBancaria{
    #saldo; //Campo Privado
    #senha;
 
    constructor(titular, saldoInicial, senha) {
        this.titular = titular;
        this.#saldo = saldoInicial;
        this.#senha = senha;
 
    }
    //Getter para leitura controlada
    get saldo() {
        return `R$ ${this.#saldo.toFixed(2)}`
    }
 
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor
            console.log(`Depositado: R$ ${valor}`);
        }
    }
 
    sacar(valor, senhaInformada) {
        if(senhaInformada !== this.#senha){
            console.log("Senha incorreta");
            return;
        }
 
        if(valor > this.#saldo) {
            console.log("Saldo insuficiente")
            return;
        }
       
        this.#saldo -= valor
        console.log(`Saque de R$: ${valor} realizado`)
       
           
       
       
   
    }
 
 
}

// Exemplo de uso
const conta = new ContaBancaria("Ana", 500, "1234");
conta.depositar(250);
conta.sacar(100, "0000");   // senha errada
conta.sacar(1000, "1234");  // saldo insuficiente
conta.sacar(100, "1234");
console.log(conta.saldo);
