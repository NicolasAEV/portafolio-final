import { carritos } from "./object.js";
import productos from "./crud.js";
//variables

let div = document.querySelector('.alerta')
let alert = document.createElement('div');
//buscar por id
let idProducto = (document.querySelector('.idProducto'));
//eliminar por id
let delet = document.querySelector('#delete')
//actualizar por id
let update = document.querySelector('#update')
//crear producto
let add = document.querySelector('#add')
//listeners


//funciones
//funcion mostrar todos los productos
function mostrarTabla() {
    let card = document.querySelector('#productos')
    card.innerHTML = "";
    carritos.forEach(juego => {
        card.innerHTML += `                      
        <div class="card-body">
            <div class="row ">
                <div class="col-2">
                    <img src="${juego.imagen}" alt=""class="img-fluid rounded-2">
                </div>
                <div class="col-4">
                    <p>Nombre:${juego.nombre} </p>
                    <p>Id: ${juego.id} </p>
                    <p>Stock: ${juego.stock}</p>
                </div>
                <div class="col-6">
                    <p>Categoria: ${juego.categoria} </p>
                    <p>Descripcion: ${juego.descripcion}</p>
                    <p></p>
                </div>
                
            </div>
            
        </div>
        `
    })
}
//funcion encontrar un producto
function buscarProducto(id) {
    let producto = new productos(id);
    return producto.getProducto();
}
//al cambiar algun id en el formulario rellenara los compos con el
idProducto.addEventListener("change", (e) => {
    e.preventDefault();
    let id = idProducto.value;
    let producto = buscarProducto(id);
    if (producto) {
        alert.classList.add('alert', 'alert-success');
        alert.innerText = " el producto fue encontrado"
        timeRemove();
        document.querySelector('.nombreProducto').value = producto.nombre;
        document.querySelector('.precioProducto').value = producto.precio;
        document.querySelector('.stockProducto').value = producto.stock;
        document.querySelector('.descripcionProducto').value = producto.descripcion;
        document.querySelector('.categoriaProducto').value = producto.categoria;
        document.querySelector('.srcProducto').value = producto.imagen;

    } else {
        alert.classList.add('alert', 'alert-danger');
        alert.innerText = " el producto no fue encontrado "
        timeRemove();
        document.querySelector('.nombreProducto').value = " ";
        document.querySelector('.precioProducto').value = 0;
        document.querySelector('.stockProducto').value = 0;
        document.querySelector('.descripcionProducto').value = " ";
        document.querySelector('.categoriaProducto').value = "";
        document.querySelector('.srcProducto').value = "";

    }
})
//funcion add producto
add.addEventListener('click', (e) => {
    e.preventDefault();

    let id = idProducto.value;
    let nombre = document.querySelector('.nombreProducto').value;
    let precio = document.querySelector('.precioProducto').value;
    let stock = document.querySelector('.stockProducto').value;
    let descripcion = document.querySelector('.descripcionProducto').value;
    let categoria = document.querySelector('.categoriaProducto').value;
    let imagen = document.querySelector('.srcProducto').value;
    let cantidad = 1;
    if(id == "" ||nombre == "" ||precio == "" ||stock == "" ||descripcion == "" ||categoria == "" ||imagen == ""){
        alert.classList.add('alert', 'alert-danger');
        alert.innerText = "todos los campos deben se rellenados"
        timeRemove();
    }else{
        let producto = new productos(id, cantidad, nombre, descripcion, precio, imagen, categoria, stock)
        // id , cantidad = 1,nombre = '',descripcion = '',precio = 9999999,imagen = '',categoria = "",stock = 0
        if (!producto.getProducto()) {
            producto.addProducto();
            console.log(producto)
            alert.classList.add('alert', 'alert-success');
            alert.innerText = " el producto fue creado exitosamente"
            timeRemove();
            mostrarTabla(producto.getProductos());
        } else {
            alert.classList.add('alert', 'alert-danger');
            alert.innerText = " no se puede crear el producto"
            timeRemove();
        }
    }
 
})
//funcion actualizar producto
update.addEventListener('click', (e) => {
    e.preventDefault();
    let id = idProducto.value;
    let nombre = document.querySelector('.nombreProducto').value;
    let precio = document.querySelector('.precioProducto').value;
    let stock = document.querySelector('.stockProducto').value;
    let descripcion = document.querySelector('.descripcionProducto').value;
    let categoria = document.querySelector('.categoriaProducto').value;
    let imagen = document.querySelector('.srcProducto').value;
    let cantidad = 1;
    console.log(nombre)
    if(id == "" ||nombre == "" ||precio == "" ||stock == "" ||descripcion == "" ||categoria == "" ||imagen == ""){
        alert.classList.add('alert', 'alert-danger');
        alert.innerText = "todos los campos deben se rellenados"
        timeRemove();
    }else{
       
        let producto = new productos(id, cantidad, nombre, descripcion, precio, imagen, categoria, stock)
        // id , cantidad = 1,nombre = '',descripcion = '',precio = 9999999,imagen = '',categoria = "",stock = 0
        if (producto.getProducto()) {
            producto.updateProducto();
            alert.classList.add('alert', 'alert-success');
            alert.innerText = " el producto fue actualizado exitosamente"
            timeRemove();
            mostrarTabla(producto.getProductos());
        } else {
            alert.classList.add('alert', 'alert-danger');
            alert.innerText = " no se encuentra el producto"
            timeRemove();
        }
    }
  
})

//funcion eliminar un producto
delet.addEventListener("click", (event) => {
    event.preventDefault();
    let id = parseInt(document.querySelector('.idProducto').value);
    let producto = new productos(id);
    if (producto.getProducto()) {
        producto.deleteProducto();
        alert.classList.add('alert', 'alert-success');
        alert.innerText = " el producto fue eliminado exitosamente"
        location.reload();
        timeRemove();
    } else {
        alert.classList.add('alert', 'alert-danger');
        alert.innerText = " el producto que intenta eliminar no existe"
        timeRemove();
    }
})
//funcion main nos rellena el local storage y muestra los productos
function main() {
    let carritos = JSON.parse(localStorage.getItem("carritos"));
    if (!carritos) {
        carritos = productos;
        localStorage.setItem("carritos", JSON.stringify(carritos))
    }
    mostrarTabla(carritos);
}

main();
//esta funcion se encarga de eliminar el mensaje de alerta 
function timeRemove() {
    div.appendChild(alert)
    setTimeout(() => {
        div.remove(alert) //aca se eliminara la alerta
    }, 10000);
}
