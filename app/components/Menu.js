import React from "react";
import Link from 'next/link';
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

      <table
        width="100%"
        // style={dinvStylesMenu}
        // align="left"
        // cellspacing="10"
        // cellpadding="10"
        // border="0"
      >
        <tbody>
        <tr>
          <td align="center"> 
            
            <a href="" target="_parent">
              {/* <img src={logo} width="40" height="34" /> */}
            </a>
          </td>

          <td align="center">
                <Link href="/">Home</Link>
          </td>
          <td align="center">
                <Link href="/Bloques1">Bloques-1</Link>
          </td>
          <td align="center">
                <Link href="/Bloques">Bloques/Tx</Link>
          </td>
          <td align="center">
                <Link href="/Frontend2">Frontend2</Link>
          </td>
          <td align="center">
                <Link href="/Lightning">Lightning</Link>
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
