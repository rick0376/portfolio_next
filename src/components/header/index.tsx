import styles from "./styles.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <div className={styles.divGlobal}>
            <div className={styles.divProject}>
              <div className={styles.divPortf}>
                <Link href="/dashboard">
                  <h1 className={styles.logo}>
                    Portfólio<span>+</span>
                  </h1>
                </Link>
              </div>
              <div className={styles.divButton}>
                <button className={styles.loginButton}>
                  <Link href="/curriculo" >
                    Luis Henrique Pereira
                  </Link>
                </button>
              </div>
            </div>

            <div className={styles.navRight}>
              <ul className={styles.navHeaderList}>
                <li>
                  <a href="/" className={styles.navLink}>Home</a>
                </li>
                <li>
                  <a href="/dashboard/#sobre" className={styles.navLink}>Projetos</a>
                </li>
                <li>
                  <Link href="/curriculo" className={styles.link}>
                    <span className={styles.text}>Currículo</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}
