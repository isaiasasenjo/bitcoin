import React from "react";
import Link from "next/link";
import "./../styles/Styles2.module.css";
import styles3 from "../styles/Styles3.module.css";
import styles4 from "../styles/Styles4.module.css";

//import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";
//import language from "./../js/lang.json"; //language es un objecte que apunta al fitxer idioma.json
//import idioma2 from "./../js/lang2.json"; //language es un objecte que apunta al fitxer idioma.json
//import logo from "../logos/logo.svg";
//variables globales https://www.youtube.com/watch?v=HlY2jF74s_c
//let idioma = 0;
//import idioma2 from "../js/lang2.json"; //language es un objecte que apunta al fitxer idioma.json
//let idioma = parseInt(localStorage.getItem("idioma"));
//let idioma_etiquetas = idioma2[idioma];

// import Boton from "./Boton";
const Menu = () => {
  return (
    <div>
      <nav>
        <ul className={styles4.menu}>
          <li>
            <Link href="/" className={styles3.enlacesMenu}>Home </Link>
          </li>
          <li>
            <Link href="/Blocks" className={styles3.enlacesMenu}>
              Blocks
            </Link>
          </li>
          <li>
            <Link href="/Transactions" className={styles3.enlacesMenu}>
              Transactions
            </Link>
          </li>
                    <li>
            <Link href="/Contacts" className={styles3.enlacesMenu}>
              Contact
            </Link>
          </li>
          
          <li>
            <Link href="/Network" className={styles3.enlacesMenu}>
              Network
            </Link>
            <ul>
              <li>
                <Link href="#" className={styles3.enlacesMenu}>
                  Mainnet
                </Link>
              </li>
              <li>
                <Link href="#" className={styles3.enlacesMenu}>
                  Testnet
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* 
     <button onClick="triggerEnglish()">English</button>
    <button onClick="triggerSpanish()">Spanish</button>
*/}
    </div>
  );
};

export default Menu;
