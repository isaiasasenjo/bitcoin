import React from "react";
import Link from "next/link";
import styles2 from "../styles/Styles2.module.css";

const Menu1 = () => {

  return (
    <div className={styles2.cabecera}>
            <cabecera>
              <nav>
                <ul>
                  <Link href="/"><li>Others Informations</li></Link>
                  <Link href="/"><li>Networks</li></Link>
                  <Link href="/"><li>Explore</li></Link>
                  <Link href="/"><li>Home</li></Link>
                </ul>
              </nav>
            </cabecera>

    </div>
  );
};

export default Menu1;
