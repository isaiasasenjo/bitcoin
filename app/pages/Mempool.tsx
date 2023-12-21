import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Menu from "./../components/Menu";
import Peu from "../components/Peu";

export default function Mempool() {
  return (
    <main className={styles.container}>
      <div>
        <Menu />

        <p>
          <h3>
            <Link
              href="https://mempool.space"
              target="_blank"
              className={styles.enlaces}
            >
              {" "}
              <strong>Enlace a la Mempool</strong>
            </Link>
          </h3>
        </p>
        <p>
          <ul>
            <li>
              Cuando se realiza una transacción, la misma va a una memoria que
              se conoce como como la mempool, la cual es una memoria temporal
              intermedia en donde se almacenan de forma momentánea las
              transacciones de los usuarios. Una vez que la transacción llega a
              este lugar, los mineros van seleccionando las mismas para
              procesarlas y añadirlas al bloque que estén formando. Cuando ese
              Bloque quede aprobado, la TX será efectiva y pasa a integrarse en
              la cadena blockchain o BD Blockchain. La mempool, es una “sala de
              espera”. Una en el que las transacciones se almacenan hasta ser
              procesadas por los mineros. Pero ¿Cómo funciona? ¿Qué utilidad
              tiene?;
            </li>
          </ul>
        </p>
        <ul>
          <li>
            <p>
              En Bitcoin, las funciones de la mempool están reguladas por el
              BIP-35. Un BIP, es un documento que estandariza diversos
              procedimientos o funciones dentro de Bitcoin. Fases de las Tx en
              la Mempool: 1) Recepción de la transacción. En esta primera fase,
              la mempool recibe las transacciones que generan los usuarios
              dentro de la red. Esto se realiza en unos 10 seg. transacción
              comienza su largo viaje. La Tx se transmite a la red para que esta
              pueda procesarla.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            Los mineros acceden a la mempool y comienzan a seleccionar las
            transacciones a incluir en el siguiente bloque de la blockchain. Con
            cada transacción elegida, la mempool se libera en espacio y la red
            se equilibra. En pocas palabras, mientras menos transacciones en la
            mempool, menos presión en la red y más rápidas son las
            confirmaciones. La resolución de las transacciones por los mineros
            (los agentes) es muy rápida. Interesa que la Mempool no esté repleta
            de Tx porque irán más rápidas las validaciones y serán menos
            costosas las fees o comisiones.
          </li>
        </ul>

        <Peu />
      </div>
    </main>
  );
}
