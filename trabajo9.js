class empleado{
    constructor(nombre,puesto){
        this.nombre = nombre;
        this.puesto = puesto;
    }

    trabajar(){
        console.log(`${this.nombre} esta trabajando como ${this.puesto}`)
    }
}

class gerente extends empleado{
    constructor(nombre,puesto,ciudad){
        super(nombre,puesto)
        this.ciudad = ciudad;
    }
    trabajar(){
        console.log(`${this.nombre} esta supervisando la ciudad de ${this.ciudad} como gerente`)
    }
}


const empleado1 = new empleado( "cristian villada", "desarollador de software.");
const gerente1 = new gerente ("juan rojas", "gestora contable", "armenia" )

empleado1.trabajar();
gerente1.trabajar();
