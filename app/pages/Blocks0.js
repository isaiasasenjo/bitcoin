import React, { useState } from "react";
import Link from "next/link";
import styles2 from "../styles/Styles2.module.css";
import Menu from "./../components/Menu";
import Peu from "../components/Peu";
import Blocks1 from "./Blocks1";
import Blocks2 from "./Blocks2";

export default function Blocks() {
  const lastBlock = 2569713;
  const numBlocksToShow = 10;
  const [currentBlock, setCurrentBlock] = useState(lastBlock);

  const blocks = [];

  const handlePrevious = () => {
    setCurrentBlock((prevBlock) => prevBlock - numBlocksToShow);
  };

  const handleNext = () => {
    setCurrentBlock((prevBlock) => prevBlock + numBlocksToShow);
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
        <div className={styles2.contenedor}>{blocks}</div>
        <div>
          <button onClick={handlePrevious}>PREVIOUS</button>
          <button onClick={handleNext}>NEXT</button>
        </div>
        <br />
        <Blocks1 />
        <br />
        <Blocks2 />
      </div>
    </main>
  );
}
