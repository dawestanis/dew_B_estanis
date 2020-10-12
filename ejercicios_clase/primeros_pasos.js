/* EJERCICIOS JAVASCRIPT(I)*/

/* ACTIVIDAD 1
 * Usando un bucle, calcula el resultado de 15 elevado a la 6. 
 * No podrás utilizar el operador aritmético de elevar a una potencia.
 */

var base = 15;
var exponente = 1;
for (var i = 0; i < 6; i++) {
    exponente = exponente * base;
}
console.log(exponente);


/**
 * ACTIVIDAD 2
 * Usando un bucle, calcula la suma de los 10 primeros números 
 * naturales, es decir, la suma de 1 + 2 + 3 ... + 10, e imprimir 
 * el resultado por la consola. Para ello deberás recorrer el bucle 
 * y almacenar el valor acumulado en cada iteración en una variable.
 */
console.log("------------------------------------------------------")
var numero = 10;
var sumatorio = 0;
var contador = numero;
while (contador != 0) {
    sumatorio = sumatorio + contador;
    contador--;
}
console.log("El sumatorio de " + numero + " es " + sumatorio);


/**
 * ACTIVIDAD 3
 * Anida dos bucles for y muestra por la consola el resultado de 
 * los dos índices en cada iteración. Realiza 10 iteraciones en cada 
 * bucle.
 */

console.log("------------------------------------------------------")
for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
        console.log(i + "" + j)
    }
}

/**
 * ACTIVIDAD 4
 * En este reto deberás mostrar el número posterior a un número 
 * introducido por el usuario. Deberás solicitar al usuario que 
 * introduzca 3 números, y para cada uno de ellos imprimir el número 
 * posterior.
 */
console.log("------------------------------------------------------")
var primernumero = prompt("Dame el primer numero");
var segundonumero = prompt("Dame el segundo numero");
var tercernumero = prompt("Dame el tercer numero");

console.log("Los numeros resultantes son: ")
console.log(parseInt(primernumero) + 1);
console.log(parseInt(segundonumero) + 1);
console.log(parseInt(tercernumero) + 1);

/**
 * ACTIVIDAD 5
 * En este reto deberás sumar números e imprimirlos por la consola. Para ello, deberás 
 * solicitar al usuario que introduzca 2 números e imprimir el resultado por la 
 * consola. Este proceso deberás repetirlo 5 veces.
 */

console.log("------------------------------------------------------")

for (let i = 0; i <= 5; i++) {
    var primernumero = prompt("Dame un numero.");
    var segundonumero = prompt("Dame otro numero.");
    var resultado = parseInt(primernumero) + parseInt(segundonumero);
    console.log("El resultado de la suma entre ", primernumero, " y ", segundonumero, " es: ", resultado);
}

/**
 * ACTIVIDAD 6
 * En este reto deberás sumar el valor de 5 números naturales. Para ello, deberás
 * solicitar al usuario que introduzca un número entero, calcular y sumar los 5 
 * números siguientes e imprimir el resultado por la consola, y volver a repetir 
 * este proceso 5 veces más.
 */
console.log("------------------------------------------------------")

var numero;
var sumatorio;
for (var contador = 0; contador < 5; contador++) {
    numero = prompt("Dame un numero.");
    sumatorio = 0;

    for (var i = 0; i <= 5; i++) {
        sumatorio = sumatorio + (parseInt(numero) + 1) + i;
    }
    console.log(sumatorio);
}

/**
 * ACTIVIDAD 7
 *  Hacer un juego para que el usuario averigüe la capital de un país 
 * previamente definida. Tiene tres intentos y debe mostrase en pantalla 
 * si ha acertado o no, incluyendo en este caso el número de intentos que 
 * le quedan.
 */

console.log("------------------------------------------------------")

var contador = 3;
do {
    var paiselegido = prompt("¿Cual es la capital de Alemania?");
    if (paiselegido != "Berlin") {
        contador--;
        console.log("Fallaste!, intentalo de nuevo. Aun te quedan " +
            contador + " intentos.");

    } else {
        console.log("Bravo! Has acertado.");
        contador = 0;
    }
} while (contador > 3);

/*
while(contador<3){
    if(paiselegido=="Berlin"){
        console.log("Bravo! Has acertado.");
    }else{
        console.log("Fallaste!, intentalo de nuevo.");
        contador++;
    }
}
*/