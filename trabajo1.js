class persona {
    constructor (nombre){
        this.nombre = nombre;
    }
      caminar (){
          console.log(`${this.nombre} esta caminando`)
      }
}

 const persona1 = new persona("cristian");
 persona1. caminar();