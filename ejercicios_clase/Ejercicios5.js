// EJERCICIOS 5  Estructuras, objetos avanzados. etc

/**
 * ACTIVIDAD 1
 * 
 * Crea un script donde se realicen las siguientes acciones:
 * a) Pedir al usuario un nombre de titular, apellidos de titular y saldo de la cuenta.
 * b) Crear un nuevo objeto cuentaBancaria que se inicializará con los datos facilitados por el usuario. 
 * c) Mostrar un mensaje informando de que se ha creado la nueva cuenta bancaria y de los datos asociados a la cuenta bancaria creada.
 */


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
    let nuevoViajero = new viajero(id, nombre, apellidos, edad);//creamos un nuevo viajero.
    mapaViajeros.set(id, nuevoViajero); //establecemos los datos
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


function hayPaisEnLista(viajero, pais){
    let indice; //creamos variable que almacenará el indice en el que está el pais en el array.
    if(viajero.paisesVisitados.length != undefined){
        for(let i=0; i<viajero.paisesVisitados.length; i++){
            if(pais==viajero.paisesVisitados[i]){
                indice = i;
            }
        }
    }
    //
    return indice; // si no encuentra un pais, nos devuelve undefined.
}

function agregarPaisVisitado(id, pais) {
    var viajero; //creamos la variable en la que guardaremos el viajero si existe.
    if (existeViajero(id)) { //comprobamos que el viajero con dicho id existe.
        viajero = mapaViajeros.get(id);
        //antes de introducir el vivajero comprobamos que no esta en la lista.
        if(hayPaisEnLista(viajero, pais)==undefined){
            viajero.paisesVisitados.push(pais);
            alert("Añadido correctamente en " + viajero.nombre + " " + viajero.apellidos );
        }else{
            alert("Este pais ya esta en la lista.")
        }
    }else{
        alert("No se ha encontrado el viajero.")
    }
}

mostrarInfo();


function eliminarPais(cod, pais){
    if(existeViajero(cod)){
        let viajero = mapaViajeros.get(cod);

        if(hayPaisEnLista(viajero, pais) != undefined){ // si se encontró el pais en la lista
            viajero.paisesVisitados.splice( hayPaisEnLista(viajero, pais) , 1);
            /*
            Este metodo permite borrar una posicion concreta del mapa.
            Se le debe especificar la posicion a borrar y la cantidad de elementos.
            */
            alert("Pais eliminado.");
        }else{
            alert("Pais no encontrado.");
        }
    }
}



/**
 * ACTIVIDAD 3

Analiza el siguiente código y comenta las sentencias.
*/
const tropicalBasket = {  //se crea la variable costante como mapa tropicalBasket y se le dan unos atributos.

    bananas: 3,

    papayas: 0,

    oranges: 7,

    watermelons: 4

};

const smallBasket = {

    strawberries: 8,

    grapes: 12 };

const getFruitsDescription = (basket) => { //usando una funcion flecha que recibe un parametro.

    const fruitsListed = Object.keys(basket); //obtenemos las claves del mapa que recibimos como parametro.

    const fruitsAvailable = fruitsListed.filter((fruit) => {return basket[fruit] > 0; //guardamos en una variable filtrando los datos por futas.

    });

    return 'This basket has: ' + fruitsAvailable.join(', '); //devuelve un mensaje en el que se concatena una cadena con fruitsAvailable.

};

console.log(getFruitsDescription(tropicalBasket)); console.log(getFruitsDescription(smallBasket));// se hace una llamada a las funcion getFruitDescription capturando tropicalBasket y smallBasket y se muestra por consola. 

 
/*
ACTIVIDAD 4

Analiza el siguiente código y comenta las sentencias.
*/
const animal = {}; //se crea el objeto animal.

Object.defineProperty(animal, 'isHuman', { //se establecen los valores y propiedades del objeto animal.

    value: false,

    enumerable: false });

const dinosaur = Object.create(animal); //se crea el objeto animal dinosaur.

Object.defineProperty(dinosaur, 'isExtinct', { //se establecen los valores y propiedades del objeto dinosaur.

    value: true,

    enumerable: false });

const tRex = Object.create(dinosaur); //se crea el objeto dinosaurio tRex.

Object.defineProperty(tRex, 'legs', { //se establecen los valores y propiedades del objeto tRex

    value: 4,

    enumerable: false });

function getAllPropertiesOf(something) { //se crea la funcion para obtener todas las propiedades y se le pasa un parametro.

    let properties = []; //se crea un array

    let proto = something; //declara una variable a la que se le pasa el parametro recibido.

    while (proto !== Object.prototype) { //mientras que el parametro recibido que tenemos guardado en la variable proto no sea igual al ptorotipo de objeto entonces se ejecuta el codigo dentro del while

        properties = properties.concat(Object.getOwnPropertyNames(proto));//introducimos en el array properties los valores extraidos de proto.

        proto = Object.getPrototypeOf(proto);     }

    return properties; }

console.log(getAllPropertiesOf(tRex)); //mostramos por consola todas las propiedades de tRex

 
/*
ACTIVIDAD 5

Realiza la actividad 1 utilizando clases.

 

ACTIVIDAD 6

Realiza la actividad 2 utilizando clases y gestión de errores.
 */