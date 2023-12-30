import React from "react";
import Link from 'next/link';
import Lightning from './../pages/Lightning'
// const miConstante = <h3>Hi Folder</h3>;

const Peu = () => {
  const divStyles = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "1rem",
  };
  return (
    <div style={divStyles}>
      {/* {miConstante} */}
      <table width="100%">
      <tbody>
        <tr>
          <td> <a  href="https://www.blockchain.com/explorer/assets/btc" target="_blank"> 
          Mainnet Bitcoin</a></td>
          <td> <a  href="https://mempool.space/" target="_blank"> 
          Mempool</a></td>
          <td>Mainnet</td>
          
          <td> English</td>
        </tr>
        <tr>
        <td> <a  href="https://blockchair.com/es/bitcoin/testnet" target="_blank"> 
        Tesnet Bitcoin</a></td>
          <td>   <Link href="/Lightning">Lightning</Link></td>
          <td>Testnet</td>
          <td> Spanish</td>
        </tr>
      </tbody>
      </table>
    </div>
  );
};
export default Peu;
