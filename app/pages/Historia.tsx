import styles from "../styles/Home.module.css";
const Historia = () => {
  return (
    <div className={styles.container}>
      <h3>Breve historia de Bitcoin</h3>

      <p>
        Bitcoin es la primera moneda virtual en el mundo. Nace el 3 de enero de
        2009. Hemos de tener en cuenta que Bitcoin son un conjunto de protocolos
        que actúan en la capa de aplicación (la capa superior de TCP/IP). Por
        ejemplo el protocolo Proof of Work que Satoshi Nakamoto escribió en
        2008. Satoshi Nakamoto es la persona o grupo de personas que crearon el
        protocolo Bitcoin y su software de referencia. En 2008, Nakamoto publicó
        un artículo en la lista de correo de criptografía metzdowd.com que
        describía un sistema P2P (peer-to-peer) de dinero digital. El 3-1-2009,
        lanzó el software Bitcoin, creando la red del mismo nombre y las
        primeras unidades de moneda, llamadas bitcoins. No se conoce la
        identidad de Satoshi Nakamoto. A lo mejor es un grupo de personas, lo
        cual es muy probable. Hoy a fecha 28-10-2023 un Bitcoin vale 30.000 $.
        El valor más alto se produjo en diciembre de 2021, llegó a los 68.000$.
      </p>

      <p>
        El protocolo Bitcoin es un procedimiento de código abierto que opera en
        una red Peer-to-Peer (P2P). Utiliza una cadena llamada “BlockChain” para
        registrar todas las transacciones e impedir el doble gasto. La BD
        blockchain está distribuida en todo el mundo, es decir muchos nodos
        (ordenadores especiales) en el mundo (Islandia, Taiwan, Hong Kong, USA,
        Rusia, etc.). Estos nodos se les llama Mineros y cumplen una función
        especial: crean Bloques con sus Transacciones y reciben un premio en
        bitcoins. Satoshi tuvo que resolver el problema del doble gasto. ¿Qué es
        el doble gasto? Vayamos al mundo FIAT ($,€, Libra, Yen, etc.), cuando
        nos gastamos dinero en una compra, no nos podemos gastar el mismo
        billete en otra compra, ese papel de 50€ ya lo tiene la tienda donde
        hemos comprado. Es algo natural y lo entendemos. Pues bien, lo mismo
        hemos de hacer con el dinero Bitcoin, hemos de impedir ese doble gasto.
        Ejemplo,si doy una transferencia de 0,05 BTC a un amigo, ese mismo
        dinero no lo puedo utilizar para comprar algo. Los mineros impiden que
        hagamos doble gasto. Un protocolo es una serie de reglas que siguen los
        ordenadores para que se puedan comunicar entre ellos. En realidad un
        protocolo es un programa que sirve de comunicación entre dos procesos.
        Esos procesos pueden ser de software o hardware.
      </p>
    </div>
  );
};
export default Historia;
