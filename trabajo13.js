class Cliente{
    #saldo;
    

    constructor(saldo){
        this.#saldo = saldo;
    }

    #calculardescuento(){
        return this.#saldo * 0.10;
    }

    aplicardescuento(){
        const descuento = this.#calculardescuento();
        this.#saldo -= descuento;
        console.log(` descuento aplicado ${descuento}. nuevo saldo ${this.#saldo}`)
    }

obtenersaldo(){
    console.log(`el saldo actual es: ${this.#saldo}`)
 }
}

const cliente = new Cliente (1000000);

cliente.obtenersaldo();
cliente.aplicardescuento();
cliente.obtenersaldo();