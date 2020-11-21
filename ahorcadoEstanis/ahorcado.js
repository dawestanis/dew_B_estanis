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
        this.intentosRestantes = 8;
        this.palabraEnProceso = "";
        this.letrasUsadas = [];
    }

    ponerBarra(){
        for(var i = 0; i<this.palabra.length;i++){
            this.palabraEnProceso+="_ ";
        }
    }

    getLetraUsadas(){
        let resultado = "";
        this.letrasUsadas.forEach(element => { //Recorremos el array de letras usadas y le vamos agregando los elementos seguidos de una coma
           resultado+=element+","; 
        });
        return resultado.substring(0, resultado.length-1); //De esta manera retiramos la ultima coma al mostrar el resultado
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


let partida = null;
let botonComenzar = document.getElementById("comenzar");
botonComenzar.addEventListener('click', comenzarPartida);

function comenzarPartida(){ //funcion que nos permite comenzar la partida
    if (userInput.innerText != ""){//PONER REGEX
        partida = new Partida(userInput.innerHTML, "jugador1", "jugador2");
        partida.ponerBarra();
        actualizarDatos();
        userInput.innerHTML = "";

        //Agregas nuevos listeners al teclado 
        teclas.forEach(element => {
            element.removeEventListener('click', escribir);
            element.addEventListener('click', apostarLetra);
        });
    }
}

function apostarLetra(elemento){ //Funcion que comprueba si la letra que insertamos esta o no en la palabra oculta
    let tecla = elemento.target; // Asignamos el boton que se está presionando, a la variable tecla.
    let letrasUsadas = partida.getLetraUsadas();

    if(!letrasUsadas.includes(tecla.innerText)){   
        partida.letrasUsadas.push(tecla.innerText);
        if(partida.palabra.includes(tecla.innerText)){
            
        }else{
            partida.intentosRestantes--;
        }
        actualizarDatos();
    }
}

function actualizarDatos(){ //Funcion que nos permite actualizar los datos
    intentos.innerText = partida.intentosRestantes;
    letrasUsadas.innerText = partida.getLetraUsadas();
    palabras.innerText = partida.palabraEnProceso;
}