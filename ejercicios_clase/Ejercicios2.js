/* EJERCICIOS JAVASCRIPT(II)*/


/**
 * ACTIVIDAD 1
 *Implementar el control de 3 variables (a, b, c) para que se muestre un mensaje 
 de error cuando se produzca alguna de las siguientes situaciones (el mensaje de 
 error debe indicar qué situación(es) no se cumplieron):
 a) Al menos una de las 3 variables es negativa
 b) Las tres variables son iguales a 0
 c) Las suma de las 3 variables es mayor que 10 Y las tres variables son 
 diferentes
 */
/*
var a = prompt("Introduce el primer nummero.");
var b = prompt("introduce el segundo numero");
var c = prompt("introduce el tercer numero");

if (a < 0 || b < 0 || c < 0) {
    alert("Error, alguno de los valores introducidos es negativo.")
} else if (a == 0 && b == 0 && c == 0) {
    alert("Error, los tres valores son iguales a 0.")
} else if ((10 < (parseInt(a) + parseInt(b) + parseInt(c))) && (a != b && a != b && a != c)) {
    alert("Error, los valores suman mas de 10 y son diferentes entre si.")
}


/**
 * ACTIVIDAD 2
 * Diseñar una función que acepta un argumento x y que muestre los siguientes 
 * mensajes:
 * a) ‘Este es muy fácil... ¡prueba otro!’, si x es 0
 * b) ‘El número es par’, si x es 2, 4 ó 6
 * c) ‘El número es impar’, si x es 1, 3 ó 5
 * d) ‘¡¡Sólo sé contar de 0 a 6!!’, para los demás casos
 */


function codigofacilito(x) {
    var respuesta = "";
    var todoCorrecto = true;
    if (x == 0) {
        respuesta += "Este es muy facil... ¡Prueba otro!";
        todoCorrecto = false;
    }
    if (x == 2 || x == 4 || x == 6) {
        respuesta += "El número es par";
        todoCorrecto = false;
    }
    if (x == 1 || x == 3 || x == 5) {
        respuesta += "El número es impar.";
        todoCorrecto = false;
    }
    if (x > 6) {
        respuesta += "Sólo se contar de 0 a 6";
        todoCorrecto = false;
    }

    if (todoCorrecto == false) {
        window.alert(respuesta)
        return false;
    }
};
var x = prompt("Dame un numero del 1 al 6.")
alert(codigofacilito(x));