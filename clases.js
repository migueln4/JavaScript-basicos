class Jugador {
	constructor(nombre,apellido,dorsal) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.dorsal = dorsal;
	}

	imprimirJugador() {
		return `${this.nombre} ${this.apellido} tiene el dorsal ${this.dorsal} y es un ${this.demarcacion()}.`
	}

	demarcacion() {
		switch(this.dorsal) {
			case 1:
				return "Portero";
			case 2:
			case 3:
			case 4:
			case 5:
				return "Defensa";
			case 6:
			case 8:
			case 10:
				return "Centrocampista";
			case 7:
			case 9:
			case 11:
				return "Delantero";
			default:
				return "Suplente";
		}
	}

	cambiarDemarcacion(nuevoNumero) {
		return this.dorsal = nuevoNumero;
	}

	static bienvenida() {
		return "Esta es una aplicación en JavaScript";
	}
}

const jugador1 = new Jugador("Raúl","González",7);

console.log(jugador1);

console.log(jugador1.demarcacion());

console.log(jugador1.imprimirJugador());

const jugador2 = new Jugador("Marcos","Llorente",18);

console.log(Jugador.bienvenida()); //Un método estático no requiere de una nueva instancia

class Titular extends Jugador {
	constructor(nombre,apellido,dorsal,nombreCamiseta,pierna) {
		super(nombre,apellido,dorsal);
		this.nombreCamiseta = nombreCamiseta;
		this.pierna = pierna;
	}
	static bienvenida() {
		return `Estoy sobrescribiendo la función`;
	}
}

const titular1 = new Titular("Fernando","Redondo",6,"Redondo","Izquierda");

console.log(titular1);

console.log(titular1.imprimirJugador());

console.log(Titular.bienvenida());