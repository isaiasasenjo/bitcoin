import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/Styles2.module.css";
import Menu2 from "./../components/Menu2";
import Peu from "../components/Peu";
//import logo from "./../logos/triangulo.jpg";

export default function Blocks() {
  let last_block = 2568600;
  
  return (
    
    <main>
      <div className={styles2.container}>
        <Menu2 />
<h3>Blocks of Chain</h3>

      <div className={styles2.contenedor}>
         <div className={styles2.cuadrado}>
            <h3>
              {last_block}
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
