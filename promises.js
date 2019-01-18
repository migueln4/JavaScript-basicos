//Cuando se crea una Promise, hay que pasarle como argumento una función que debe recibir dos datos: resolve (es lo que se ejecuta cuando la promesa se cumpla) y reject (cuando la pomesa no se cumpla, se ejecuta esto).
const esperando = new Promise(function(resolve,reject) {

	setTimeout(function() {
		resolve("Se ejecutó la función");
	}, 5000);
});

//Tener el Resolve no es suficiente, hay que tener el .then. Eso es lo que esperará hasta que se ejecute el resolve.
esperando.then(function(mensaje) {
	console.log(mensaje);
});

//Then y resolve están juntos. Si se crea un Resolve pero no un then, nunca se llegará a ejecutar ese resolve.

const aplicarDescuento = new Promise(function(resolve,reject) {
	const descuentoActivo = false;
	if(descuentoActivo) {
		resolve("Descuento aplicado.");
	} else {
		reject("No se puede aplicar el descuento");
	}
});

console.log(aplicarDescuento);
//Cuando se hace uan llamada a la promesa tal cual, se produce un error.
aplicarDescuento.then(function(resultado) {
	console.log(resultado);
}); //En este caso, también saldría un error, ya que para los resolve hay que hacer un THEN, mientras que para los reject hay que usar un CATCH

//ESTA SERÍA LA LLAMADA PERFECTA PARA ESTE CASO:

aplicarDescuento.then(function(resultado) {
	console.log(resultado);
}).catch(function(error) {
	console.log(error);
})