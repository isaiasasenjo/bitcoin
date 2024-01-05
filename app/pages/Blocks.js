import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/Styles2.module.css";
import Menu from "./../components/Menu";
import Peu from "../components/Peu";
import Blocks1 from "./Blocks1";
import Blocks2 from "./Blocks2";
//import logo from "./../logos/triangulo.jpg";

export default function Blocks() {
    const lastBlock = 2569713;
    const numBlocksToShow = 10; // Número de bloques que deseas mostrar
    const blocks = [];
  
    for (let i = 0; i < numBlocksToShow; i++) {
      const blockNumber = lastBlock - i;
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
        <br></br>
        <Blocks1 />
        <br></br>
        <Blocks2 />
      </div>


        
 </main>   
)}
