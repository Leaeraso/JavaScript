const sandia = '🍉'

function printPlatano() {
  console.log('🍌')
}

class Fruta {
  constructor(nombre) {
    this.nombre = nombre
  }
}

export { sandia, printPlatano, Fruta }

// Export default

//  const sandia = "🍉";
//  export default sandia;

export default function () {
  console.log('🍌')
}
