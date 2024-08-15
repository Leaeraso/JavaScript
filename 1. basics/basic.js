//Interpolacion

let nombreUsuario = "Leandro";
let estado = true;

console.log(`Bienvenido: 
${nombreUsuario.toUpperCase}
`);
//Variable triestado
console.log(`

${estado ? 'inline' : 'offline'}

`);

//Var:Nos deja declarar dos veces la misma variable. Omisa el scope.

var nombreUser = "Jaun";
var nombreUser = "Leandro";
console.log(nombreUser);

//Let: No nos deja declarar dos veces la misma variable, pero si sobreescribirla. No omisa el scope.

let nombreUser = "Jaun";
let nombreUser = "Leandro";
console.log(nombreUser);

//Const: Tiene las caracteristicas de let, con la ventaja de que const son variables de solo lectura.

//Array vs const. Los objetos siguen siendo mutables, solo evita la reasignacion de variable.

const frutas = [];
frutas[0] = "sandia";
console.log(frutas)

//Array (push, pop, shift, unshift)

//Empuja un nuevo elemento al final del array.
frutas.push("manzana");

//En vez de agregarlo al final lo agrega al principio.
frutas.unshift("manzana");

//Elimina el ultimo elemento del array y lo devuelve.
const frutaEliminada = frutas.pop(frutas);
console.log(frutaEliminada);

//Elimina el primer elemento de un array.
const frutaElim = frutas.shift(frutas);
console.log(frutaElim);