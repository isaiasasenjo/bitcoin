import React, { useEffect, useState } from "react";
//import styles4 from "./../styles/Styles4.module.css";
//import Blocks2 from "./Blocks2";
//  getblock  "hash del block"    retorna el número del bloque del hash correspondiente
//  getblockhash   2500000      retorna el hash del bloque 2500000   
export default function Blocks2Tx({blockHash}) {
  const [blockData, setBlockData] = useState(null);


useEffect(() => {
    
  const fetchBlockHash = async () => {
    try {
      console.log("ESTOY EN Blocks2Tx");
        const response = await fetch(`http://localhost:3001/transactions/`);
        //const response = await fetch(`http://localhost:3001/transactions/${blockData}`);
      console.log("Server Response:", response);
      const data = await response.json();
      setBlockData(data.blockData);
    } catch (error) {
      console.error("Error fetching block data:", error);
    }
  };
  
  // Llama a la función de fetch cuando blockNumberSeleccionado cambia
  fetchBlockHash();
}, [blockData]);
}
