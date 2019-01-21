//Esto lo que permite es crear funciones asíncronas que se puedan ejecutar junto a otras. Es parte del ES7

//Siempre se debe definir con esta sintaxis la función asíncrona, que requiere siempre una promesa:

async function obtenerClientes() {
	const clientes = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Clientes descargados del servidor.");
		}, 2000);
	});
	const error = false;
	if(!error) {
		const respuesta = await clientes;
		return respuesta;
	} else {
		await Promise.reject("Hubo un error.");
	}
}

//El await va a detener la ejecución de esta parte del código hasta que se hayan descargado todos los clientes y ya continúa ejecutando el código en esa parte.
//Básicamente, el programa detiene la ejecución hasta que se cumple la promesa.

obtenerClientes()
	.then(respuesta => console.log(respuesta))
	.catch(respuesta => console.log(respuesta));

//La lógica de utilizar el async/await es que el programa se detenga hasta que se ejecute.

//En el caso del ejemplo, el uso del boolean para manejar el error es para poder simular lo que tarda el navegador en recuperar algo.