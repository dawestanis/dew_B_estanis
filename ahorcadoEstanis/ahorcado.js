class Jugador{
    constructor(nombre, victorias){
        this.nombre= nombre;
        this.victorias = victorias;
    }
}

class Partida{
    constructor(palabra, jugadorUno, jugadorDos){
        this.palabra = palabra;
        this.jugadorUno = jugadorUno;
        this.jugadorDos = jugadorDos;
    }
}


let teclas = document.querySelectorAll(".tecla"); // Busca todos los que tengan como clase tecla
let palabras = document.getElementById("palabra"); //Obtenemos el valor del id palabra y lo asignamos a la variable palabras
let intentos = document.getElementById("intentos"); //Obtenemos el valor del id intentos y lo asignamos a la variable intentos
let letrasUsadas = document.getElementById("letrasUsadas"); //Obtenemos el valor del id letrasUsadas y lo asignamos a la variable letrasUsadas
let userInput = document.getElementById("userInput"); //Obtenemos el valor del id userImput y lo asignamos a la variable userInput

teclas.forEach(element => {
    element.addEventListener('click', escribir); //recorremos los elemntos teclas y le asignamos un listener, para que cuando hagamos click realice una acción
});

function escribir(elemento){
    let tecla = elemento.target; // Asignamos el boton que se está presionando, a la variable tecla.
    userInput.innerHTML += tecla.innerText; //añadimos el valor de tecla a userInput y con el innerHTML hacemos que se pinte en el documento.
}


