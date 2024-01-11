import React, { useEffect,useState } from "react";
import Link from "next/link";
import styles2 from "../styles/Styles2.module.css";
import Menu from "./../components/Menu";
import Peu from "../components/Peu";
import Blocks1 from "./Blocks1";
import Blocks2 from "./Blocks2";
//import Frontend4, { blockCount } from "./Frontend4";
import Frontend from "./Frontend"; 

export default function Blocks() {
  const [blockCount, setBlockCount] = useState(null);
 
  let lastBlock = 2450000;
  useEffect(() => {
    
    // puedes hacer algo con blockCount aquí si es necesario
  }, [blockCount]);
  {Frontend({ blockCount, setBlockCount })}
  lastBlock = blockCount;  
  const numBlocksToShow = 10;
  const [currentBlock, setCurrentBlock] = useState(lastBlock);

  const blocks = [];

  const [vacio, setVacio] = useState('');
  const handlePrevious = () => {

 
    if (lastBlock>currentBlock){
      setVacio('');
    }else{
      setVacio('LastBlock');
    } 

    setCurrentBlock((prevBlock) => prevBlock - numBlocksToShow);

    
   };

  const handleNext = () => {

    if (lastBlock>currentBlock){
      setCurrentBlock((prevBlock) => prevBlock + numBlocksToShow);
    }else{
      setVacio('LastBlock');
    } 
    };

  for (let i = 0; i < numBlocksToShow; i++) {
    const blockNumber = currentBlock - i;
    blocks.push(
      <div key={blockNumber} className={styles2.cuadrado}>
        <h3>
          <a href={`https://blockchair.com/es/bitcoin/testnet/block/${blockNumber+blockCount}`} className={styles2.enlaces}target="_blank">
            {blockNumber+blockCount}
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
