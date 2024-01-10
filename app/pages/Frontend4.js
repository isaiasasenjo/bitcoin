import { useEffect, useState } from "react";

const Frontend4 = ({ blockCount, setBlockCount }) => {
  useEffect(() => {
    // Llamada al Endpoint del Backend
    fetch("http://localhost:3001/blockcount")
      .then(response => response.json())
      .then(data => setBlockCount(data.blockCount))
      .catch(error => console.error("Error fetching blockcount:", error));
  }, []);
console.log(`blockcount dentro de Frontend4 vale: ${blockCount}`)
  // blockCount tiene el último bloque minado
  return (
    <div>
      <p>
        Último bloque minado: {blockCount === null ? "Cargando..." : blockCount}
      </p>
    </div>
  );
};

export default Frontend4;

