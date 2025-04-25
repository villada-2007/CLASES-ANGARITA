class empleado{
    constructor(nombre,salario){
        this.#nombre = nombre;
        this.#salario = salario;
    }
    #nombre;
    #salario;

    get nombre(){
        return this.#nombre
    }
  
    setnombre(nombre){
        this.#nombre = nombre;
    }
     
     get salario(){
        return this.#salario
     }

    setsalario(salario){
        if(salario >= 0){
         this.#salario = salario;
        }else{
            console.log("el salario debe ser un valor positivo")
        }
    }

     trabajar (){
        console.log(`${this.#nombre} esta trabajando`)
     }

}
const empleado1= new empleado("cristian villada")
empleado1.setsalario( 2000000);
