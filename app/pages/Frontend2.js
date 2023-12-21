const axios = require("axios");

axios.get("http://localhost:3000/blockcount").then((response) => {
  // La petición se ha realizado correctamente
  const data = response.data;

  // Procesa los datos de la respuesta
}).catch((error) => {
  // La petición se ha realizado con errores
});



