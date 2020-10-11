/* EJERCICIOS JAVASCRIPT(I)*/

/* ACTIVIDAD 1
* Usando un bucle, calcula el resultado de 15 elevado a la 6. 
* No podrás utilizar el operador aritmético de elevar a una potencia.
*/

var base = 15;
var exponente=1;
for(var i=0; i<6;i++){
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
while(contador !=0){
    sumatorio = sumatorio+contador;
    contador--;
}
console.log("El sumatorio de " + numero+ " es " + sumatorio);


/**
 * ACTIVIDAD 3
 * Anida dos bucles for y muestra por la consola el resultado de 
 * los dos índices en cada iteración. Realiza 10 iteraciones en cada 
 * bucle.
 */

console.log("------------------------------------------------------")
for (let i = 0; i <10; i++) {
    for (let j = i+1; j<10; j++) {
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

 