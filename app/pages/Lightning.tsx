import Image from "next/image";

import Menu from "./../components/Menu";
import Peu from "./../components/Peu";
import styles from "./../styles/Home.module.css";

export default function Lightning() {
  return (
    <div>
      <Menu />

      <ul>
        <li>
          The Lightning Network protocol is a protocol designed to improve the
          scalability of Bitcoin. This is possible because works as a second
          layer on top of Bitcoin that allows you perform things you normally
          could not and more specifically; Instant transactions and with very
          low commissions.
        </li>
      </ul>

      <ul>
        <li>
          Bitcoin was created as a digital money solution. The second, is that
          this objective is impossible to achieve with the state current Bitcoin
          network and software. The reason for this is very Simple: Bitcoin has
          trouble scaling. In the Currently, Bitcoin can only process 7 to 8
          transactions per second. This is a very small capacity and it cannot
          confront the massive use of cryptocurrency. As a result, The Bitcoin
          network becomes slow and very expensive when paying commissions. For
          this reason, a new way of carry out transactions quickly, that were
          easy to use and compatible with Bitcoin without having to make big
          modifications. The answer to these needs is Lightning Network.
        </li>
      </ul>

      <strong>
        <h3>Practice with the LightNing Network</h3>
      </strong>
      <ul>
        <li>Access to the Terminal Linux</li>$ cd bitcoin/polar
        <br></br>
        $./ polar-linux-x86_v64-v2.0.0.AppImage<br></br>
        <br></br>
        The polar window will open and we can practice with the LightNing
        Network. We can create network nodes, etc.
      </ul>

      <Peu />
    </div>
  );
}
