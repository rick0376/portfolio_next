import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import fotoImg from "../../../public/assets/foto-pc.png";
import dashImg1 from "../../../public/assets/dashboard_01.png";
import dashImg2 from "../../../public/assets/dashboard_02.png";
import dashImg3 from "../../../public/assets/dashboard_03.png";
import dashImg4 from "../../../public/assets/dashboard_04.png";
import dashImg5 from "../../../public/assets/dashboard_05.png";
import dashImg6 from "../../../public/assets/dashboard_06.png";
import dashImg7 from "../../../public/assets/dashboard_07.png";
import dashImg8 from "../../../public/assets/dashboard_08.png";

import mobImg1 from "../../../public/assets/mobile_01.png";
import mobImg2 from "../../../public/assets/mobile_02.png";
import mobImg3 from "../../../public/assets/mobile_03.png";
import mobImg4 from "../../../public/assets/mobile_04.png";

import frontImg1 from "../../../public/assets/frontEnd_01.png";
import frontImg2 from "../../../public/assets/frontEnd_02.png";
import frontImg3 from "../../../public/assets/frontEnd_03.png";
import frontImg4 from "../../../public/assets/frontEnd_04.png";
import frontImg5 from "../../../public/assets/frontEnd_05.png";
import frontImg6 from "../../../public/assets/frontEnd_06.png";
import frontImg7 from "../../../public/assets/frontEnd_07.png";
import frontImg8 from "../../../public/assets/frontEnd_08.png";


const projetosDashboard = [
  { src: dashImg1, alt: "Dashboard 1", link: "/projects/powerbi#home" },
  { src: dashImg2, alt: "Dashboard 2", link: "/projects/powerbi#+products" },
  { src: dashImg3, alt: "Dashboard 3", link: "/projects/powerbi#editar" },
  { src: dashImg4, alt: "Dashboard 4", link: "/projects/powerbi#finalizar" },
  { src: dashImg5, alt: "Dashboard 5", link: "/projects/powerbi#finalizar" },
  { src: dashImg6, alt: "Dashboard 6", link: "/projects/powerbi#finalizar" },
  { src: dashImg7, alt: "Dashboard 7", link: "/projects/powerbi#finalizar" },
  { src: dashImg8, alt: "Dashboard 8", link: "/projects/powerbi#finalizar" },
];

const projetosPrograms = [
  { src: mobImg1, alt: "Mobile 1", link: "/projects/mobile#home" },
  { src: mobImg2, alt: "Mobile 2", link: "/projects/mobile#+products" },
  { src: mobImg3, alt: "Mobile 3", link: "/projects/mobile#editar" },
  { src: mobImg4, alt: "Mobile 4", link: "/projects/mobile#finalizar" },
];

const projetosProgramsWeb = [
  { src: frontImg1, alt: "FrontEnd 1", link: "/projects/web#criar" },
  { src: frontImg2, alt: "FrontEnd 2", link: "/projects/web#acessar" },
  { src: frontImg3, alt: "FrontEnd 3", link: "/projects/web#listar" },
  { src: frontImg4, alt: "FrontEnd 4", link: "/projects/web#resumo" },
  { src: frontImg5, alt: "FrontEnd 5", link: "/projects/web#+category" },
  { src: frontImg6, alt: "FrontEnd 6", link: "/projects/web#editcategory" },
  { src: frontImg7, alt: "FrontEnd 7", link: "/projects/web#+product" },
  { src: frontImg8, alt: "FrontEnd 8", link: "/projects/web#editproduct" },

];

/*
const imagens = [
  "01_dashboard.png",
  "02_dashboard.png",
  "03_dashboard.png",
  // Adicione mais imagens conforme necessário
];
*/
export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio - Rick Pereira</title>
      </Head>

      {/*-- INICIO MAIN -->*/}
      <section id="home" className={styles.main}>
        <div>
          <h1>Olá, Seja bem vindo</h1>
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
            Olá! <br></br>Sou Rick Pereira, formado em "Engenharia de Produção" com experiência como Inspetor da Qualidade.
            <br></br><br></br>
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
          <h1>Tecnologia Digital</h1>
          <Image src={fotoImg} alt="Minha Foto" width={500} height={300} />
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
              <Link key={index} href={projetosDashboard.link} rel="noopener noreferrer">
                <Image className={styles.projectsImg} src={projetosDashboard.src} alt={projetosDashboard.alt} />
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.divProjectMy}>
          <p>Projetos Web Comércio</p>
          <div>
            {projetosProgramsWeb.map((projetosProgramsWeb, index) => (
              <Link key={index} href={projetosProgramsWeb.link}  rel="noopener noreferrer">
                <Image className={styles.projectsImg} src={projetosProgramsWeb.src} alt={projetosProgramsWeb.alt} />
              </Link>
            ))}
          </div>
        </div>
        
        <div className={styles.divProjectMy}>
          <p>Projetos Mobile Comércio</p>
          <div>
            {projetosPrograms.map((projetosPrograms, index) => (
              <Link key={index} href={projetosPrograms.link} rel="noopener noreferrer">
                <Image className={styles.projectsImg2} src={projetosPrograms.src} alt={projetosPrograms.alt} />
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
