import { motion } from 'framer-motion';
import { Target, Award, Heart, CheckCircle } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import '../About/about.css';

// Importe apenas 3 imagens
import MissaoImg from '../../assets/img/banner-medico-com-estetoscopio.jpg';
import VisaoImg from '../../assets/img/banner-medico-com-estetoscopio.jpg';
import ValoresImg from '../../assets/img/banner-medico-com-estetoscopio.jpg';

function About() {
    const metricsRef = useRef(null);
    const isInView = useInView(metricsRef, { once: true, threshold: 0.3 });
    const [counters, setCounters] = useState({
        establishments: 0,
        records: 0,
        people: 0,
        cities: 0
    });

    // Dados para Missão, Visão e Valores
    const featuresData = [
        {
            icon: Target,
            title: "Missão",
            description: "Promover a transformação digital da Rede Assistencial em Saúde por meio de uma plataforma tecnológica integrada, capaz de centralizar, qualificar e transformar dados em informações estratégicas. Nossa missão é apoiar a gestão pública na tomada de decisões em tempo real, fortalecer a coordenação do cuidado e assegurar um atendimento mais eficiente, humanizado e transparente ao cidadão.",
            image: MissaoImg,
            colClass: "col-lg-6 col-md-6"
        },
        {
            icon: Award,
            title: "Visão",
            description: "Ser referência nacional em soluções inteligentes para a gestão integrada da saúde pública, consolidando dados assistenciais e operacionais em um ecossistema único que conecte serviços, profissionais e cidadãos. Almejamos impulsionar uma nova era de governança em saúde, orientada por dados, interoperabilidade e inovação contínua.",
            image: VisaoImg,
            colClass: "col-lg-6 col-md-6"
        },
        {
            icon: Heart,
            title: "Valores",
            description: "Nossos valores fundamentais guiam cada decisão e ação em nossa empresa:",
            image: ValoresImg,
            colClass: "col-12",
            valoresLista: [
                "Inovação: Utilizamos tecnologias avançadas, como Inteligência Artificial e modelos de linguagem, para oferecer recursos inteligentes e preditivos que aprimoram a gestão e o cuidado.",
                "Integração: Promovemos a interoperabilidade entre sistemas e níveis de atenção, garantindo a continuidade e a integralidade do cuidado ao cidadão.",
                "Transparência: Incentivamos a gestão baseada em evidências e dados abertos, fortalecendo a confiança nos serviços públicos de saúde.",
                "Eficiência: Buscamos otimizar recursos assistenciais e operacionais, aprimorando fluxos e processos em toda a rede.",
                "Humanização: Colocamos o cidadão no centro do cuidado, apoiando os profissionais de saúde com ferramentas que favorecem o atendimento resolutivo e empático.",
                "Colaboração: Valorizamos o trabalho em rede, a integração entre equipes e a corresponsabilidade entre gestão, profissionais e tecnologia.",
                "Segurança da Informação: Garantimos confidencialidade, integridade e rastreabilidade dos dados, em conformidade com as normas legais e éticas vigentes."
            ]
        }
    ];

    return (
        <div className="about-page">
            {/* Primeira Seção - Sobre a Empresa com Gradiente Azul */}
            <div className="about-section about-section-primary">
                {/* Círculos animados de fundo */}
                <div className="about-bubble about-bubble-1"></div>
                <div className="about-bubble about-bubble-2"></div>
                <div className="about-bubble about-bubble-3"></div>
                <div className="about-bubble about-bubble-4"></div>
                <div className="about-bubble about-bubble-5"></div>

                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="about-content"
                            >
                                {/* Cabeçalho principal */}
                                <motion.div
                                    className="about-header text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                >
                                    <h1 className="about-main-title">
                                        Nossa Empresa
                                    </h1>

                                    <p className="about-subtitle">
                                        A <strong>PROSYSTEMA</strong> nasceu da necessidade de transformar
                                        a gestão em saúde pública através da tecnologia e inovação.
                                    </p>
                                    <p className="about-subtitle">
                                        Somos uma empresa especializada em soluções tecnológicas para
                                        o setor de saúde, combinando inteligência artificial, análise
                                        de dados e expertise em gestão pública para criar impactos
                                        positivos no Sistema Único de Saúde (SUS).
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção Missão, Visão e Valores COM IMAGENS */}
            <div className="valores-section">
                <div className="container-fluid">
                    <div className="row">
                        {featuresData.map((feature, index) => (
                            <div className={`${feature.colClass} mb-4`} key={feature.title}>
                                <motion.div
                                    className={`valor-card ${feature.colClass === 'col-12' ? 'valor-card-full' : ''}`}
                                    initial={{
                                        opacity: 0,
                                        x: index === 0 ? -50 : index === 1 ? 50 : 0,
                                        y: index === 2 ? 50 : 0
                                    }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                                >
                                    <div className="valor-content-wrapper">
                                        <div className="valor-image-container">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="valor-image"
                                            />
                                            <div className="valor-icon-overlay">
                                                {feature.icon === Target && <Target size={32} className="valor-icon" />}
                                                {feature.icon === Award && <Award size={32} className="valor-icon" />}
                                                {feature.icon === Heart && <Heart size={32} className="valor-icon" />}
                                            </div>
                                        </div>
                                        <div className="valor-text-content">
                                            <h3 className="valor-title">{feature.title}</h3>
                                            <p className="valor-description">{feature.description}</p>

                                            {/* Lista de valores apenas para o card de Valores */}
                                            {feature.valoresLista && (
                                                <div className="valores-lista">
                                                    {feature.valoresLista.map((item, idx) => (
                                                        <div key={idx} className="valor-item">
                                                            <CheckCircle size={20} className="valor-check-icon" />
                                                            <span className="valor-item-text">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;