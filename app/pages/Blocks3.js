//import { getBlockHash } from "bitcoin-core/src/methods";
import React, { useEffect, useState } from "react";

{/* Block 2579820 */}
{/*0000000000000009dcd8ee8f641154453722d6c099f4b4458dfb36dc2d7c2635*/}

export default function Blocks3({}) {
  const [blockHash, setBlockHash] = useState("0000000000000009dcd8ee8f641154453722d6c099f4b4458dfb36dc2d7c2635");
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
    <div>
      Transactions: 
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