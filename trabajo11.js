class Vehiculo{
    marca;

    #modelo
    constructor(marca,modelo){
        this.marca = marca;
        this.#modelo = modelo;
    }



#encendermotor(){
    console.log(`el motor esta encendido`);
}


 arrancar(){
    this.#encendermotor();
    console.log(`el vehiculo ${this.marca} ${this.#modelo} esta arrancando`)
 }

}

const vehiculo = new Vehiculo ("lamborghini", "huracan");

vehiculo.arrancar();