class Vehiculo {
    constructor(peso, velocidadMaxima) {
        this.peso = peso;
        this.velocidadMaxima = velocidadMaxima;
    }

    mover() {
        console.log("El vehículo se está moviendo.");
    }
}

class Carro extends Vehiculo {
    constructor(peso, velocidadMaxima, modelo) {
        super(peso, velocidadMaxima);
        this.modelo = modelo;
    }

    mover() {
        console.log(`El carro ${this.modelo} se está moviendo a ${this.velocidadMaxima} km/h.`);
    }
}

class Bicicleta extends Vehiculo {
    constructor(peso, velocidadMaxima, tipo) {
        super(peso, velocidadMaxima);
        this.tipo = tipo;
    }

    mover() {
        console.log(`La bicicleta ${this.tipo} se está moviendo a ${this.velocidadMaxima} km/h.`);
    }
}

const vehiculo = new Vehiculo(1500, 120);
vehiculo.mover();  

const carro = new Carro(1450, 380, "pagani");
carro.mover();  

const bicicleta = new Bicicleta(45, 190, "de lujo");
bicicleta.mover(); 