window.onload = function () {
    let data = {
        cod_prov: 41,
        cod_muni: 41091
    }
    loadfile("https://www.el-tiempo.net/api/json/v2/provincias/" + data.cod_prov + "/municipìos/" + data.cod_muni);

    function  loadfile(file){
        var rawfile = new XMLHttpRequest();

        rawfile.open("GET",file,true);
        rawfile.onreadystatechange = function(){
            if(rawfile.readyState === 4 && rawfile.status == "200"){
                render(JSON.parse(rawfile.responseText));
            }
        }
        rawfile.send(null);
    }

    function render(json){
        document.getElementById("ciudad").innerHTML = json.municipio.NOMBRE;
        document.getElementById("estado").innerHTML = json.statesky.description;
        document.getElementById("temperatura_actual").innerHTML = json.temperatura_actual + "º";
        document.getElementById("temp_max").innerHTML = json.temperaturas.max + "º";
        document.getElementById("temp_min").innerHTML = json.temperaturas.min + "º";
    }

}