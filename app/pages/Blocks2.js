//import { getBlockHash } from "bitcoin-core/src/methods";
import React, { useEffect, useState } from "react";
import styles4 from "./../styles/Styles4.module.css";
import Blocks3 from "./Blocks3";
//  getblock  "hash del block"    retorna el número del bloque del hash correspondiente
//  getblockhash   2500000      retorna el hash del bloque 2500000   



export default function Blocks2({blockHash, blockNumberSeleccionado}) {
  const [blockData, setBlockData] = useState(null);
  console.log("Estoy en blocks22222: "+blockNumberSeleccionado);

  useEffect(() => {
    const fetchData = async () => {
      try {
          
// ./bitcoin-cli getblock "0000000000000027003b6ec59d14dc00c7284aafcdb2d26f6215ddc1ea938158" 
        //const response = await fetch(`http://localhost:3001/getblock`);
        const response = await fetch(`http://localhost:3001/blockhashnumber/${blockNumberSeleccionado}`);
        const data = await response.text();
        setBlockData(data);
        console.log(`Blockdata: ${blockData}`);
        console.log(`blockHash: ${blockHash}`);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    fetchData();  
  }, [blockNumberSeleccionado]); // Esto se ejecutará cada vez que cambien el valor de la variable blockHash

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
      {/* Aquí puedes mostrar blockData en tu interfaz de usuario */}
      <div dangerouslySetInnerHTML={{ __html: blockData }} />
      <Blocks3 blockHash={blockHash} />
    </div>
  );
}

/******************************
 * 
 *   useEffect(() => {
    
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
 * 
 * 
 */