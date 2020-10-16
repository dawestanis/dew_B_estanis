document.write("<h1>Ordenar un array en JavaScript</h1>");
document.write("<p>Vamos a intentar ordenar el siguiente array <strong>[12, 3, 6, 32, 56, 101]</strong></p>");

function ordenar() {
    let array = [12, 3, 6, 32, 56, 101];
    let temp;
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    document.write("<p>El array ordenado quedaria de la siguiente manera <strong> [" 
    + array + "] </strong></p>");
}



window.onload = () => {
    document.getElementById('boton').onclick = ordenar;
}