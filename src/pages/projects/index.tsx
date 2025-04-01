import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import fotoImg from "../../../public/assets/projects/01_mobile.png";
import projImg from "../../../public/assets/dashboard/01_dashboard.png";
import projImg1 from "../../../public/assets/dashboard/02_dashboard.png";
import projImg2 from "../../../public/assets/dashboard/03_dashboard.png";
import projImg3 from "../../../public/assets/dashboard/04_dashboard.png";
import projImg4 from "../../../public/assets/projects/01_mobile.png";
import projImg5 from "../../../public/assets/projects/02_mobile.png";
import projImg6 from "../../../public/assets/projects/03_mobile.png";
import projImg7 from "../../../public/assets/projects/04_mobile.png";
import projImg8 from "../../../public/assets/projects/01_frontEnd.png";
import projImg9 from "../../../public/assets/projects/02_frontEnd.png";
import projImg10 from "../../../public/assets/projects/03_frontEnd.png";
import projImg11 from "../../../public/assets/projects/04_frontEnd.png";


const projetosDashboard = [
  { src: projImg, alt: "Dashboard 1", link: "https://app.powerbi.com/view?r=eyJrIjoiOTA3NmYzZjItMWY1Zi00MzIwLThhOWYtNjAxOWM0MTQ0Njg5IiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: projImg1, alt: "Dashboard 2", link: "https://app.powerbi.com/view?r=eyJrIjoiMmY4MWM5M2ItMGZlMi00YmU5LTkwZTItN2Y3MDYxNmIwZjdhIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: projImg2, alt: "Dashboard 3", link: "https://app.powerbi.com/view?r=eyJrIjoiODRkYmMwZTYtMDNjNS00NDUzLTg1YWMtNjlmMjgwNDUyMzVmIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: projImg3, alt: "Dashboard 3", link: "https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
];

const projetosPrograms = [
  { src: projImg4, alt: "Mobile 1", link: "/dashboard" },
  { src: projImg5, alt: "Mobile 2", link: "/dashboard" },
  { src: projImg6, alt: "Mobile 3", link: "/dashboard" },
  { src: projImg7, alt: "Mobile 4", link: "/dashboard" },
];

const projetosProgramsWeb = [
  { src: projImg8, alt: "FrontEnd 1", link: "/dashboard" },
  { src: projImg9, alt: "FrontEnd 2", link: "/dashboard" },
  { src: projImg10, alt: "FrontEnd 3", link: "/dashboard" },
  { src: projImg11, alt: "FrontEnd 4", link: "/dashboard" },

];

const imagens = [
  "01_dashboard.png",
  "02_dashboard.png",
  "03_dashboard.png",
  // Adicione mais imagens conforme necessário
];

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projetos - Comércio</title>
      </Head>

      {/*-- INICIO MAIN -->*/}
      
      {/*FIM DO MAIN*/}

      {/*INICIO SOBRE*/}
      <section id="sobre" className={styles.about}>
        <div>
          <h2>Mobile Comercio</h2>
          <p>
            Tela de cadastro de Clientes / Mesas.
            <br></br>
            Também fui Gerente Administrativo em posto de gasolina e Assistente Administrativo em Construtora Civil.
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
          <h1>Cadastrar Mesas</h1>
          <Image src={fotoImg} alt="Cadastrar Mesa" width={200} height={300} />
        </div>
      </section>
      {/*FIM SOBRE*/}

      {/*INICIO PROJETOS*/}
      <section id="projetos" className={styles.projects}>
        <h2>Meus projetos</h2>
        <div className={styles.divProjectMy}>
          <p>Projetos Dashboard em Power BI</p>
          <div>
            {projetosDashboard.map((projetosDashboard, index) => (
              <Link key={index} href={projetosDashboard.link} target="_blank" rel="noopener noreferrer">
                <Image className={styles.projectsImg} src={projetosDashboard.src} alt={projetosDashboard.alt} />
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.divProjectMy}>
          <p>Projetos Mobile Comércio</p>
          <div>
            {projetosPrograms.map((projetosPrograms, index) => (
              <Link key={index} href={projetosPrograms.link} target="_blank" rel="noopener noreferrer">
                <Image className={styles.projectsImg2} src={projetosPrograms.src} alt={projetosPrograms.alt} />
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.divProjectMy}>
          <p>Projetos Web Comércio</p>
          <div>
            {projetosProgramsWeb.map((projetosProgramsWeb, index) => (
              <Link key={index} href={projetosProgramsWeb.link} target="_blank" rel="noopener noreferrer">
                <Image className={styles.projectsImg} src={projetosProgramsWeb.src} alt={projetosProgramsWeb.alt} />
              </Link>
            ))}
          </div>
        </div>

      </section>

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
              <span className={styles.text}>Currículo</span>
            </Link>
          </button>
        </div>

      </div>
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
