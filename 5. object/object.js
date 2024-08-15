const gato = {
  nombre: 'Panita',
  duerme: true,
  edad: 1,
  enemigos: ['agua', 'perros'],

  comer(alimento) {
    console.log(`
        ${this.nombre} esta comiendo ${alimento}
        `)
  },
  listarEnemigos() {
    this.enemigos.forEach((item) => console.log(item))
  },
  get nombreMayus() {
    return this.nombre.toUpperCase()
  },
  set agregarEnemigo(nuevoEnemigo) {
    this.enemigos.push(nuevoEnemigo)
  },
}

//Para no tener que validar explicitamente cada entrada se pone un '?'

console.log(gato.otros.favorito?.comida.frio)

console.log(gato.nombre)
console.log(gato['nombre'])
console.log(gato.duerme)
console.log(gato['enemigos'][0])
console.log(gato.enemigos[0])

//CRUD

gato.color = 'negro'

gato.edad = 5

delete gato.duerme

console.log(gato)

//HasOwnProperty

console.log(gato.hasOwnProperty('nombre'))

if (console.log(gato.hasOwnProperty('nombre'))) {
  gato.nombre = 'panichan'
}

gato.comer('pez')

gato.listarEnemigos()

//for-in

for (let propiedad in gato) {
  console.log(gato[propiedad])
}

//Object.values(): Devuelve un array con las propiedades enumerables de un objeto.

console.log(Object.values(gato))

Object.values(gato).forEach((item) => console.log(item))

//Object.entries(): Devuelve un array de pares clave/valor de las propiedades enumerables de un objeto

console.log(Object.entries(gato))

//Object.key(): Devuelve un array con las claves enumerables de un objeto.

console.log(Object.keys(gato))

//Object.getOwnPropertyNames(): devuelve un array con todas las propiedades de un objeto, ya sean enumerables o no.

console.log(Object.getOwnPropertyNames(gato))

//Destructuring Objects: Permite desempacar valores de array o propiedades de objetos en distintas variables.

//Alias y default
const {
  nombre: nombreGato = 'Jhon Doe',
  duerme: duermeGato,
  edad = 'No tiene edad',
} = gato

console.log(nombreGato, duermeGato, edad)

const [enemigoUno, enemigoDos] = enemigosArray

console.log(enemigoDos)

//Getter y Setter

console.log(gato.nombreMayus)

gato.agregarEnemigo = 'ratones'
console.log(gato.enemigos)

//Por valor: Cuando asignamos valores primitivos, el valor asignado es una copia.
//Por referencia: Cuando asignamos valores no primitivos, copia la referencia a traves de la cual se accede al valor.

let a = { nombre: 'Leandro' }

let b = a

a.nombre = 'Jhon'

console.log(b)
