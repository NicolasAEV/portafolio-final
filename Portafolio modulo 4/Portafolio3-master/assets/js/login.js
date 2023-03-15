//imports
import { usuarios } from './users.js';

//variables
let div = document.querySelector('.alert');
let alert = document.createElement('div')
//listerners
document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault();
    let nombre = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    let encontrado = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password)

    if (nombre == " " || password == " ") {

        alert.classList.add('alert', 'alert-danger');
        alert.innerText = 'todos los campos deben ser rellenados'
        div.appendChild(alert)
        setTimeout(() => {
            div.remove(alert); //aca se eliminara la alerta
        }, 5000);

    } else {
        if (encontrado) {
            alert.classList.add('alert', 'alert-success');
            alert.innerText = 'usuario auntenticado, redireccionando...'
            div.appendChild(alert)
            setTimeout(() => {
                div.remove(alert); //aca se eliminara la alerta
                location.href = "../../views/inventario.html";
            }, 5000);

        } else {
            alert.classList.add('alert', 'alert-danger');
            alert.innerText = 'datos incorrectos'
            div.appendChild(alert)
            setTimeout(() => {
                div.remove(alert); //aca se eliminara la alerta
            }, 5000);
        }
    }




})
//clases