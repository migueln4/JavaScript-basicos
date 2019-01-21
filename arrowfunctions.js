//Una función normal se ve de la siguiente forma:

let aprendiendo;

aprendiendo = function() {
	console.log("Aprendiendo JavaScript.")
}

aprendiendo();

//Sin embargo, esto es mucho más sencillo, ya que la definición de la función es la siguiente:

let flechas = () => {
	console.log("Estoy aprendiendo cómo hacer funciones de flecha.")
}
flechas(); //Aquí hago la llamada a la función que he definido en forma de flecha más arriba.

//Cuando se trata de uan función de una única línea (como la que se ha hecho anteriormente) no requiere llaves y sigue funcionando correctamente.

let sinllaves = () => console.log("Esta función no tiene los símbolos {}");

sinllaves();

//También, se puede hacer de forma que retorne un valor

let sinllavesunvalor = () => "Esta función devuelve este valor";

console.log(sinllavesunvalor());

//Al igual que devolver valores, también puede devolver objetos completos:

let devolverobjeto = () => ({devolverobjeto: "Estudiando JavaScript"}); //Esto lo que haces es devolver directamente un objeto tal cual. Por eso se coloca el objeto (marcado con {}) entre paréntesis

console.log(devolverobjeto());

//A una función de flecha también se le pueden enviar parámetros de entrada, y se hace de la siguiente forma:

let funcionconentrada = (lenguaje) => console.log(`Aprendiendo ${lenguaje}`);
funcionconentrada("ES6");
//De hecho, cuando se le pasa únicamente un parámetro, el paréntesis es opcional. Solo es obligatorio cuando no se le pasan parámetros, que deben aparecer vacíos, o cuando se le pasan dos o más parámetros. Con uno solo, la sintaxis es la siguiente:

let funcionunparametro = lenguaje => console.log(`Programando en ${lenguaje}`);

funcionunparametro("JavaScript sin Angular");

//Con dos parámetros siempre lleva el paréntesis

let funciondosparametros = (tecnologia1,tecnologia2) => console.log(`Aprendiendo ${tecnologia1} y ${tecnologia2}`);

funciondosparametros("JavaScript","ES6");

//Dentro de lo que se le puede pasar por parámetro a una función también admite un array y usar callbacks dentro de él.

const elementos = ["Cómics","Libros","Revistas"];

const letrasPorElemento = elementos.map(function(elemento) {
	return elemento.length;
}); //Aquí hay un callback inline dentro de la función. Esta es la forma tradicional
console.log(letrasPorElemento);

//La sintaxis es diferente cuando se trata de las funciones de flecha

const letrasPorElementoElegido = elementos.map( elemento => //Ojo, que hay que tener en cuenta que cuando se trata de un único parámetro de entrada, no hacen falta paréntesis.
	 elemento.length); //Esto, en realidad, sin comentarios, se queda en una sola línea. No hacen falta las llaves proque lo único que está habiendo es devolver un valor. Ya se ha visto que, cuando retorne un valor, no hace falta ni poner el return.
console.log(letrasPorElementoElegido);

//Esta sería la forma clásica de hacer un forEach sin la función de flecha:
elementos.forEach(function(elemento) {
	console.log(elemento);
}) 

//Esta sería la forma de hacerlo con uan función de flecha:
elementos.forEach(producto => console.log(producto));

