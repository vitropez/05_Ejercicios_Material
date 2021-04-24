// JavaScript Document


//La función "comprobar()" se activa cuando se teclean 8 números en el elemento del formulario (DNI)
//y se ejecutan tres funciones.

function comprobar() {
    var longitud = document.getElementById("textoDNI").value.length;
    if (longitud===8){
        escribirLetra();
        cambiarTexto();
        cambiarColorFondo();


    }
//Esta función(1) calcula la letra del DNI cuando se escriben 8 números;  automáticamente
//escribe la letra porque está dentro de la función "comprobar()".
    function escribirLetra(){

        let letras ="TRWAGMYFPDXBNJZSQVHLCKET";
        let tarjeta=document.getElementById("textoDNI")
        let DNI=tarjeta.value
        let  posicion = DNI % 23;
        let  letra = letras.charAt(posicion);
        tarjeta.value=( DNI+"-"+letra);

    }
//Esta función(2)cambia el valor del texto con la propiedad innerHTML.
    function  cambiarTexto(){
        document.getElementById("capaTextoId").innerHTML="DNI completo";

    }
//Esta función(3)cambia el valor background de la hoja de estilos del elemento "form".
    function cambiarColorFondo(){
        document.getElementById("form").style.background="aquamarine";
    }
}





