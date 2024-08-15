//El DOM (Document Object Model) es una interfaz de programacion  para documentos HTML, facilita la reprsentacion estructurada del documento y define como los programas acceden para mofidicar su estrcutura, estilo y contenido.

console.log(document)

console.log(document.head)
console.log(document.title)

//getElementById: Devuelve una referencia al elemento por su ID.

// console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById('tituloWeb').textContent)

//Se utiliza cuando el script se coloca en el head
document.addEventListener('DOMContentLoaded', () => {
  console.log(document.getElementById('tituloWeb'))
  console.log(document.getElementById('tituloWeb').textContent)
})

//Defer: Otra opcion es el atributo "defer", el cual indica al navegador que no espere al script, en lugar de ello debe cargar el HTML, construir el DOM.

//querySelector: Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.

console.log(document.querySelector('h1'))

console.log(document.querySelectorAll('.text-danger'))

console.log(document.querySelectorAll('.container .text-danger'))

const h1 = document.getElementById('tituloWeb')

console.log(h1.textContent)
h1.textContent = 'Nuevo texto desde JavaScript'
h1.style.backgroundColor = 'red'
h1.style.color = '#fff'

//addEventListener: Registra un controlador de evento para un tipo de evento especifico en un elemento.

//appendChild: Inserta un nodo asi como el ultimo nodo hijo de este elemento.

//hasAttribute: Verifica si el elemento tiene o no algun atributo.

//Eventos: En JS, la interaccion con el usuario se consigue mediante la captura de los eventos que este produce. Un evento es una accion del usuario.

const boton = document.querySelector('.btn-primary')

boton.addEventListener('click', () => {
  console.log('me diste click')
  h1.textContent = 'Texto desde JS'
  h1.style.color = 'blue'
})

const lista = document.getElementById('lista')

const arrayPaises = ['Peru', 'Bolivia', 'Colombia']

arrayPaises.forEach((pais) => {
  const li = document.createElement('li')
  li.textContent = pais
  lista.appendChild(li)
})

//createElement
const li = document.createElement('li')
li.textContent = 'li desde js'
console.log(li)

//AppendChild
lista.appendChild(li)

//innerHTML

arrayPaises.forEach((pais) => {
  lista.innerHTML += `<li>${pais}</li>`
})

//Se genera un reflow: Ocurre cuando un navegador debe reprocresar o redibujar parte o la totalidad de una pagina web.

//Fragment: representa un objeto de documento que no tiene padre. Se genera de forma paralela y no hay reflow.
const fragment = document.createDocumentFragment()

arrayPaises.forEach((pais) => {
  const li = document.createElement('li')
  li.textContent = pais
  fragment.appendChild(li)
})

lista.appendChild(fragment)

arrayPaises.forEach((pais) => {
  const newNode = document.createElement('newNode')
  newNode.textContent = pais

  //firstChild
  const refNode = fragment.firstChild

  //insertBefore
  fragment.insertBefore(newNode, refNode)
})

lista.appendChild(fragment)

//Programacion funcional: En la programacion funcional el codigo esta estrcuturado en pequeñas funciones que juntas construyen programas mas complejos.

//Un paradigma de programacion es una forma de ver y crear codigo de programacion para resolver un problema.

//Paradigma imperativo: Se dicta la serie de pasos a seguir a traves del control de flujo.

//Paradigma declarativo: Se escribe un codigo que realiza una accion pero no se especifica como hacerlo.

//Array Methods:

//map: Itera sobre cada elemento de un array y devuelve un nuevo array que contiene los resultados de llamar a "callback" en cada elemento.

const frutas = ['🍊', '🍎', '🍓']

const newArray = frutas.map((fruta) => fruta)

console.log(newArray)

const users = [
  { uid: 1, name: 'Jhon', age: 23 },
  { uid: 2, name: 'Leandro', age: 20 },
  { uid: 3, name: 'Any', age: 31 },
]

const names = users.map((user) => user.name)

console.log(names)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numberForTWo = numbers.map((number) => number * 2)

console.log(numberForTWo)

//filter: Crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada.

const older = users.filter((user) => user.age > 30)

console.log(older)

const userFiltered = users.filter((user) => user.uid !== 3)

console.log(userFiltered)

//find: Devuelve el valor del primer elemento del array que cumple la funcion de prueba proporcionada.

const lean = users.find((user) => user.uid === 2)

console.log(lean)

//some: Comprueba si al menos un elemento del array cumple con la condicion implementada.

const existe = users.some((user) => user.uid === 2)

console.log(existe)

//findIndex: Devueve el indice del primer elemento del array que cumpla con la funcion de prueba proporcionada.

const indice = users.findIndex((user) => user.uid === 3)

console.log(indice)

//slice: Devuelve una copia de una parte del array dentro de un nuevo array empezando por el incio hasta el fin, no incluido.

const arr = ['Cat', 'Dog', 'Tiger', 'Zebra']

const arrayNuevo = arr.slice(1, 3)

console.log(arrayNuevo)

//concat: Se usa para unir dos o mas arrays, devuelve un nuevo array.

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

const array3 = array1.concat(array2)

console.log(array3)

//Spread syntax: Permite a un elemento iterable (cadena o array) ser exoandido en lugares donde son esperados.

const array4 = [...array1, '-', ...array2]

console.log(array3)

//reduce: Ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un unico valor.

const numeros = [1, 2, 3, 4, 5]

const sumaNums = numeros.reduce((acc, currentValue) => acc + currentValue)

console.log(sumaNums)

const arrayNumb = [
  [0, 1],
  [2, 3],
  [4, 5],
]

const soloNum = arrayNumb.reduce((acc, currentV) => acc.concat(currentV))

console.log(soloNum)

const arrayPlano = [].concat(...arrayNumb)

console.log(arrayPlano)

const planoArr = arrayNumb.flat()

console.log(planoArr)

//split: Divide un objeto de tipo String en un array, mediante un separador.

const cadenaMeses = 'Jan, Feb, Mar, Apr, May, Jun, Aug, Sep, Oct, Nov, Dec'

const arrayMeses = cadenaMeses.split(',')

console.log(arrayMeses)

//join: Une todos los elementos de un array en una cadena y la devuelve.

const nuevoTxt = arrayMeses.join('-')

console.log(nuevoTxt)
