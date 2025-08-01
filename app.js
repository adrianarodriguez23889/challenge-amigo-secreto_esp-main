// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //se captura el valor del imput
    let input = document.getElementById("amigo");
    //se eliminan los espacios en blanco
    let nombre = Input.value.trim();

    //vemos que no esté vacío
    if(nombre === ""){
        alert("Por favor, incerte un nombre.");
        return;
    }
    //agregando un nombre en el array
    amigos.push(nombre);

    //limpiando el campo
    input.value = "";
}