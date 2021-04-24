// JavaScript Document

// la función "registrarEventos()" se ejecuta al cargar la página; obtenemos el elemento que queremos
//modificar;utilizamos un manejador de eventos y definimos estos:un evento y una función.

function registraEventos(){
    var imagen = document.getElementById("pato");
   imagen.addEventListener("mouseover", Donald2);
    imagen.addEventListener("click", Goofi1);
    imagen.addEventListener("dblclick", Goofi2);
    imagen.addEventListener("mouseout", Donald1);
//Estas son las funciones para cada evento que cambian las imágenes.

    function Donald2(){
        imagen.src="img/Donald_2.png";
    }
    function Goofi1(){
        imagen.src="img/Goofi_1.png";
    }
    function Goofi2(){
        imagen.src="img/Goofi_2.png";
    }
    function Donald1(){
        imagen.src="img/Donald_1.png";
    }

}
//En esta sentencia utilizamos un manejador de eventos :evento="load" cargar la página y
//ejecutar la función principal "registraEventos()".

window.addEventListener("load", registraEventos);









