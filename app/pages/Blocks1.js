import React, { useEffect, useState } from "react";

export default function Blocks1({ blockNumberSeleccionado }) {
  const [blockHash, setBlockHash] = useState(null);

  useEffect(() => {
    // Realiza la llamada al backend para obtener el hash del bloque seleccionado
    const fetchBlockHash = async () => {
      try {
        const response = await fetch(`/blockhash`);
        const data = await response.json();
        setBlockHash(data.blockHash);
      } catch (error) {
        console.error("Error:", error);
        // Puedes manejar el error de alguna manera si es necesario
      }
    };

    // Llama a la función de fetch cuando blockNumberSeleccionado cambia
    fetchBlockHash();
  }, [blockNumberSeleccionado]);

  return (
    <div>
      <h3>Selection Block: {blockNumberSeleccionado}</h3>
      <p>BlockHash: {blockHash}</p>
      {/* Resto del contenido del componente Blocks1 */}
    </div>
  );
}
