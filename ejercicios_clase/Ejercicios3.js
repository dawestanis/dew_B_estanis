// EJERCICIOS (III)

/**
 * ACTIVIDAD 1
 * Realizar una función que indicando un texto y un carácter (ambos obligatorios, 
 * comprobar que el segundo parámetro es realmente un único carácter), nos diga 
 * cuántas veces aparece el carácter en el texto.
 */

function validarCaracter(texto, caracter) {
    var cadena = texto;
    var letra = caracter;
    if (caracter.length != 1) {
        throw new Error("El caracter tiene que ser de un digito");
    }
    let contador = 0;

    for (letra in texto) {
        // Si el digito es igual que el caracter se le suma al contador.
        if (texto.charAt(letra) == caracter) {
            contador++;
        }
    }
    return contador;
}

validarCaracter("Hola que tal colega!", "a");

/**
 * ACTIVIDAD 2
 * Escribir una función que acepte al menos un argumento (el primer argumento debe ser obligatorio, mostrar un mensaje de error 
 * si no se indica, luego se pueden indicar tantos argumentos como desee el usuario) y que devuelva la suma y la media de todos 
 * los elementos. Comprobar que todos los argumentos sean números e ignorar los que no lo sean, mostrando un aviso (por ejemplo: 
 * ¡AVISO! El argumento número 3 "Hola" no es un número, lo ignoramos").
 */

function sumar(){
    // Si no se pasan argumentos lanza un error
   if(arguments.length < 1){
       throw new Error("Tienes que pasar al menos un argumento");
   }
   let suma = 0;
   let contador = 0;
   // hacemos un bucle con la lista de argumentos
   for(i in arguments){
       //Si no es un numero lo ignoramos
        if(isNaN(arguments[i])){
            console.log("¡AVISO! El argumento número "+(i+1)+" "+arguments[i] +" no es un número, lo ignoramos")
        }else{
            // Lo agregamos a la suma y aumentamos el contador 
            suma+=arguments[i];
            contador++;
        }
   }
   return suma / contador;
}

/**
 * ACTIVIDAD 3
 * Realizar una función en JS que dado un 
DNI (comprobar que es un número entre 0 y 99999999), d
evuelva la letra asociado al mismo. Esta letra se calcula como el módulo 
(resto) de la división del número del DNI entre 23, y a partir del resto se
 escoge una de las siguientes letras según la posición: TRWAGMYFPDXBNJZSQVHLCKET. 
 Por ejemplo, para el DNI 12345678, al dividir entre 23 se obtiene como resto 14, 
 por lo que le corresponde la letra 'Z', siendo el DNI correcto 12345678Z.
 */

function validarDni(dni){
    //Si es un número y está dentro del rango
    if(!isNaN(dni) && (dni >=0 && dni < 99999999)){
        array = "TRWAGMYFPDXBNJZSQVHLCKE".split("") //Convierte el string en un array

        resto = dni % 23; // Calculamos el resto 
    
        

    }else{
        throw new Error('');
    }

    return array[resto]; //Retornamos la letra que corresponde utilizando el resto
}

/**
 * ACTIVIDAD 4
 * Crear una función que genere un array aleatorio, usando 3 parámetros: número de elementos (por defecto 10, valor mínimo 
 * del elemento (por defecto 100), valor máximo (por defecto 200).
 */


/**
 * @param {number} elementos = Número de elementos del array 
 * @param {number} minimo = Valor mínimo del elemento
 * @param {number} maximo = Valor máximo del elemento
 */
function arrayAleatorio(elementos=10, minimo=100, maximo=200){
maximo +=1; // Le agregamos 1 para poder incluirlo en el Random
let array = new Array(elementos); //Creamos un array con el tamaño que se le indique al llamar la función

for(let i=0; i < array.length; i++){
    //Obtenemos un random y lo asignamos al array
    array[i] = parseInt(Math.random() * (maximo - minimo) + minimo);
    
}

return array;
}

/**
 * ACTIVIDAD 5
 * Usando la función del ejercicio 1, generar un array aleatorio de 20 elementos entre 20 y 100 y luego ordenarlo.
 */

  // Creamos el array aleatorio de 20 elementos entre 20 (incluido) y 100 (incluido).

let listaAleatoria = arrayAleatorio(20, 20,100);
let listaOrdenada = actividad5(listaAleatoria);

/**
 * @param {Array} array = array que vamos a ordenar
 */
function actividad5(array){
    // Utilizando el metodo sort podemos ordenar un array
    return array != null?array.sort((a,b)=> a-b):false;
 }


 /**
  * ACTIVIDAD 6
  * Crear una función que mezcle los elementos de un array en orden aleatorio. Probar con el array ordenado 
  * creado en el ejercicio anterior
  */

 function actividad6(array){
    //Rango del array
    let min = 0;
    let max = array.length;
    
    for(i in array){
        let indice_random = parseInt(Math.random() * (max - min) + min);
        // Guardamos el num que nos salió del random
        let num_memoria = array[indice_random];
        // En esa posición guardamos el numero que está en la posición actual del bucle for
        array[indice_random] = array[i]
        // Y en la posicion del for colocamos el numero que estaba en la posicion aleatoria.
        array[i] = num_memoria;
    }
    console.log(array)
 }
