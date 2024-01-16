import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/Styles2.module.css";


export default function Blocks1({ blockNumberSeleccionado }){

  console.log(`BlockNumberSeleccionado: ${blockNumberSeleccionado}`)
   



  return (
    
      <div>
        <h3>Selection Block: {blockNumberSeleccionado}</h3>

        <table className={styles2.tabla1}>
        <tbody>
          <tr>
            <td>Height</td>
            <td>Timestamp</td>
            <td>Transactions</td>
            <td>Size(KB)</td>
            <td>Weight(KWU)</td>
          </tr>
           <tr>
            <td>2570659</td>
            <td>2024-01.04 20:40</td>
            <td>26</td>
            <td>8.555</td>
            <td>23.771</td>
          </tr>
          </tbody>        
        </table>
      </div>

  );
}
