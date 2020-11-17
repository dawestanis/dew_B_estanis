//PROPIEDADES DE LOS OBJETOS
Object.defineProperties(perro1, "duenio", { //Por defecto todo falso
    value: "Carlos",
    writable: false,
    configurable: false,
    emi,
    erabñe: false //No puedes numerar
});

perro1.pelo = "blanco";
perro1.duenio = "Pedro";
delete(perro1.duenio);
document.write("<br>" + perro1.duenio + "<br>");
for (x in perro1) {
    document.write([x + " "]);
}


//Metodo FREEZE. Prevenir cambios  en objetos. Hay otros preventExtension o Seal
let persona = {
    nombre: "Daniela",
    mostrarnombre: function () {
        console.log("Nombre: " + this.nombre);
    }
};
console.log(persona);
persona.mostrarnombre();
Object.freeze(persona);

persona.nombre = "Daniela Ortiz";
persona.mostrarnombre();


//SLOPPY MODE vs USE ESTRICT: Modo estricto y Js cambia la forma de ejecución del script.

"use strict";
var miVariable = 1;

function test() {
    //"use strict";
    mivariable = 5;
    alert(miVariable);
}


function test1(p1, p2, p3) {
    alert(p1);
    alert(p2);
}

function test2(p1) {
    //"use strict"
    p1 = "10";
    alert(p1);
    alert(arguments[0]); //Valor original de los parámetros que se le pasan a la funcion.
}

//CLASES 

class Persona {
    constructor(nom, ape) { //el método  que recibe los parámetros al crearse la  clase
        this.nombre = nom;
        this.apellido = ape;
    }

    nombreCompleto() { // JS nos pone las funciones en el prototipo.
        return this.nombre + " " + this.apellido;
    }
}

var persona1 = new Persona("Alejandro", "Glez");
alert(persona1.nombre);
alert(persona1.nombreCompleto());

//HERENCIA

class Animal {
    constructor(oj, pel) {
        this.ojos = oj;
        this.pelo = pel;
    }

    correr() {
        console.log("corriendo ... ");
    }
}

//Perro hereda de Animal

class Perro extends Animal {
    constructor(oj, pel, apo) {
        //super es un metodo que llama al contstructor de la clase adre
        super(oj, pel);
        this.apodo = apo;
        this, raza = null;
    }

    correr() {
        console.log("corriendo muy rapido..."); //sobreescribo el metodo

    }

    ladrar() { //añadios el metodo ladrar al prototipo
        console.log("guau guau");
    }

    static queEres() { //No necesitas instanciarlas!!!!
        console.log("Los perros somos los mejores amigos del hombre");
    }

}
const perro1 = new Perro("Marrón", "Marrón", "Frederic");

//CARACTERISTICAS DE LAS CLASES
//No existe private, todas las clases son públicas

//Método estático: 
Perro.queEres();

//USAR SUPER PARA USAR UN METODO DE SU PADRE

class Gato {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log(this.nombre + ' hace ruido.');
    }
}

class Leon extends Gato {
    hablar() {
        super.hablar();
        console.log(this.nombre + ' maulla.');
    }
}

var leon1 = new Leon("Simba");
leon1.hablar();




//MAP: almacena pares clave-valor
var miMapa = new Map();
miMapa.set(0, "cero");
miMapa.set(1, "uno");
for (var [clave, valor] of miMapa) {
    alert(clave + " " + valor);

}

//Mostrará 2 alertas; primero con "0 = cero" u segimdp cpm "1 = uno"
for (var clave of miMapa.keys()) {
    añert(clave);
}

//Mostrará 2 alertas; primero con "0"  y segundo con "1"
for (var valor of miMapa.values()) {
    alert(valor);
}




/**
 * <h2>COOKIES</h2>
 * crear ima cpploe: nombre; (en forma de pares nombre/valor)
 */

document.cookie = "usuario=Carlos;expires=thu, 20 Nov 2020 12:00:00 UTC; path=/;"; //opcion A


//Ver cookie
function verTodas() {
    var miCookie = document.cookie;
    alert(miCookie)
}

//Crear cookie
function crearCookie(e) {
    if (!e) e = window.eventalert;
    if (e.target.id == "crear1")
        document.cooie = "usuario = Pedro";
    else if (e.target.id == "crear2")
        document.cookie = "DNI=12312321312";
}

//Modificar cookie
/*
function modificarCookie() {
    document.
}



/**
 * WEB STORAGE 
 * Alternativa a cookies
 */

function saludar() {
    alert("El navegador soporta Webstorage");
    if (localStorage.getItem("usuario") != null) {
        document.getElementById("saludo").innerHTML = "Bienvenido " + localStorage.getItem("usuario");
    } else {
        var nombre = prompt("¿como se llama?");
        localStorage.setItem("usuario", nombre);
        document.getElementById("saludo").innerHTML = "Tu primera visita " + localStorage.getItem("usuario");
    }
}

