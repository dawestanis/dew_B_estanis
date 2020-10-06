// VERSION VICTOR
/*
var diasSemana = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo");
var res;
diasSemana.forEach((e) => {
    if (res) {
        res = res + ' ' + e;
    } else {
        res = e;
    }
});
document.querySelector('#result').innerHTML = res;
document.querySelector('#result').value = res;
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// CREAMOS EL ARRAY
var diasSemana = new Array("Lunes", "Martes", "Miercoles", "jueves", "Viernes", "Sabado", "Domingo");

// RECORREMOS EL ARRAY
console.log(diasSemana[0]); //<----imprime por consola uno solo
for (contador = 0; contador <= diasSemana.length; contador++) {
    document.write(diasSemana[contador]);
}

console.log(diasSemana.length)
for (var contador = 0; contador < diasSemana.length; contador++) {
    console.log(diasSemana[contador]);
}

// Usando foreach
console.log("Usando foreach");
diasSemana.forEach((elemento) => {
    console.log(elemento)
})

// Array multidimensional
var table1 = new Array(2, 3); //<---definimos tamaño
var table2 = new Array([1, 2], [3, 4]) // <--- creamos el array directamente con contenido 2x3
var table3 = [
    ["lunes", "martes"],
    ["miercoles", "jueves"],
    ["viernes", "sabado"]
] // <---creamos directamente una de 3x2


// Array multidimensional recorrido con dos <<for in>>  anidados
function ver() {
    var numeros = [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30]
    ]
    for (var i in numeros) { //<--- nuevo for in "maravilloso"
        for (var j in numeros[i]) {
            console.log(numeros[i][j])
        }
    }

    // Version resumida de Victor
    numeros.forEach(e => e.forEach(a => console.log(a))) // in = indice; of = elemento;

    console.log(numeros.length); //numero de filas
    console.log(numeros[0].length); //numeros de columnas
}

// ######################## PROPIEDADES Y MÉTODOS DEL ARRAY IMPORTANTES ##################################

//Ejemplo de array con sus metodos
var articulos = ['zapatillas', 'pantalón', 'camiseta', 'calcetines'];

document.write("<p> El primer artículo es <strong>");

document.write(articulos[0] + "</strong></p>");

alert(articulos[0]); // <-- Muestra lo que tiene el indice 1 en una ventana emergente.

alert(articulos.length);

document.write("<p>El último elemento es <strong>");

document.write(articulos[articulos.length - 1] + "</strong></p>"); // <---accedemos a la ultima posición del array.

articulos.unshift('raqueta');

document.write("<p>Casi nos olvidamos!! Agregamos este elemento: <strong>");

document.write(articulos[0] + "</strong></p>");

document.write("<p>Agregamos un elemento más al final: <strong>");

articulos.push(prompt("Introduce el artículo"));

document.write(articulos[articulos.length - 1] + "</strong></p>");




//Propiedad length
//Articulos.length = 4; // <--- Nos dice la longitud o numero de elementos que tiene el array.

//Método push
articulos.push("balón"); // <----Agrega elemento o elementos AL FINAL del array.

//Método unshift
articulos.unshift('pelota de tenis'); // <---- Agrega elemento o elementos AL COMIENZO del array.

//Método shift
articulos.shift(); // <--- Elimina elementos al principio del array

//Método pop
articulos.pop(); // <--- Elimina elementos al final del array

//Método indexOf
let pos = articulos.indexOf('raqueta'); // sirve para buscar el indice de un elemento. 
//Si hay varios elementos con el mismo nombre, devuelve el primero de todos.
// 1


//Método splice
let elementoEliminado = articulos.splice(pos, 1); // permite eliminar varios elementos, empezando por 
//la posicion y diciendole el numero de elementos a eliminar.
// ["Manzana", "Fresa"]


//Método slice
let copiaArray = articulos.slice(); //copia un array a otro con metodo .slice
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"

//Método isArray
document.write(Array.isArray(articulos)); //nos dice si es o no un array


//Método toString
document.write(articulos.toString()); //pasamos el array a String

//Método sort
var numerosParaOrdenar = [101, 1, 2, 1001].sort((a, b) => a - b); // nos ordena el array gracias a la lambda
document.write(numerosParaOrdenar.toString());

window.onload = function () {
    ver();
}