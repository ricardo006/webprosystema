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

    useEffect(() => {
        if (isInView) {
            const targetValues = {
                establishments: 2500,
                records: 20000000,
                people: 10000000,
                cities: 250
            };

            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;

            Object.keys(targetValues).forEach(key => {
                let currentStep = 0;
                const startValue = 0;
                const endValue = targetValues[key];
                const increment = (endValue - startValue) / steps;

                const timer = setInterval(() => {
                    currentStep++;
                    const newValue = Math.min(
                        Math.floor(startValue + (increment * currentStep)),
                        endValue
                    );

                    setCounters(prev => ({
                        ...prev,
                        [key]: newValue
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
                                        Sobre Nós
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

                                {/* Missão, Visão e Valores */}
                                <div className="row about-features-row">
                                    <div className="col-md-4 mb-4">
                                        <motion.div
                                            className="about-feature-card"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.2, duration: 0.6 }}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                        >
                                            <Target size={48} className="about-feature-icon" />
                                            <h4 className="about-feature-title">Missão</h4>
                                            <p className="about-feature-text">
                                                Transformar dados em decisões estratégicas que fortalecem
                                                o SUS e melhoram a qualidade do atendimento à população.
                                            </p>
                                        </motion.div>
                                    </div>

                                    <div className="col-md-4 mb-4">
                                        <motion.div
                                            className="about-feature-card"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.4, duration: 0.6 }}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                        >
                                            <Award size={48} className="about-feature-icon" />
                                            <h4 className="about-feature-title">Visão</h4>
                                            <p className="about-feature-text">
                                                Ser referência nacional em tecnologia para gestão em saúde,
                                                reconhecida pela inovação e impacto social positivo.
                                            </p>
                                        </motion.div>
                                    </div>

                                    <div className="col-md-4 mb-4">
                                        <motion.div
                                            className="about-feature-card"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.6, duration: 0.6 }}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                        >
                                            <Heart size={48} className="about-feature-icon" />
                                            <h4 className="about-feature-title">Valores</h4>
                                            <p className="about-feature-text">
                                                Inovação, transparência, compromisso social, excelência
                                                técnica e humanização do cuidado em saúde.
                                            </p>
                                        </motion.div>
                                    </div>
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
                                <motion.h2
                                    className="metrics-main-title text-center mt-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                >
                                    Nossos <span className="metrics-title-highlight">Números</span>
                                </motion.h2>

                                <div className="metrics-grid">
                                    {/* Estabelecimentos de Saúde */}
                                    <motion.div
                                        className="metric-card"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                        <div className="metric-number">
                                            +{formatNumber(counters.establishments)}
                                        </div>
                                        <div className="metric-line"></div>
                                        <div className="metric-label">
                                            Estabelecimentos de Saúde Atendidos
                                        </div>
                                    </motion.div>

                                    {/* Registros em Prontuários Eletrônicos */}
                                    <motion.div
                                        className="metric-card"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                        <div className="metric-number">
                                            +{formatNumber(counters.records)}
                                        </div>
                                        <div className="metric-line"></div>
                                        <div className="metric-label">
                                            De Registros em Prontuários Eletrônicos
                                        </div>
                                    </motion.div>

                                    {/* Pessoas Atendidas */}
                                    <motion.div
                                        className="metric-card"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ delay: 0.5, duration: 0.6 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                        <div className="metric-number">
                                            +{formatNumber(counters.people)}
                                        </div>
                                        <div className="metric-line"></div>
                                        <div className="metric-label">
                                            De Pessoas Atendidas Pelo Sistema
                                        </div>
                                    </motion.div>

                                    {/* Cidades */}
                                    <motion.div
                                        className="metric-card"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ delay: 0.6, duration: 0.6 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                        <div className="metric-number">
                                            +{counters.cities}
                                        </div>
                                        <div className="metric-line"></div>
                                        <div className="metric-label">
                                            Cidades Utilizando as Soluções CELK
                                        </div>
                                    </motion.div>
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