// var formulario = document.getElementById("miformulario");

window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener("click", validar, false);
}
//validar nombre

function validarNombre(){
    var elemento = document.getElementById("nombre");
    if(!elemento.checkValidity()){ //le dice al programa si la validacion es correcta.
        if(elemento.validity.valueMissing){ //cuando el elemento está vacio
            error(elemento,"introduce un nombre")
        }
        if(elemento.validity.patternMismatch){ //cuando el nombre es menor a 2 letras, pattern se refiere al pattern de html
            error(elemento,"el nombre debe tener entre 2 y 15 caracteres")
        }
        // error(elemento);
        return false;
    }
    return true;
}
//validar apellido

function validarApellido(){
    var elemento = document.getElementById("apellido");
    if(!elemento.checkValidity()){ //le dice al programa si la validacion es correcta.
        if(elemento.validity.valueMissing){ //cuando el elemento está vacio
            error(elemento," introduce el apellido")
        }
        if(elemento.validity.patternMismatch){ //cuando el nombre es menor a 2 letras, pattern se refiere al pattern de html
            error(elemento,"el nombre debe tener entre 2 y 15 caracteres")
        }
        // error(elemento);
        return false;
    }
    return true;
}
function validarEdad(){
    var elemento = document.getElementById("edad");
    if(!elemento.checkValidity()){ //le dice al programa si la validacion es correcta.
        if(elemento.validity.valueMissing){ //elemento vacio
            error(elemento, "introduce la edad");
        }
        if(elemento.validity.rangeOverflow){ //cuando los datos no estan arriba del rango
            error(elemento, "el valor debe ser menor de 100")
        }
        if(elemento.validity.rangeUnderflow){ //cuando los datos son menores al rango minimo
            error(elemento,"la edad debe ser mayor o igual a 18")
        }
        // error(elemento);
        return false;
    }
    return true;
}

function validar(e){
    borrarError();
    if(validarNombre() && validarApellido() && validarEdad() && confirm("deseas enviar el formulario")){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}

function error(elemento,mensaje){
    document.getElementById("mensajeError").style.border="2px solid red";
    document.getElementById("mensajeError").style.background="rgba(255,255,255,0.5";
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

 function borrarError(){
    var formulario = document.forms[0];
    for(var i = 0; i<formulario.elements.length; i++){
        formulario.elements[i].className = "";
    }
 }