//import { getBlockHash } from "bitcoin-core/src/methods";
import React, { useEffect, useState } from "react";
import Blocks3 from "./Blocks3";

export default function Blocks2({blockHash}) {
  const [blockData, setBlockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
          
// ./bitcoin-cli getblock "0000000000000027003b6ec59d14dc00c7284aafcdb2d26f6215ddc1ea938158" 
        //const response = await fetch(`http://localhost:3001/getblock`);
        const response = await fetch(`http://localhost:3001/getblockhash/${blockHash}`);
        const data = await response.text();
        setBlockData(data);
        console.log(`Blockdata: ${blockData}`);
        console.log(`blockHash: ${blockHash}`);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    fetchData();  
  }, [blockHash]); // Esto se ejecutará cada vez que cambien el valor de la variable blockHash

  return (
    <div>

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