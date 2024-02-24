

//import { getBlockHash } from "bitcoin-core/src/methods";
import React, { useEffect, useState } from "react";


export default function Blocks2() {
  const [blockData, setBlockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/getblock/`);
        //const response = await fetch(`http://localhost:3001/getblock/`);
        const data = await response.text();
        setBlockData(data);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    fetchData();  
  }); // Esto se ejecutará cada vez que cambien el valor de la variable blockHash



  return (
    <div>
      
            {/* Aquí puedes mostrar blockData en tu interfaz de usuario */} 
      <div dangerouslySetInnerHTML={{ __html: blockData }} />
      
      {/*<h4>Blocksssssss: {blockData}</h4>*/}
    </div>
  );
}
