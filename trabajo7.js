class coche{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    
      

    #encendermotor(){
        console.log(`el motor del ${this.marca} esta encendido`)
    }

      conducir(){
        console.log("preparandose para conducir")
        this.#encendermotor();
        console.log(`el ${this.marca} ${this.modelo} esta en movimiento`)
    }
  
}


const micoche = new coche ("pagani", "2026");

micoche.conducir();





































