import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Peu from "../components/Peu";
//import logo from "./../logos/triangulo.jpg";
//import styles from "../styles/Home.module.css";
//import styles2 from "../styles/Styles2.module.css";

export default function Transactions() {
  return (
    <div>
      <Menu />

      <h3>Transactions111</h3>
      <table className="cabecera-tabla" width="100%" border={2}>
        <tbody>
          <tr>
            <td>Hash</td>
            <td>Value</td>
            <td>Size</td>
            <td>Fees</td>
          </tr>

          <tr>
            <td>
              <Link href="https://blockstream.info/testnet/tx/4065ff24915e5af72b1cc437c467cb0ca333ad229fa4ce933978b3df92a89ddf">
                4065ff24915e5af72b1cc437c467cb0ca333ad229fa4ce933978b3df92a89ddf
              </Link>
            </td>
            <td>2,3</td>
            <td>1.2</td>
            <td>0.005BTC</td>
          </tr>
        </tbody>
      </table>

      <br></br>
      <Peu />
    </div>
  );
}
