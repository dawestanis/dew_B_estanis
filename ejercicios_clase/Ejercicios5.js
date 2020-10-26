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

 function crearViajero(nombre, apellidos, edad, paisesVisitados){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.paisesVisitados=paisesVisitados;
 }
/*
function mostrarDatos(){
    return "Datos del viajero: " + listaViajeros.nombre + listaViajeros.apellidos + listaViajeros.edad;
}
*/
var primerViajero = new crearViajero("Pepe", "Glez Hdez", 38, paisesVisitados=["Francia","Paris"]);
var segundoViajero = new crearViajero("Juan", "Blas Ruano", 25,paisesVisitados=["España","Madrid"]);
var tercerViajero = new crearViajero("Rolando", "Carballo Ruíz", 34, paisesVisitados=["Portugal","Lisboa"]);

var listaViajeros =[primerViajero, segundoViajero, tercerViajero];

for(i in listaViajeros){
    console.log(Object.values(listaViajeros[i]));
}


