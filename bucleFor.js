var variableGlobal = 3;

function calcularTabla(inicio, fin, valortabla) {
    variableGlobal = variableGlobal + 1;
    var contador = inicio;
    for (inicio; contador <= fin; contador++)
        console.log(contador * valortabla)
}


function calcularTabladelCinco() {
    variableGlobal = variableGlobal + 3;
    for (contador = 1; contador <= 10; contador++)
        console.log(contador * 5)
}

function trabajarConTexto(){
    var texto="Hola mundo";
    var cadena="que tal colega?";
    var ejemplo="HOLA MUNDO"
    var maria="bla bla bla bla";
    console.log(texto.length);
    console.log(texto.substring(3,4));//siempre en javascript el indice empieza en 0
    console.log(texto.charAt(3)); //muestra el caracter de la posición 3
    console.log(texto.concat(cadena)); //opcion alternativa para concatenar Strings
    console.log(ejemplo.toLowerCase());
    console.log(texto.indexOf("l",3)); //muestra la posición de la l, a partir de la posición 3
    console.log(texto.replace("la","no")); //sustituimos los caracteres por los segundos.
    texto = texto.replace("la","no");//ahora machacamos el valor anterior de "texto" y se guarda
    console.log(texto.split(""));//crea una especie de array separado porlo que este definido dentro del split
    console.log(maria.toUpperCase());
}

/* funcion principal
para calcular */
function operar() {
    var contador = 2;
    //lamar procedimiento calculartabladel 5
    //calcularTabladelCinco();
    /*console.log("el valor de la variable global es: " + variableGlobal)
    calcularTabla(contador, 20, 2);
    console.log("el valor de la variable global es: " + variableGlobal)
    calcularTabla(contador, 10, 3);
    console.log("el valor de la variable global es: " + variableGlobal)
    */

    //Trabajando con texto
    trabajarConTexto();
}

window.onload = function () {
    document.getElementById("id_calcular").onclick = function () {
        operar();
    }
}