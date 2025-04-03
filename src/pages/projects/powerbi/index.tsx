import styles from "./styles.module.css"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import dashImg1 from "../../../../public/assets/dashboard_01.png";
import dashImg2 from "../../../../public/assets/dashboard_02.png";
import dashImg3 from "../../../../public/assets/dashboard_03.png";
import dashImg4 from "../../../../public/assets/dashboard_04.png";
import dashImg5 from "../../../../public/assets/dashboard_05.png";
import dashImg6 from "../../../../public/assets/dashboard_06.png";
import dashImg7 from "../../../../public/assets/dashboard_07.png";
import dashImg8 from "../../../../public/assets/dashboard_08.png";

const projetosDashboard = [
  { src: dashImg1, alt: "Dashboard 1", link: "https://app.powerbi.com/view?r=eyJrIjoiOTA3NmYzZjItMWY1Zi00MzIwLThhOWYtNjAxOWM0MTQ0Njg5IiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: dashImg2, alt: "Dashboard 2", link: "https://app.powerbi.com/view?r=eyJrIjoiMmY4MWM5M2ItMGZlMi00YmU5LTkwZTItN2Y3MDYxNmIwZjdhIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: dashImg3, alt: "Dashboard 3", link: "https://app.powerbi.com/view?r=eyJrIjoiODRkYmMwZTYtMDNjNS00NDUzLTg1YWMtNjlmMjgwNDUyMzVmIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: dashImg4, alt: "Dashboard 4", link: "https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: dashImg5, alt: "Dashboard 4", link: "https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: dashImg6, alt: "Dashboard 4", link: "https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: dashImg7, alt: "Dashboard 4", link: "https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: dashImg8, alt: "Dashboard 4", link: "https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },

];

/* vendas lojas: https://app.powerbi.com/view?r=eyJrIjoiOTA3NmYzZjItMWY1Zi00MzIwLThhOWYtNjAxOWM0MTQ0Njg5IiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */
/* acidentes rodovias: https://app.powerbi.com/view?r=eyJrIjoiMmY4MWM5M2ItMGZlMi00YmU5LTkwZTItN2Y3MDYxNmIwZjdhIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */
/* vendas carros: https://app.powerbi.com/view?r=eyJrIjoiODRkYmMwZTYtMDNjNS00NDUzLTg1YWMtNjlmMjgwNDUyMzVmIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */
/* gestão de faturamento e logística: https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */
/* fundos imobiliários: https://app.powerbi.com/view?r=eyJrIjoiN2VlOWYwZTgtZDY2Zi00ZDJjLTgxNjYtODU3Y2E1ZTUzYTAxIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */
/* gestão de projetos e obras: https://app.powerbi.com/view?r=eyJrIjoiNDYyZjQ4ZTItY2QyOS00MjgxLWExY2YtN2M2M2NhYjMzMGNkIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */
/* gestão Recursos Humanos: https://app.powerbi.com/view?r=eyJrIjoiYmZkODViYzItZjUwNS00MjM3LWFkMzUtNDA3MWZiY2MwZGQ4IiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */
/* atendimentos ao clientes: https://app.powerbi.com/view?r=eyJrIjoiODdiNzMwMTctMWRmYS00ODFlLWJkYjUtNTcxNTg1YzVhYjZmIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects - Rick Pereira</title>
      </Head>
      <section id="home" className={styles.main}>
        <div>
          <h1>Olá, Seja bem vindo</h1>
          <
            p>My Projects / Programs</p>

          <div className={styles.divsobre}>
            <div className={styles.divprojeto}>
              <a href="#sobre">
                <button className={styles.callbuton}>
                  Veja meus projetos 👇
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Início Dashboard PowerBi</p>
        <span></span>
      </div>

      <section id="sobre" className={styles.about}>
        <div className={styles.divText}>
          <h2> "Abrir Mesas e Registrar Pedido"</h2>
          <br></br>
          <p>
            Este projeto foi criado em React-Native, seu início tem esta tela ao lado para "Abrir e Cadastrar Mesas".
            <br></br>
            Aqui inicia cadastrando a "Mesa", e depois o garçon posteriormente cadastrará o "Pedido".
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg1} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Próxima Tela</p>
        <span></span>
      </div>

      <section id="+products" className={styles.about}>
        <div className={styles.divText}>
          <h2>"Adicionar Produtos ao Pedido</h2>
          <br></br>
          <p>
            Nesta tela abaixo, o garçom pode cadastrar os itens pedidos pelo cliente.
            <br></br>
            Após selecionar a mesa, é possível adicionar produtos ao pedido, informando detalhes como nome,
            quantidade e observações, garantindo um atendimento mais organizado e eficiente.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg2} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Próxima Tela</p>
        <span></span>
      </div>

      <section id="editar" className={styles.about}>
        <div className={styles.divText}>
          <h2>"Editar Pedido" </h2>
          <br></br>
          <p>
            Nesta tela, o garçom pode ajustar a quantidade dos produtos adicionados ao pedido e
            remover itens, se necessário.
            <br></br>
            Cada produto inserido pode ter sua quantidade alterada conforme a necessidade do
            cliente. Caso um item não seja mais necessário, ele pode ser excluído do pedido de forma rápida e prática.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg3} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Próxima Tela</p>
        <span></span>
      </div>

      <section id="finalizar" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "Finalizar e Enviar Pedido" </h2>
          <br></br>
          <p>
            Nesta tela, o garçom finaliza o pedido e o envia para a cozinha ou setor responsável pelo preparo.
            <br></br>
            Após a confirmação, o pedido aparecerá automaticamente na tela do sistema da cozinha, permitindo
            que a equipe visualize os itens e inicie o preparo. Esse processo garante mais agilidade e organização
            no atendimento.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg4} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <section id="finalizar" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "Finalizar e Enviar Pedido" </h2>
          <br></br>
          <p>
            Nesta tela, o garçom finaliza o pedido e o envia para a cozinha ou setor responsável pelo preparo.
            <br></br>
            Após a confirmação, o pedido aparecerá automaticamente na tela do sistema da cozinha, permitindo
            que a equipe visualize os itens e inicie o preparo. Esse processo garante mais agilidade e organização
            no atendimento.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg5} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <section id="finalizar" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "Finalizar e Enviar Pedido" </h2>
          <br></br>
          <p>
            Nesta tela, o garçom finaliza o pedido e o envia para a cozinha ou setor responsável pelo preparo.
            <br></br>
            Após a confirmação, o pedido aparecerá automaticamente na tela do sistema da cozinha, permitindo
            que a equipe visualize os itens e inicie o preparo. Esse processo garante mais agilidade e organização
            no atendimento.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg6} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <section id="finalizar" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "Finalizar e Enviar Pedido" </h2>
          <br></br>
          <p>
            Nesta tela, o garçom finaliza o pedido e o envia para a cozinha ou setor responsável pelo preparo.
            <br></br>
            Após a confirmação, o pedido aparecerá automaticamente na tela do sistema da cozinha, permitindo
            que a equipe visualize os itens e inicie o preparo. Esse processo garante mais agilidade e organização
            no atendimento.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg7} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <section id="finalizar" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "Finalizar e Enviar Pedido" </h2>
          <br></br>
          <p>
            Nesta tela, o garçom finaliza o pedido e o envia para a cozinha ou setor responsável pelo preparo.
            <br></br>
            Após a confirmação, o pedido aparecerá automaticamente na tela do sistema da cozinha, permitindo
            que a equipe visualize os itens e inicie o preparo. Esse processo garante mais agilidade e organização
            no atendimento.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg8} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Fim Projeto Mobile</p>
        <span></span>
      </div>

      {/*-- INÍCIO FOOTER --*/}
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
            <Link href="/dashboard#sobre" className={styles.link}>
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
  )
}
