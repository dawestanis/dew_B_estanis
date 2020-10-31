// EJERCICIOS 5  Estructuras, objetos avanzados. etc

/**
 * ACTIVIDAD 1
 * 
 * Crea un script donde se realicen las siguientes acciones:
 * a) Pedir al usuario un nombre de titular, apellidos de titular y saldo de la cuenta.
 * b) Crear un nuevo objeto cuentaBancaria que se inicializará con los datos facilitados por el usuario. 
 * c) Mostrar un mensaje informando de que se ha creado la nueva cuenta bancaria y de los datos asociados a la cuenta bancaria creada.
 */

/*
function cuentaBancaria(nombre, apellidos, saldo) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.saldo = saldo;
}
//Recogemos los datos introducidos por el usuario
var nombre = prompt("Introduce el nombre del titular");
var apellidos = prompt("Introduce los apellidos.");
var saldo = prompt("Introduce el saldo de la cuenta.");
//introducimos los datos en un array

//Instanciamos el objeto miCuenta.
var miCuenta = new cuentaBancaria(nombre, apellidos, saldo);
//Mostramos una alerta con el mensaje
alert("Se ha creado la cuenta con exito: " 
+ "\nNombre: " + miCuenta.nombre
+ "\nApellidos: " + miCuenta.apellidos
+ "\nSaldo: " + miCuenta.saldo + "€");


/**
 * ACTIVIDAD 2
 * 
 * Vamos a crear una pequeña base de datos de viajeros para una agencia de viajes:
 * 
 * 1- Crea una estructura para guardar los datos de personas (nombre, apellidos, edad)
 * 2- A partir de la estructura anterior, vamos a añadir los datos de los viajeros: una lista de países visitados 
 * (los países NO se pueden repetir) y si tiene o no tarjeta de puntos en nuestra agencia 
 * 3- Ahora crea otra estructura para guardar los datos de los viajeros, los identificaremos por un código de 
 * cliente de nuestra agencia
 * 4- Crea las siguientes funciones/métodos para gestionar nuestra base de datos:
    4.1- Crear un nuevo viajero (debe comprobar si el código de cliente ya existe. Si es así, muestra un mensaje y no lo inserta)
    4.2- Eliminar un viajero (identificado por su código de cliente)
    4.3- Mostrar todos los viajeros (sus datos personales, qué países ha visitado y si tiene tarjeta)
    4.4- Añadir un país a un viajero (identificado por su código de cliente)
    4.5- Eliminar un país a un viajero (identificado por su código de cliente)
 * 5- Haz algunas pruebas para comprobar que todo funciona bien, realizando llamadas a las funciones/métodos antes creados.
 * 
 */

// 1- Comprobar que existe el viajero
// 2- Si no existe lo creas
// 3- Se guarda en la lista
// 4- Crear funcion eliminar viajero

let mapaViajeros = new Map();

function viajero(id, nombre, apellidos, edad) { // Esta es "la clase crearViajero"
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.paisesVisitados = new Array();
}

// Creamos los viajeros
var primerViajero = new crearViajero(1, "Pepe", "Glez Hdez", 38);
var segundoViajero = new crearViajero(2, "Juan", "Blas Ruano", 25);
var tercerViajero = new crearViajero(3, "Rolando", "Carballo Ruíz", 34);

function exiteViajero(idRecibido) {
    let estaDentro = false;
    for (let [id, viajero] of mapaViajeros) {
        if (idRecibido == id) {
            estaDentro = true;
        }
    }
    return estaDentro;
}

function crearViajero(id, nombre, apellidos, edad) {
    let nuevoViajero = new viajero(id, nombre, apellidos, edad);
    mapaViajeros.set(id, nuevoViajero);
}

function mostrarInfo() {
    for (let [id, viajero] of mapaViajeros) { //recorremos la lista de viajeros y la mostramos por consola.
        //console.log(Object.values(mapaViajeros.get(id)));
        console.log("Datos del viajero: " +
            "\nNombre: " + viajero.nombre +
            "\nApellidos: " + viajero.apellidos +
            "\nEdad: " + viajero.edad +
            "\nPaises visitados: " + viajero.paisesVisitados);
    }
}

function agregarPaisVisitado(id, pais) {
    var viajero; //creamos la variable en la que guardaremos el viajero si existe.
    if (existeViajero(id)) { //comprobamos que el viajero con dicho id existe.
        for (let [idMapa, viajeroMapa] of mapaViajeros) {//recorremos el mapa.
            if (id == idMapa) { //si el id recibido es corresponde con el que se encuentra en el mapa lo guardamos en viajero.
                viajero = viajeroMapa;
            }
        }

    }

}

function hayPaisEnLista(viajero, pais){
    let indice;
    if(viajero.paisesVisitados.length != undefined){
        for(let i=0; i<viajero.paisesVisitados.length; i++){
            if(pais==viajero.paisesVisitados[i]){
                indice = i;
            }
        }
    }
}

mostrarInfo();

/*
//Creamos las instancias de viajeros.
var primerViajero = new crearViajero("Pepe", "Glez Hdez", 38, paisesVisitados = ["Francia", "Paris"]);
var segundoViajero = new crearViajero("Juan", "Blas Ruano", 25, paisesVisitados = ["España", "Madrid"]);
var tercerViajero = new crearViajero("Rolando", "Carballo Ruíz", 34, paisesVisitados = ["Portugal", "Lisboa"]);

var listaViajeros = [primerViajero, segundoViajero, tercerViajero]; // creamos la variable listaViajeros e introducimos los tres parametros.

for (i in listaViajeros) { //recorremos la lista de viajeros y la mostramos por consola.
    console.log(Object.values(listaViajeros[i]));
}


console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");


//otra opcion para mostrar la lista de viajeros.
for (i = 0; i < listaViajeros.length; i++) {
    console.log(Object.values(listaViajeros[i]));
    // ViajerotoString(listaViajeros);
}

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");


// 2.3- Ahora crea otra estructura para guardar los datos de los viajeros, los identificaremos por un código de cliente de nuestra agencia
//Vamos a crear un mapa con los viajeros 1 y 2
var agencia = new Map();
agencia.set(1, primerViajero);
agencia.set(2, segundoViajero);
agencia.set(3, tercerViajero);
// recorremos el  mapa y nos muestra el valor.
for (var valor of agencia.values()) {
    console.log(valor);
}

// 2.4.1- Crear un nuevo viajero (debe comprobar si el código de cliente ya existe. Si es así, muestra un mensaje y no lo inserta)
var cuartoViajero = new crearViajero("Albertito", "Hdez Glez", 23, paisesVisitados=["Japón", "Tokio"]);

function setViajero(id, nombre, apellidos, edad, paisVisitado){
    for(i in agencia){
        if (id == agencia.get(id)){
            alert("El id ya existe.");
        }else{
            var viajeroNuevo = new crearViajero(id, nombre, apellidos, edad, paisVisitado);
            agencia.set(viajeroNuevo);
        }
    } 
}

setViajero(1, "Pedro", "Sanchinflas", 50, paisVisitados =["España","Lanzarote"]);

console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")
for (var valor of agencia.values()) {
    console.log(valor);
}
*/




/**
 * ACTIVIDAD 3

Analiza el siguiente código y comenta las sentencias.

const tropicalBasket = {

    bananas: 3,

    papayas: 0,

    oranges: 7,

    watermelons: 4

};

const smallBasket = {

    strawberries: 8,

    grapes: 12 };

const getFruitsDescription = (basket) => {

    const fruitsListed = Object.keys(basket);

    const fruitsAvailable = fruitsListed.filter((fruit) => {return basket[fruit] > 0;

    });

    return 'This basket has: ' + fruitsAvailable.join(', ');

};

console.log(getFruitsDescription(tropicalBasket)); console.log(getFruitsDescription(smallBasket));

 

ACTIVIDAD 4

Analiza el siguiente código y comenta las sentencias.

const animal = {};

Object.defineProperty(animal, 'isHuman', {

    value: false,

    enumerable: false });

const dinosaur = Object.create(animal);

Object.defineProperty(dinosaur, 'isExtinct', {

    value: true,

    enumerable: false });

const tRex = Object.create(dinosaur);

Object.defineProperty(tRex, 'legs', {

    value: 4,

    enumerable: false });

function getAllPropertiesOf(something) {

    let properties = [];

    let proto = something;

    while (proto !== Object.prototype) {

        properties = properties.concat(Object.getOwnPropertyNames(proto));

        proto = Object.getPrototypeOf(proto);     }

    return properties; }

console.log(getAllPropertiesOf(tRex));

 

ACTIVIDAD 5

Realiza la actividad 1 utilizando clases.

 

ACTIVIDAD 6

Realiza la actividad 2 utilizando clases y gestión de errores.
 */