const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const footer = document.getElementById('footer');
const templateFooter = document.getElementById('templateFooter');
const fragment = document.createDocumentFragment();

document.addEventListener('click', e => {
    // console.log(e.target.matches('.card .btn-outline-primary'));
    if(e.target.matches('.card .btn-outline-primary')){
        agregarAlCarrito(e);
    }
    // console.log(e.target.matches('.list-group-item .btn-success'));
    if(e.target.matches('#carrito .list-group-item .btn-success')){
        btnAumentar(e);
    }
    // console.log(e.target.matches('.list-group-item .btn-danger'));
    if(e.target.matches('#carrito .list-group-item .btn-danger')){
        btnDisminuir(e);
    }
})

let carritoObjeto = [];

const agregarAlCarrito = (e) => {
    // console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    }

    // console.log(producto);

    const index = carritoObjeto.findIndex((item) => item.id === producto.id);

    if(index === -1){
        carritoObjeto.push(producto);
    } else {
        carritoObjeto[index].cantidad++;
        // carritoObjeto[index].precio = carritoObjeto[index].cantidad * producto.precio;
    }

    console.log(carritoObjeto);

    pintarCarrito();
}

const pintarCarrito = () => {

    carrito.textContent = "";

    carritoObjeto.forEach(item => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".text-white .lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad;

        //Se crea dinamicamente un data-id para cada fruta agregada.
        clone.querySelector('.btn-danger').dataset.id = item.id;
        clone.querySelector('.btn-success').dataset.id = item.id; 


        fragment.appendChild(clone);
    })

    carrito.appendChild(fragment);

    pintarCompra();
}

const pintarCompra = () => {
    // console.log('pintar footer');
    footer.textContent  = "";

    const total = carritoObjeto.reduce((acc, currentV) => acc + currentV.cantidad * currentV.precio, 0);
    const cloneFooter = templateFooter.content.cloneNode(true);
    cloneFooter.querySelector('span').textContent = total;
    if(total === 0){
        return
    } 


    footer.appendChild(cloneFooter);
};

const btnAumentar = e => {
    // console.log('me clickeaste', e.target.dataset.id);

    carritoObjeto = carritoObjeto.map(item => {
        if(item.id === e.target.dataset.id){
            item.cantidad++;
        }
        return item;
    });

    pintarCarrito();
};

const btnDisminuir = (e) => {
    // console.log('me clickeaste');
    carritoObjeto = carritoObjeto.filter(item => {
        if(item.id === e.target.dataset.id){
            if(item.cantidad > 0){
                item.cantidad--;
                if(item.cantidad === 0) return;
                return item;
            }
        } else {
            return item;
        }
    });

    pintarCarrito();
}


