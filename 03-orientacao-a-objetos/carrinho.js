// Classe Utilitária Validador
class Validador {
    // Método estático: pertence à classe, não necessita de new
    static validarPreco(preco) {
        return typeof preco === "number" && preco > 0;
    }
}

// Classe Base Produto
class Produto {
    // Atributos Privados (#) - Encapsulamento
    #id;
    #nome;
    #preco;

    constructor(id, nome, preco) {
        // Uso do validador estático
        if (!Validador.validarPreco(preco)) {
            throw new Error(`[Erro]: O preço do produto "${nome}" deve ser um número maior que zero.`);
        }

        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
    }

    // Getters para permitir acesso seguro aos atributos privados
    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get preco() {
        return this.#preco;
    }

    // Método base que será sobrescrito nas classes filhas (Polimorfismo)
    calcularDesconto() {
        return 0;   // Sem desconto padrão
    }

    // Método para obter o valor final
    obterPrecoFinal() {
        return this.#preco - this.calcularDesconto();
    }
}

// Classes Filhas (Herança e Polimorfismo)
class ProdutoFisico extends Produto {
    constructor(id, nome, preco, peso) {
        super(id, nome, preco);     // Executa o constructor da classe pai
        this.peso = peso;   // Peso em kg
    }

    calcularFrete() {
        return this.peso * 5;   // R$ 5.00 por quilo
    }

    // Polimorfismo: Sobrescrita do método calcularDesconto() (5% de desconto)
    calcularDesconto() {
        return this.preco * 0.05;
    }

    // Polimorfismo: Sobrescrita do método obterPrecoFinal() considerando o frete
    obterPrecoFinal() {
        return super.obterPrecoFinal() + this.calcularFrete();
    }
}

// Classe filha ProdutoDigital
class ProdutoDigital extends Produto {
    constructor(id, nome, preco, tamanhoArquivo) {
        super(id, nome, preco);
        this.tamanhoArquivo = tamanhoArquivo;   // Tamanho em MB
    }

    // Polimorfismo: Sobrescrita de calcularDesconto() (15% de desconto por não ter frete)
    calcularDesconto() {
        return this.preco * 0.15;
    }
}

// Classe Carrinho
class Carrinho {
    #produtos = [];     // Lista privada de produtos

    adicionarProduto(produto) {
        // Garantir que os produtos válidos sejam adicionados
        if (!(produto instanceof Produto)) {
            console.log(`Apenas instâncias de Produto podem ser adicionadas.`);
            return;
        }

        this.#produtos.push(produto);
        console.log(`Adicionado: "${produto.nome}" ao carrinho.`);
    }

    removerProduto(id) {
        const indice = this.#produtos.findIndex((p) => p.id === id);
        if (indice !== -1) {
            const [removido] = this.#produtos.splice(indice, 1);
            console.log(`Removido: "${removido.nome}" do carrinho.`);
        } else {
            console.log(`Produto com ID ${id} não encontrado.`);
        }
    }

    // Calcula o total acumulando o resultado do polimorfismo de cada produto
    calcularTotal() {
        return this.#produtos.reduce((total, p) => total + p.obterPrecoFinal(), 0);
    }

    // Exibir o relatório da compra
    exibirResumo() {
        console.log("\n==================== RESUMO DO CARRINHO ====================");

        if (this.#produtos.length === 0) {
            console.log("O carrinho está vazio.");
            console.log("===========================================================");
            return;
        }

        this.#produtos.forEach((p) => {
            const desconto = p.calcularDesconto();
            const frete = p instanceof ProdutoFisico ? p.calcularFrete() : 0;

            console.log(
                `- [${p.constructor.name}] ${p.nome}` +
                `  Preço Base: R$${p.preco.toFixed(2)} | ` +
                `Desconto: R$${desconto.toFixed(2)} | ` +
                `Frete: R$${frete.toFixed(2)} | ` +
                `Subtotal: R$${p.obterPrecoFinal().toFixed(2)}`
            );
        });

        console.log("---------------------------------------------------------");
        console.log(`TOTAL A PAGAR: R$${this.calcularTotal().toFixed(2)}`);
        console.log("=========================================================\n")
    }  

}

// TESTES
try {
    // Criando carrinho
    const meuCarrinho = new Carrinho();

    // Criando produtos fisicos e digitais
    const livro = new ProdutoFisico(1, "Livro: Entendendo Algoritmos", 80.0, 0.5);  // 0.5 kg
    const notebook = new ProdutoFisico(2, "Notebook Gamer", 4500.0, 2.5);           // 2.5 kg
    const ebook = new ProdutoDigital(3, "Ebook POO Avançado", 40.0, 12);    // 12 MB
    const curso = new ProdutoDigital(4, "Curso de Javascript", 200.0, 500); // 500 MB

    console.log("--- 1. Adicionando Produtos ---");
    meuCarrinho.adicionarProduto(livro);
    meuCarrinho.adicionarProduto(notebook);
    meuCarrinho.adicionarProduto(ebook);
    meuCarrinho.adicionarProduto(curso);

    // Exibir o primeiro resumo
    meuCarrinho.exibirResumo();

    console.log("--- 2. Removendo um Produto ---");
    meuCarrinho.removerProduto(2);  // Notebook (ID 2)

    // Exibir o resumo atualizado
    meuCarrinho.exibirResumo();

    console.log("--- 3. Testando Validação Estática com preço inválido ---");
    const produtoInvalido = new ProdutoFisico(5, "Produto Com Erro", -10, 1);

} catch (erro) {
    console.error(`Capturado: ${erro.message}`);
}
