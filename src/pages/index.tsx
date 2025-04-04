import Head from "next/head";
import styles from "../../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import heroImg from "../../public/assets/programador.png";

export default function Home() {
  const openWhatsApp = () => {
    const numero = "5512991890682"; // Código do país (55) + DDD (12) + Número
    const url = `https://wa.me/${numero}`;
    window.open(url, "_blank"); // Abre o WhatsApp em uma nova aba
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>LHPSYSTEMS - Portfólio</title>
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
          Sistema feito para você exibir meu portfólio
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <Link href="/dashboard" className={styles.link}>
              <span className={styles.text}>Meu Portfólio</span>
            </Link>
          </section>
          <section className={styles.box}>
            <Link href="/curriculo" className={styles.link}>
              <span className={styles.text}>Meu Currículo Vitae</span>
            </Link>
          </section>
        </div>
        <div>
          <section className={styles.boxContato} onClick={openWhatsApp} style={{ cursor: "pointer" }}>
            <FaWhatsapp className={styles.whatsappIcon} /> {/* Ícone do WhatsApp */}
            <span className={styles.textContato}>Contato: (12) 99189-0682</span>
          </section>
        </div>
      </main>
    </div>
  );
}