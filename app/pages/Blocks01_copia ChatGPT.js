import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles1 from "../styles/Styles1.module.css";
import styles2 from "../styles/Styles2.module.css";
import Menu from "./../components/Menu";
import Peu from "../components/Peu";
import Blocks1 from "./Blocks1";
import Blocks2 from "./Blocks2";
import Frontend from "./Frontend";

export default function Blocks01() {
  const [blockCount, setBlockCount] = useState(null);
  const [blockNumberSeleccionado, setBlockNumberSeleccionado] = useState(2500000);
  const [currentBlock, setCurrentBlock] = useState(2450000);
  const [vacio, setVacio] = useState("");

  useEffect(() => {
    // Llamada a Frontend dentro del efecto si es la intención
    Frontend({ blockCount, setBlockCount });
  }, [blockCount]);

  const numBlocksToShow = 10;
  const blocks = [];

  const handlePrevious = () => {
    if (currentBlock > 2450000) {
      setVacio("");
    } else {
      setVacio("LastBlock");
    }
    setCurrentBlock((prevBlock) => prevBlock - numBlocksToShow);
  };

  const handleNext = () => {
    if (currentBlock > blockCount + 2450000) {
      setCurrentBlock((prevBlock) => prevBlock + numBlocksToShow);
    } else {
      setVacio("LastBlock");
    }
  };

  function miAlerta(blockNumber) {
    const selectedBlockNumber = blockNumber + blockCount;
    setBlockNumberSeleccionado(selectedBlockNumber);
  }

  for (let i = 0; i < numBlocksToShow; i++) {
    const blockNumber = currentBlock - i;
    blocks.push(
      <div key={blockNumber} className={styles2.cuadrado}>
        <h3>
          <Link href="#" onClick={() => miAlerta(blockNumber)}>
            {blockNumber + blockCount}
          </Link>
        </h3>
      </div>
    );
  }

  return (
    <main>
      <div className={styles2.container}>
        <Menu />
        <div>
          <nav>
            <ul className={styles1.menu}>
              <li>
                <p className={styles1.lastblock}>{vacio}</p>
              </li>
              <li className={styles1.nextblock}>
                <button onClick={handleNext}>NEXT</button>
              </li>
              <li className={styles1.prevblock}>
                <button onClick={handlePrevious}>PREVIOUS</button>
              </li>
            </ul>      
          </nav>
        </div>
        <div className={styles2.contenedor}>{blocks}</div>
        <br />
        <Blocks1 blockNumberSeleccionado={blockNumberSeleccionado} />
        <br />
        <Blocks2 />
        <Peu />
      </div>
    </main>
  );
}
