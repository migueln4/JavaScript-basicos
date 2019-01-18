//Esta es una nueva forma de crear objetos

const CuentaBancaria = {
	imprimirSaldo: function() {
		return `${this.nombre}, tu saldo es de ${this.saldo}`;
	},
	retirarSaldo: function(retiro) {
		return this.saldo -= retiro;
	}
}

//Aquí se crea el objeto:
const cuentaBancaria1 = Object.create(CuentaBancaria);
cuentaBancaria1.nombre = "Ash Ketchum";
cuentaBancaria1.saldo = 1000;

console.log(cuentaBancaria1.imprimirSaldo());
cuentaBancaria1.retirarSaldo(500);

console.log(cuentaBancaria1.imprimirSaldo());