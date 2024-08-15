//Burbujeo y la captura: Son dos mecanismos que describen lo que sucede cuando dos controladres del mismo tipo de evento se activan en un elemento.

const padre = document.querySelector('.border-primary')
const hijo = document.querySelector('.border-secondary')
const nieto = document.querySelector('.border-danger')

padre.addEventListener(
  'click',
  () => {
    console.log('me diste click papa')
  },
  true
)

hijo.addEventListener(
  'click',
  () => {
    console.log('me diste click hijo')
  },
  true
)

nieto.addEventListener(
  'click',
  () => {
    console.log('me diste click nieto')
  },
  true
)

//Fase de burbuja(bubbling): Se progaga desde el elemento hijo hasta el padre.

//Fase de captura: El inverso al bubbling, se propaga desde el elemento padre hasta el elemento hijo.

//stopPropagation: Evita la propagacion adicional del evento actual en las fases de captura y de bubbling.

const cajas = document.querySelectorAll('.border')

cajas.forEach((caja) => {
  caja.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('me diste click')
  })
})

//preventDefault: Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.

const formulario = document.querySelector('form')

formulario.addEventListener('submit', (e) => {
  console.log('me diste click')
  e.preventDefault()
})

const ancla = document.querySelector('a')

ancla.addEventListener('click', (e) => {
  console.log('me diste click')
  e.preventDefault()
})

//Delegacion de eventos: Es basicamente un patron para manejar eventos de manera eficiente. En lugar de agregar un detector de eventos a cada elemento, se agrega a un elemento principal, se debe llamar a un objetivo en particular con "target". Asi evitamos la propagacion.

const container = document.querySelector('.container')

//matches: Comprueba si el Element seria seleccionable por el selector CSS especificado en la cadena; en caso contrario, retorna false.

container.addEventListener('click', (e) => {
  console.log(e.target.id)

  if (e.target.id === 'padre') {
    console.log('diste click al padre')
  }

  console.log(e.target.matches('.border-secondary'))

  if (e.target.matches('.border-secondary')) {
    console.log('diste click al hijo')
  }
  dataset
  console.log(e.target.dataset.div)
})

// Expresiones regulares: Son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas.

//patron/flags

//notacion literal
const regExp = /[A-Za-z0-9]/i
//notacion de objeto
const regExpObjeto = new RegExp('leaeraso', 'i')

//test: Ejecuta una busqueda de una ocurrencia entre una expresion regular y una cadena especificada.

console.log(regExp.test('leaeraso8'))

//Validacion de formularios: Se usa para validar los datos de un formulario en el lado del cliente. Se utilizan para garantizar que los datos que se envian coincidan con los requisitos del formulario.

//Hay 2 tipos de validacion de formularios:
//1. Validacion incorporada: Utiliza caracteristicas de validacion de HTML5. Tiene un mejor rendimiento pero no es tan personalizable como con JS.

//2. Validacion con JavaScript: Se codifica con JS y es completamente personalizable.

const formulario1 = document.querySelector('#formulario')
const userName = document.querySelector('input[name="userName"]')
const userEmail = document.querySelector('input[name="userEmail"]')
// const userName = document.getElementById('userName')
// const userEmail = document.getElementById('userEmail')

const regUserName = /^[A-Za-z\s]+$/
const regUserEmail =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,15})$/

formulario1.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log(userName.value)
  console.log(userEmail.value)

  if (!regUserName.test(userName.value)) {
    console.log('formato no valido')
    return
  }

  if (!regUserEmail.test(userEmail.value)) {
    console.log('formato no valido')
    return
  }
  console.log('formulario enviado')
})

//formData: La interfaz proporciona una manera sencilla de construir un conjunto de parejas clave/valor. Estan destinados para el envio de los datos del formulario.

//formData.get(): Devuelve el primer valor asociado con una clave dada en un objeto formData.

//formData.entries(): Devuelve un iterador que permite recorrer todas las parejas clave/valor contenidas en el objeto.

//formData.values(): Devuelve un iterador que permite recorrer todos los valores contenidos en el objeto.

const formulario2 = document.getElementById('formulario')

formulario2.addEventListener('submit', (e) => {
  e.preventDefault()

  const inputs = new FormData(formulario)
  for (let input of inputs) {
    console.log(input)
  }

  console.log(inputs.get('userName'))
  console.log(inputs.get('userEmail'))
})
