//imports
import { carritos } from './object.js';
import { usuarios } from './users.js';

//variables

const con = document.querySelector('.container-2');

for (let i = 0; i < carritos.length; i++) {
  //creamos un elemento padre
  const row = document.createElement('div')
  //establecemos la decendencia que vamos a insertar
  row.innerHTML = `<div class="cards">
    <img class="imagen-game" src="${carritos[i].imagen}"       alt="imagen del juego">
    <h5 class="producto">${carritos[i].nombre}</h3>
    <p class="precio">precio: $${carritos[i].precio}</p>
     <div class="info">
     <a class="buy" id="details" data-id="${carritos[i].id}" href="" >Detalles</a>
     <a class="buy" id="buy" data-id="${carritos[i].id}" href="" >Comprar</a>
                        </div>
                        </div>`;
  //add la decendencia
  con.appendChild(row);
}

//botton envia id a detalles

const btn1 = document.querySelectorAll("#details");
btn1.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log(e.target.dataset.id);
    let param = e.target.dataset.id;
    location.href = "./details.html?id=" + param;
  });
});

// console.log(btn1)
//botton envia id a carrito

const btn2 = document.querySelectorAll("#buy");
btn2.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log(e.target.dataset.id);
    let param = e.target.dataset.id;
    location.href = "./cart.html?id=" + encodeURIComponent(param);
  });
});
