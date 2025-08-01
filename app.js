// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //se captura el valor del imput
    let input = document.getElementById("amigo");
    //se eliminan los espacios en blanco
    let nombre = input.value.trim();

    //vemos que no esté vacío
    if(nombre === ""){
        alert("Por favor, incerte un nombre.");
        return;
    }
    //agregando un nombre en el array
    amigos.push(nombre);

    //limpiando el campo
    input.value = "";

    //mostramos en la lista
    mostrarLista();
}

//creamos función para mostrar la lista
function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    //limpiamos lista anterior
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

//creamos la funciòn para sortear a los amigos
function sortearAmigo(){
    if (amigos.length === 0){
        document.getElementById("resultado").innerHTML = "<li>No hay amigos para sortear</li>";
        return;
    }
    //generar indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()* amigos.length);

    //traer nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //ganador
  document.getElementById("resultado").innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}
