import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import styles1 from "./../styles/Styles1.module.css";
import styles2 from "./../styles/Styles2.module.css";
//import styles3 from "./../styles/Styles3.module.css";
import Menu from "./../components/Menu";
import Peu from "./../components/Peu";
import Blocks1 from "./Blocks1";
import Blocks2 from "./Blocks2";
//import Frontend4, { blockCount } from "./Frontend4";
import Frontend from "./Frontend";
//import { getBlockHash } from "bitcoin-core/src/methods";

//  getblock  "hash del block"    retorna el número del bloque del hash correspondiente
//  getblockhash   2500000      retorna el hash del bloque 2500000   

export default function Blocks() {
  const [blockHash, setblockHash] = useState(null);
  const [blockCount, setBlockCount] = useState(null);
  //numero de Bloque seleccionado
  let lastBlock = 2578600; //último Bloque de la BD pero pongo uno por defecto
  const [blockNumberSeleccionado, setBlockNumberSeleccionado] =
    useState(lastBlock);
  useEffect(() => {
    // puedes hacer algo con blockCount aquí si es necesario
  }, [blockCount]); 

  {
    Frontend({ blockCount, setBlockCount });
  }
  lastBlock = blockCount;

  //********************************************************** */
  //gestion de los cuadros con el número de bloque que sale en pantalla
  //********************************************************** */ 
  const numBlocksToShow = 10;
  const [currentBlock, setCurrentBlock] = useState(lastBlock);

  const blocks = [];
  const [vacio, setVacio] = useState("");
  const handlePrevious = () => {
    if (lastBlock > currentBlock) {
      setVacio("");
      setblockHash(
        "00000000b873e79784647a6c82962c70d228557d24a747ea4d1b8bbe878e1206"
      );
    } else {
      setVacio("LastBlock");
    }

    setCurrentBlock((prevBlock) => prevBlock - numBlocksToShow);
  };

  const handleNext = () => {
    if (lastBlock > blockCount + currentBlock) {
      setCurrentBlock((prevBlock) => prevBlock + numBlocksToShow);
      setblockHash(
        "000000006c02c8ea6e4ff69651f7fcde348fb9d557a06e6957b65552002a7820"
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
      <div key={blockNumber} className={styles2.cuadrado}>
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

  console.log(`Estoy en Blocks.js, El hash es: ${blockHash}`);
  console.log(`blockNumberSeleccionado: ${blockNumberSeleccionado}`);
  
  
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




    

        <Blocks2 blockHash={blockHash} blockNumberSeleccionado={blockNumberSeleccionado} />

        <br></br>
        <Peu />
      </div>
    </main>
  );
}

/*************
 * 
 *     <Blocks1 blockNumberSeleccionado={blockNumberSeleccionado} blockHash={blockHash}/> 
 *     <Blocks2 blockHash={blockHash} blockNumberSeleccionado={blockNumberSeleccionado} />
 * 
 * 
 * <Blocks1 blockNumberSeleccionado = {blockNumberSeleccionado}/> 
 * <Blocks2 blockNumberSeleccionado = {blockNumberSeleccionado}/>
 * 
 * 
Paso de dos parámetros de un bloque a otro

Si se desea pasar dos parámetros de Blocks.js a Blocks1.js   
COMO dos props, blockNumberSeleccionado y hash, de Bloks a tu componente Blocks1, se hace de la forma:

En Blocks.js
<Blocks1 blockNumberSeleccionado={blockNumberSeleccionado} hash={hash} />
Dentro del componente Blocks1, se accede de la forma:

En Blocks1.js
export default function Blocks1({ blockNumberSeleccionado, hash }) {
  // Ahora puedes usar blockNumberSeleccionado y hash dentro de tu componente
  // ...
 */
