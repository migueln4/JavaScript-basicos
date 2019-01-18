//HERENCIA
//Unos prototipos pueden heredar de otros en JavaScript
function Cuenta(nombre,saldo) {
	this.nombre = nombre;
	this.saldo = saldo;
}

Cuenta.prototype.tipoCuenta = function() {
	let tipo;
	if(this.saldo > 1000000) {
		tipo = "Platino";
	}else if(this.saldo > 1000) {
					tipo = "Oro";
	} else if (this.saldo > 500) {
					tipo = "Plata";
	} else if (this.saldo > 250) {
					tipo = "Bronce";
	} else if(this.saldo >= 0) {
					tipo = "Normal";
	} else {
					tipo = "Deudor";
	}
	return tipo;
}

Cuenta.prototype.nombreCuentaSaldo = function() {
	return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo} euros. Eres un cliente del tipo ${this.tipoCuenta()}`;
}

Cuenta.prototype.retirarSaldo = function(retiro) {
	return this.saldo -= retiro;
}

const cuenta21 = new Cuenta("Miguel",100);

//Empresa va a heredar de Cuenta
function Empresa(nombre,saldo,telefono,tipoEmpresa) {
	Cuenta.call(this,nombre,saldo);//Así es como se llama al constructor padre y se le pasan los parámetros que necesita. Pero no está heredando los prototipos que se han ido creando para Cuenta.
	this.telefono;
	this.tipoEmpresa;
}

const empresa1 = new Empresa("Pelete S.L.",150000,555666555,"Peluches");

console.log(empresa1);

Empresa.prototype = Object.create(Cuenta.prototype);//Esto es lo que hay que poner para que el objeto Empresa herede el prototipo que se desee heredar de otro objeto.

const empresa2 = new Empresa("New Girl",2000000,123456789,"Series TV");
console.log(empresa2.nombreCuentaSaldo());

//También es posible rescribir un prototipo cuando se vaya necesitando, y se hace de esta misma forma.

