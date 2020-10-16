/*Recibimos dos textos y comparamos su tamaño para saber 
cual es más largo*/
function decirLargo() {
    let t1 = document.getElementById('texto1').value;
    let t2 = document.getElementById('texto2').value;
    let numCar1 = t1.length;
    let numCar2 = t2.length;
    let resultado;

    if (numCar1 > numCar2) {
        resultado = "El texto mayor es: " + t1;
    } else {
        resultado = "El texto mayor es: " + t2;
    }
    return resultado;
    //document.getElementById("resultadoFinal").innerHTML = resultado;
}


/*Recibimos dos cadenas de textos, las concatenamos y las mostramos*/
function concatenar() {
    let t1 = document.getElementById('texto1').value;
    let t2 = document.getElementById('texto2').value;

    let resultado = t1 + " " + t2;
    return resultado;
    //document.getElementById("resultadoFinal").innerHTML = resultado;
}


/*Comprueba si una elección está marcada y llama a la función concreta */
function elegirFuncion() {
    if (document.getElementById('texto1' == 0) || document.getElementById('texto2' == 0)) {
        window.alert("Error, Introduce un texto para continuar.");
    } else {
        if (document.getElementById('opciones').value == "largo") {
            document.getElementById("resultadoFinal").innerHTML += decirLargo();
        } else {
            (document.getElementById('opciones').value == "concatenar")
            document.getElementById("resultadoFinal").innerHTML += concatenar();
        }
    }
}

window.onload = () => {
    document.getElementById('boton').value;
}

//document.getElementById("resultadoConcatenar").innerHTML= (resultado);