class CuentaBancaria {
    #saldo;

    constructor(inicial) {
        this.#saldo = inicial >= 0 ? inicial : 0;
    }

    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`Has depositado $${monto}. Saldo actual: $${this.#saldo}`);
        } else {
            console.log("El monto a depositar debe ser mayor que 0.");
        }
    }

    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            console.log(`Has retirado $${monto}. Saldo actual: $${this.#saldo}`);
        } else if (monto > this.#saldo) {
            console.log("No tienes suficiente saldo para realizar este retiro.");
        } else {
            console.log("El monto a retirar debe ser mayor que 0.");
        }
    }

    obtenerSaldo() {
        console.log(`Saldo actual: $${this.#saldo}`);
    }
}

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(1000000);
cuenta.retirar(54600);
cuenta.obtenerSaldo();