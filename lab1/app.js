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