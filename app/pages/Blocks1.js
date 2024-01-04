import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/Styles2.module.css";

export default function Blocks() {
  
  return (
    <main>
      <div>
        <h3>Blocks-1</h3>

        <table className={styles2.tabla1}>
        
          <tr>
            <td>Height</td>
            <td>Timestamp</td>
            <td>Transactions</td>
            <td>Size(KB)</td>
            <td>Weight(KWU)</td>
          </tr>
          <tr>
            <td>2570661</td>
            <td>2024-01.04 20:50</td>
            <td>38</td>
            <td>10.66</td>
            <td>31.561</td>
          </tr>
          <tr>
            <td>2570660</td>
            <td>2024-01.04 20:44</td>
            <td>23</td>
            <td>7.139</td>
            <td>22.136</td>
          </tr>
          <tr>
            <td>2570659</td>
            <td>2024-01.04 20:40</td>
            <td>26</td>
            <td>8.555</td>
            <td>23.771</td>
          </tr>
          <tr>
            <td>2570658</td>
            <td>2024-01.04 36:45</td>
            <td>111</td>
            <td>83.821</td>
            <td>195.433</td>
          </tr>
        
        </table>
      </div>
    </main>
  );
}
