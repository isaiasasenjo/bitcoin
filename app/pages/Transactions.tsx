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

      <h3>Transactions</h3>
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
          <tr>
            <td>
              <Link href="https://blockstream.info/testnet/tx/7cf34344bd28091a7b9a48e5c59360787bd55f8890fff0f45572f55319e909da">
              7cf34344bd28091a7b9a48e5c59360787bd55f8890fff0f45572f55319e909da
              </Link>
            </td>
            <td>1,5</td>
            <td>0.8</td>
            <td>0.003BTC</td>
          </tr>
          <tr>
            <td>
              <Link href="https://blockstream.info/testnet/tx/7b4599c550cc9a26fa3de08ccff4a42f44fd1e672e43fcc3ed890c65cb411ef0">
              7b4599c550cc9a26fa3de08ccff4a42f44fd1e672e43fcc3ed890c65cb411ef0
              </Link>
            </td>
            <td>3.1</td>
            <td>2.52</td>
            <td>0.00002BTC</td>
          </tr>
        </tbody>
      </table>

      <br></br>
      <Peu />
    </div>
  );
}
