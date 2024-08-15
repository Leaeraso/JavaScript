const carrito = [];

const fruta = prompt("Que fruta desea comprar? ");

carrito.push(fruta);

while(confirm("Desea agregar otro elemento al carrito? ")) {
    const fruta = prompt("Que fruta desea comprar? ");
    carrito.push(fruta);
}

console.log("Compraste: ")
for(const fruta of carrito) {
    console.log(fruta);
}

