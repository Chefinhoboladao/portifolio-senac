class Livro {
    constructor(titulo, autor, paginas, paginasLidas = 0) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.paginasLidas = paginasLidas;
    }

    // metodo para atualizar paginas lidas
    ler(paginas) {
        this.paginasLidas += paginas;

        //Impedir que o número de paginas lidas seja maior que o total do livro
        if (this.paginasLidas > this.paginas) {
            this.paginasLidas = this.paginas;
        }
        console.log(`Você leu: +${paginas} paginas de "${this.titulo}".`);
        console.log(`Progresso: ${this.paginasLidas}/${this.paginas}`);
    }
}

const livro = new Livro("Dom Casmurro", "Machado de Assis", 256);
livro.ler(100);
livro.ler(200);   // não passa do total de páginas
