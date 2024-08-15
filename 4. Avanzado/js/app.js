//Callback: Es una funcion que se pasa a otra funcion como un argumento, que luego se invoca dentro de la funcion externa para completar algun tipo de rutina o accion.

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
]

const findPostById = (id, callback) => {
  const post = posts.find((item) => item.id === id)

  if (post) {
    callback(null, post)
  } else {
    callback('no se encontro el post con id ' + id)
  }
}
// Callback Hell
findPostById(1, (error, post) => {
  if (error) console.log(error)
  console.log(post)

  findPostById(2, (error, post) => {
    if (error) console.log(error)
    console.log(post)

    findPostById(3, (error, post) => {
      if (error) console.log(error)
      console.log(post)

      findPostById(4, (error, post) => {
        if (error) console.log(error)
        console.log(post)
      })
    })
  })
})

//Promesas: Una promise es un objeto que representa la terminacion o el fracaso de una operacion asincrona.

const findPostById1 = (id) => {
  const post = posts.find((item) => item.id === id)

  return new Promise((resolve, reject) => {
    if (post) {
      resolve(post)
    } else {
      reject('no se econtro id ' + id)
    }
  })
}

const findPostById2 = (id) =>
  new Promise((resolve, reject) => {
    const post = posts.find((item) => item.id === id)
    if (post) {
      resolve(post)
    } else {
      reject('no se encontro id ' + id)
    }
  })

findPostById(1)
  .then((post) => {
    console.log(post)
    return findPostById(2)
  })
  .then((post) => {
    console.log(post)
    return findPostById(3)
  })
  .then((post) => {
    console.log(post)
    return findPostById(4)
  })
  .catch((e) => console.log(e))

//Async: Es una funcion que define una funcion asincrona, la cual devuelve una AsyncFunction.

//Await: Operador usado para esperar una Promise. Solo puede ser usado dentro de una funcion AsyncFunction.

const findPostById3 = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find((item) => item.id === id)
      if (post) {
        resolve(post)
      } else {
        reject('No se encontro el id ' + id)
      }
    }, 2000)
  })

const buscar = async () => {
  try {
    const resPosts = await Promise.all([findPostById(1), findPostById(2)])
    console.log(resPosts)
    const postUno = await findPostById(1)
    const postDos = await findPostById(2)
    console.log(postUno.title, postDos.title)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('se ejecuta si o si')
  }
}

buscar()

console.log('fin del codigo')

//Fetch API: Proporciona una interfaz para recuperar recursos. El metodo "fetch()" toma un argumento obligatorio, la ruta de acceso al argumento que desea recuperar. Devuelve una Promise que resuelve en Response a esa peticion, sea correcta o no.

const url = 'https://jsonplaceholder.typicode.com/posts/'

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e))
  .finally(() => console.log('finalizo'))

const findPostById5 = async (id) => {
  try {
    const res = await fetch(url + id)
    const post = await res.json()
    console.log(post)
  } catch (error) {
    console.log(error)
  }
}

findPostById(24)

//API(Application Programming Interface): Son constructores disponibles en los lenguajes de programacion que permiten a los desarrolladores crear funcionalidades complejas de una manera simple. Estas abstraen el codigo complejo para proveer una sintaxis simple de usar.

//APIs de navegador: estan integradas en el navegador web.
//APIs de terceros: no estan incluidas por defecto en le navegador y el codigo se obtiene desde algun lugar de la web.

//API REST(Representational State Transfer): Cuando se necesita comunicar el frontend con el backend, podemos construir nuestra propia API para que las aplicaciones se comuniquen de manera efectiva. Para que la comuniacion no sea un desplote se utiliza REST, que es un estandar para la construccion de APIs. Por lo tanto API REST es una forma de entregar recursos para su utilizacion estandarizado y basado en arquitectura REST.

//RESTFul: REST es el concepto, RESTFul es la implementacion y al crear un RESTFul creamos una API, la cual es un conjunto de funciones/procedimientos que sera utilizada por otro software.

//Ajax: Es un termino que describe un nuevo modo de utilizar conjuntamente varias tecnologias existentes, tales como HTML, CSS, JS, DOM, JSON y XMLHttpRequest. Combinando estas tecnologias se logran paginas web mas rapidas y con mejor respuesta de usuario.

//Fetch API: Proporciona una interfaz JS para hacer peticiones HTTP asi como sus respuestas, tambien provee un metodo para obtener recursos de forma asincrona por la red.

//HTTP(Hypertext Transfer Protocol): Nombre de un protocolo el cual nos permite realizar una peticion de datos y recursos. HTTP define un conjunto de metodos de peticion para indicar la accion que se desea realizar.

//JSON(JavaScript Object Notation): Formato basado en texto estandar para representar datos estructurados en la sintaxis de objetos de JS. Comunmente utilizado pra transmitir datos en aplicationes web.

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((res) => res.json())
  .then((data) => console.log(data))

//POO: Es un paradigma de la programación en el que se crean objetos para la manipulación de datos y donde cada objeto ofrece una funcionalidad especial. JavaScript es un objeto basado en propotipos. Se implementa a través de funciones constructoras, al instanciar un objeto su funcionalidad esta vinculada a través de una cadena de referencia llamada "cadena de prototipos".

function Persona(nombre) {
  this.nombre = nombre

  this.saludar = function () {
    return `${this.nombre} dice hola!`
  }

  this.greeting = function () {
    return `${this.nombre} says hi!`
  }
}

Persona.prototype.greeting = function () {
  return `${this.nombre} says hi!`
}

const jorgito = new Persona('Juanito')
console.log(jorgito)
console.log(jorgito.saludar())
const patricio = new Persona('Pedrito')
console.log(patricio)
console.log(patricio.greeting())

// Prototipos de Objetos: Los prototipos son un mecanismo mediante el cual los objetos en JS heredan características entre sí.

//Class: Proveen una sintaxis mas clara y simple para crear objetos y lidiar con la herencia.

class Persona {
  constructor(nombre) {
    this.nombre = nombre
  }

  get getnombre() {
    return this.nombre
  }

  set setNombre(nombre) {
    this.nombre = nombre
  }

  static probarSaludo(nombre) {
    return `${nombre} probando saludo.`
  }

  saludar() {
    return `${this.nombre} dice hola!`
  }
}

console.log(Persona.probarSaludo('Leandro'))

const juanito = new Persona('Juanito')
console.log(juanito)
const pedrito = new Persona('Pedrito')
console.log(pedrito.saludar())

//Getter y Setter: El encapsulamiento encapsula las propiedades de un objeto para que no sean accesibles de manera pública y si se desean acceder externamente se deban usar los getters/setters.

//Static: Define un metodo estático para una clase. Los metodos estáticos son llamados sin instanciar su clase y no pueden ser llamados mediante una instancia de clase, usualmente son usados para crear funciones de utilidad para una aplicación.

//Heredar: La palabra "extends" se usa en declaraciones de clases o expresiones de clase para crear una clase hija.

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  saludar() {
    return `${this.nombre} dice hola!`
  }

  static probarSaludo(nombre) {
    return `${nombre} probando saludo`
  }
}

class Estudiante extends Persona {
  #notas = []

  constructor(nombre, edad) {
    super(nombre, edad)
  }

  set setNotas(nota) {
    this.#notas.push(nota)
  }

  get getNotas() {
    return this.#notas
  }
}

const emilio = new Estudiante('Juanito', 14)
emilio.setNotas = 7
emilio.setNotas = 5
emilio.setNotas = 4
console.log(emilio.getNotas)(
  //Private Class Fields: Las propiedades de las clases son publicas de forma determinada y se pueden examinar o modificar fuera de la clase. Sin embargo, existe una propuesta experimental para permitir la deficion de campos de clase privados utilizando un #prefijo hash.

  //JS Módulos: Proporcionan mecanismos para dividir código JS en módulos separados, que se pueden importar cuando sea necesario.

  //IIFE(Immediately Invoked Function Expression): Las expresiones de función ejecutadas inmediatamente son funciones que se ejecutan tan pronto como se definen. Es un patrón de diseño también conocido cómo función autoejectable.

  function () {
    const fruta = '🍑'
    console.log(fruta)
  }
)()

//Export & Import: Para acceder a las funciones de módulo primero hay que exportarlas, deben ser elementos de nivel superior, esto se conoce como "Exportación con nombre".

import { sandia } from './frutas.js'
import { printPlatano } from './frutas.js'

import { sandia as melon, printPlatano, Fruta } from './frutas.js'

console.log(sandia)
printPlatano()
const cereza = new Fruta('🍒')
console.log(cereza)

//Export default: Solo se permite una exportación por módulo. Debe ser a nivel raiz y no va entre llaves cuando se importa.

import melon from './frutas.js'
console.log(melon)

import printBanana from './frutas.js'
printBanana()

//Local Storage: Permite guardar datos en el navegador, almacenándolos entre las diferentes sesiones(los datos almacenados no tienen expiración). Las claves y valores son siempre strings.

localStorage.setItem('platano', '🍌')
localStorage.setItem('sandia', '🍉')

if (localStorage.getItem('platano')) {
  const banana = localStorage.getItem('platano')
  console.log(banana)
}

localStorage.removeItem('platano')

localStorage.clear()

//JSON.stringify(): Convierte un objeto a valor de JS en una cadena de texto JSON.

//JSON.parse(): Analiza una cadena de texto como JSON.

const frutas = [
  {
    nombre: '🍌',
    color: 'amarillo',
  },
  {
    nombre: '🍒',
    color: 'rojo',
  },
  {
    nombre: '🍊',
    color: 'naranja',
  },
]

localStorage.setItem('frutas', JSON.stringify(frutas))

if (localStorage.getItem('frutas')) {
  const LocalFrutas = JSON.parse(localStorage.getItem('frutas'))
  console.log(LocalFrutas)
}
