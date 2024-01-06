import React, { useState } from "react";
import Link from "next/link";
import styles2 from "../styles/Styles2.module.css";
import Menu from "./../components/Menu";
import Peu from "../components/Peu";
import Blocks1 from "./Blocks1";
import Blocks2 from "./Blocks2";

export default function Blocks() {
  let lastBlock = 100000;
  const numBlocksToShow = 10;
  const [currentBlock, setCurrentBlock] = useState(lastBlock);

  const blocks = [];

  const handlePrevious = () => {
    setCurrentBlock((prevBlock) => prevBlock - numBlocksToShow);
    
   };

  const handleNext = () => {
    if (lastBlock>currentBlock){
      setCurrentBlock((prevBlock) => prevBlock + numBlocksToShow);
    }else{
    } 
    };

  for (let i = 0; i < numBlocksToShow; i++) {
    const blockNumber = currentBlock - i;
    blocks.push(
      <div key={blockNumber} className={styles2.cuadrado}>
        <h3>
          <a href={`https://blockchair.com/es/bitcoin/testnet/block/${blockNumber}`}>
            {blockNumber}
          </a>
        </h3>
      </div>
    );
  }

  return (
    <main>
      <div className={styles2.container}>
        <Menu />
        <h3>Blocks of Chain</h3>
        <div>
        <button onClick={""}>Last Block</button>
        <button onClick={""}>----</button>
        <button onClick={handleNext}>NEXT</button>
        <button onClick={handlePrevious}>PREVIOUS</button>

        </div>
        <div className={styles2.contenedor}>{blocks}</div>

        <br />
        <Blocks1 />
        <br />
        <Blocks2 />
      </div>
    </main>
  );
}
