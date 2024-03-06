//import { getBlockHash } from "bitcoin-core/src/methods";
import React, { useEffect, useState } from "react";

{/* Block 2579820 */}
{/*0000000000000009dcd8ee8f641154453722d6c099f4b4458dfb36dc2d7c2635*/}

export default function Blocks2Tx({blockHash}) {
  //const [blockHash, setBlockHash] = useState({blockHash});
  console.log("linea 9 Blocks2Tx blockHash:"+blockHash);
  const [blockData, setBlockData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/transactions/${blockHash}`);
        const data = await response.text();
        setBlockData(data);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    fetchData();  
  }, [blockHash]); // Esto se ejecutará cada vez que cambien el valor de la variable blockHash



  return (
      <div dangerouslySetInnerHTML={{ __html: blockData }} />
  );
}

/* ¿Cómo se hace una llamada al backend? 
 * En este caso al EndPoint transactions con el parámetro blockHash
    
  useEffect(() => {
    if (!blockHash) return; // Asegúrarse  de que blockHash no esté vacío

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/transactions/${blockHash}`);
        const data = await response.text();
        setBlockData(data);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    fetchData();
  }, [blockHash]); // Dependencia de useEffect es ahora blockHash

 * 
*/