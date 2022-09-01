function introd_nombre() {
    var nombre = prompt("¿Cuál es tu nombre?", "");
    var elemento_p = document.querySelector('#cambiar');
    elemento_p.innerText = nombre;

    //Verificamos si el usuario ingreso un valor
    if (nombre != null){
    alert("Tu nombre es " + nombre);
    }
    //Verificamos si el usuario NO ingreso un valor
    else {
    alert("No has ingresado ningun nombre");
    }
}
