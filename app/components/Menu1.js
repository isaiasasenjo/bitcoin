import React from "react";
import Link from "next/link";
import "./../styles/Styles2.module.css";
import styles1 from "../styles/Styles1.module.css";
import styles2 from "../styles/Styles2.module.css";
import styles3 from "../styles/Styles3.module.css";
//import Blocks from "../pages/Blocks";
//import Transactions from "../pages/Transactions";
//import Mempool from "../pages/Mempool";
//import Lightning from "../pages/Lightning";
//import Frontend2 from "../pages/Frontend2";

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
const Menu1 = () => {
  const divStylesMenu = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "18px",
    display: "flex", // Utilizamos flexbox
    justifyContent: "flex-end", // Alineamos los elementos a la derecha
    padding: "10px", // Añadimos algún espacio de padding

  };

  return (
  <div>


  
          <nav>
            <ul className={styles1.menu}>
              <li>
                  <Link href="/" >Home</Link>
              </li>
               <li >
                  <Link href="/Blocks01" className={styles3.enlacesMenu}>Blocks</Link>
              </li>
              <li >
              
                  <Link href="/Transactions" className={styles3.enlacesMenu}>Transactions</Link>
              </li>
              <li >
              
                  <Link href="/Network" className={styles3.enlacesMenu}>Network</Link>
                  <ul>
                    <li>
                    
                  <Link href="*" className={styles3.enlacesMenu}>Mainnet</Link>
                      
                    </li>
                    <li>
                    <Link href="*" className={styles3.enlacesMenu}>Testnet</Link>
                 
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

export default Menu1;
