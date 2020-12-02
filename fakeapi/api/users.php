<?php 
  // Decodeamos la petición para generarla como JSON. Lo deja objeto PHP
  $_POST = json_decode(stripslashes(file_get_contents("php://input")));
  
  // Obtenemos el email y el password de los parámetros pasados en la petición
  $email = $_POST->email;
  $password = $_POST->password;

  // Conformamos la respuesta estándar como un error. En PHP esto se llama Array Asociativo, ya que es algo parecido a esto: ['clave' => 'valor']
  // donde $response es [], el 'status' es la clave y 500 el valor. Para acceder al valor de la clave 'status' sería $response['status']
  $response['status'] = 500;

  // Comprobamos si $email y $password no están vacíos
  // Como realmente no tenemos donde comprobar que existen (una base de datos o algo) se me ocurrió simplemente mirar si no están vacíos.
  // Si no están vacíos, sobreescribimos la respuesta estándar con status 200 y un "token" ficticio
  if ($email && $password) {
    $response['status'] = 200;
    $response['token'] = "ayVopYGNwI";
  }

  // Ahora vamos a devolver la respuesta, indicando primero en la cabecera del mensaje, que se trata de contenido JSON
  header('Content-Type: application/json');

  // Parseamos la respuesta como si de un JSON se tratara
  echo json_encode($response);
?>