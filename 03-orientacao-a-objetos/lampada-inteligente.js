class LampadaInteligente{
    // campo privado para brilho (0 a 100)
    #brilho = 0;
    #ligada = false;
    #cor = "#FFF";
    
    constructor(brilhoInicial = 0) {
        // usa o setter para validar o valor inicial
        this.brilho = brilhoInicial;

    }

    // Getter para expor o valor do brilho
    get brilho() {
        return this.#brilho;
    }

// setter com validação de limites
set brilho(valor) {
    if (valor < 0) valor = 0;
    if (valor > 100) valor = 100;
    this.#brilho = valor;
}

    ligar() {
        this.#ligada = true;
        console.log("Lampada ligada.");
    }
    desligar() {
        this.#ligada = false;
        console.log("Lampada Desligada.");
    }

    ajustarCor(cor) {
        this.#cor = cor;
        console.log(`Cor ajustada para ${cor}`);
    }

    // metodo auxiliar para exibir o status
    estado() {
        return `Ligada: ${this.#ligada}, Brilho: ${this.#brilho}, Cor: ${this.#cor}`;
    }

}

// Exemplos

const lampada = new LampadaInteligente(50);

console.log(lampada.brilho)             // 50
lampada.brilho = 120;
console.log(lampada.brilho);            // 100
lampada.brilho = -10;
console.log(lampada.brilho);

lampada.ligar();
lampada.ajustarCor("#ffaa00");

console.log(lampada.estado());          // Ligada true, Brilho: 0 Cor: #ffaa00
lampada.desligar();

console.log(lampada.estado());
