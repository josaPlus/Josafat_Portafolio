let listaProductos = document.querySelector('#listaProductos');


function obtieneProductos(){
    //Promise o promesa (funcion que no se sabe cuando se va a ejecutar)
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(productosObtenidos => {
        console.log(productosObtenidos);

        productosObtenidos.forEach(producto => {
            console.log("producto: ", producto.title)
            listaProductos.innerHTML += `
            <div class="col-12 col-md-3">
                <div class="card" >
                    <img src="${producto.image}" class="imagenProducto card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">${producto.description.slice(0,100)}</p>
                        <p class="card-text text-danger" >$${producto.price}</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
            `;
        })
    })
}

obtieneProductos();