import React, { useEffect, useState } from "react";

export default function Blocks01() {
  const [blockCount, setBlockCount] = useState(null);
  const [blockHash, setBlockHash] = useState(null);
  const [blockNumber, setBlockNumber] = useState(2572370); // Puedes inicializar con el número de bloque deseado

  useEffect(() => {
    // Llamada al endpoint para obtener el hash del bloque
    fetch(`/blockhash/${blockNumber}`)
      .then((response) => response.text())
      .then((data) => setBlockHash(data))
      .catch((error) => console.error("Error:", error));
  }, [blockNumber]);

  // Resto de tu código...

  return (
    <main>
      {/* Resto de tu JSX */}
      <div>
        <h3>BlockHash: {blockHash}</h3>
      </div>
      {/* Resto de tu JSX */}
    </main>
  );
}
