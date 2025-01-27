// Declarar un array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById('campoNombre');
  const nombre = input.value.trim();

  // Validar la entrada
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = '';

  // Actualizar la lista en la interfaz
  actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
  // Obtener el elemento de la lista
  const lista = document.getElementById('listaAmigos');

  // Limpiar la lista existente
  lista.innerHTML = '';

  // Iterar sobre el array y agregar elementos <li> a la lista
  for (let amigo of amigos) {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
  // Validar que haya amigos en el array
  if (amigos.length === 0) {
    alert('No hay amigos en la lista para sortear.');
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
