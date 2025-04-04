import styles from "./styles.module.css"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import projImg1 from "../../../../public/assets/mobile_01.png"
import projImg2 from "../../../../public/assets/mobile_02.png";
import projImg3 from "../../../../public/assets/mobile_03.png";
import projImg4 from "../../../../public/assets/mobile_04.png";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LHPSYSTEMS - Projects Mobile</title>
      </Head>
      <section id="home" className={styles.main}>
        <div>
          <h1>Olá, Seja bem vindo</h1>
          <p>My Projects / Programs</p>

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
        <p>Início Projeto Mobile</p>
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
          <Image src={projImg1} alt="Minha Foto" className={styles.responsiveImg} />
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
          <Image src={projImg2} alt="Minha Foto" className={styles.responsiveImg} />
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
          <Image src={projImg3} alt="Minha Foto" className={styles.responsiveImg} />
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
          <Image src={projImg4} alt="Minha Foto" className={styles.responsiveImg} />
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
