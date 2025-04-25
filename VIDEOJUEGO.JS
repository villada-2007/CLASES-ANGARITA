class Inventario {
    constructor() {
      this.stock = {}; // { nombre: { cantidad: number, precio: number } }
    }
  
    agregarJuego(nombre, cantidad, precio) {
      if (this.stock[nombre]) {
        this.stock[nombre].cantidad += cantidad;
        console.log(`Se agregaron ${cantidad} copias de "${nombre}". Stock actual: ${this.stock[nombre].cantidad}, Precio: $${this.stock[nombre].precio}`);
      } else {
        this.stock[nombre] = { cantidad: cantidad, precio: precio };
        console.log(`Se agregó "${nombre}" al inventario. Stock actual: ${this.stock[nombre].cantidad}, Precio: $${this.stock[nombre].precio}`);
      }
    }
  
    eliminarJuego(nombre, cantidad) {
      if (this.stock[nombre]) {
        if (cantidad >= this.stock[nombre].cantidad) {
          delete this.stock[nombre];
          console.log(`Se eliminaron todas las copias de "${nombre}" del inventario.`);
        } else {
          this.stock[nombre].cantidad -= cantidad;
          console.log(`Se eliminaron ${cantidad} copias de "${nombre}". Stock actual: ${this.stock[nombre].cantidad}, Precio: $${this.stock[nombre].precio}`);
        }
      } else {
        console.log(`El juego "${nombre}" no existe en el inventario.`);
      }
    }
  
    consultarStock(nombre) {
      if (this.stock[nombre]) {
        console.log(`Stock de "${nombre}": ${this.stock[nombre].cantidad} copias, Precio: $${this.stock[nombre].precio}`);
        return this.stock[nombre].cantidad;
      } else {
        console.log(`El juego "${nombre}" no existe en el inventario.`);
        return 0;
      }
    }
  
    listarInventario() {
      console.log("\n--- Inventario Actual ---");
      if (Object.keys(this.stock).length === 0) {
        console.log("El inventario está vacío.");
      } else {
        for (const juego in this.stock) {
          console.log(`${juego}: ${this.stock[juego].cantidad} copias, Precio: $${this.stock[juego].precio}`);
        }
      }
      console.log("-------------------------\n");
    }
  
    actualizarPrecio(nombre, nuevoPrecio) {
      if (this.stock[nombre]) {
        this.stock[nombre].precio = nuevoPrecio;
        console.log(`El precio de "${nombre}" se actualizó a $${nuevoPrecio}.`);
      } else {
        console.log(`El juego "${nombre}" no existe en el inventario.`);
      }
    }
  }
  
  class Admin {
    constructor() {
      this.inventario = new Inventario();
    }
  
    agregarNuevoJuego(nombre, cantidad, precio) {
      this.inventario.agregarJuego(nombre, cantidad, precio);
    }
  
    removerJuego(nombre, cantidad) {
      this.inventario.eliminarJuego(nombre, cantidad);
    }
  
    verStock(nombre) {
      return this.inventario.consultarStock(nombre);
    }
  
    mostrarInventarioCompleto() {
      this.inventario.listarInventario();
    }
  
    cambiarPrecio(nombre, nuevoPrecio) {
      this.inventario.actualizarPrecio(nombre, nuevoPrecio);
    }
  }
  
  // Ejemplo de uso
  const adminSistema = new Admin();
  
  adminSistema.agregarNuevoJuego("gears of war II", 5, 59.99);
  adminSistema.agregarNuevoJuego("Ghost of Tsushima", 3, 49.99);
  adminSistema.agregarNuevoJuego("The Last of Us Part II", 2, 59.99); // Agregando más copias
  
  adminSistema.mostrarInventarioCompleto();
  
  adminSistema.removerJuego("Ghost of Tsushima", 1);
  adminSistema.verStock("Ghost of Tsushima");
  adminSistema.verStock("Horizon Forbidden West");
  
  adminSistema.removerJuego("The Last of Us Part II", 10); // Intentando eliminar más de lo que hay
  
  adminSistema.cambiarPrecio("gears of war I", 64.99);
  adminSistema.verStock("gears of war I");
  
  adminSistema.mostrarInventarioCompleto();