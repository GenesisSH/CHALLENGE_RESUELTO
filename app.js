// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo')
    const nombreAmigo = inputAmigo.value.trim();


//Si està vacìo 
    if (inputAmigo ==="")  {
        alert("Por favor ingresa un nombre:");
        return;
    }

/// Adicioòn
amigos.push(nombreAmigo);
//lista actualizada
mostrarListaAmigos();
// limpia
inputAmigo.value = "";
}

function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML="";

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    })
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Al menos 2 nombres para iniciar el juego");
        return;
    }

    const amigoAleatorio = amigos [Math.floor(Math.random() * amigos.length)];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3>¡EL AMIGO SECRETO ES ${amigoAleatorio}!</h3>`;
}
        