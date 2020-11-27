window.onload = function () {
    let data = {
        provincia: 41,
        municipio: 41091
    }

    loadFile("https://www.el-tiempo.net/api/json/v2/provincias/" + data.provincia + "/municipios/" + data.municipio);

    function loadFile(file) {

        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                render(JSON.parse(rawFile.responseText));
            }
        }

        rawFile.send(null);

    }

    function render(json) {
        document.getElementById("ciudad").innerHTML = json.municipio.NOMBRE;
        document.getElementById("fecha").innerHTML = json.fecha;
        document.getElementById("estado").innerHTML = json.stateSky.description;
        document.getElementById("temp_actual").innerHTML = json.temperatura_actual + "º";
        document.getElementById("temp_max").innerHTML = json.temperaturas.max + "º";
        document.getElementById("temp_min").innerHTML = json.temperaturas.min + "º";
        document.getElementById("humedad").innerHTML = json.humedad + "º";
    }
}