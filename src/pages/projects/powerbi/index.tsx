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
  { src: dashImg5, alt: "Dashboard 5", link: "https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: dashImg6, alt: "Dashboard 6", link: "https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: dashImg7, alt: "Dashboard 7", link: "https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },
  { src: dashImg8, alt: "Dashboard 8", link: "https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9" },

];

/* vendas lojas: https://app.powerbi.com/view?r=eyJrIjoiOTA3NmYzZjItMWY1Zi00MzIwLThhOWYtNjAxOWM0MTQ0Njg5IiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */
/* acidentes rodovias: https://app.powerbi.com/view?r=eyJrIjoiMmY4MWM5M2ItMGZlMi00YmU5LTkwZTItN2Y3MDYxNmIwZjdhIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */
/* vendas carros: https://app.powerbi.com/view?r=eyJrIjoiNjU5MjNiOTMtOTA2NC00ZmViLWIyMDItZWYwM2QxMWFiN2YyIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */
/* gestão de faturamento e logística: https://app.powerbi.com/view?r=eyJrIjoiODRkYmMwZTYtMDNjNS00NDUzLTg1YWMtNjlmMjgwNDUyMzVmIiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9 */
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
        <p>Dashboard Vendas Lojas</p>
        <span></span>
      </div>

      <section id="vendaloja" className={styles.about}>
        <div className={styles.divText}>
          <h2> " 📊 Dashboard de Vendas - Análise Completa "</h2>
          <br></br>
          <p>
            Principais Informações Disponíveis:<br></br><br></br>
            ✅ Faturamento Total - Receita consolidada de todas as lojas.<br></br>
            ✅ Faturamento por Período - Comparação de vendas ao longo do tempo (diário, semanal, mensal, anual).<br></br>
            ✅ Detalhamento por Loja - Análise individual de cada unidade, permitindo identificar as mais lucrativas.<br></br>
            ✅ Total de Pedidos - Número total de vendas realizadas no período selecionado.<br></br>
            ✅ Faturamento por Gerente - Performance dos responsáveis por cada unidade.<br></br>
            ✅ Ticket Médio - Valor médio gasto por pedido, indicando tendências de consumo.<br></br><br></br>

            Com esses insights, os gestores podem identificar padrões de vendas, comparar desempenhos entre lojas e tomar decisões
            baseadas em dados para otimizar resultados.<br></br>
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg1} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>


      <div className={styles.flexSeparator}>
        <span></span>
        <p>Dashboard Acidentes em Rodovias</p>
        <span></span>
      </div>

      <section id="acidentes" className={styles.about}>
        <div className={styles.divText}>
          <h2>"🚦 Dashboard de Acidentes em Rodovias - Análise de Ocorrências"</h2>
          <br></br>
          <p>
            Descrição:<br></br>
            Este dashboard apresenta uma visão detalhada dos acidentes em rodovias, permitindo análise de dados essenciais
            para identificar padrões, riscos e tomar decisões preventivas.<br></br><br></br>

            Principais Informações Disponíveis:<br></br>
            ✅ Total de Acidentes - Número de ocorrências registradas no período selecionado.<br></br>
            ✅ Vítimas Fatais - Total de óbitos causados por acidentes.<br></br>
            ✅ Vítimas Feridas - Quantidade de pessoas que sofreram ferimentos.<br></br>
            ✅ Acidentes Sem Vítimas - Ocorrências sem feridos ou fatalidades.<br></br>
            ✅ Análise Temporal - Distribuição dos acidentes por ano e mês para identificar tendências sazonais.<br></br>
            ✅ Distribuição Geográfica - Dados segmentados por estado, facilitando a análise regional.<br></br>
            ✅ Causas dos Acidentes - Principais motivos dos incidentes, como excesso de velocidade, falha mecânica, condições climáticas,
            entre outros.<br></br><br></br>

            Com essas informações, gestores e órgãos responsáveis podem desenvolver estratégias para reduzir a frequência de acidentes,
            melhorar a segurança viária e otimizar recursos destinados à fiscalização e infraestrutura.
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg2} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Dashboard Vendas de Carros</p>
        <span></span>
      </div>

      <section id="carros" className={styles.about}>
        <div className={styles.divText}>
          <h2>"🚗 Dashboard de Vendas de Carros - Análise Global e Comparativa" </h2>
          <br></br>
          <p>
            Descrição:<br></br>
            Este dashboard apresenta uma visão detalhada das vendas de automóveis, permitindo a análise do faturamento por país e
            marca, além de comparações anuais para identificar tendências de mercado.<br></br><br></br>

            Principais Informações Disponíveis:<br></br>
            ✅ Vendas por Países - Distribuição das vendas ao redor do mundo.<br></br>
            ✅ Faturamento por Marca - Receita total gerada por cada fabricante de veículos.<br></br>
            ✅ Faturamento por Países - Comparação do desempenho de vendas entre diferentes regiões.<br></br>
            ✅ Comparativo Anual - Evolução das vendas e do faturamento ao longo dos anos.<br></br>
            ✅ Comparativo por Marcas e Ano - Análise detalhada do desempenho das montadoras ao longo do tempo, permitindo identificar
            quais marcas cresceram ou perderam participação de mercado.<br></br><br></br>

            Com esse painel, gestores podem acompanhar tendências do setor automotivo, identificar mercados em crescimento e tomar
            decisões estratégicas baseadas em dados concretos.<br></br>
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg3} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Dashboard Logistíco</p>
        <span></span>
      </div>

      <section id="logistica" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "🚛 Dashboard de Gestão de Faturamento Logístico" </h2>
          <br></br>
          <p>
            Descrição:<br></br>
            Este dashboard fornece uma visão detalhada do faturamento logístico, permitindo monitorar receitas, pedidos, entregas e
            devoluções, auxiliando na gestão financeira e operacional.<br></br><br></br>

            Principais Informações Disponíveis:<br></br>
            ✅ Faturamento Total - Receita consolidada de todas as operações logísticas.<br></br>
            ✅ Total de Pedidos - Quantidade de entregas realizadas no período selecionado.<br></br>
            ✅ Total de Motoristas - Número de motoristas envolvidos nas operações de transporte.<br></br>
            ✅ Faturamento por Cliente - Receita gerada por cada cliente, permitindo identificar os mais rentáveis.<br></br>
            ✅ Entregas no Prazo vs. Atrasadas - Monitoramento do cumprimento dos prazos de entrega.<br></br>
            ✅ Detalhamento de Devoluções - Análise dos pedidos devolvidos, segmentados por:<br></br><br></br>

            Motorista - Identificação dos condutores responsáveis pelas entregas devolvidas.<br></br><br></br>

            Motivo da Devolução - Problemas como avaria na carga, erro no pedido, recusa do cliente, entre outros.<br></br><br></br>

            Com esse painel, gestores podem otimizar a logística, reduzir custos, aumentar a eficiência das entregas e minimizar devoluções,
            garantindo um melhor controle financeiro e operacional.<br></br>


          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg4} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Dashboard Fundos Imobiliários</p>
        <span></span>
      </div>

      <section id="imobilario" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "🏢 Dashboard de Fundos Imobiliários - Análise Financeira e de Investimentos" </h2>
          <br></br>
          <p>
            Descrição:<br></br>
            Este dashboard fornece uma visão detalhada e estratégica sobre os Fundos de Investimento Imobiliário (FIIs), permitindo um acompanhamento
            preciso do desempenho financeiro, distribuição de rendimentos, valorização de cotas e principais indicadores do mercado imobiliário.<br></br><br></br>

            Principais Informações Disponíveis:<br></br>
            📊 Performance Financeira<br></br>
            ✅ Valor Patrimonial - Avaliação do patrimônio líquido do fundo.<br></br>
            ✅ Rentabilidade Histórica - Evolução dos retornos ao longo do tempo.<br></br>
            ✅ Dividend Yield (DY) - Percentual de retorno sobre o investimento baseado nos dividendos pagos.<br></br>
            ✅ P/VP (Preço sobre Valor Patrimonial) - Indicador que mostra se o fundo está sendo negociado acima ou abaixo do seu valor real.<br></br>
            ✅ Liquidez Média - Volume de negociações diárias das cotas no mercado.<br></br><br></br>

            🏢 Análise dos Ativos Imobiliários<br></br>
            ✅ Segmentação dos FIIs - Classificação por tipo de fundo (tijolo, papel, híbrido, desenvolvimento, entre outros).<br></br>
            ✅ Ocupação dos Imóveis - Taxa de vacância e contratos ativos dos imóveis pertencentes ao fundo.<br></br>
            ✅ Distribuição Geográfica - Localização dos ativos, permitindo análise por regiões e estados.<br></br><br></br>

            💰 Rendimentos e Distribuições<br></br>
            ✅ Histórico de Dividendos - Pagamentos realizados aos cotistas ao longo dos meses/anos.<br></br>
            ✅ Distribuição Mensal/Anual - Análise dos repasses aos investidores, possibilitando a projeção de ganhos futuros.<br></br>
            ✅ Rendimento por Cota - Valor pago por cota aos investidores a cada período.<br></br><br></br>

            📈 Comparações e Tendências<br></br>
            ✅ Comparação entre FIIs - Desempenho de diferentes fundos do mesmo segmento.<br></br>
            ✅ Evolução do Setor - Análise do crescimento do mercado imobiliário e impacto nos fundos.<br></br>
            ✅ Correlação com a Taxa SELIC e CDI - Impacto da taxa de juros nos rendimentos dos fundos.<br></br><br></br>

            Objetivo do Dashboard:<br></br>
            Com esse painel, investidores e gestores podem monitorar a performance dos FIIs, avaliar riscos, tomar decisões estratégicas baseadas
            em dados concretos e identificar oportunidades de investimento no setor imobiliário.<br></br><br></br>

            📊 Com uma análise detalhada e visual, esse dashboard se torna uma ferramenta essencial para qualquer investidor que deseja otimizar sua
            carteira e maximizar seus rendimentos!
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg5} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Dashboard Gestão de Projetos e Obras</p>
        <span></span>
      </div>

      <section id="obras" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "🏗️ Dashboard de Gestão de Projetos e Obras" </h2>
          <br></br>
          <p>
            Descrição:<br></br>
            Este dashboard fornece uma visão abrangente do planejamento, execução e orçamento de projetos e obras, permitindo o acompanhamento
            preciso dos indicadores financeiros e operacionais.<br></br><br></br>

            📊 Tela 1 - Acompanhamento Financeiro e Cronograma.<br></br>
            ✅ Gráfico Planejamento x Realizado - Comparação entre as metas planejadas e os resultados efetivamente alcançados.<br></br>
            ✅ Curva S (Planejado x Realizado) - Indicador de progresso do projeto, mostrando a evolução das entregas em relação ao tempo.<br></br>
            ✅ Meta - Objetivos estabelecidos para cada fase do projeto.<br></br>
            ✅ Orçamento Total - Valor previsto para a realização da obra.<br></br>
            ✅ Total Realizado (R$) - Valor já investido no projeto, permitindo análise do orçamento executado versus planejado.<br></br><br></br>

            🌎 Tela 2 - Localização e Status das Obras<br></br>
            ✅ Mapa Interativo - Visualização geográfica dos projetos em andamento, organizados por país.<br></br>
            ✅ Etapas do Projeto - Monitoramento das fases da obra, como fundação, estrutura, acabamento, entre outras.<br></br>
            ✅ Serviços Realizados - Registro detalhado do que já foi concluído, facilitando a gestão e acompanhamento do cronograma.<br></br><br></br>

            ⏳ Tela 3 - Tempo Gasto na Execução dos Serviços.<br></br>
            ✅ Gráfico de Tempo por Atividade - Exibe o tempo médio gasto em cada serviço realizado.<br></br>
            ✅ Linha do Tempo de Execução - Mostra o momento exato em que cada serviço foi realizado.<br></br>
            ✅ Análise de Eficiência - Identifica gargalos e otimiza a alocação de recursos.<br></br><br></br>

            🎯 Objetivo do Dashboard:<br></br>
            Com este painel, gestores podem monitorar a evolução dos projetos, analisar desvios no cronograma, otimizar o orçamento e
            garantir que os serviços sejam executados de maneira eficiente.<br></br><br></br>

            📊 Com dados precisos e atualizados, este dashboard se torna uma ferramenta estratégica para o sucesso na gestão de obras!
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg6} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Dashboard Gestão de Recursos Humanos</p>
        <span></span>
      </div>

      <section id="rh" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "🏢 Dashboard de Gestão de Recursos Humanos - Pesquisa de Satisfação dos Colaboradores" </h2>
          <br></br>
          <p>
            Descrição:<br></br>
            Este dashboard fornece uma análise detalhada sobre a satisfação dos colaboradores, permitindo que a empresa compreenda melhor
            o nível de contentamento das equipes em relação a fatores como saúde, carga horária e salário.<br></br><br></br>

            📊 Relatórios e Indicadores.<br></br>
            ✅ Pesquisa de Satisfação Geral - Visão consolidada do nível de satisfação dos colaboradores em diferentes aspectos da empresa.<br></br>
            ✅ Análise por Equipe - Comparação da satisfação entre diferentes times e departamentos.<br></br>
            ✅ Fonte de Recrutamento - Identificação de quais canais de contratação (ex.: LinkedIn, indicações, sites de emprego) trazem
            colaboradores mais satisfeitos.<br></br>
            ✅ Saúde e Bem-Estar - Avaliação da percepção dos funcionários sobre o ambiente de trabalho e qualidade de vida.<br></br>
            ✅ Carga Horária - Análise da satisfação em relação à jornada de trabalho e equilíbrio entre vida pessoal e profissional.<br></br>
            ✅ Salário e Benefícios - Comparação da percepção dos colaboradores sobre a remuneração oferecida e pacotes de benefícios.<br></br><br></br>

            Objetivo do Dashboard:<br></br>
            Com este painel, gestores de RH podem identificar pontos de melhoria, aprimorar estratégias de retenção, otimizar processos de
            recrutamento e promover um ambiente de trabalho mais saudável e produtivo.<br></br><br></br>

            📊 Com dados precisos e comparativos, este dashboard se torna uma ferramenta estratégica para a tomada de decisões voltadas ao
            bem-estar dos colaboradores!<br></br>
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg7} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Dashboard Serviço Atendimento ao Cliente</p>
        <span></span>
      </div>

      <section id="cliente" className={styles.about}>
        <div className={styles.divText}>
          <h2>  "📞 Dashboard de Serviço de Atendimento ao Cliente (SAC)" </h2>
          <br></br>
          <p>
            Descrição:<br></br>
            Este dashboard fornece uma visão detalhada sobre o desempenho do atendimento ao cliente, permitindo que a empresa avalie a qualidade
            do suporte, o impacto nas vendas e os principais motivos de reclamações ou cancelamentos.<br></br><br></br>

            📊 Relatórios e Indicadores<br></br>
            ✅ Índice de Satisfação do Cliente (CSAT) - Média das avaliações dos clientes sobre o atendimento recebido.<br></br>
            ✅ Tempo Médio de Espera - Análise do tempo que os clientes aguardam antes de serem atendidos.<br></br>
            ✅ Total de Vendas Concluídas - Relatório de vendas realizadas por meio do atendimento.<br></br>
            ✅ Cancelamentos - Quantidade de pedidos cancelados e motivos associados.<br></br>
            ✅ Trocas e Devoluções - Número de produtos devolvidos ou trocados, segmentado por motivo.<br></br>
            ✅ Reclamações por Vendedor - Monitoramento da quantidade e tipo de reclamações associadas a cada atendente.<br></br>
            ✅ Eficiência por Atendente - Tempo médio de atendimento e taxa de resolução de problemas.<br></br><br></br>

            Objetivo do Dashboard:<br></br>
            Com este painel, gestores podem identificar gargalos no atendimento, reduzir tempos de espera, melhorar a experiência do cliente e
            aumentar a conversão de vendas, otimizando a performance da equipe de suporte.<br></br><br></br>

            📊 Com dados em tempo real, esse dashboard se torna uma ferramenta essencial para garantir um atendimento de excelência e impulsionar
            a satisfação dos clientes!
          </p>
        </div>
        <div className={styles.divImg}>
          <Image src={dashImg8} alt="Minha Foto" className={styles.responsiveImg} />
        </div>
      </section>

      <div className={styles.flexSeparator}>
        <span></span>
        <p>Fim Dashboard</p>
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
