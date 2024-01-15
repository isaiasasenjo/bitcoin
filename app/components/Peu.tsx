import React from "react";
import Link from 'next/link';
import styles4 from "../styles/Styles4.module.css";
import Lightning from './../pages/Lightning'

const Peu = () => {
  
  return (
    <nav>
        <ul className={styles4.peu}>
          <li>
            <Link href="https://www.blockchain.com/explorer/assets/btc"  className={styles4.enlacesPeu} target="_blank"> Mainnet Bitcoin </Link>
          </li>       
          <li>
            <Link  href="https://mempool.space/" target="_blank" className={styles4.enlacesPeu}>Mempool
            </Link>
          </li>
          <li>
            <Link  href="#"  className={styles4.enlacesPeu}>English
            </Link>
          </li>
         </ul>
    
         <ul className={styles4.peu}>
          <li>
            <Link href="https://blockchair.com/es/bitcoin/testnet"  className={styles4.enlacesPeu} target="_blank"> Testnet Bitcoin </Link>
          </li>
          <li>
            <Link  href="/Lightning" target="_blank" className={styles4.enlacesPeu}>Lightning Network
            </Link>
          </li>
          <li>
            <Link  href="#"  className={styles4.enlacesPeu}>Castellano
            </Link>
          </li>
         </ul> 
    </nav>
  );
};
export default Peu;
