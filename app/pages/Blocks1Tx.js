//import { getBlockHash } from "bitcoin-core/src/methods";
import React, { useEffect, useState } from "react";
import styles4 from "./../styles/Styles4.module.css";

//import Blocks3 from "./Blocks3";
import Blocks2Tx from "./Blocks2Tx";
//  getblock  "hash del block"    retorna el número del bloque del hash correspondiente
//  getblockhash   2500000      retorna el hash del bloque 2500000   
export default function Blocks1Tx({blockNumberSeleccionado}) {
  const [blockData, setBlockData] = useState(null);
  useEffect(() => {
    console.log("blockNumberSeleccionado actualizado:", blockNumberSeleccionado);
    const fetchData = async () => {
      try {
        //const response = await fetch(`http://localhost:3001/blockhash/`);
        console.log("Blocks1Tx.js blockNumber Seleccionado: "+blockNumberSeleccionado);
        const response = await fetch(`http://localhost:3001/blockhashtx/${blockNumberSeleccionado}`);
        console.log("ESTOY EN Blocks1Tx.js")
        const data = await response.text();
        //data = data.replace("Hash: ", "");
        setBlockData(data.replace("Hash: ",""));
        console.log("Blocks1Tx blockData: "+blockData);       
       } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };
    fetchData();  
  }, [blockNumberSeleccionado]); // Esto se ejecutará cada vez que cambien el valor de la variable blockHash

  console.log("Blocks1Tx Hash: "+ blockData);
 
  return (
    <div>
      <ul className={styles4.blocks3}>
        <li className={styles4.blocks3}>
          {" "}
          <h4>Block Number: {blockNumberSeleccionado}</h4>
        </li>

        {/* Block 2579820 */}
        
        {/*0000000000000009dcd8ee8f641154453722d6c099f4b4458dfb36dc2d7c2635*/}
        <li className={styles4.blocks3}>
          <h4>Block Hash: {blockData}</h4>
        </li>
      </ul>
        {/*<Blocks2Tx blockData={blockData}/>*/}
        
    <Blocks2Tx blockHash={blockData}/>
      {/* Aquí puedes mostrar blockData en tu interfaz de usuario 
      <div dangerouslySetInnerHTML={{ __html: blockData }} />*/}

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