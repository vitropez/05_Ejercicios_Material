// JavaScript Document

function registraEventos(){
    var imagen = document.getElementById("pato");
   imagen.addEventListener("mouseover", Donald2);
    imagen.addEventListener("click", Goofi1);
    imagen.addEventListener("dblclick", Goofi2);
    imagen.addEventListener("mouseout", Donald1);
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

window.addEventListener("load", registraEventos);









