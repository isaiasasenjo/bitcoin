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
              El protocolo Lightning Network, es un protocolo pensado para
              mejorar la escalabilidad del Bitcoin. Esto es posible porque
              trabaja como una segunda capa sobre Bitcoin que le permite
              realizar cosas que normalmente no podría y más específicamente;
              transacciones instantáneas y con muy bajas comisiones.
            </li>
          </ul>
          
           <ul>
            <li>
            Bitcoin se creó como una solución de dinero digital. La segunda,
                es que ese objetivo es imposible de alcanzar con el estado
                actual de la red y el software Bitcoin. La razón de esto es muy
                sencilla: Bitcoin tiene problemas para escalar. En la
                actualidad, Bitcoin solo puede procesar de 7 a 8 transacciones
                por segundo. Esta es una capacidad muy pequeña y que no puede
                hacer frente al uso masivo de la criptomoneda. Como resultado,
                la red Bitcoin se hace lenta y muy cara a la hora de pagar
                comisiones. Por esta razón se necesitaba una nueva forma de
                realizar transacciones de forma rápida, que fuera sencilla de
                utilizar y compatible con Bitcoin sin tener que hacer grandes
                modificaciones. La respuesta a estas necesidades es Lightning
                Network.
            </li>
           </ul>

           <strong>
                <h3>Práctica con la LightNing Network</h3>
              </strong>
              <ul>
                <li>Acceder a la Terminal de Linux</li>$ cd bitcoin/polar
                <br></br>
                $./ polar-linux-x86_v64-v2.0.0.AppImage<br></br>
                <br></br>
                Se abrirá la ventana de polar y podremos practicar con la
                LightNing Network.Podremos crear nodos de red, etc.
              </ul>
          
  
        <Peu />
      </div>
  );
}
