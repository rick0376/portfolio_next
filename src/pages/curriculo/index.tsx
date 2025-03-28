import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBirthdayCake, FaCar, FaRing } from 'react-icons/fa'; // Ícones de Email, Telefone, Nascimento, CNH, Estado Civil
import styles from './styles.module.css';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import fotoImg from "../../../public/assets/foto-pc.png";

const projeto = {
    link: "https://app.powerbi.com/view?r=eyJrIjoiOTA3NmYzZjItMWY1Zi00MzIwLThhOWYtNjAxOWM0MTQ0Njg5IiwidCI6IjJjYjkzN2JlLThjMjAtNGU3My1iNjMxLTdhOTA5OWY2ZWFhMyJ9"
};

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Curricullum - Rick Pereira</title>
            </Head>
            <div className={styles.mainContent}>
                <div className={styles.sidebar}>
                    <div className={styles.sidebar1}>
                        <div className={styles.imageContainer}>
                            <Image className={styles.profileImage} src={fotoImg} alt="Minha Foto" width={500} height={300} />
                        </div>
                    </div>

                    <div className={styles.sidebarItem}>
                        <FaMapMarkerAlt size={20} /> {/* Ícone de Email */}
                        <span className={styles.text}>Rua: Jossei Toda, 658, <br></br>CEP: 12446-430, Mantiqueira, Pindamonhangaba-SP</span>
                    </div>

                    <div className={styles.sidebarItem}>
                        <FaEnvelope size={20} /> {/* Ícone de Email */}
                        <span className={styles.text}>lhpsystems0376@gmail.com</span>
                    </div>
                    <div className={styles.sidebarItem}>
                        <FaPhone size={20} /> {/* Ícone de Telefone */}
                        <span className={styles.text}>(12) 99189-0682</span>
                    </div>
                    <div className={styles.sidebarItem}>
                        <FaBirthdayCake size={20} /> {/* Ícone de Data de Nascimento */}
                        <span className={styles.text}>03/02/1976</span>
                    </div>
                    <div className={styles.sidebarItem}>
                        <FaCar size={20} /> {/* Ícone de CNH */}
                        <span className={styles.text}>A/B</span>
                    </div>
                    <div className={styles.sidebarItem}>
                        <FaRing size={20} /> {/* Ícone de Estado Civil */}
                        <span className={styles.text}>Casado</span>
                    </div>

                    <Link href={projeto.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <div className={styles.sidebarItem}>

                            <span className={styles.text}>SITES, PORTFÓLIOS E PERFIS</span>
                            <br></br>
                            <span className={styles.text}>Rick Nana Pereira</span>
                            <br></br>
                            <br></br>
                        </div>
                    </Link>
                </div>

                <div className={styles.sideItems}>
                    <h2>Objetivo</h2>
                    <div className={styles.sideItem}>
                        <p>
                            Em busca de oportunidade como ADM, de forma a contribuir para o crescimento da empresa.
                        </p>
                    </div>

                    <h2>Formação</h2>
                    <div className={styles.sideItem}>
                        <p>
                            •	Engenheiro de Produção (2024 -Uninter). <br></br>
                            •	Formação em Power BI e Analista de Dados (2025 - Empowerdata). <br></br>
                            •	Formação Pacote Office. <br></br>
                            •	Superior Tecnologia da Informação - (2012 - Unip - Universidade Paulista). <br></br>
                            •	Técnico Mecânico - (2009 - ETEC-João Gomes de Araújo). <br></br>
                            •	Técnico Informática - (2000 - ETEC-João Gomes de Araújo). <br></br>
                        </p>
                    </div>

                    <h2>Histórico Profissional</h2>
                    <div className={styles.sideItem}>
                        <p>
                            <div className={styles.sideTitle}>
                                <h3>Tenaris Confab SA.</h3>
                                <h4>- Inspetor da Qualidade:</h4>
                                <h4>(Janeiro 2001 - Janeiro 2024)</h4>
                            </div>
                            <br></br>
                            - Realização de ensaios, medições e testes de controle de qualidade de produtos de acordo com as normas
                            e padrões estabelecidos, analisando a conformidade em relação às especificações técnicas.
                            <br></br>
                            - Realização dos procedimentos de revisão e controle de qualidade, garantindo a identificação prévia de problemas na produção.
                            <br></br>
                            - Investigação dos pontos de não conformidade na produção, incluindo processos de rastreabilidade de produtos e lotes por meio
                            do levantamento de dados das amostras.
                            <br></br>
                            - Controle Dimensional e Visual de toda produção, procurando manter o alto padrão de qualidades.
                        </p>
                    </div>

                    <div className={styles.sideItem}>
                        <p>
                            <div className={styles.sideTitle}>
                                <h3>Redes de Postos Sete Estrelas.</h3>
                                <h4>- Gerente Administrativo:</h4>
                                <h4>(Janeiro 1997 - Dezembro 2000)</h4>
                            </div>
                            <br></br>
                            - Monitoramento das operações diárias da unidade, garantindo o cumprimento das funções de cada colaborador dentro das diretrizes da empresa.
                            <br></br>
                            - Delegação de responsabilidades aos funcionários, mantendo as tarefas dentro do escopo dos cargos, visando atingir os objetivos da empresa.
                            <br></br>
                            - Gerenciamento dos resultados da equipe, realizando reuniões periódicas a fim de solucionar os entraves para o alcance das metas.
                            <br></br>
                            - Fechamento de caixa e controle total de estoques e produtos.
                        </p>
                    </div>

                    <div className={styles.sideItem}>
                        <p>
                            <div className={styles.sideTitle}>
                                <h3>Construcione Engenharia Civil Ltda.</h3>
                                <h4>- Assistente Administrativo:</h4>
                                <h4>(Janeiro 1994 - Dezembro 1997)</h4>
                            </div>
                            <br></br>
                            -  Organização de documentos, armazenando adequadamente arquivos importantes para fácil acesso e consulta posterior.
                            <br></br>
                            - Elaboração de relatórios e planilhas, colaborando com o controle administrativo da empresa.
                            <br></br>
                            - Atendimento aos clientes, solucionando problemas e atendendo às demandas de forma eficiente.
                            <br></br>
                            - Suporte administrativo aos setores da empresa, atuando em atividades de controle para a geração de relatórios.
                        </p>
                    </div>

                    <div className={styles.sideItem}>
                        <p>
                            <h3>Habilidades e Competências:</h3>
                            <br></br>
                            Excelência no relacionamento com equipes de trabalho.
                            <br></br>
                            Atenção aos detalhes, garantindo inspeções confiáveis.
                            <br></br>
                            Habilidade de trabalho em equipe com diversos níveis e cargos.
                            <br></br>
                            Agilidade na identificação de erros.
                            <br></br>
                            Habilidades em comunicação e analises da dados.
                        </p>
                    </div>

                    <div className={styles.sideItem}>
                        <p>
                            <h3>Qualificações e Atividades Complementares:</h3>
                            <br></br>
                            •	Analista de Dados com especialização em Power BI. <br></br>
                            •	Formação em Pacote Office. <br></br>
                            •	Administração Empresas (RH)- CEBRAC. <br></br>
                            •	Tecnico em Informática - ETEC João Gomes de Araújo. <br></br>
                            •	Inspetor de Revestimento - ABENDE. <br></br>
                            •	Tecnologia Eletromecânica com Aplicação em Soldagem Industrial - SENAI. <br></br>
                            •	Controle Visual e Dimensional de Corpo e Extremidades - SENAI. <br></br>
                            •	Medições Mecânicas - SENAI. <br></br>
                            •	Tecnologia de Soldagem - SENAI. <br></br>
                            •	Metalurgia de Soldagem - SENAI. <br></br>
                            •	Processos de Soldagem - SENAI. <br></br>
                            •	CEP- Controle Estatístico do Processo - SENAI. <br></br>
                            •	Produtividade e Utilizações de Recursos - SENAI. <br></br>
                            •	Curso GlobaL de Qualidade - SENAI. <br></br>
                            •	Rastreabilidade - SENAI. <br></br>
                            •	Pintura Proteção Anti-Corrosiva - SHERWIN WILLIAMS. <br></br>
                            •	Produtividade e Utilização de Recursos - SENAI. <br></br>
                            •	Tolerância e Ajustes - SENAI. <br></br>
                            •	Inspeções de Roscas API (PIN / BOX). <br></br>
                            •	Inspeções de Roscas Premiun (BOX / PIN). <br></br>
                            •	Processos Conectores - SENAI. <br></br>
                            •	Análise de Falhas e Tomadadas de Decisão - SENAI. <br></br>
                            •	Operador de Empilhadeiras - SENAI. <br></br>

                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
