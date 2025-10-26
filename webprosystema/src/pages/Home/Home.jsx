import "../Home/home.css";
import { motion } from 'framer-motion';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
    ChevronLeft,
    ChevronRight,
    CheckCircle,
    ArrowRight,
    Cpu,
    Layers,
    ShieldCheck,
    Clock,
    Smartphone,
    Database,
    Target,
    BarChart3,
    DollarSign,
    Heart,
    GitMerge,
    TrendingUp
} from 'lucide-react';
import healtImageHome from "../../assets/img/retrato-de-um-medico-sincero.png";
import twoMedicalAbout from "../../assets/img/profissionais-da-saude-revisam-os-resultados-dos-exames-de-ressonancia-magnetica-e-raios-x-neurologicos.jpg";
import solutionsImg from "../../assets/img/aluno-afro-americano-de-faculdade-de-medicina-estuda-farmacologia-notas-em-uma-biblioteca.jpg";
import medical from "../../assets/img/medico-sorridente-usando-projecao-3d-virtual.jpg";
import GestaoIcon from "../../assets/icons/icon1.png";
import MonitoramentoIcon from "../../assets/icons/icon2.png";
import VisaoIcon from "../../assets/icons/icon3.png";
import AcompanhamentoIcon from "../../assets/icons/icon4.png";
import AnalisesIcon from "../../assets/icons/icon5.png";
import ApoioIcon from "../../assets/icons/icon6.png";

import AtencaoPrimariaIcon from "../../assets/icons/atprimaria.png";
import AtencaoEspecializadaIcon from "../../assets/icons/atespecializada.png";
import AssistenciaFarmaceuticaIcon from "../../assets/icons/assfarmaceutica.png";
import OCIIcon from "../../assets/icons/oci.png";

function Home() {
    const services = [
        // Do PDF 1 - Soluções Modulares
        {
            id: 1,
            icon: AtencaoEspecializadaIcon,
            title: "Atenção Especializada",
            description: "Regulação ambulatorial e hospitalar com filas inteligentes"
        },
        {
            id: 2,
            icon: MonitoramentoIcon,
            title: "Vigilância em Saúde",
            description: "Monitoramento epidemiológico em tempo real com alertas automáticos"
        },
        {
            id: 3,
            icon: VisaoIcon,
            title: "Central de Inteligência Estratégica",
            description: "Indicadores em tempo real com painéis interativos de gestão"
        },
        {
            id: 4,
            icon: AcompanhamentoIcon,
            title: "Central de Regulação",
            description: "Gestão do acesso, disponibilidade de leitos e custos assistenciais"
        },
        {
            id: 5,
            icon: AssistenciaFarmaceuticaIcon,
            title: "Assistência Farmacêutica",
            description: "Previsão de demanda com IA e controle de validade de medicamentos"
        },
        // Do PDF 2 - Soluções Adicionais  
        {
            id: 6,
            icon: AtencaoPrimariaIcon,
            title: "Atenção Primária",
            description: "Fortalecimento da APS conforme Portaria GM/MS nº 3.493/2024"
        },
        {
            id: 7,
            icon: GestaoIcon, // Reutilizando ícone
            title: "Atenção Especializada Ambulatorial",
            description: "Gestão de demandas de consultas e exames de média complexidade"
        },
        {
            id: 8,
            icon: MonitoramentoIcon, // Reutilizando ícone
            title: "Atenção Especializada Hospitalar",
            description: "Monitoramento integrado dos processos assistenciais hospitalares"
        },
        {
            id: 9,
            icon: VisaoIcon, // Reutilizando ícone
            title: "Planejamento e Programação",
            description: "Prospecção quantitativa de consultas, exames e procedimentos"
        },
        {
            id: 10,
            icon: AcompanhamentoIcon, // Reutilizando ícone
            title: "Central de Regulação, Avaliação e Controle",
            description: "Gestão completa do acesso, produção e qualidade dos serviços"
        }
    ];

    // Configuração do Embla Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        containScroll: 'trimSnaps'
    }, [Autoplay({ delay: 4000 })]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    return (
        <>
            {/* Seção Principal com Gradiente */}
            <div className="home-container">
                {/* Círculos animados de fundo */}
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
                <div className="floating-circle circle-4"></div>
                <div className="floating-circle circle-5"></div>

                <div className="container-fluid">
                    <div className="row align-items-center min-vh-100">
                        {/* Texto à esquerda */}
                        <div className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="home-content"
                            >
                                <motion.h1
                                    className="display-4 fw-bold mb-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    style={{ color: '#263238' }}
                                >
                                    Inovação & Inteligência Artificial
                                    <span className="text-primary-health"> à Serviço da Gestão em Saúde</span>
                                </motion.h1>

                                <motion.p
                                    className="lead text-muted mb-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    Transformando dados em decisões que fortalecem o SUS
                                </motion.p>

                                <motion.div
                                    className="home-buttons"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                >
                                    <button className="btn btn-primary-health btn-lg me-3">
                                        <i className="bi bi-calendar-check me-2"></i>
                                        Agendar Consulta
                                    </button>
                                    <button className="btn btn-outline-health btn-lg">
                                        <i className="bi bi-info-circle me-2"></i>
                                        Saiba Mais
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Imagem com novo SVG atrás - à direita */}
                        <div className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="home-image-composition"
                            >
                                {/* NOVO SVG atrás */}
                                <div className="svg-background">
                                    <svg
                                        viewBox="0 0 900 600"
                                        width="1400"
                                        height="1400"
                                        className="abstract-svg"
                                    >
                                        <g transform="translate(416.7151027264783 279.50028151641493)">
                                            <path
                                                d="M166.6 -152.8C214.5 -118.8 250.7 -59.4 244.2 -6.5C237.8 46.4 188.5 92.9 140.7 141.4C92.9 189.9 46.4 240.4 -4.7 245.1C-55.9 249.9 -111.7 208.7 -136.7 160.2C-161.7 111.7 -155.9 55.9 -163.3 -7.4C-170.7 -70.7 -191.4 -141.4 -166.4 -175.4C-141.4 -209.4 -70.7 -206.7 -5.7 -201.1C59.4 -195.4 118.8 -186.8 166.6 -152.8"
                                                fill="#4286c7"
                                            />
                                        </g>
                                    </svg>
                                </div>

                                {/* Imagem na frente */}
                                <div className="image-foreground">
                                    <motion.img
                                        src={healtImageHome}
                                        alt="Inovação em saúde e tecnologia"
                                        className="foreground-image"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1.25, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                        whileHover={{ scale: 1.15 }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <motion.section
                className="about-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Cabeçalho Quem Somos */}
                        <div className="col-12 text-center mb-5">
                            <h2 className="services-title">Quem Somos?</h2>
                        </div>

                        {/* Texto de Introdução */}
                        <div className="col-12 mb-5">
                            <div className="about-intro-container">
                                <div className="about-text-wrapper">
                                    <p className="about-main-text">
                                        A <strong>PROSYSTEMA</strong> é uma <strong>plataforma tecnológica completa</strong> que atua como
                                        <strong> hub central</strong>, integrando e consolidando dados de diversas fontes para transformar
                                        informações em <strong>decisões estratégicas que fortalecem o SUS</strong>.
                                    </p>

                                    <div className="about-main-text">
                                        <p>
                                            Nossa plataforma atua como um <strong>hub central</strong>, integrando e consolidando dados de
                                            diversas fontes (incluindo RNDS, TABWIN/SIA-SIH, sistemas legados e bases públicas).
                                        </p>
                                        <p>
                                            Os dados são transformados em <strong>informações estratégicas e acessíveis em tempo real</strong>&nbsp;
                                            via painéis de Business Intelligence (BI) e relatórios analíticos, fornecendo o subsídio
                                            necessário para a <strong>tomada de decisão em todos os níveis de assistência</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Conteúdo Principal com Tecnologia e Foco */}
                        <div className="col-12">
                            <div className="about-content-main">
                                <div className="row">
                                    {/* Primeira Linha - Nossa Tecnologia */}
                                    <div className="col-12 mb-5">
                                        <motion.div
                                            className="tech-row"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                        >
                                            <div className="row align-items-center">
                                                {/* SVG com Imagem - Coluna 5 */}
                                                <div className="col-md-5">
                                                    <motion.div
                                                        className="svg-image-container left"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.6, delay: 0.5 }}
                                                    >
                                                        <div className="custom-svg-wrapper">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 480 480"
                                                                className="custom-svg"
                                                                preserveAspectRatio="xMidYMid meet"
                                                            >
                                                                <path
                                                                    d="M0 0h230c138 0 250 112 250 250v230H250C112 480 0 368 0 230V0Z"
                                                                    fill="#1976d2"
                                                                />
                                                                <foreignObject x="0" y="0" width="480" height="480">
                                                                    <div
                                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                                        style={{
                                                                            width: "100%",
                                                                            height: "100%",
                                                                            overflow: "hidden",
                                                                            borderRadius: "0 200px 0 200px",
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={twoMedicalAbout}
                                                                            alt="Tecnologia PROSYSTEMA"
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "100%",
                                                                                objectFit: "cover",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </foreignObject>
                                                            </svg>
                                                        </div>
                                                    </motion.div>
                                                </div>

                                                {/* Conteúdo - Coluna 7 */}
                                                <div className="col-md-7">
                                                    <div className="tech-content">
                                                        <div className="column-header text-left">
                                                            <h3 className="column-title">Nossa Tecnologia</h3>
                                                        </div>
                                                        <div className="tech-items">
                                                            <div className="tech-item">
                                                                <div className="tech-bullet"></div>
                                                                <span>Tecnologia de ponta</span>
                                                            </div>
                                                            <div className="tech-item">
                                                                <div className="tech-bullet"></div>
                                                                <span>Inteligência Artificial aplicada</span>
                                                            </div>
                                                            <div className="tech-item">
                                                                <div className="tech-bullet"></div>
                                                                <span>Análise avançada de dados</span>
                                                            </div>
                                                            <div className="tech-item">
                                                                <div className="tech-bullet"></div>
                                                                <span>Gestão baseada em evidências</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Segunda Linha - Nosso Foco */}
                                    <div className="col-12">
                                        <motion.div
                                            className="focus-row"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.6 }}
                                        >
                                            <div className="row align-items-center">
                                                <div className="col-md-7">
                                                    <div className="focus-content">
                                                        <div className="column-header text-left">
                                                            <h3 className="column-title">Nosso Foco</h3>
                                                        </div>
                                                        <div className="focus-items">
                                                            <div className="focus-item">
                                                                <div className="focus-bullet"></div>
                                                                <div className="focus-text">
                                                                    <h5>Humanização do cuidado</h5>
                                                                    <p>Priorizamos a experiência humana em todos os processos</p>
                                                                </div>
                                                            </div>
                                                            <div className="focus-item">
                                                                <div className="focus-bullet"></div>
                                                                <div className="focus-text">
                                                                    <h5>Eficiência na gestão</h5>
                                                                    <p>Otimizamos processos para melhor desempenho</p>
                                                                </div>
                                                            </div>
                                                            <div className="focus-item">
                                                                <div className="focus-bullet"></div>
                                                                <div className="focus-text">
                                                                    <h5>Qualidade assistencial</h5>
                                                                    <p>Garantimos padrões elevados de atendimento</p>
                                                                </div>
                                                            </div>
                                                            <div className="focus-item">
                                                                <div className="focus-bullet"></div>
                                                                <div className="focus-text">
                                                                    <h5>Resultados mensuráveis</h5>
                                                                    <p>Acompanhamos métricas para comprovar eficácia</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* SVG COM IMAGEM - Coluna 5 */}
                                                <div className="col-md-5">
                                                    <motion.div
                                                        className="svg-image-container right"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.6, delay: 0.7 }}
                                                    >
                                                        <div className="custom-svg-wrapper">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 480 480"
                                                                className="custom-svg"
                                                                preserveAspectRatio="xMidYMid meet"
                                                            >
                                                                <path
                                                                    d="M0 0h230c138 0 250 112 250 250v230H250C112 480 0 368 0 230V0Z"
                                                                    fill="#2ecc71"
                                                                />
                                                                <foreignObject x="0" y="0" width="480" height="480">
                                                                    <div
                                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                                        style={{
                                                                            width: "100%",
                                                                            height: "100%",
                                                                            overflow: "hidden",
                                                                            borderRadius: "0 200px 0 200px",
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={medical}
                                                                            alt="Foco PROSYSTEMA"
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "100%",
                                                                                objectFit: "cover",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </foreignObject>
                                                            </svg>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Seção Nossos Serviços - APÓS o gradiente */}
            <motion.section
                className="solutions-carousel-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className="pt-2 m-3">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <h2 className="solutions-title">Nossas Soluções</h2>
                            <p className="solutions-subtitle">Conheça nossa plataforma completa para gestão em saúde pública</p>
                        </div>

                        {/* Botão Saiba Mais alinhado à direita */}
                        <motion.div
                            className="text-end mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <button className="btn btn-primary-health btn-lg me-3">
                                Saiba Mais
                                <ArrowRight size={20} className="ms-2" />
                            </button>
                        </motion.div>

                        <div className="col-12">
                            {/* Container do Carousel */}
                            <div className="embla">
                                <div className="embla__viewport" ref={emblaRef}>
                                    <div className="embla__container">
                                        {services.map((service, index) => (
                                            <div className="embla__slide" key={service.id}>
                                                <motion.div
                                                    className="solution-card"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                    whileHover={{ y: -5, scale: 1.02 }}
                                                >
                                                    <div className="solution-icon">
                                                        <img
                                                            src={service.icon}
                                                            alt={service.title}
                                                            className="solution-icon-image"
                                                        />
                                                    </div>
                                                    <h4 className="solution-card-title">{service.title}</h4>
                                                    <p className="solution-card-description">{service.description}</p>
                                                    <div className="solution-card-hover"></div>
                                                </motion.div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Botões de navegação com ícones Lucide */}
                                <div className="embla__controls">
                                    <button className="embla__prev" onClick={scrollPrev}>
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button className="embla__next" onClick={scrollNext}>
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Seção Tecnologia que Transforma a Gestão em Resultados */}
            <motion.section
                className="technology-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <div className="container-fluid p-0">
                    <div className="technology-header">
                        <h2 className="technology-title">
                            Tecnologia que Transforma a Gestão em Resultados
                        </h2>
                    </div>

                    <div className="row align-items-stretch g-0"> {/* Removido gap com g-0 */}
                        {/* Coluna da imagem */}
                        <div className="col-lg-4">
                            <motion.div
                                className="technology-image-container"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                <img
                                    src={solutionsImg}
                                    alt="Tecnologia em Saúde Pública"
                                    className="technology-image"
                                />
                                <div className="image-overlay">
                                    <h4>Soluções Inovadoras</h4>
                                    <p>Para a gestão pública em saúde</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Coluna dos cards */}
                        <div className="col-lg-8">
                            <div className="technology-content h-100">
                                <div className="features-grid-cards h-100">
                                    {[
                                        {
                                            text: "Diferenciais Tecnológicos",
                                            icon: <Cpu size={34} className="feature-icon" />
                                        },
                                        {
                                            text: "Arquitetura Modular e Escalável",
                                            icon: <Layers size={34} className="feature-icon" />
                                        },
                                        {
                                            text: "Segurança Total Conforme LGPD",
                                            icon: <ShieldCheck size={34} className="feature-icon" />
                                        },
                                        {
                                            text: "Disponibilidade 24/7",
                                            icon: <Clock size={34} className="feature-icon" />
                                        },
                                        {
                                            text: "Interface Moderna e Intuitiva",
                                            icon: <Smartphone size={34} className="feature-icon" />
                                        },
                                        {
                                            text: "Base de Dados Integrada aos Sistemas Nacionais",
                                            icon: <Database size={34} className="feature-icon" />
                                        },
                                        {
                                            text: "Resultados para o SUS",
                                            icon: <Target size={34} className="feature-icon" />
                                        },
                                        {
                                            text: "Gestão Pública Orientada por Dados",
                                            icon: <BarChart3 size={34} className="feature-icon" />
                                        },
                                        {
                                            text: "Otimização de Recursos Financeiros",
                                            icon: <DollarSign size={34} className="feature-icon" />
                                        },
                                        {
                                            text: "Melhoria da Experiência do Paciente",
                                            icon: <Heart size={34} className="feature-icon" />
                                        },
                                        {
                                            text: "Integração Real entre os Níveis de Atenção",
                                            icon: <GitMerge size={34} className="feature-icon" />
                                        },
                                        {
                                            text: "Aumento da Transparência e da Eficiência",
                                            icon: <TrendingUp size={34} className="feature-icon" />
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="feature-card"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                        >
                                            <div className="feature-card-content">
                                                <div className="feature-icon-container">
                                                    {item.icon}
                                                </div>
                                                <div className="feature-text-container">
                                                    <span className="feature-text" style={{ fontSize: '18px', color: '#263238' }}>
                                                        {item.text}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}

export default Home;