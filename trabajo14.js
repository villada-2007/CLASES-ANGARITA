class Producto{
    #precio;

    constructor(precio){
        this.#precio = precio;

    }

  setprecio(precio){
     if(precio<0){
        console.log("el precio no puede ser negativo")
     }else{
        this.#precio = precio;
     }
  }

   getprecio(){
   return this.#precio
   }
}

const producto = new Producto (10000000000)
console.log(producto.getprecio());


producto.setprecio(15000000);  

console.log(producto.getprecio());

producto.setprecio(50974554);

console.log(producto.getprecio());