class Persona {
  #nombre;

  constructor(nombre) {
      this.#nombre = nombre;
  }

  caminar() {
      console.log(`${this.#nombre} está caminando.`);
  }

  get nombre() {
      return this.#nombre;
  }
}

class Empleado extends Persona {
  #salario;

  constructor(nombre, salario) {
      super(nombre);
      this.#salario = salario;
  }

  trabajar() {
      console.log(`${this.nombre} está trabajando.`);
  }

  setSalario(salario) {
      this.#salario = salario;
  }

  getSalario() {
      return this.#salario;
  }

  setEdad(edad) {
      console.log(`${this.nombre} tiene ${edad} años.`);
  }
}

class CuentaBancaria {
  #saldo;

  constructor(saldo) {
      this.#saldo = saldo;
  }

  #actualizarMonto(monto) {
      this.#saldo += monto;
  }

  depositar(monto) {
      this.#actualizarMonto(monto);
      console.log(`Se han depositado ${monto} y el saldo es ahora ${this.#saldo}.`);
  }

  retirar(monto) {
      if (monto <= this.#saldo) {
          this.#actualizarMonto(-monto);
          console.log(`Se han retirado ${monto} y el saldo es ahora de ${this.#saldo}.`);
      } else {
          console.log("Saldo insuficiente para realizar el pedido.");
      }
  }
}

class Vehiculo {
  constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
  }

  #encenderMotor() {
      console.log("El motor está encendido.");
  }

  arrancar() {
      this.#encenderMotor();
  }

  mover() {
      console.log("El vehículo se está moviendo.");
  }
}

class Coche extends Vehiculo {
  mover() {
      console.log(`El coche ${this.marca} ${this.modelo} está conduciendo.`);
  }
}

class Bicicleta extends Vehiculo {
  mover() {
      console.log(`La bicicleta ${this.marca} ${this.modelo} está pedaleando.`);
  }
}

class EmpresaTransporte {
  static totalEmpleados = 0;

  static registrarEmpleado() {
      EmpresaTransporte.totalEmpleados += 1;
      console.log(`Se ha registrado un nuevo empleado. Total de empleados: ${EmpresaTransporte.totalEmpleados}.`);
  }

  asignarVehiculo(empleado, vehiculo) {
      console.log(`${empleado.nombre} ha sido asignado a un vehículo ${vehiculo.marca} ${vehiculo.modelo}.`);
  }
}

// Ejemplo de uso
const persona = new Persona("cristian");
const empleado = new Empleado("andres", 8000000);
const cuenta = new CuentaBancaria(100000000);
const miVehiculo = new Coche("Toyota", "supramk5");
const bicicleta = new Bicicleta("venzo", "racer fight");
const empresa = new EmpresaTransporte();

// Métodos de las clases
persona.caminar();
empleado.trabajar();
empleado.setEdad(30);
cuenta.depositar(500);
cuenta.retirar(200);

// Vehículos
miVehiculo.arrancar();
miVehiculo.mover();
bicicleta.arrancar();
bicicleta.mover();

// Registrar empleado en la empresa
EmpresaTransporte.registrarEmpleado();
empresa.asignarVehiculo(empleado, miVehiculo);