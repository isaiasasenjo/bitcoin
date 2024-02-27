import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import styles1 from "./../styles/Styles1.module.css";
import styles2 from "./../styles/Styles2.module.css";
//import styles4 from "./../styles/Styles4.module.css";
import Menu from "./../components/Menu";
//import Peu from "./../components/Peu";
import Blocks1Tx from "./Blocks1Tx";
//import Blocks2 from "./Blocks2";
//import Frontend4, { blockCount } from "./Frontend4";
import Frontend from "./Frontend";
//  getblock  "hash del block"    retorna el número del bloque del hash correspondiente
//  getblockhash   2500000      retorna el hash del bloque 2500000   

export default function Transactions() {
  const [blockHash, setblockHash] = useState(null);
  const [blockCount, setBlockCount] = useState(null);
  const [lastBlock, setlastBlock] = useState(null);
  //const [lastBlock, setLastBlock] = useState(null);
  //numero de Bloque seleccionado
  //let lastBlock = 2579574; //último Bloque de la BD pero pongo uno por defecto
  const [blockNumberSeleccionado, setBlockNumberSeleccionado] =
    useState(lastBlock);
  useEffect(() => {
    // puedes hacer algo con blockCount aquí si es necesario
    setlastBlock(blockCount);
  }, [blockCount]); 
console.log("Blockcount: "+blockCount);
console.log("LastBlock: "+lastBlock);
{
    Frontend({ blockCount, setBlockCount });
}
 //lastBlock = blockCount;
  //********************************************************** */
  //gestion de los cuadros con el número de bloque que sale en pantalla
  //********************************************************** */ 
  const numBlocksToShow = 13;
  const [currentBlock, setCurrentBlock] = useState(null);

  const blocks = [];
  const [vacio, setVacio] = useState("");

console.log("Blockcount: "+blockCount);
console.log("LastBlock: "+lastBlock);
console.log("currentBlock: "+currentBlock);

  //Prodeciment Pevious block
  const handlePrevious = () => {
    if (lastBlock > currentBlock) {
      setVacio("");
      setblockHash(
        null
      );
    } else {
      setVacio("LastBlock");
    }

    setCurrentBlock((prevBlock) => prevBlock - numBlocksToShow);
  };

  console.log("Blockcount: "+blockCount);
  console.log("LastBlock: "+lastBlock);
  console.log("currentBlock: "+currentBlock);
  
    
  //Procediment  Next blocks
  const handleNext = () => {
    if (lastBlock > blockCount + currentBlock) {
      setCurrentBlock((prevBlock) => prevBlock + numBlocksToShow);
      setblockHash(
        null
      );
    } else {
      setVacio("LastBlock");
    }
  };

  function miAlerta(blockNumber) {
    setBlockNumberSeleccionado(blockNumber + blockCount);

    return blockNumberSeleccionado;
  }

  for (let i = 0; i < numBlocksToShow; i++) {
    const blockNumber = currentBlock - i;
    blocks.push(
      <div key={blockNumber} className={styles2.cuadradoT}>
        <h3>
          <Link href="#" onClick={() => miAlerta(blockNumber)}>
            {blockNumber + blockCount}
          </Link>
        </h3>
      </div>
    );
  }

//*********************************************************************** */
//***************** Acaba la gestión del pintado de los bloques en pantalla */
//************************************************************************* */
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
                <button onClick={handlePrevious}>PREVIOUS</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles2.contenedor}>{blocks}</div>
        <div>
        <Blocks1Tx blockNumberSeleccionado={blockNumberSeleccionado} />
        {/*<Blocks1Tx blockHash={blockHash} blockNumberSeleccionado={blockNumberSeleccionado} />*/}
        {/* <Peu /> */}
      </div>
      </div>
    </main>
  );
}