import Image from "next/image";
import Link from "next/link";

import Menu from "./../components/Menu";

export default function Bloques() {
  return (
    <main>
      <div>
        <Menu />

        <Link href="https://blockchair.com/es/bitcoin/testnet" target="_blank">
          Tesnet
        </Link>

        <p>
          {" "}
          Bitcoin es la primera moneda virtual en el mundo. Nace el 3 de enero
          de 2009. Hemos de tener en cuenta que Bitcoin son un conjunto de
          protocolos que actúan en la capa de aplicación (la capa superior de
          TCP/IP). Por ejemplo el protocolo Proof off Work (POW) o Prueba de
          trabajo. Todo está descrito en un informe que Satoshi Nakamoto
          escribió en 2008. Satoshi Nakamoto es la persona o grupo de personas
          que crearon el protocolo Bitcoin y su software de referencia. En 2008,
          Nakamoto publicó un artículo en la lista de correo de criptografía
          metzdowd.com que describía un sistema P2P (peer-to-peer) de dinero
          digital. El 3-1-2009, lanzó el software Bitcoin, creando la red del
          mismo nombre y las primeras unidades de moneda, llamadas bitcoins.
        </p>
      </div>
    </main>
  );
}
