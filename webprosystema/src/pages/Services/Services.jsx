import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
    Activity,
    Stethoscope,
    Hospital,
    Calendar,
    Shield,
    Pill,
    Brain,
    BarChart3,
    TrendingUp,
    Workflow,
    Heart,
    Settings,
    ClipboardList,
    ArrowRight,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import healtImageHome from "../../assets/img/homem-com-dispositivo-futurista-de-tiro-medio.png";
import './services.css';

const Services = () => {
    const [selectedModule, setSelectedModule] = useState(0); // Primeiro módulo selecionado por padrão

    const modules = [
        {
            id: 'primary-care',
            title: 'Atenção Primária',
            icon: Heart,
            color: 'primary-care-gradient',
            description: 'Reúne ferramentas analíticas e operacionais para o fortalecimento da APS, conforme a Portaria GM/MS nº 3.493, de 10 de abril de 2024. Oferece painéis interativos e mecanismos de personalização das linhas de cuidado, apoiando a gestão orientada por resultados e a melhoria contínua da qualidade dos serviços.'
        },
        {
            id: 'specialized-care',
            title: 'Atenção Especializada Ambulatorial',
            icon: Stethoscope,
            color: 'specialized-care-gradient',
            description: 'Reúne ferramentas analíticas e operacionais, para monitorar demandas de consultas e exames de média e alta complexidade, integrando dados de produção ambulatorial, equipes, serviços especializados, custos assistenciais e informações populacionais. Permite análises estratégicas para qualificação da oferta, identificação de necessidades e otimização de recursos.'
        },
        {
            id: 'hospital-care',
            title: 'Atenção Especializada Hospitalar',
            icon: Hospital,
            color: 'hospital-care-gradient',
            description: 'Oferece monitoramento e gerenciamento integrado dos processos assistenciais e administrativos hospitalares. Consolida dados de internações, leitos, procedimentos, equipes, custos e indicadores de desempenho, apoiando análises estratégicas, planejamento da capacidade instalada e otimização de recursos.'
        },
        {
            id: 'planning',
            title: 'Planejamento e Programação',
            icon: Calendar,
            color: 'planning-gradient',
            description: 'Permite a prospecção quantitativa de consultas, exames e procedimentos especializados, seguindo os critérios definidos pelo Ministério da Saúde (Portaria nº 1.631, de 1º de outubro de 2015). Facilita a identificação da capacidade instalada, projeção da oferta e estimativa da demanda reprimida ou futura, apoiando o planejamento estratégico da rede assistencial.'
        },
        {
            id: 'health-surveillance',
            title: 'Vigilância em Saúde',
            icon: Shield,
            color: 'surveillance-gradient',
            description: 'Integra vigilância epidemiológica, imunização e vigilância sanitária, oferecendo visão articulada das ações de monitoramento e controle. Utiliza geolocalização para análise espacial de agravos, mapeamento da cobertura vacinal e acompanhamento de setores regulados, favorecendo a detecção precoce de riscos e a tomada de decisões estratégicas.'
        },
        {
            id: 'regulation',
            title: 'Central de Regulação, Avaliação e Controle',
            icon: Settings,
            color: 'regulation-gradient',
            description: 'Gerencia o acesso, a produção e a qualidade dos serviços de saúde, integrando informações ambulatoriais e hospitalares. Permite monitorar solicitações, autorizações, execuções, indicadores de desempenho e conformidade com normas do SUS, apoiando regulação, avaliação de resultados e planejamento estratégico.'
        },
        {
            id: 'pharmaceutical',
            title: 'Assistência Farmacêutica',
            icon: Pill,
            color: 'pharmaceutical-gradient',
            description: 'Gerencia medicamentos e insumos de forma integrada, utilizando inteligência artificial para analisar tendências de consumo, identificar padrões atípicos e prever demandas futuras, contribuindo para o controle, transparência e uso racional dos recursos.'
        },
        {
            id: 'ai-intelligence',
            title: 'Central de Inteligência Estratégica (IA)',
            icon: Brain,
            color: 'ai-gradient',
            description: 'Serviços de análise avançada com Inteligência Artificial e Assistente Virtual LLM. Incorpora serviços de análise avançada baseados em IA, capazes de identificar padrões, gerar projeções de cenários e emitir alertas automáticos. Inclui assistente virtual baseado em Large Language Models (LLM) com interação conversacional.'
        },
        {
            id: 'integrated-records',
            title: 'Prontuário Integrado',
            icon: ClipboardList,
            color: 'records-gradient',
            description: 'Conecta estabelecimentos públicos e privados, permitindo o compartilhamento seguro dos Registros de Atendimento Clínico. Disponibiliza histórico completo do paciente, incluindo diagnósticos, exames, procedimentos, prescrições e desfechos, fortalecendo a integração e agilizando decisões clínicas.'
        },
        {
            id: 'bi-dashboards',
            title: 'Painéis de Inteligência',
            icon: BarChart3,
            color: 'bi-gradient',
            description: 'A plataforma consolida os dados e os transforma em informações estratégicas por meio de painéis de Business Intelligence e relatórios analíticos em tempo real, que apoiam a tomada de decisão e contribuem para a melhoria contínua dos serviços de saúde em todos os níveis de assistência.'
        }
    ];

    // Configuração do Embla Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        containScroll: 'trimSnaps'
    }, [Autoplay({ delay: 5000 })]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    const handleSlideClick = (index) => {
        setSelectedModule(index);
        if (emblaApi) {
            emblaApi.scrollTo(index);
        }
    };

    const detailVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4
            }
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <>
            {/* Seção Principal com Gradiente */}
            <div className="services-home-container">
                {/* Círculos animados de fundo */}
                <div className="services-floating-circle services-circle-1"></div>
                <div className="services-floating-circle services-circle-2"></div>
                <div className="services-floating-circle services-circle-3"></div>
                <div className="services-floating-circle services-circle-4"></div>
                <div className="services-floating-circle services-circle-5"></div>

                <div className="container-fluid">
                    <div className="row align-items-center">
                        {/* Texto à esquerda */}
                        <div className="col-lg-7">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="services-home-content"
                            >
                                <motion.h1
                                    className="display-4 fw-bold mb-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    style={{ color: '#263238' }}
                                >
                                    Nossas Soluções em
                                    <span className="text-primary-health"> Saúde Pública</span>
                                </motion.h1>

                                <motion.p
                                    className="lead text-muted mb-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    Plataforma completa com Inteligência Artificial para transformar a Gestão da Saúde
                                </motion.p>
                            </motion.div>
                        </div>

                        {/* Imagem com SVG - à direita */}
                        <div className="col-lg-5">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="services-home-image-composition"
                            >
                                {/* NOVO SVG fornecido - ATRÁS */}
                                <div className="services-svg-background">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 480 480"
                                        className="services-custom-svg"
                                    >
                                        <path
                                            d="M240 0H0a240 240 0 0 0 240 240h240A240 240 0 0 0 240 0ZM240 240H0a240 240 0 0 0 240 240h240a240 240 0 0 0-240-240Z"
                                            fill="#0A9CF2"
                                        />
                                    </svg>
                                </div>

                                {/* Imagem importada - ACIMA DO SVG */}
                                <div className="services-image-foreground">
                                    <motion.img
                                        src={healtImageHome}
                                        alt="Soluções em Saúde Pública"
                                        className="services-foreground-image"
                                        initial={{ scale: 1.4, opacity: 0 }}
                                        animate={{ scale: 1.4, opacity: 1 }}
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Carousel de Navegação */}
                        <div className="col-lg-12">
                            <div className="services-carousel-section">
                                <div className="services-embla">
                                    {/* Botões de navegação */}
                                    <div
                                        className="services-embla__controls"
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            gap: "8px",
                                            marginTop: "10px"
                                        }}
                                    >
                                        <button className="services-embla__prev" onClick={scrollPrev}>
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button className="services-embla__next" onClick={scrollNext}>
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>

                                    <div className="services-embla__viewport" ref={emblaRef}>
                                        <div className="services-embla__container">
                                            {modules.map((module, index) => {
                                                const IconComponent = module.icon;
                                                return (
                                                    <div className="services-embla__slide" key={module.id}>
                                                        <motion.div
                                                            className={`services-carousel-card ${selectedModule === index ? 'services-carousel-card-active' : ''}`}
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                                            whileHover={{ y: -5, scale: 1.02 }}
                                                            onClick={() => handleSlideClick(index)}
                                                        >
                                                            <div className="services-carousel-icon">
                                                                <div className={`services-carousel-icon-bg ${module.color}`}>
                                                                    <IconComponent className="services-carousel-icon-svg" />
                                                                </div>
                                                            </div>
                                                            <h4 className="services-carousel-title">{module.title}</h4>
                                                            <div className="services-carousel-hover"></div>
                                                        </motion.div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Área de Conteúdo Detalhado */}
                    <div className="services-container">
                        <div className="services-content">
                            <div className="services-details-area">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedModule}
                                        variants={detailVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="services-details-content"
                                    >
                                        <div className="services-details-header">
                                            <div className={`services-details-icon ${modules[selectedModule].color}`}>
                                                {React.createElement(modules[selectedModule].icon, {
                                                    className: "services-details-main-icon"
                                                })}
                                            </div>
                                            <h2 className="services-details-title">
                                                {modules[selectedModule].title}
                                            </h2>
                                        </div>

                                        <div className="services-details-description">
                                            <p className="services-description-text">
                                                {modules[selectedModule].description}
                                            </p>
                                        </div>

                                        <div className="services-benefits-section">
                                            <h3 className="services-benefits-title">
                                                Principais Benefícios
                                            </h3>
                                            <ul className="services-benefits-list">
                                                {modules[selectedModule].description.split('. ').slice(0, 3).map((benefit, index) => (
                                                    <li key={index} className="services-benefit-item">
                                                        <div className="services-benefit-icon">
                                                            <Activity className="services-benefit-check" />
                                                        </div>
                                                        <span className="services-benefit-text">{benefit}.</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`services-cta-button ${modules[selectedModule].color}`}
                                        >
                                            Saiba Mais sobre {modules[selectedModule].title}
                                            <ArrowRight className="ms-2" size={20} />
                                        </motion.button>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;