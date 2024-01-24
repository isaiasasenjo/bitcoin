//import { getBlockHash } from "bitcoin-core/src/methods";
import React, { useEffect, useState } from "react";


export default function Blocks3({blockHash}) {
  const [blockData, setBlockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("ESTOY EN BLOCK2");
        console.log(`El blockHash es: ${blockHash}`);
        console.log(blockHash);
        console.log(`blockData: ${blockData}`);        
        const response = await fetch(`http://localhost:3001/getblockhash/${blockHash}`);
        const data = await response.text();
        setBlockData(data);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    fetchData();  
  }, [blockHash]); // Esto se ejecutará cada vez que cambien el valor de la variable blockHash

  return (
    <div>
            <br></br>
      Transactions:
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