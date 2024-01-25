import React, { useEffect, useState } from "react";
import styles4 from "./../styles/Styles4.module.css";

export default function Blocks1({ blockNumberSeleccionado }) {
  const [blockHash, setBlockHash] = useState("00000000000070452df909e2c35304e97243c8125b1ec38b35de6df7b5cce60e");

  useEffect(() => {
    
    const fetchBlockHash = async () => {
      try {
        const response = await fetch(`http://localhost:3001/blockhashnumber/${blockNumberSeleccionado}`);
        console.log("Server Response:", response);
        const data = await response.json();
        setBlockHash("00000000b873e79784647a6c82962c70d228557d24a747ea4d1b8bbe878e1206");
        //setBlockHash("00000000000070452df909e2c35304e97243c8125b1ec38b35de6df7b5cce60e");
        

        //setBlockHash(data.blockHash);
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
          <h4>Selected Block: {blockNumberSeleccionado}</h4>
        </li>
        <li className={styles4.blocks2}>
          <h4>Block Hash: {blockHash}</h4>
        </li>
      </ul>
  
    </div>
  );
}
