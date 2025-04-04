import styles from "./styles.module.css"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import projImg1 from "../../../../public/assets/frontEnd_01.png"
import projImg2 from "../../../../public/assets/frontEnd_02.png"
import projImg3 from "../../../../public/assets/frontEnd_03.png"
import projImg4 from "../../../../public/assets/frontEnd_04.png"
import projImg5 from "../../../../public/assets/frontEnd_05.png"
import projImg6 from "../../../../public/assets/frontEnd_06.png"
import projImg7 from "../../../../public/assets/frontEnd_07.png"
import projImg8 from "../../../../public/assets/frontEnd_08.png"

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LHPSYSTEMS - Projects Web</title>
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
        <p>Início Projeto Web</p>
        <span></span>
      </div>

      <section id="criar" className={styles.about}>
        <div className={styles.divText}>
          <h2> "Acesse ou Crie sua Conta"</h2>
          <br></br>
          <p>
            Nesta tela, o usuário pode acessar o sistema realizando o login com suas credenciais ou criar
            uma nova conta caso ainda não tenha cadastro.
            <br></br>
            O processo de login garante segurança e controle de acesso, permitindo que apenas usuários autorizados
            utilizem o sistema. Caso o usuário não tenha uma conta, ele pode se cadastrar preenchendo informações básicas,
            como nome, e-mail e senha.
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

      <section id="acessar" className={styles.about}>
        <div className={styles.divText}>
          <h2>"Acessar Conta"</h2>
          <br></br>
          <p>
            Nesta tela, o usuário pode acessar sua conta inserindo o e-mail e a senha cadastrados. Após a autenticação,
            ele será direcionado para o sistema, onde poderá gerenciar mesas, pedidos e acompanhar o fluxo do atendimento.
            <br></br>
            Caso o usuário esqueça a senha, pode utilizar a opção de recuperação para redefini-la e recuperar o acesso.
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

      <section id="listar" className={styles.about}>
        <div className={styles.divText}>
          <h2> "Lista de Pedidos"</h2>
          <br></br>
          <p>
            Nesta tela, são exibidos todos os pedidos que foram realizados, permitindo que a equipe acompanhe
            os detalhes de cada solicitação.
            <br></br>
            Os pedidos podem ser organizados por status (Em Preparo, Pronto, Entregue), facilitando o controle
            e a gestão do atendimento. Além disso, essa visualização garante mais eficiência e rapidez no processamento dos pedidos.
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

      <section id="resumo" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "Resumo do Pedido" </h2>
          <br></br>
          <p>
            Nesta tela, ao selecionar um pedido, uma modal será exibida com todos os itens adicionados,
            incluindo nome, quantidade e valores individuais.
            <br></br>
            Além disso, o sistema calcula automaticamente o valor total da conta, facilitando a
            conferência antes da finalização. Isso garante mais transparência e organização para a equipe no atendimento ao cliente.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={projImg4} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Próxima Tela</p>
        <span></span>
      </div>

      <section id="+category" className={styles.about}>
        <div className={styles.divText}>
          <h2>"Cadastrar Nova Categoria"</h2>
          <br></br>
          <p>
            Nesta tela, o usuário pode cadastrar uma nova categoria de produtos para organizar melhor os itens do menu.
            <br></br>
            Basta inserir o nome da categoria e confirmar o cadastro. Isso facilita a separação dos produtos em grupos
            específicos, tornando a navegação e seleção de itens mais intuitiva para os usuários do sistema.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={projImg5} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Próxima Tela</p>
        <span></span>
      </div>

      <section id="editcategory" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "Editar ou Remover Categorias" </h2>
          <br></br>
          <p>
            Nesta tela, o usuário pode visualizar todas as categorias cadastradas no sistema. Além da listagem,
            há opções para editar o nome da categoria ou excluí-la, caso não seja mais necessária.
            <br></br>
            Esse gerenciamento permite manter o sistema organizado, garantindo que apenas categorias relevantes
            estejam disponíveis para o cadastro de novos produtos.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={projImg6} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Próxima Tela</p>
        <span></span>
      </div>

      <section id="+product" className={styles.about}>
        <div className={styles.divText}>
          <h2>"Adicionar Produto ao Menu"</h2>
          <br></br>
          <p>
            Nesta tela, o usuário pode cadastrar novos produtos no sistema, associando-os a uma categoria específica.<br></br>

            Para cada produto, é necessário preencher:<br></br><br></br>

            - Nome do Produto<br></br>

            - Descrição (Opcional)<br></br>

            - Preço<br></br>

            - Categoria<br></br><br></br>

            Imagem do Produto (permitindo upload de fotos)
            <br></br>
            Após o cadastro, o produto estará disponível na listagem para ser incluído nos pedidos. Essa funcionalidade facilita
            a gestão do cardápio e melhora a experiência do usuário ao visualizar os produtos com imagens.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={projImg7} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Próxima Tela</p>
        <span></span>
      </div>

      <section id="editproduct" className={styles.about}>
        <div className={styles.divText}>
          <h2>"Editar ou Remover Produtos" </h2>
          <br></br>
          <p>
            Nesta tela, o usuário pode visualizar todos os produtos cadastrados no sistema. Além da listagem, há opções para editar as
            informações de um produto ou excluí-lo, caso não seja mais necessário.
            <br></br>
            As opções de edição permitem modificar o nome, descrição, preço.<br></br>
            Essa funcionalidade garante que o catálogo de produtos esteja sempre atualizado, facilitando a gestão
            do cardápio e a organização do sistema.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={projImg8} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Fim Projeto Web</p>
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
