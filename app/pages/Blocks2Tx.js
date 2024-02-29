import React, { useEffect, useState } from "react";
//import styles4 from "./../styles/Styles4.module.css";
//import Blocks2 from "./Blocks2";
//  getblock  "hash del block"    retorna el número del bloque del hash correspondiente
//  getblockhash   2500000      retorna el hash del bloque 2500000   
export default function Blocks2Tx({blockData}) {
  //const [blockData, setBlockData] = useState(null);
  console.log("Blocks2Tx.js  blockData111: "+blockData);
useEffect(() => {
  const fetchBlockHash = async () => {
    try {
      console.log("Blocks2Tx.js blockData222: "+ blockData);
        //const response = await fetch(`http://localhost:3001/transactions/${blockData}`);
        const response = await fetch(`http://localhost:3001/transactions/${blockData}`);
      console.log("Blocks2Tx.js  Server Response:", response);
      const data = await response.json();
      //const data = await response.text();
      console.log("Blocks2Tx.js DATAAAAAAAAAAAA"+data);
      //setBlockData(data.blockData);
    } catch (error) {
      console.error("Error fetching block data:", error);
    }
  };
  // Llama a la función de fetch cuando blockNumberSeleccionado cambia
  fetchBlockHash();
}, [blockData]);
}
