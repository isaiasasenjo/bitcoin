import React, { useEffect, useState } from "react";
import styles4 from "./../styles/Styles4.module.css";

export default function Blocks1({ blockNumberSeleccionado }) {
  const [blockHash, setBlockHash] = useState(null);

  useEffect(() => {
    
    const fetchBlockHash = async () => {
      try {
        const response = await fetch(`http://localhost:3001/blockhashnumber/${blockNumberSeleccionado}`);
        console.log("Server Response:", response);
        const data = await response.json();
        setBlockHash(data.blockHash);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };
    
    // Llama a la función de fetch cuando blockNumberSeleccionado cambia
    fetchBlockHash();
  }, [blockNumberSeleccionado]);

  return (
    <div>
      <ul className={styles4.blocks2}>
        <li className={styles4.blocks2}>
          {" "}
          <h3>Selected Block: {blockNumberSeleccionado}</h3>
        </li>
        <li className={styles4.blocks2}>
          <h3>Block Hash: {blockHash}</h3>
        </li>
      </ul>
      {/* Resto del contenido del componente Blocks1 */}
    </div>
  );
}
