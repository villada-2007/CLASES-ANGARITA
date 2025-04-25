class Animal {
    hacerSonido() {
        console.log("El animal hace un sonido.");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("El perro hace guauu.");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("El gato hace miauu.");
    }
}

const animal = new Animal();
animal.hacerSonido();  

const perro = new Perro();
perro.hacerSonido();  

const gato = new Gato();
gato.hacerSonido();