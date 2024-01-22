//import { getBlockHash } from "bitcoin-core/src/methods";
import React, { useEffect, useState } from "react";

export default function Blocks2({hash}) {
  const [blockData, setBlockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("ESTOY EN BLOCK2");
        console.log(`El hash es: ${hash}`);
        console.log(hash);
                
        const response = await fetch(`http://localhost:3001/getblockhash/${hash}`);
        const data = await response.text();
        setBlockData(data);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    fetchData();  
  }, [hash]); // Esto se ejecutará cada vez que cambien el valor de la variable hash

  return (
    <div>

      {/* Aquí puedes mostrar blockData en tu interfaz de usuario */}
      <div dangerouslySetInnerHTML={{ __html: blockData }} />
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