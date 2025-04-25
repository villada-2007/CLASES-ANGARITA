class universidad{
     static numEstudiantes = 0;

     static registarestudiantes(){
        universidad.numEstudiantes ++;
        console.log(`estudiante registrado. numero total de estudiantes ${universidad.numEstudiantes}`)

     }
}

universidad.registarestudiantes();
universidad.registarestudiantes();
universidad.registarestudiantes();