// JavaScript Document
function comprobar() {
    var longitud = document.getElementById("textoDNI").value.length;
    if (longitud===8){
        escribirLetra();
        cambiarTexto();
        cambiarColorFondo();


    }
    function escribirLetra(){

        let letras ="TRWAGMYFPDXBNJZSQVHLCKET";
        let tarjeta=document.getElementById("textoDNI")
        let DNI=tarjeta.value
        let  posicion = DNI % 23;
        let  letra = letras.charAt(posicion);
        tarjeta.value=( DNI+"-"+letra);

    }
    function  cambiarTexto(){
        document.getElementById("capaTextoId").innerHTML="DNI completo";

    }
    function cambiarColorFondo(){
        document.getElementById("form").style.background="aquamarine";
    }
}





