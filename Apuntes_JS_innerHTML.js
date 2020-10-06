function calcular(idCaja1,idCaja2) {
    document.getElementById(idCaja1).innerHTML = "Hola estoy calculando el primero";
    document.getElementById(idCaja2).innerHTML = "Hola estoy calculando el segundo";
    document.getElementById("textito").innerHTML = "Los aguacates estan muy ricos";
}

/* VERSION INEFICIENTE!
function ayudar() {
    document.getElementById("caja1").innerHTML = "Aquí tienes la ayuda";
}

function ayudar2() {
    document.getElementById("caja2").innerHTML = "Aquí tienes la ayuda";
}

function borrar() {
    document.getElementById("caja1").innerHTML = "";
}

function borrar2() {
    document.getElementById("caja2").innerHTML = "";
}
*/

function ayudar(idDestino) {
    document.getElementById(idDestino).innerHTML = "Aquí tienes la ayuda";
}

function borrar(idBorrar) {
    document.getElementById(idBorrar).innerHTML = "";
}