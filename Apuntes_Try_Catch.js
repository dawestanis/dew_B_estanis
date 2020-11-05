function calcular(num1, num2) {
    return num1 * num2;
}

function operar() {
    try {
        var numero1 = document.getElementById("primer").value;
        var numero2 = document.getElementById("segundo").value;
        console.log(sumar(numero1, numero2));
    } catch (err) {
        alert("se ha producido un error" + err.message);
    }

}