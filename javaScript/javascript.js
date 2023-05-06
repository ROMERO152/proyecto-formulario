
function iniciar(){
    nombre=document.getElementById("nombre");
    apellido = document.getElementById("apellido");
    edad=document.getElementById("edad");
    nombre.addEventListener("input", validacion,false);
    apellido.addEventListener("input", validacion,false);
    edad.addEventListener("change", cambiorango, false);
    document.miformulario.addEventListener("invalid", validarFormulario,true);
    document.getElementById("enviar").addEventListener("click",enviar,false);
    validacion();
}
function validacion() {
    if (nombre.value==''|| apellido.value=='') {
        nombre.setCustomValidity("completa los campos nombre y apellido")
        // nombre.style.background='red';
        // apellido.style.background='red';
    }
    else{
        nombre.setCustomValidity('');
        nombre.style.background='#ffffff';
    }
}
function cambiorango() {
    var salida=document.getElementById("rango");
    var calc=edad.value-10;
    if (calc<10) {
        calc=0;
        edad.value=10;
    }
    salida.innerHTML=calc+' a '+edad.value;
}
function validarFormulario(e) {
    var elemento=e.target;
    elemento.style.background="red"
}
function enviar() {
    var valido=document.miformulario.checkVality();
    if (valido) {
        document.miformulario.submit();
    }
}
function controlar(e) {
    var elemento=e.target;
    if (elemento.validity.valid) {
        elemento.style.background="#ffffff";
    }else{
        elemento.style.background="red";
    }
}
window.addEventListener("load",iniciar,false)