import React from "react";
import Link from "next/link";
import "./../styles/Styles2.module.css";
import Blocks from "../pages/Blocks";
import Mempool from "../pages/Mempool";
import Lightning from "../pages/Lightning";
import Frontend2 from "../pages/Frontend2";

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
    display: "flex", // Utilizamos flexbox
    justifyContent: "flex-end", // Alineamos los elementos a la derecha
    padding: "10px", // Añadimos algún espacio de padding

  };

  return (
    <div style={divStylesMenu}>
      <table
        className="cabecera-tabla"
        width="20%"

        // style={dinvStylesMenu}
        // align="right"
        // cellspacing="10"
        // cellpadding="10"
        // border="0"
      >
        <tbody>
          <tr align="right">
            <td align="right">
              <a href="" target="_parent">
                {/* <img src={logo} width="40" height="34" /> */}
              </a>
            </td>

            <td align="right">
              <Link href="/">Home</Link>
            </td>

            <td align="right">
              <Link href="/Blocks">Blocks/Tx</Link>
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
