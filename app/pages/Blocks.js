import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/Styles2.module.css";
import Menu from "./../components/Menu";
import Peu from "../components/Peu";
//import logo from "./../logos/triangulo.jpg";

export default function Blocks() {
  let last_block = 2569713;
  
  return (
    
    <main>
      <div className={styles2.container}>
        <Menu />
<h3>Blocks of Chain</h3>

      <div className={styles2.contenedor}>
         <div className={styles2.cuadrado}>
            <h3>
              <a href="https://blockchair.com/es/bitcoin/testnet/block/2569713">{last_block}</a>
            </h3>
        </div>
        <div className={styles2.cuadrado}>
            <h3>
              {last_block-1}
            </h3>
        </div>
        <div className={styles2.cuadrado}>
            <h3>
              {last_block-2}
            </h3>
        </div>
        <div className={styles2.cuadrado}>
            <h3>
              {last_block-3}
            </h3>
        </div>
        <div className={styles2.cuadrado}>
            <h3>
              {last_block-4}
            </h3>
        </div>        <div className={styles2.cuadrado}>
            <h3>
              {last_block-5}
            </h3>
        </div>        <div className={styles2.cuadrado}>
            <h3>
              {last_block-6}
            </h3>
        </div>        <div className={styles2.cuadrado}>
            <h3>
              {last_block-7}
            </h3>
        </div>
      </div>
      <br></br>
        <Peu />
      </div>
    </main>
  );
}
