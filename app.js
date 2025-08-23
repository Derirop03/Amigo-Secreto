let amigos = [];

// Habilitar botón Añadir cuando el usuario escriba algo
document.getElementById("amigo").addEventListener("input", function() {
    let botonAñadir = document.getElementById("añadir");
    if (this.value.trim() !== "") {
        botonAñadir.disabled = false;
    } else {
        botonAñadir.disabled = true;
    }
});

// Agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // 🚨 Validación: si está vacío, alert
    if (nombre === "") {
        alert("Por favor, escribe un nombre antes de añadir.");
        return;
    }

    // Guardar nombre en el array
    amigos.push(nombre);

    // Mostrar lista en pantalla
    mostrarLista();

    // Limpiar input y deshabilitar botón
    input.value = "";
    document.getElementById("añadir").disabled = true;
}

// Mostrar la lista en pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar antes de volver a dibujar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ` El amigo secreto ${amigoSecreto}`;
}
