//imports
import { carritos } from './object.js';
import { usuarios } from './users.js';
//clases
export default class productos {
    //constructor con atributos de los productos
    constructor(id , cantidad = 1,nombre = '',descripcion = '',precio = 9999999,imagen = '',categoria = "",stock = 0) {
        this.id = id;
        this.cantidad = cantidad;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
        this.stock = stock;
    }
    //obtenemos todos los productos
    getProductos(){
       return carritos;
    }
    //obtenemos un solo producto
    getProducto(){
        return carritos.find(producto => producto.id == this.id);  
    }
    //add productos     
    addProducto(){
        //utilizando la funcion .push agregamos el nuevo producto con sus atributos
        carritos.push(
            {
                id: this.id,
                cantidad : this.cantidad,
                nombre: this.nombre,
                descripcion: this.descripcion,
                precio: this.precio, 
                imagen: this.imagen,
                categoria : this.categoria,
                stock: this.stock
            }
            );
        //guardamos en el local storage

            localStorage.setItem("carritos", JSON.stringify(carritos));
        return carritos
    }
    //actualizamos los propductos
    updateProducto(){
        //buscamos el producto 
        let producto = carritos.find(producto => producto.id ==this.id);
        //le asignamos a cada atributo el nuevo valor
        producto.nombre= this.nombre;
        producto.descripcion= this.descripcion;
        producto.precio = this.precio;
        producto.imagen = this.imagen,
        producto.categoria = this.categoria,
        producto.stock = this.stock;
        //guardamos en el local storage
        localStorage.setItem("carritos", JSON.stringify(carritos));
        return producto;
    }
    //eliminamos un producto
    deleteProducto(){
        // con .filter buscamos todos los productos que no contengan el id
         let newCarritos = carritos.filter(producto => producto.id != this.id);
        //guardamos en el local storage
         localStorage.setItem("carritos", JSON.stringify(newCarritos));
         return carritos
    }
}
