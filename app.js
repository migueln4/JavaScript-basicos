//Crear objetos literales

const cliente = {
        nombre: "Fulanito",
        saldo: 6000,
        tipoCliente: function () {
                let tipo;
                //Para poder utilizar las propiedades de un objeto en cualquiera de sus funciones, hay que utilizar el this.
                if (this.saldo > 5000) {
                        tipo = "Platino";
                } else if (this.saldo > 1000) {
                        tipo = "Oro";
                } else {
                        tipo = "Normal";
                }
                return tipo;
        }
}

console.log("Tipo de cliente: " + cliente.tipoCliente());
console.log("Saldo de " + cliente.nombre + ": " + cliente.saldo);
console.log(cliente);//Cuando se imprime ete tipo, aparece esto: {nombre: "Fulanito", saldo: 6000, tipoCliente: ƒ}
//Con __proto__: Object y constructor: f Object()

//Método alternativo (antes de ECMAScript 6)

function Cliente(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
        this.tipoCliente = function () {
                let tipo;
                //Para poder utilizar las propiedades de un objeto en cualquiera de sus funciones, hay que utilizar el this.
                if (this.saldo > 5000) {
                        tipo = "Platino";
                } else if (this.saldo > 1000) {
                        tipo = "Oro";
                } else {
                        tipo = "Normal";
                }
                return tipo;
        }
}

const cliente2 = new Cliente('Menganito', 20000);

console.log("Segundo cliente (" + cliente2.nombre + "): " + cliente.tipoCliente());
console.log("Saldo: " + cliente2.saldo);
console.log(cliente2); //Cuando se imprime esto aparece: Cliente {nombre: "Menganito", saldo: 20000, tipoCliente: ƒ}
//Con __proto__: CLiente y constructor: f Cliente(nombre,saldo)

/* La ventaja de eta segunda forma es que puedes crear tantos objetos del tipo Cliente como quieras utilizando su constructor definido.
*/

const cliente3 = new Cliente('Zutanito', 1500);
console.log(cliente3);

//OTROS CONSTRUCTORES

const nombre1 = "Miguel";
const nombre2 = new String("Miguel");

//Cómo crear una función reutilizable
const function1 = function(a,b) {
        return a+b;
}

const function2 = new Function('a','b','return 1 + 2');

console.log(function1(3,5));
console.log(function2());

//PROTOTIPOS

function Cuenta(nombre,saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
}

//Esto sirve para crear prototipos que están asociados a objetos que ya se han definido.
//Así, se pueden añadir más funciones.
Cuenta.prototype.tipoCuenta = function() {
        let tipo;
        if(this.saldo > 1000) {
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

const cuenta1 = new Cuenta("Miguel",200);
console.log(cuenta1.tipoCuenta());

const cuenta2 = new Cuenta("Plasti",50000);
console.log(cuenta2.nombreCuentaSaldo());

Cuenta.prototype.retirarSaldo = function(retiro) {
        return this.saldo -= retiro;
}

const cuenta3 = new Cuenta ("Osoposa",560);
console.log(cuenta3.nombreCuentaSaldo());
cuenta3.retirarSaldo(750);
console.log(cuenta3.nombreCuentaSaldo());

//HERENCIA

//Un prototipo puede heredar en otro.

