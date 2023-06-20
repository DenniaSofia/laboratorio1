# laboratorio_1
Esta es una web que calcula el año de tu nacimiento. Lo único que tienes que hacer es insertar tu edad. Fue realizada como práctica en la clase de Diseño Web para los estudiantesde tercer año de Diseño Gráfico y Multimedia. Para elaborarla se utilizó el programa de Visual Studio Code, insertando los códigos correspondientes al html, css y java script facilitados por el docente. A continuación, se detalla la estructura que está detrás de este primer ejercicio:

ARCHIVO HTML
Este archivo es el texto de la página web, que está «marcado» con estos códigos para dar instrucciones al navegador web sobre cómo mostrar el texto.


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css">
    <title>Práctica 1</title>
</head>
<body>
    <h1>Calcula tu nacimiento:</h1>
<div id="contenedor">
    <input type="text" id="entrada" placeholder="Ingresa tu edad">
    <button id="agregar">Calcular</button>
    <h2 id="respuesta"></h2>
</div>
<ul id="lista">
</ul>
    <script src="app.js"></script>
</body>
</html>


ARCHIVO CSS
La hoja de estilo CSS se utiliza para dar un formato adecuado al HTML. De este modo, se definieron atributos como el diseño, el color y la forma de los elementos individuales de HTML.

body{
    background-color: #e8e8e8;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}
h1{
    text-align: center;
    color: rgb(246, 0, 0);
}
#contenedor{
    text-align: center;
}
input{
    padding: 10px;
    font-size: 16px;
}
button{
    padding: 10px;
    cursor: pointer;
}


ARCHIVO JAVA SCRIPT
Mediante el archivo de Java script se logra hacer una página web interactiva. De esta manera, el objetivo es mejorar la experiencia del usuario en el sitio web.

const edad = document.getElementById("entrada");
const boton= document.getElementById("agregar");
const respuesta = document.getElementById("respuesta");

function mensaje(){
    //alert("Hicistes click en el boton");
    const nac = 2023-parseInt(edad.value);
    //alert("Nacistes en: " + nac);

    respuesta.innerHTML = "Tu fecha de nacimiento es: " + nac;
    edad.value="";
}
edad.addEventListener("keydown",(event)=>{
    if (event.key==="Enter"){
        mensaje();
    }
});
boton.addEventListener("click", mensaje);
