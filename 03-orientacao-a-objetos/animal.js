class Animal {
    emitirSom() {
        console.log("Som genérico de animal...");
    }
}

class Cachorro extends Animal {
    // Sobrescrita (Polimorfismo)
    emitirSom() {
        console.log("Au Au!");
    }
}

class CalculadoraMatematica {
    // Metodo Estatico
    static somar(a, b) {
        return a + b;
    }
}
const novoAnimal = new Animal();
const Rex = new Cachorro();

novoAnimal.emitirSom();
Rex.emitirSom();

console.log(CalculadoraMatematica.somar(5,5)); //Não precisa do "new"
