//imports
import { carritos } from "./object.js";
import { usuarios } from './users.js';

//variables
const urlParams = new URLSearchParams(location.search);
const id = urlParams.get("id");
const con = document.querySelector('#productos');
const vaciarCarrito = document.querySelector('#limpiar')
const cart = document.querySelector('#carrito')
let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
// Ahora puedes utilizar el ID en el código de la otra página
//funcion find 

let juego = carritos.find(juego => juego.id == id);
let existe = false;
//listeners
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  mostrarCarrito();
  mostrarPrecio();
 
})
//limpiar carrito
// const clean = document.querySelector('#limpiar')
vaciarCarrito.addEventListener('click', (e) => {
  e.preventDefault();
  shoppingCart = [];
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  mostrarCarrito();
  mostrarPrecio();

})
// storage.clear();

//funciones 
if(id != null || id != undefined){
//agregar a carrito
shoppingCart.forEach((product) => {
  if (product.id === juego.id) {
    existe = true;
    product.cantidad++;
    mostrarCarrito();
   mostrarPrecio();
   
  }
});
if (!existe) {
  shoppingCart.push(juego)
  mostrarCarrito();
  mostrarPrecio();

}
}else{
  mostrarCarrito();
}

// Mostrar en carrito
function mostrarCarrito() {
  con.innerHTML = '';
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart !== null || shoppingCart !== undefined) {
      con.innerHTML += ` 
      <div class="card-body">
      <div class="d-flex justify-content-between ">
      <div class="d-flex flex-row align-items-center">
      <div>
        <img
          src="${shoppingCart[i].imagen}"
          class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
      </div>
      <div class="ms-3">
        <h5>${shoppingCart[i].nombre}</h5>
        <p class="small mb-0">${shoppingCart[i].categoria}</p>
      </div>
    </div>
    <div class="d-flex flex-row align-items-center">
      <div style="width: 100px;">
        <h7 class="fw-normal mb-12  mb-lg-0 text-center">cantidad</h7>
        <div>
        <button class="fw-normal mb-12 mb-lg-0 text-center"  style="width : 30px; border-radius: 10px; outline: none !important;" onclick="restar('${shoppingCart[i].id}')">-</button>
        <input class="fw-normal mb-12 mb-lg-0 text-center" style="width:30px" value="${shoppingCart[i].cantidad}" min="0" max="10"></input>
        <button class="fw-normal mb-12 mb-lg-0 text-center"   style="width : 30px; border-radius: 10px; outline: none;" onclick="sumar('${shoppingCart[i].id}')">+</button>
        </div>
      </div>
      <div style="width: 80px;">
        <h5 class="mb-0" class="precio">$${shoppingCart[i].precio}</h5>
      </div>
      <a data-id="${shoppingCart[i].id}" class="eliminar"><i class="fas fa-trash-alt" onclick='eliminar(${shoppingCart[i].id})'></i></a>
    </div>
    </div>
    </div>`;
    } else {
      con.innerHTML += ` 
      <div class="card-body">
      <div class="d-flex justify-content-between ">
      <div class="d-flex flex-row align-items-center">
    <p> por el momento no tienes productos añadidos al carrito </p>
    </div>
    </div>
    </div>`;
    }
  }
}
//funciones sumar o restar productos con botones
window.restar = (id)=> {
  shoppingCart.forEach(product =>{
    if(product.id == id){
      if (product.cantidad > 1) {    
        product.cantidad -= 1;
     } else {
       shoppingCart = shoppingCart.filter((juego) => juego.id != id);
     }
     localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
     mostrarCarrito();
     mostrarPrecio();
    }
  })
}
window.sumar = (id)=> {

shoppingCart.forEach(product =>{
  if(product.id == id){
    if (product.cantidad >= 1) {    
      product.cantidad += 1;
   } 
   localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
   mostrarCarrito();
   mostrarPrecio();
  }
})
}

//eliminar de carrito
window.eliminar = (id) => {
    shoppingCart.forEach((product) => {
      if (product.id == id) {
   
          shoppingCart = shoppingCart.filter((juego) => juego.id != id);
   
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        mostrarCarrito();
        mostrarPrecio();
      }
});
}
//Calcular total
// const total = items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
 function mostrarPrecio() {
  let total = 0;
  let iva = 0.19;
  let ivaTotal = 0;
  let descuento = 0.25;
  let totalConDescuento = 0;
  let subTotal = 0;
  subTotal = shoppingCart.reduce((acc , arr)=>{
    acc += (arr.cantidad * arr.precio);
    return acc;
  },0);
   ivaTotal = subTotal * iva;
   totalConDescuento =( subTotal + ivaTotal) * (  descuento)
   total = (subTotal + ivaTotal) - (totalConDescuento);
  if(total != null || total != 0 ){
    cart.innerHTML = `<hr class="my-4" />
      <div class="d-flex justify-content-between">
        <p class="mb-2">subTotal</p>
        <p class="mb-2">$${subTotal}</p>
      </div>  
 
      <div class="d-flex justify-content-between">
      <p class="mb-2">iva (19%)</p>
      <p class="mb-2">$${ivaTotal}</p>
    </div>  
    <div class="d-flex justify-content-between">
    <p class="mb-2">Descuento 25%</p>
    <p class="mb-2">$${totalConDescuento}</p>
  </div>
      <div class="d-flex justify-content-between">
        <p class="mb-2">Envio</p>
        <p class="mb-2">Free</p>
      </div>

  <div class="d-flex justify-content-between">
  <p class="mb-2">Total</p>
  <p class="mb-2">$${total}</p>
</div> 
      <button
        type="button"
        class="btn btn-light">
        <div class="d-flex justify-content-center">
          <span>Pagar</span>
          <span>
            <i class="fas fa-long-arrow-alt-right ms-2"></i> 
          </span>
        </div>
      </button> `;
  }
}
localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

