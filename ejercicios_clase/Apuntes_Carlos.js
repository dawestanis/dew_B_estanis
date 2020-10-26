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

class Gato{
    constructor(nombre){
        this.nombre=nombre;
    }

    hablar(){
        console.log(this.nombre + ' hace ruido.');
    }
}

class Leon extends Gato{
    hablar(){
        super.hablar();
        console.log(this.nombre + ' maulla.');
    }
}

var leon1 = new Leon("Simba");
leon1.hablar();

