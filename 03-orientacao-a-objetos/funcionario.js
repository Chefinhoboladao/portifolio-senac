class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    exibirDados() {
        console.log(`Nome: ${this.nome} Salário: ${this.salario}`);
    }

}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);  // Chama o constructor da classe Funcionario
        this.departamento = departamento;
    }

    // Metodo especifico 
    gerenciarEquipe() {
        console.log(`${this.nome} está gerenciando o depto: ${this.departamento}`);
    }

}

const funcionarioComum = new Funcionario("Ana", 5000);
const funcionarioGerente = new Gerente("Carlos", 15000, "TI");

funcionarioComum.exibirDados();
funcionarioGerente.exibirDados();
funcionarioGerente.gerenciarEquipe();
