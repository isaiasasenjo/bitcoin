import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
export default function Bloques() {
  return (
    <main>
      <div>
        <Menu />


        <div id="output">There are a Blocks in the Network of Bitcoin
         <Link href="https://blockchair.com/es/bitcoin/testnet" target="_blank "> Testnet

        </Link>
        <html>
          <body>
            <p></p>
            <table border="1" cellPadding="12" cellSpacing={12}>
              <tr>
                <td><Link href="https://localhost:3001/blockcount">2543000</Link></td>
                <td><Link href="https://localhost:3001">2543001</Link></td>
                <td><Link href="https://localhost:3001">2543002</Link></td>
                <td><Link href="https://localhost:3001">2543003</Link></td>
                <td><Link href="https://localhost:3001">2543004</Link></td>
                <td><Link href="https://localhost:3001">2543005</Link></td>
                <td><Link href="https://localhost:3001">2543006</Link></td>
              </tr> 
            </table>
          </body>
        </html>





      </div>
      </div>
    </main>
  );
}
