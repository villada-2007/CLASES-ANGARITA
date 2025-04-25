class Escuela{
    static numEstudiantes = 0;
}


class Estudiante{
    constructor(nombre){
        this.nombre = nombre;

        Escuela.numEstudiantes +=1;

    }
}

const estudiante1 = new Estudiante("Juan");
console.log(Escuela.numEstudiantes);  

const estudiante2 = new Estudiante("Maria");
console.log(Escuela.numEstudiantes);  

const estudiante3 = new Estudiante("Carlos");
console.log(Escuela.numEstudiantes);  