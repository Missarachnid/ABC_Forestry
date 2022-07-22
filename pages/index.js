import Head from 'next/head';
import Image from 'next/image';
import logo from "../public/images/Amanda-final-transparent.svg";

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ABC Forestry</title>
        <meta name="description" content="Homepage for ABC Forestry " />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Image src={logo} alt="Logo of a transparent aspen leaf with white showing the edges. The white becomes the outline of flame on one side and a water droplet on the other" 
        width="200px" height="180px"/>
        <h1 className={styles.title}>
          Coming Soon
        </h1>
      </main>

      
    </div>
  )
}
