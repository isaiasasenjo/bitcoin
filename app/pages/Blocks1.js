//import { getBlockHash } from "bitcoin-core/src/methods";
import React, { useEffect, useState } from "react";
import styles4 from "./../styles/Styles4.module.css";
import Blocks2 from "./Blocks2";
//  getblock  "hash del block"    retorna el número del bloque del hash correspondiente
//  getblockhash   2500000      retorna el hash del bloque 2500000   

export default function Blocks1({blockNumberSeleccionado}) {
  const [blockData, setBlockData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch(`http://localhost:3001/blockhash/`);
        const response = await fetch(`http://localhost:3001/blockhash/${blockNumberSeleccionado}`);
        const data = await response.text();
        //data = data.replace("Hash: ", "");
        setBlockData(data.replace("Hash: ",""));
        
       } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };
    fetchData();  
  }, [blockNumberSeleccionado]); // Esto se ejecutará cada vez que cambien el valor de la variable blockHash

  return (
    <div>
      <ul className={styles4.blocks3}>
        <li className={styles4.blocks3}>
          {" "}
          <h4>Block: {blockNumberSeleccionado}</h4>
        </li>
        <li className={styles4.hash}>
          <h4>Block Hash: {blockData}</h4>
        </li>
      </ul>


      {/* Aquí muestro blockData en tu interfaz de usuario 
      <div dangerouslySetInnerHTML={{ __html: blockData }} />*/}

      <Blocks2 blockHash={blockData} />
      
    </div>
  );
}

/* ¿Cómo se hace una llamada al backend? 
 * En este caso al EndPoint blockhashnumber pasando el parámetro blockNumberSeleccionado
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
*/