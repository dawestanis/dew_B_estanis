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

var a = prompt("Introduce el primer nummero.");
var b = prompt("introduce el segundo numero");
var c = prompt("introduce el tercer numero");

if (a < 0 || b < 0 || c < 0) {
    alert("Error, alguno de los valores introducidos es negativo.")
} else if (a == 0 % % b == 0 && c == 0) {
    alert("Error, los tres valores son iguales a 0.")
} else if ((10 < (parseInt(a) + parseInt(b) + parseInt(c))) && (a != b && a != b && a != c)) {
    alert("Error, los valores suman mas de 10 y son diferentes entre si.")
}