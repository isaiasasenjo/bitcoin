import React, { useEffect, useState } from "react";
import styles4 from "../styles/Styles4.module.css";

export default function Blocks1({ blockNumberSeleccionado }) {
  const [blockHash, setBlockHash] = useState(null);

  useEffect(() => {
    // Realiza la llamada al backend para obtener el hash del bloque seleccionado
    const fetchBlockHash = async () => {
      try {
        const response = await fetch(`/blockhash1/${blockNumberSeleccionado}`);
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
      <nav>
        <ul className={styles4.blocks1}>
          <li>
            <h3>Selected Block: {blockNumberSeleccionado}</h3>
          </li>
          <li>
            <h3>Block Hash: {blockHash}</h3>
          </li>
        </ul>
      </nav>

      {/* Resto del contenido del componente Blocks1 */}
    </div>
  );
}
