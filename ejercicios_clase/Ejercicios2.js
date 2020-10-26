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

/*
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


/**
 * ACTIVIDAD 3
 *  Realizar un bucle for que actualice una variable i y otra j de la siguiente 
 * forma:
 * a) i comienza en 0, j comienza en 20
 * b) El bucle debe parar cuando i sea mayor que 8 ó j sea menor que 0
 * c) i se incrementa de 1 en 1, j se decrementa de 3 en 3
 * d) Dentro del bucle sólo puede estar la sentencia console.log(i, j)
 */
/*
console.log("estoy aqui")
for (var i = 0; i <= 8; i++) {
    for (var j = 20; 0 < j; j -= 3) {
        console.log(i, j);
    }
}


/**
 * ACTIVIDAD 4
 * En el siguiente bucle while tenemos que tener cuidado porque hay operaciones 
 * que pueden dar error (no puede haber raíces cuadradas de números negativos, ni 
 * divisiones por cero). 
 * 
 * a) Cambia el bucle while usando continue y break para que si hay una raíz 
 * cuadrada de un número negativo directamente pase a la siguiente iteración. En el 
 * caso de haber una división por cero, el bucle debe detenerse inmediatamente.
 * 
 * b) Prueba a realizar el apartado anterior sin usar ni continue ni break. ¿Es más 
 * sencillo?
 * 
 * c) Cambia el bucle while original para que se ejecute sin tener que asignar 
 * un valor inicial a la variable result.
 */
/*
let result = 1,
    arg1, arg2, res1, res2;
while (result > 0) {
    arg1 = Math.random() - 0.5;
    res1 = Math.sqrt(arg1);
    arg2 = Math.random();
    res2 = res1 / (arg1 + arg2);
    result = res1 + res2;
    console.log(result);
}

/**
 * ACTIVIDAD 5
 * La letra del NIF se calcula dividiendo la parte numérica (8 primeras cifras) 
 * por 23. A partir del resto de esta división se asigna una letra según su posición 
 * en la siguiente cadena: `'TRWAGMYFPDXBNJZSQVHLCKE'`.
 * 
 * Por ejemplo, el DNI 64253469 da como resto 2 al dividir por 23 (tercera posición, 
 * ya que empieza por 0), por lo que le corresponde la letra `W`.
 * 
 * Implementar una función que calcule la letra a partir del número del NIF.
 */
/*
function comprobarNif(nif) {
    var valido = true;
    var numero;
    var letr;
    var letra;
    var expresion_regular_dni;
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/; //expresion regular que comprueba si el dato obtenido tiene 8 digitos y una letra de la a la z, tanto mayuscula como minuscula.

    if (expresion_regular_dni.test(nif) == true) {
        numero = nif.substr(0, nif.length - 1);
        letr = nif.substr(nif.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) { //si la letra no corresponde con las permitidas devuelve false.
            valido = false;
        } else {
            valido = true;
        }
    } else {
        valido = false;
    }
    return valido;
}


/**
 * ACTIVIDAD 6
 * Para convertir grados Farenheit (`F`) a Celsius (`C`) se usa la 
 * siguiente expresión: `C = (F − 32) * 5/9`. Implementar una función 
 * que realice esta conversión (comprueba que 32ºF son 0ºC y que 
 * 75.2ºF son 24ºC).
 */
/*
function farenheitTocelsius(numero) {
    var farenheit = numero;
    var celsius = alert(farenheit - 32) * 5 / 9;
    return celsius;
}
farenheitTocelsius(32);

/**
 * ACTIVIDAD 7
 * En el ejercicio anterior, añadir un argumento opcional booleano de forma 
 * que si está a `False` (valor por defecto) devuelve sólo el resultado 
 * numérico (p.ej: `24`), mientras que si se indica `True` le añade la 
 * unidad `ºC` (p.ej `24ºC`).
 */
/*
function farenheitTocelsius(numero, letra) {
    var conUnidad = false;
    var celsius = ((numero - 32) * 5 / 9);
    if (letra == "Y") {
        conUnidad = true;
    }
    if (conUnidad) {
        alert("El resultado es: " + Math.round(parseInt(celsius)) + "ºC");
    } else {
        alert("El resultado es: " + Math.round(parseInt(celsius)));
    }
}
var numero = prompt("Dame los grados Farenheit que quieres cambiar a Celsius.")
var letra = prompt("Escribe Y si lo quieres con letra.")
farenheitTocelsius(numero, letra);


/**
 * ACTIVIDAD 8
 * Genera una lista que contenga el cuadrado de los números pares y el cubo 
 * de los impares entre 1 y 100(inclusive).
 */
/*
 for (var i = 0; i<100; i++){
     if(i % 2 == 0){ //si el resto de i entre 2 da cero calcula el cuadrado y lo muestra.
         console.log(i*i);
     }else{ //si no pues calcula el cubo y lo muestra.
        console.log(i*i*i);
     }
 }


 /**
  * ACTIVIDAD 9
  * Escribir un programa que proporcione el desglose en el número mínimo de billetes 
  * y monedas de una cantidad entera cualquiera de euros dada. Recuerda que los billetes 
  * y monedas de uso legal disponibles hasta 1 euro son de: 
  * 500, 200, 100, 50, 20, 10, 5, 2 y 1 euros. 
  * Para ello deben solicitar al usuario un número entero (comprobar que lo es) y 
  * desglosar la cantidad en el número mínimo de billetes y monedas.
  */

var importe = prompt("Indica una cantidad: ");
console.log("El desglose de la cantidad " + importe);

// indicamos todas las monedas posibles
var monedas = Array(500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.20, 0.10, 0.05, 0.02, 0.01);

// creamos un array con la misma cantidad de monedas

// Este array contendra las monedas a devolver

var cambio = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Recorremos todas las monedas

for (var i = 0; i < monedas.length; i++) {

    // Si el importe actual, es superior a la moneda

    if (importe >= monedas[i]) {
        // obtenemos cantidad de monedas

        cambio[i] = parseInt(importe / monedas[i]);

        // actualizamos el valor del importe que nos queda por didivir

        importe = (importe - (cambio[i] * monedas[i])).toFixed(2);
    }
}
// Bucle para mostrar el resultado
for (i = 0; i < monedas.length; i++) {
    if (cambio[i] > 0) {

        if (monedas[i] >= 5)

            console.log("Hay: " + cambio[i] + " billetes de: " + monedas[i] + " euro");

        else

            console.log("Hay: " + cambio[i] + " monedas de: " + monedas[i] + " euro");

    }

}

/**
 * ACTIVIDAD 10
 * Muestra la fecha y hora actuales en formato: “DD/MM/YYYY hh:mm:ss TimeZone”.
 */
/**
 * Para obtener el día exacto hago uso de getDate().
Para obtener el mes exacto le sumo un 1 al final pues estan en forma de array y enero empieza en la posición 0
Para agregarlo un 0 a la izquierda a month y que se vea como pides solo lo metí en un if / else y comparé su longitud
 */
let date = new Date()

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

if (month < 10) {
    console.log(`${day}-0${month}-${year}`)
} else {
    console.log(`${day}-${month}-${year}`)
}

/**
 * ACTIVIDAD 11
 *  Construye una fecha a partir del texto “02/04/2015”. Muestra la fecha con 
 * console.log, ¿qué obtienes? Prueba ahora con “2015-04-02”.¿Cómo podrías crear 
 * una fecha con el texto “April 02, 2015”?
 */

var dia = "02";
var mes = "04";
var anio = "2015"
console.log(dia + "/" + mes + "/" + año);
console.log(anio + "/" + mes + "/" + dia);
mes = "Abril";
console.log(mes + " " + dia + "," + anio);

/**
 * ACTIVIDAD 12
 *  ¿Cuántos segundos han pasado desde que naciste? ¿y minutos? ¿y horas? ¿y días? 
 * Implementar una función que dada una fecha cualquiera en formato “yyyy-mm-dd”, devuelva 
 * cuánto tiempo ha pasado desde esa fecha. La función aceptará un segundo parámetro 
 * para indicar en qué unidad se quiere obtener el resultado: ‘d’ → días, ‘h’ → horas, ‘m’ → minutos y 
 * ‘s’ → segundos. Si no es ninguna de estas unidades, se mostrará un error.
 */

// asignar el valor de las unidades en milisegundos
var msecPerMinute = 1000 * 60;
var msecPerHour = msecPerMinute * 60;
var msecPerDay = msecPerHour * 24;

// asignar la fecha en milisegundos
var date = new Date('23/04/1979');
var dateMsec = date.getTime();

// asignar la fecha el 1 de enero del a la media noche
date.setMonth(0);
date.setDate(1);
date.setHours(0, 0, 0, 0);

// Obtener la diferencia en milisegundos
var interval = dateMsec - date.getTime();

// Calcular cuantos días contiene el intervalo. Substraer cuantos días
// tiene el intervalo para determinar el sobrante
var days = Math.floor(interval / msecPerDay);
interval = interval - (days * msecPerDay);

// Calcular las horas , minutos y segundos
var hours = Math.floor(interval / msecPerHour);
interval = interval - (hours * msecPerHour);

var minutes = Math.floor(interval / msecPerMinute);
interval = interval - (minutes * msecPerMinute);

var seconds = Math.floor(interval / 1000);

// Mostrar el resultado.
document.write(days + " days, " +
    hours + " hours, " +
    minutes + " minutes, " +
    seconds + " seconds.");

/**
 * ACTIVIDAD 13
 * Implementar una función hdec2hms(x) que transforme una hora en formato decimal 
 * a su equivalente en formato hh:mm:ss (en texto). Por ejemplo, 8.25 = “8:15:00” 
 * y 10.12 = “10:07:12”.Implementar también la función inversa hms2hdec(h,m,s).
 */



/**
 * ACTIVIDAD 14
 * Como hemos visto, javascript, como muchos otros lenguajes, utilizan el “UNIX EPOCH” 
 * que cuenta el tiempo a partir de la medianoche del 1 de enero de 1970. 
 * Sin embargo, hay otros tipos de fecha que tienen otro origen del tiempo. 
 * Por ejemplo, la fecha juliana empieza a contabilizar el tiempo desde las 12:00 
 * (mediodía) del 1 de enero de 4713 a.C., e indica el número de días (y fracciones) 
 * que han transcurrido desde ese momento. La fecha juliana se suele utilizar para 
 * calcular el tiempo que ha transcurrido desde eventos que sucedieron en la antigüedad 
 * y es aún ampliamente usada para fenómenos astronómicos e históricos lejanos. 
 * En la wikipedia (https://es.wikipedia.org/wiki/Fecha_juliana) se puede encontrar 
 * la relación entre fecha juliana y tiempo Unix (contado a partir desde 
 * 1/1/1970), siendo esta:
 * 
 * fecha_juliana = tiempo_unix + 2440587.5
 * 
 * Implementar una función que dada una fecha en texto (por ejemplo “2018-09-20”), 
 * devuelva la fecha juliana equivalente.
 * 
 * Para realizar la suma, ten en cuenta que la fecha juliana almacena días, mientras 
 * que el tiempo_unix en javascript contiene milisegundos, por lo que hay que 
 * transformarlo en días. Por cierto, ¿de dónde crees que ha salido el valor 2440587.5?
 */


 function dividirCadena(fecha, separador){ // con esta función eliminamos los guiones de la fecha dada.
     var arrayDeCadenas = fecha.split(separador);
     document.write('<p>La cadena original es: "' + fecha + '"');
     document.write('<br>El separador es: "' + separador + '"');
     document.write("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");

     for(var i=0;i<arrayDeCadenas.length;i++){
         document.write(arrayDeCadenas[i] + " / ");
     }
 }
 var fecha = "2018-09-20";
 var separador = "-";

 dividirCadena(fecha,separador);


 /**
  * ACTIVIDAD 15
  * Cuando hablamos de ángulos, normalmente utilizamos los grados sexagesimales 
  * (se suelen representar como “deg”, una circunferencia completa son 360º deg). 
  * Sin embargo, en trigonometría es más común utilizar los radianes (“rad”, una 
  * circunferencia completa son 2π rad).
  * 
  * De esta forma, 360º equivalen a 2π. Las funciones trigonométricas de javascript, 
  * como la mayoría de lenguajes, trabajan en radianes, sin embargo en muchas ocasiones 
  * nosotros vamos a querer trabajaren grados. Por ello, se pide:
  * 
  * a) Implementar una función llamada deg2rad(x) que transforme de grados a 
  * radianes, y su inversa rad2deg(x)
  * 
  * b) Implementar una función sinDeg(x)que devuelva el seno del ángulo x y otra 
  * función cosDeg(x) que devuelva el coseno del ángulo x (en ambos casos x está en 
  * grados).
  * 
  * c) El seno y el coseno están relacionados por la siguiente ecuación: 
  * sin2x + cos2x = 1.
  * 
  * Utilizar esta relación para implementar una función sinDegAlt(x) que obtenga el 
  * seno de un ángulo x (en grados) usando para ello la función cosDeg(x) anteriormente 
  * implementada.
  * 
  * Implementar también la función inversa al apartado anterior: cosDegAlt(x) usando 
  * para ello sinDeg(x)
  */

  