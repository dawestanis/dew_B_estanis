let resetearNombre = () => {
    document.getElementById('reset').value = "";
}

let abrirVentanaNueva = () => {
    let checkbox = document.getElementById('nuevaVentana');
    let enlace = document.getElementById('enlace');

    if (checkbox.checked)
        enlace.target = "_blanck";
    else
        link.target = "_self";
}

let mostrarImagen = () => {
    document.getElementById('imagen').style.visibility = 'visible';
}


let ocultarImagen = () => {
    document.getElementById('imagen').style.visibility = 'hidden';
}

let lanzarAlerta = () => {
    let texto = document.getElementById('alerta').value;
    alert(texto);
}

let cambiarColorDeFondo = () => {
    let color = document.getElementById('campoColor').value;
    document.body.style.backgroundColor = color;
}

let seleccionColor = () => {
    let color = document.getElementById('colores').value;
    document.body.style.backgroundColor = color;
}