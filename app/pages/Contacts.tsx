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
      <main>
      <h3>Contacts</h3>
      <p>My name is Eduard Romo Asenjo. I live in Hospitalet (Barcelona-Spain)</p>
      <p>My Github is: <a href="https://github.com/isaiasasenjo/" target="_blank" >https://github.com/isaiasasenjo/</a></p>
      <p>My WebPage is: <a href="https://bitcoin-ether.com/" target ="_blank">https://bitcoin-ether.com/</a></p>
      <p>My Linkedin is: <a href="https://www.linkedin.com/in/isaiasasenjo/" target="_blank">https://www.linkedin.com/in/isaiasasenjo/</a></p>
      </main>
      <Peu />
    </div>
  );
}
