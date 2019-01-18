/*
Un callback es una llamada dentro de una función para que se ejecute otra función.
*/

//Callback en foreach

const ciudades = ["Daimiel","Almagro","Torralba de Calatrava","Carrión de Calatrava", "Bolaños de Calatrava", "Ciudad Real"];

ciudades.forEach(function(ciudad) {
	console.log(ciudad);
}) //Esto se conoce como "inline callback", ya que esa función no tiene nombre. Nada más que se ejecuta y ya está.

//Se puede hacer una función definida
function callback(ciudad) {
	console.log(ciudad);
}

ciudades.forEach(callback);//Aquí se hace llamada a la función que se ha implementado arriba, pero llamándola por su nombre.

//-------------------------------------------------

const paises = ["Italia","España","Francia","Mónaco","Eslovenia","Bosnia y Herzegovina","Croacia","Montenegro","Albania","Grecia","Turquía","Líbano","Siria","Israel","Egipto","Túnez","Libia","Túnez","Argelia","Marruecos","Palestina","Chipre","Malta"]

//Se agrega un nuevo país después de 2 segundos.
function nuevoPais(pais,callback) {
	setTimeout(function() {
		paises.push(pais);
		callback();
	},2000);
}

//Los países se muestran después de un segundo
function mostrarPaises() {
	setTimeout(function() {
		let html = "<ul>";
		paises.forEach(function(pais) {
			html += `<li>${pais}</li>`;
		});
		html += "</ul>";
		document.getElementById("app").innerHTML = html;
	},1000);
}

//Agregar nuevo país

nuevoPais("Reino Unido (Gibraltar)",mostrarPaises); //Tiene un retardo de 2 segundos

mostrarPaises(); //Tiene un retardo de 1 segundo

console.log(paises);

/* ---------------- EXPLICACIÓN -----------
 *
 * Hay un array de países. También, hay dos funciones. Una inserta en el HTML todos los países que hay en el array y la otra añade un nuevo país al array. El que muestra los países en el HTML tiene un timeout (un retardo) de 1 segundo. Mientras que el otro tiene 2 segundos.
 * 
 * Sin la existencia de los callbacks, lo que ocurre aquí es:
 * t = 0 -> Se carga al página
 * t = 1s -> Se pintan los elementos que tiene el array
 * t = 2s -> Se añade un nuevo elemento al array, pero no se pinta porque ya se ha ejecutado la función
 * 
 * Básicamente, el callback lo que hace es una llamada a otra función dentro de otra.
 * Por eso, cuando se invoca a nuevoPais se le pasan dos argumentos: el String del nuevo país y el nombre de la función a la que se le va a hacer un callback. NOTA: Si se pone el nombre de la función seguida de (), en realidad, lo que está haciendo es ejecutarla. No se quiere que se ejecute en esa llamada, sino que se le pase el nombre para que se llame desde dentro de la función invocada cuando se estime oportuno.
 * Esta es la llamada: 
 * nuevoPais("Reino Unido (Gibraltar)",mostrarPaises);
 * Esta es la cabecera del método:
 * function nuevoPais(pais,callback) {
 * 
 * Es decir, que pais recibe un String que es el que se va a acabar añadiendo al array; mientras que lo otro es el nombre de una función.
 * 
 * Por eso, en el momento en el que, dentro del código de esa función, figure callback(), se llaa a la función mostrarPaises.
 * 
 * */


