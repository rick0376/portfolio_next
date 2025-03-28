import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import fotoImg from "../../../public/assets/foto-pc.png";
import projImg from "../../../public/assets/projeto1.png";
import projImg1 from "../../../public/assets/projeto2.png";
import projImg2 from "../../../public/assets/projeto3.png";

const projetos = [
  { src: projImg, alt: "Projeto 1", link: "https://app.powerbi.com/view?r=eyJrIjoiOTA3NmYzZjItMWY1Zi00MzIwLThhOWYtNjAxOWM0MTQ0Njg5IiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: projImg1, alt: "Projeto 2", link: "https://app.powerbi.com/view?r=eyJrIjoiMmY4MWM5M2ItMGZlMi00YmU5LTkwZTItN2Y3MDYxNmIwZjdhIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: projImg2, alt: "Projeto 3", link: "https://app.powerbi.com/view?r=eyJrIjoiODRkYmMwZTYtMDNjNS00NDUzLTg1YWMtNjlmMjgwNDUyMzVmIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: projImg, alt: "Projeto 1", link: "https://app.powerbi.com/view?r=eyJrIjoiOTA3NmYzZjItMWY1Zi00MzIwLThhOWYtNjAxOWM0MTQ0Njg5IiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
];

const imagens = [
  "projeto1.png",
  "projeto2.png",
  "projeto3.png",
  // Adicione mais imagens conforme necessário
];

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio - Rick Pereira</title>
      </Head>

      {/*-- INICIO MAIN -->*/}
      <section id="home" className={styles.main}>
        <div>
          <h1>Olá,Seja bem vindo</h1>
          <p>Meu Portfólio / Histórico Profissional</p>

          <div className={styles.divsobre}>
            <div className={styles.divprojeto}>
              <a href="#sobre">
                <button className={styles.callbuton}>
                  Sobre 👇
                </button>
              </a>
            </div>
            <div className={styles.divprojeto}>
              <a href="#projetos">
                <button className={styles.callbuton}>
                  Veja meus projetos ⚙️
                </button>
              </a>
            </div>

            <div className={styles.divprojeto}>
              <Link href="/curriculo" className={styles.link}>
                <button className={styles.callbuton}>
                  Meu Currículo 📝
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*FIM DO MAIN*/}

      {/*INICIO SOBRE*/}
      <section id="sobre" className={styles.about}>
        <div>
          <h2>Sobre</h2>
          <p>
            <br></br>
            Olá! <br></br>Sou Rick Pereira, formado em "Engenharia de Produção" com experiência como Inspetor da Qualidade.
            <br></br><br></br>
            Atualmente, me especializo em Análise de Dados, utilizando Power BI e Pacote Office para transformar informações
            em insights estratégicos.<br></br>
            Também desenvolvo projetos para aplicativos Mobile e Web, aplicando meus conhecimentos em tecnologia para criar
            soluções inovadoras.<br></br>
            Confira meu portfólio para conhecer alguns dos meus trabalhos!
            <br></br>
            <br></br>
            Seja bem-vindo ao meu espaço digital e sinta-se à vontade!
          </p>
        </div>

        <div>
          <h1>Tecnologia Digital</h1>
          <Image src={fotoImg} alt="Minha Foto" width={500} height={300} />
        </div>
      </section>
      {/*FIM SOBRE*/}

      {/*INICIO PROJETOS*/}
      <section id="projetos" className={styles.projects}>
        <h2>Meus projetos</h2>
        <p>Projetos em Power BI</p>
        <div>
          {projetos.map((projeto, index) => (
            <Link key={index} href={projeto.link} target="_blank" rel="noopener noreferrer">
              <Image className={styles.projectsImg} src={projeto.src} alt={projeto.alt} />
            </Link>
          ))}
        </div>

        <div className={styles.divLink}>
          <div className={styles.divprojeto}>
            <button className={styles.callbutonProject}>
              <Link href="/" className={styles.link}>
                <span className={styles.text}>Home</span>
              </Link>
            </button>
          </div>

          <div className={styles.divprojeto}>
            <button className={styles.callbutonProject}>
              <Link href="#sobre" className={styles.link}>
                <span className={styles.text}>Sobre</span>
              </Link>
            </button>
          </div>

          <div className={styles.divprojeto}>
            <button className={styles.callbutonProject}>
              <Link href="/curriculo" className={styles.link}>
                <span className={styles.text}>Meu Currículo</span>
              </Link>
            </button>
          </div>

        </div>
      </section>
      {/*-- FIM PROJETOS --*/}

      {/* INICIO RODAPE */}
      <footer className={styles.footer}>
        <h3>
          <a href="#">LHPSYSTEMS Programador</a>
        </h3>
        <p>Todos os direitos reservados © 2025 LHPSYSTEMS.</p>
      </footer>
      {/* FIM RODAPE */}
    </div>

  );
}
