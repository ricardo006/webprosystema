import { useNavigate } from 'react-router-dom';
import "../Home/home.css";
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
    Cloud,
    Building,
    Calendar,
    Globe,
    FileText,
    Users,
    Brain,
    MapPin,
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
import techRow from "../../assets/img/bg-row.png";
import focoRow from "../../assets/img/bg-foco.png";
import solutionsImg from "../../assets/img/aluno-afro-americano-de-faculdade-de-medicina-estuda-farmacologia-notas-em-uma-biblioteca.jpg";
import medical from "../../assets/img/medico-sorridente-usando-projecao-3d-virtual.jpg";
import GestaoIcon from "../../assets/icons/icon1.png";
import MonitoramentoIcon from "../../assets/icons/icon2.png";
import VisaoIcon from "../../assets/icons/icon3.png";
import AcompanhamentoIcon from "../../assets/icons/icon4.png";
import AnalisesIcon from "../../assets/icons/icon5.png";
import ApoioIcon from "../../assets/icons/icon6.png";
import backgroundHomeImage from "../../assets/img/bg-home.jpeg";

import AtencaoPrimariaIcon from "../../assets/icons/atprimaria.png";
import AtencaoEspecializadaIcon from "../../assets/icons/atespecializada.png";
import AssistenciaFarmaceuticaIcon from "../../assets/icons/assfarmaceutica.png";
import OCIIcon from "../../assets/icons/oci.png";
import TechnologyScroll from '../../components/Scroll/TechnologyScroll';
import AboutSection from '../../components/Sections/AboutSection/AboutSection';

function Home() {
    const navigate = useNavigate();

    const [currentPhrase, setCurrentPhrase] = useState(0);
    const phrases = [
        "a qualidade de vida",
        "a eficiência pública",
        "a transformação digital",
        "o desenvolvimento sustentável",
        "o progresso econômico"
    ];

    // Efeito para trocar frases
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 3000); // Muda a cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    const goToServicos = () => {
        navigate('/servicos');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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
            icon: GestaoIcon,
            title: "Atenção Especializada Ambulatorial",
            description: "Gestão de demandas de consultas e exames de média complexidade"
        },
        {
            id: 8,
            icon: MonitoramentoIcon,
            title: "Atenção Especializada Hospitalar",
            description: "Monitoramento integrado dos processos assistenciais hospitalares"
        },
        {
            id: 9,
            icon: VisaoIcon,
            title: "Planejamento e Programação",
            description: "Prospecção quantitativa de consultas, exames e procedimentos"
        },
        {
            id: 10,
            icon: AcompanhamentoIcon,
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
            <div
                className="home-container"
                style={{
                    background: `url(${backgroundHomeImage}) center/cover no-repeat`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 15% !important',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
                <div className="floating-circle circle-4"></div>
                <div className="floating-circle circle-5"></div>

                <div className="container-fluid" 
                    style={{
                        background: 'linear-gradient(to top, rgba(133, 197, 240, 0.55), rgba(194, 212, 238, 0.56))',
                        borderRadius: '0 0 60px 60px',
                        padding: '10px'
                    }}
                >
                    <div className="row align-items-left">
                        <div className="col-lg-6">
                            <motion.div
                                className="company-highlights-compact from-bottom"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <div className="highlights-container-compact">
                                    <div className="highlights-grid-compact">
                                        <div className="">
                                            <h3 className="main-title-compact">Gestão Pública mais Inteligente começa aqui.</h3>
                                            <div className="title-decoration-compact"></div>
                                        </div>

                                        <div className="highlight-card-compact">
                                            <div className="highlight-icon-compact">
                                                <Calendar size={24} className="icon-compact" />
                                            </div>
                                            <div className="highlight-content-compact">
                                                <div className="highlight-number-compact">+12 anos</div>
                                                <div className="highlight-label-compact">de inovação e solidez</div>
                                            </div>
                                        </div>

                                        <div className="highlight-card-compact">
                                            <div className="highlight-icon-compact">
                                                <TrendingUp size={24} className="icon-compact" />
                                            </div>
                                            <div className="highlight-content-compact">
                                                <div className="highlight-number-compact">Transformação</div>
                                                <div className="highlight-label-compact">digital do setor público</div>
                                            </div>
                                        </div>

                                        <div className="highlight-card-compact">
                                            <div className="highlight-icon-compact">
                                                <Target size={24} className="icon-compact" />
                                            </div>
                                            <div className="highlight-content-compact">
                                                <div className="highlight-number-compact">Evolução</div>
                                                <div className="highlight-label-compact">real e sustentável</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <span style={{ color: '#0e3458ff', fontSize: '38px', marginLeft: '90px', fontWeight: 600 }}>
                                Impulsione
                            </span>

                            <div className="animated-phrase">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentPhrase}
                                        style={{ fontSize: '38px', color: '#4286c7', marginLeft: '90px', fontWeight: 800 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {phrases[currentPhrase]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>

                            <span style={{ color: '#0e3458ff', fontSize: '38px', marginLeft: '90px', fontWeight: 600 }}>
                                com uma gestão mais eficiente e inteligente
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <motion.section
                className="capabilities-section py-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Cabeçalho */}
                        <div className="col-12 text-center mb-5">
                            <motion.h2
                                className="section-title"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Transforme a Gestão Pública com o poder da IA
                            </motion.h2>
                            <motion.p
                                className="section-subtitle"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                A Inteligência Artificial é o coração das nossas soluções, impulsionando gestores na análise, no planejamento e nas decisões estratégicas que conduzem a políticas públicas mais eficientes, conectadas e baseadas em evidências. Fortalecemos, assim, a gestão em todos os níveis da saúde pública.
                            </motion.p>
                        </div>
                    </div>

                    {/* Grid de Cards */}
                    <div className="row g-4">
                        {/* Card 1 - Cloud Nativa */}
                        <div className="col-lg-4 col-md-6">
                            <motion.div
                                className="capability-card h-100"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="card-icon">
                                    <Cloud className="icon" />
                                </div>
                                <h4 className="card-title">Cloud Nativa</h4>
                                <p className="card-description">
                                    Conte com um sistema de gestão 100% em nuvem, projetado para oferecer desempenho superior, disponibilidade contínua e máxima segurança. Sua arquitetura nativa web garante escalabilidade, confiabilidade e alta performance para operações de qualquer porte — uma solução referência em qualidade, pronta para acompanhar o ritmo da sua gestão.
                                </p>
                            </motion.div>
                        </div>

                        {/* Card 2 - Sistema Único */}
                        <div className="col-lg-4 col-md-6">
                            <motion.div
                                className="capability-card h-100"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="card-icon">
                                    <Database className="icon" />
                                </div>
                                <h4 className="card-title">Sistema Único</h4>
                                <p className="card-description">
                                    Experiência inteligente e fluída para servidores, gestores e cidadãos.
                                    Gestão 360º com Cadastro Único integrado para resultados extraordinários.
                                </p>
                            </motion.div>
                        </div>

                        {/* Card 3 - Tecnologia Web */}
                        <div className="col-lg-4 col-md-6">
                            <motion.div
                                className="capability-card h-100"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="card-icon">
                                    <Globe className="icon" />
                                </div>
                                <h4 className="card-title">Tecnologia Web</h4>
                                <p className="card-description">
                                    Sistema nativo web que funciona em qualquer dispositivo.
                                    Acesse de computador, tablet ou celular, 24h por dia, 7 dias por semana.
                                </p>
                            </motion.div>
                        </div>

                        {/* Card 4 - Autoatendimento */}
                        <div className="col-lg-4 col-md-6">
                            <motion.div
                                className="capability-card h-100"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="card-icon">
                                    <Smartphone className="icon" />
                                </div>
                                <h4 className="card-title">Autoatendimento</h4>
                                <p className="card-description">
                                    Experiências encantadoras de autoatendimento via Internet e aplicativo.
                                    Sem filas, sempre disponível, 24h por dia para o cidadão.
                                </p>
                            </motion.div>
                        </div>

                        {/* Card 5 - Inovação Tecnológica */}
                        <div className="col-lg-4 col-md-6">
                            <motion.div
                                className="capability-card h-100"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="card-icon">
                                    <Cpu className="icon" />
                                </div>
                                <h4 className="card-title">Inovação Tecnológica</h4>
                                <p className="card-description">
                                    Reconhecimento de voz, IoT e indicadores em tempo real.
                                    Transformamos as melhores tecnologias em soluções para a gestão pública.
                                </p>
                            </motion.div>
                        </div>

                        {/* Card 6 - Inteligência Artificial */}
                        <div className="col-lg-4 col-md-6">
                            <motion.div
                                className="capability-card h-100"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="card-icon">
                                    <Brain className="icon" />
                                </div>
                                <h4 className="card-title">IA para Gestão Pública</h4>
                                <p className="card-description">
                                    Inteligência Artificial especializada para ajudar você a decidir, gerir e antecipar tendências.
                                    A tecnologia trabalhando a serviço da gestão pública.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="about-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <AboutSection />

                {/* Conteúdo Principal com Tecnologia e Foco */}
                <div className="col-12">
                    <div className="about-content-main">
                        <div className="row">
                            {/* Primeira Linha - Nossa Tecnologia */}
                            <div className="col-12 mb-3">
                                <motion.div
                                    className="tech-row"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    style={{
                                        backgroundImage: `url(${techRow})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
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
                                    style={{
                                        backgroundImage: `url(${focoRow})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    <div className="row align-items-center">
                                        <div className="col-md-7">
                                            <div className="focus-content">
                                                <div className="column-header text-left">
                                                    <h3 className="column-title" style={{ color: '#fff' }}>Nosso Foco</h3>
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
                <TechnologyScroll />
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
                            <button className="btn btn-primary-health btn-lg me-3" onClick={goToServicos}>
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
        </>
    );
}

export default Home;