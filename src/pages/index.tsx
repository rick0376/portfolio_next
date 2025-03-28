import Head from "next/head";
import styles from "../../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";

import heroImg from "../../public/assets/programador.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu Portfólio</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Logo Portfolio+"
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você exibir seu portfólio
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <Link href="/dashboard" className={styles.link}>
            <span className={styles.text}>Portfólio</span>
            </Link>
          </section>
          <section className={styles.box}>
            <Link href="/curriculo" className={styles.link}>
            <span className={styles.text}>Histórico Profissional</span>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
