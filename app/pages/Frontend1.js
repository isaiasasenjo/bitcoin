//version of FrontEnd http easy
async function getBlockCount() {
  const response = await fetch("http://localhost:3000/blockcount");
  if (response.ok) {
    // La petición se ha realizado correctamente
    const data = await response.json();
    // Mostrar el número de bloques en la pantalla
    document.querySelector("#blockcount").textContent = data.blockcount;
  } else {
    // La petición se ha realizado con errores
  }
}

// Llamada a la función asíncrona
getBlockCount();