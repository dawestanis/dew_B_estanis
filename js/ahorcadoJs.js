//Clases 

let mapaJugadores = new Map();

function jugador(id, nombre, apellidos) { // Esta es "la clase crear jugador"
this.id = id;
this.nombre = nombre;
this.apellidos = apellidos;
this.numeroVictorias = new Array();
}


function existeJugador(idRecibido) { // comprobamos si existe el jugador
    let estaDentro = false;
    for (let [id, jugador] of mapaJugadores) {
        if (idRecibido == id) {
            estaDentro = true;
        }
    }
    return estaDentro;
}

function crearJugador(id, nombre, apellidos) {
    let nuevoJugador = new jugador(id, nombre, apellidos, edad);//creamos un nuevo jugador.
    mapaJugadores.set(id, nuevoJugador); //establecemos los datos
}

function mostrarDatosJugador(){
    for (let [id, jugador] of mapaJugadores) { //recorremos la lista de jugadores y la mostramos por consola.
        //console.log(Object.values(mapaViajeros.get(id)));
        console.log("Datos del jugador: " +
            "\nNombre: " + jugador.nombre +
            "\nApellidos: " + jugador.apellidos +
            "\nNuero de victorias: " + jugador.numeroVictorias);
    }
}


