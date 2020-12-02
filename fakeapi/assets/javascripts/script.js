// FAKE LOGIN
// Queremos simular un login con objeto XMLHttpRequest y un POST

var button = document.getElementById('btn-submit');
var usersURL = 'http://localhost/json/fakeapi/api/users.php';
var filmsURL = 'http://localhost/json/fakeapi/db/films.json';

// Controlamos el evento click del botón
button.addEventListener('click', function() {
  var email = document.getElementById('email');
  var password = document.getElementById('password');

  // Miramos si el campo email tiene valor y si no lo tiene, indicamos el error
  // Si tiene valor, pero el formato no es válido, también lo indicamos, con una expresión regular
  if (!email.value) {
    alert('Debes indicar el email');
    return;
  } else if (!isValidEmail(email.value)) {
    alert('Formato de email incorrecto');
    return;
  }

  // Ahora miramos si se ha introducido contenido en el campo password, y si no lo tiene, indicamos error
  // Y si la longitud del contenido es, al menos, de 4 caracteres
  if (!password.value) {
    alert('Debes indicar la contraseña');
    return;
  } else if (password.value.length < 4) {
    alert('La contraseña debe ser mayor de 4 caracteres');
    return;
  }

  // Una vez ha ido todo bien, logueamos.
  login(JSON.stringify({ email: email.value, password: password.value }));
  
});

function isValidEmail(value){      
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value); 
}

function getFilms() {
  //sacar de la cookies el token y enviarlo por POST

  // Creamos el objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  
  // Abrimos la comunicación
  xhr.open('GET', filmsURL, true);

  // Añadimos 2 cabeceras para indicar que estamos realizando una petición JSON, y que la respuesta que aceptamos es JSON.
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');

  // Comprobamos el estado el objeto
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parseamos la respuesta a JSON para poder tratarla como si fuera un objeto con propiedades
      var result = JSON.parse(xhr.response);

      // Obtenemos el objeto del DOM que queremos manipular
      var tbody = document.getElementsByClassName('films')[0];

      // Como el resultado es un array de objetos, recorremos dicho array y creamos elemento html para mostrar el resultado
      result.forEach(function(currentValue, index, array) {
        var tr = document.createElement('tr');
        var i = "<td>" + (index + 1) + "</td>";
        var title = "<td>" + currentValue.Title + "</td>";
        var director = "<td>" + currentValue.Director + "</td>";
        var year = "<td>" + currentValue.Year + "</td>";
        var genre = "<td>" + currentValue.Genre + "</td>";
        tr.innerHTML = i + title + director + year + genre;
        tbody.append(tr);
      });

      // Si todo ha ido bien, quitamos el formulario del login
      document.getElementById('form').classList.add('d-none');

      // Y mostramos la tabla donde va el listado de las películas
      document.getElementById('table').classList.remove('d-none');
    } else {
      // Si no ha ido bien, nos mostrará un mensaje de error.
      console.error(xhr.statusText);
    }
  }

  xhr.send();
}

// Este método para hacer un login asíncrono, pero no es posible hacerlo haciendo POST contra ficheros, 
// con lo que habría que implementar una API para ello, y su manipulación sería similar a esto con un objeto XMLHttpRequest
function login(data) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', usersURL, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      getFilms();
      guardarcookies(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }

  xhr.send(data);
  return false;
}

function guardarcookies(data){
  console.log(data);
}