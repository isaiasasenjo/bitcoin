import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu1 from '../components/Menu1'
import Peu from '../components/Peu'
import Historia from '../pages/Historia'


export default function Home() {
  return (

<div className={styles.container}>
{/* <App /> */}
<Menu1 />
<Historia />
<Peu />
      <Head>
        <title>Bitcoin-1</title>
      </Head>

      <footer className={styles.footer}>
        <a
          href="https://bitcoin-ether.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logo}>
            <Image src="/triangulo.jpg" alt="Blockchain" width={72} height={29} />
          </span>
        </a>
      </footer>
    </div>
  )
}
