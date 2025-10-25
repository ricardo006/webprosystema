import { motion } from 'framer-motion';
import healtImageHome from "../../assets/img/retrato-de-um-medico-sincero.png";
import twoMedicalAbout from "../../assets/img/profissionais-da-saude-revisam-os-resultados-dos-exames-de-ressonancia-magnetica-e-raios-x-neurologicos.jpg";
import medical from "../../assets/img/medico-sorridente-usando-projecao-3d-virtual.jpg";
import "../Home/home.css";
import GestaoIcon from "../../assets/icons/icon1.png";
import MonitoramentoIcon from "../../assets/icons/icon2.png";
import VisaoIcon from "../../assets/icons/icon3.png";
import AcompanhamentoIcon from "../../assets/icons/icon4.png";
import AnalisesIcon from "../../assets/icons/icon5.png";
import ApoioIcon from "../../assets/icons/icon6.png";

function Home() {
    const services = [
        {
            id: 1,
            icon: GestaoIcon,
            title: "Gestão Inteligente com IA e Dados em Tempo Real",
            description: "Inteligência artificial para análise preditiva em saúde pública"
        },
        {
            id: 2,
            icon: MonitoramentoIcon,
            title: "Monitoramento Automatizado de Indicadores",
            description: "Otimização de recursos e processos em tempo real"
        },
        {
            id: 3,
            icon: VisaoIcon,
            title: "Visão Integrada da Rede de Saúde",
            description: "Proteção avançada para informações sensíveis de saúde"
        },
        {
            id: 4,
            icon: AcompanhamentoIcon,
            title: "Acompanhamento de Metas & Desempenho",
            description: "Sistemas automatizados para agilizar atendimentos"
        },
        {
            id: 5,
            icon: AnalisesIcon,
            title: "Análises Preditivas & Alertas Automáticos",
            description: "Sistemas automatizados para agilizar atendimentos"
        },
        {
            id: 5,
            icon: ApoioIcon,
            title: "Apoio à Tomada de Decisão Estratégica",
            description: "Sistemas automatizados para agilizar atendimentos"
        }
    ];

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
                <div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center mb-5">
                            <h2 className="services-title">Quem Somos?</h2>
                            <p className="services-subtitle"></p>
                        </div>

                        <div className="col-lg-12">
                            <div className="about-content" style={{ backgroundColor: '#f8f9fa', borderRadius: '60px' }}>
                                <motion.div
                                    className="about-intro"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <p className="lead pt-3">
                                        A <strong>PROSYSTEMA</strong> é uma plataforma tecnológica completa que une:
                                    </p>
                                </motion.div>

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
                                                {/* SVG com Imagem - Coluna 3 */}
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
                                                                {/* Forma de fundo */}
                                                                <path
                                                                    d="M0 0h230c138 0 250 112 250 250v230H250C112 480 0 368 0 230V0Z"
                                                                    fill="#808"
                                                                />

                                                                {/* Imagem dentro da forma */}
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

                                    {/* Segunda Linha - Com Foco em: */}
                                    <div className="col-12">
                                        <motion.div
                                            className="focus-row mt-4"
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

                                                {/* SVG COM IMAGEM - Coluna 5 (MESMO SVG DA PRIMEIRA LINHA) */}
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
                                                                {/* Forma de fundo */}
                                                                <path
                                                                    d="M0 0h230c138 0 250 112 250 250v230H250C112 480 0 368 0 230V0Z"
                                                                    fill="#808"
                                                                />

                                                                {/* Imagem dentro da forma */}
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
                className="services-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center mb-5">
                            <h2 className="services-title">Nossas Soluções</h2>
                            <p className="services-subtitle">Veja como nossa soluções ajudam a gestão</p>
                        </div>

                        <div className="col-12">
                            <div className="services-cards">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        className="service-card"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                    >
                                        <div className="service-icon">
                                            <img
                                                src={service.icon}
                                                alt={service.title}
                                                className="service-icon-image"
                                            />
                                        </div>
                                        <h4 className="service-card-title">{service.title}</h4>
                                        <p className="service-card-description">{service.description}</p>
                                        <div className="service-card-hover"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}

export default Home;