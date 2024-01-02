import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Menu from "./../components/Menu";
import Peu from "../components/Peu";
//import logo from "./../logos/triangulo.jpg";

export default function Bloques() {
  return (
    
    <main>
      <div className={styles.container}>
        <Menu />

        <br></br>
        <Link
          href="https://www.blockchain.com/explorer/assets/btc"
          target="_blank"
          className={styles.enlaces}
        >
          <h3>
            <strong>Enlace a la Mainnet de Bitcoin</strong>
          </h3>
        </Link>
        <Link
          href="https://blockchair.com/es/bitcoin/testnet"
          target="_blank"
          className={styles.enlaces}
        >
          <h3>
            <strong>Enlace a la Tesnet de Bitcoin</strong>
          </h3>
        </Link>

        <p>
          {" "}
          <ul>
            <li>
              Blocks of Chain
          
            </li>
          </ul>
        </p>
        <Peu />
      </div>
    </main>
  );
}
