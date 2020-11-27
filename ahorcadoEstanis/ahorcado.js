class Jugador {
    constructor(nombre, victorias) {
        this.nombre = nombre;
        this.victorias = victorias;
    }
}

class Partida {
    constructor(palabra, jugadorUno, jugadorDos) {
        this.palabra = palabra;
        this.jugadorUno = jugadorUno;
        this.jugadorDos = jugadorDos;
        this.intentosRestantes = 8;
        this.palabraEnProceso = "";
        this.letrasUsadas = [];
    }

    ponerBarra() {
        for (var i = 0; i < this.palabra.length; i++) {
            this.palabraEnProceso += "_ ";
        }
    }

    getLetraUsadas() {
        let resultado = "";
        this.letrasUsadas.forEach(element => { //Recorremos el array de letras usadas y le vamos agregando los elementos seguidos de una coma
            resultado += element + ", ";
        });
        return resultado.substring(0, resultado.length - 1); //De esta manera retiramos la ultima coma al mostrar el resultado
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

function escribir(elemento) {
    let tecla = elemento.target; // Asignamos el boton que se está presionando, a la variable tecla.
    userInput.innerHTML += tecla.innerText; //añadimos el valor de tecla a userInput y con el innerHTML hacemos que se pinte en el documento.
}


let partida = null;
let botonComenzar = document.getElementById("comenzar");
botonComenzar.addEventListener('click', comenzarPartida);

function comenzarPartida() { //funcion que nos permite comenzar la partida
    if (userInput.innerText != "") { //PONER REGEX
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

function apostarLetra(elemento) { //Funcion que comprueba si la letra que insertamos esta o no en la palabra oculta
    let tecla = elemento.target; // Asignamos el boton que se está presionando, a la variable tecla.
    let letrasUsadas = partida.getLetraUsadas();
    let letra = tecla.innerText.toUpperCase();
    
    if (!letrasUsadas.toUpperCase().includes(letra)) { 
        console.log(partida.palabra.toUpperCase().includes(letra))
        partida.letrasUsadas.push(letra);
        if (partida.palabra.toUpperCase().includes(letra)) { 
            let resultado = "";
            for (let i in partida.palabra) { 
                console.log(letra == partida.palabra.toUpperCase().charAt(i))
                if (letra == partida.palabra.toUpperCase().charAt(i)) {
                    resultado += letra;
                } else if (partida.palabraEnProceso.charAt(i) != "_") {
                    resultado += partida.palabraEnProceso.charAt(i)
                } else {
                    resultado += "_"
                }
            }
            partida.palabraEnProceso = resultado;

        } else {
            partida.intentosRestantes--;
        }
        actualizarDatos();
        if(comprobarFinPartida()){
            let victoria = false;
            if(partida.palabraEnProceso == partida.palabra){
                alert("Has ganado!");
                victoria = true;
            }else{
                alert("Estas ahorcado!");
            }

            let objeto = {
                palabra:partida.palabra,
                victoria:victoria,
                intentos:partida.intentosRestantes
            }

            let lista = JSON.parse(localStorage.getItem('listaPartidas')); //obtengo listaPartidas y lo convierte en objeto en formato JSON
            if(lista == null){ //si la lista no existe la iniciamos como una lista
                lista = []
            }
            lista.push(objeto); //introducimos en la lista el objeto que acabamos de crear
            localStorage.setItem('listaPartidas', JSON.stringify(lista));
            
        }
    }
}

function comprobarFinPartida(){
    return(partida.palabraEnProceso == partida.palabra || partida.intentosRestantes==0);
}

function actualizarDatos() { //Funcion que nos permite actualizar los datos
    console.log(partida.palabraEnProceso)
    intentos.innerText = partida.intentosRestantes;
    letrasUsadas.innerText = partida.getLetraUsadas();
    palabras.innerText = partida.palabraEnProceso;
}


function verLista(){
    let listaElemento = document.getElementById("lista"); //obtenemos el elemento de la lista
    let lista = JSON.parse(localStorage.getItem('listaPartidas')); //obtengo listaPartidas y lo convierte en objeto en formato JSON

    if(lista != null){ //si la lista no existe la iniciamos como una lista
        lista.forEach(p =>{ //recorremos la lista
            let li = document.createElement('li');
            li.innerHTML = `Palabra: ${p.palabra}, Victoria: ${p.victoria}, Intentos Restantes: ${p.intentos}`;
            listaElemento.appendChild(li)
        });
    }
}
verLista();


/////////////////////////////////
//CANVAS
/////////////////////////////////
function cargaContextoCanvas(idCanvas){
    var elemento = document.getElementById(idCanvas);
    if(elemento && elemento.getContext){
       var contexto = elemento.getContext('2d');
       if(contexto){
          return contexto;
       }
    }
    return false;
 }
 function borrarCanvas(contexto, anchura, altura){
    contexto.clearRect(0,0,anchura,anchura);
 }
 function dibujaHorca(ctx){
    ctx.fillStyle = '#462501';
    ctx.fillRect(64,9,26,237);
    ctx.fillRect(175,193,26,53);
    ctx.fillRect(64,193,136,15);
    ctx.fillRect(64,9,115,11);
    ctx.beginPath();
    ctx.moveTo(64,65);
    ctx.lineTo(64,80);
    ctx.lineTo(133,11);
    ctx.lineTo(118,11);
    ctx.fill();
 }
 function dibujaCabeza(ctx){
    var img = new Image(); 
    img.onload = function(){
       ctx.fillStyle = '#f2d666';
       ctx.drawImage(img,150,38);
       ctx.fillRect(172,12,4,28);
    } 
    img.src = 'images/picture.jpg'; 
 }
 function dibujaCuerpo(ctx){
    ctx.beginPath();
    ctx.moveTo(171,82);
    ctx.lineTo(168,119);
    ctx.lineTo(162,147);
    ctx.lineTo(189,149);
    ctx.lineTo(185,111);
    ctx.lineTo(183,83);
    ctx.fill()
 }
 function dibujaBrazoIzq(ctx){
    ctx.beginPath();
    ctx.moveTo(173,102);
    ctx.lineTo(140,128);
    ctx.lineTo(155,133);
    ctx.lineTo(178,114);
    ctx.fill()
 }
 function dibujaBrazoDer(ctx){
    ctx.beginPath();
    ctx.moveTo(180,99);
    ctx.lineTo(222,121);
    ctx.lineTo(209,133);
    ctx.lineTo(183,110);
    ctx.fill()
 }
 function dibujaPiernaIzq(ctx){
    ctx.beginPath();
    ctx.moveTo(166,142);
    ctx.lineTo(139,175);
    ctx.lineTo(164,178);
    ctx.lineTo(175,144);
    ctx.fill()
 }
 function dibujaPiernaDer(ctx){
    ctx.beginPath();
    ctx.moveTo(178,145);
    ctx.lineTo(193,178);
    ctx.lineTo(212,170);
    ctx.lineTo(188,142);
    ctx.fill()
 }