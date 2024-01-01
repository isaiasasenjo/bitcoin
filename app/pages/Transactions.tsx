import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/Styles2.module.css";
import Menu from "./../components/Menu";
import Peu from "../components/Peu";
//import logo from "./../logos/triangulo.jpg";

export default function Transactions() {
  let x = 1;

  return (
    <div>

        <Menu />
        
        <h3>Transactions</h3>
        <table className="cabecera-tabla" width="100%" border={2}>
          <tr>
            <td>Hash</td>
            <td>Value</td>
            <td>Size</td>
            <td>Fee</td>
          </tr>
          <tr>
            <a href="https://blockstream.info/testnet/tx/4065ff24915e5af72b1cc437c467cb0ca333ad229fa4ce933978b3df92a89ddf">
              <td>
                4065ff24915e5af72b1cc437c467cb0ca333ad229fa4ce933978b3df92a89ddf
              </td>
            </a>
            <td>2,3</td>
            <td>1.2</td>
            <td>0.005BTC</td>
          </tr>{" "}


        </table>
    
      <br></br>
      <Peu />
    </div>
  );
}
