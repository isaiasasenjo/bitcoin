import React from "react";
import Link from 'next/link';
import './../styles/Styles2.module.css' ;

import Bloques from '../pages/Bloques'
import Bloques1 from '../pages/Bloques1'
import Mempool from '../pages/Mempool'
import Lightning from '../pages/Lightning'
import Frontend2 from '../pages/Frontend2'

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
  const divStylesMenu = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "18px",
  };

  return (
    <div style={divStylesMenu}>

      <table className="cabecera-tabla"
        width="30%"
        
        // style={dinvStylesMenu}
        // align="right"
        // cellspacing="10"
        // cellpadding="10"
        // border="0"
      >
        <tbody>
        <tr>
          <td align="right"> 
            
            <a href="" target="_parent">
              {/* <img src={logo} width="40" height="34" /> */}
            </a>
          </td>

          <td align="right">
                <Link href="/">Home</Link>
          </td>
          <td align="right">
                <Link href="/Bloques1">Blocks-Tx</Link>
          </td>
          <td align="right">
                <Link href="/Bloques">Block-2</Link>
          </td>


        </tr>
        </tbody>
      </table>
{/* 
     <button onClick="triggerEnglish()">English</button>
    <button onClick="triggerSpanish()">Spanish</button>
*/}
    </div>

  );
};

export default Menu;
