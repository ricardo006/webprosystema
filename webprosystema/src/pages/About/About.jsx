import { motion } from 'framer-motion';
import { Target, Users, Award, Heart, Shield, Zap } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import '../About/about.css';

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
            description: "Transformar dados em decisões estratégicas que fortalecem o SUS e melhoram a qualidade do atendimento à população."
        },
        {
            icon: Award,
            title: "Visão",
            description: "Ser referência nacional em tecnologia para gestão em saúde, reconhecida pela inovação e impacto social positivo."
        },
        {
            icon: Heart,
            title: "Valores",
            description: "Inovação, transparência, compromisso social, excelência técnica e humanização do cuidado em saúde."
        }
    ];

    // Atualize o array metricsData com ícones
    const metricsData = [
        {
            key: "establishments",
            value: 2500,
            label: "Estabelecimentos de Saúde Atendidos",
            icon: Users // ou outro ícone apropriado
        },
        {
            key: "records",
            value: 20000000,
            label: "De Registros em Prontuários Eletrônicos",
            icon: Shield
        },
        {
            key: "people",
            value: 10000000,
            label: "De Pessoas Atendidas Pelo Sistema",
            icon: Heart
        },
        {
            key: "cities",
            value: 250,
            label: "Cidades Utilizando as Soluções CELK",
            icon: Target
        }
    ];

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;

            metricsData.forEach(metric => {
                let currentStep = 0;
                const startValue = 0;
                const endValue = metric.value;
                const increment = (endValue - startValue) / steps;

                const timer = setInterval(() => {
                    currentStep++;
                    const newValue = Math.min(
                        Math.floor(startValue + (increment * currentStep)),
                        endValue
                    );

                    setCounters(prev => ({
                        ...prev,
                        [metric.key]: newValue
                    }));

                    if (currentStep >= steps) {
                        clearInterval(timer);
                    }
                }, stepDuration);
            });
        }
    }, [isInView]);

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(0) + ' Milhões';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(0) + ' Mil';
        }
        return num.toString();
    };

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

                                {/* Missão, Visão e Valores usando map */}
                                <div className="row about-features-row">
                                    {featuresData.map((feature, index) => (
                                        <div className="col-md-4 mb-4" key={feature.title}>
                                            <motion.div
                                                className="about-feature-card"
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.2 + (index * 0.2), duration: 0.6 }}
                                                whileHover={{ y: -5, scale: 1.02 }}
                                            >
                                                <feature.icon size={48} className="about-feature-icon" />
                                                <h4 className="about-feature-title">{feature.title}</h4>
                                                <p className="about-feature-text">{feature.description}</p>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Segunda Seção - Métricas com Fundo Branco */}
            <div className="about-section about-section-metrics" ref={metricsRef}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <motion.div
                                className="metrics-container"
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    className="metrics-header text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                >
                                    <Zap className="metrics-header-icon" size={48} />
                                    <h2 className="metrics-main-title">
                                        Nossos <span className="metrics-title-highlight">Números</span>
                                    </h2>
                                    <p className="metrics-subtitle">
                                        Impacto real da PROSYSTEMA na Saúde Pública Brasileira!
                                    </p>
                                </motion.div>

                                <div className="metrics-grid">
                                    {metricsData.map((metric, index) => (
                                        <motion.divdiv className="metric-card-inner">
                                            <div className="metric-icon-wrapper">
                                                <metric.icon size={32} className="metric-icon" />
                                            </div>
                                            <div className="metric-content">
                                                <div className="metric-number">
                                                    +{formatNumber(counters[metric.key])}
                                                </div>
                                                <div className="metric-line"></div>
                                                <div className="metric-label">
                                                    {metric.label}
                                                </div>
                                            </div>
                                            <div className="metric-glow"></div>
                                        </motion.divdiv>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;