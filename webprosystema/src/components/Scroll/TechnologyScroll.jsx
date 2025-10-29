import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {
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
    TrendingUp,
} from "lucide-react";
import "./technologyScroll.css";

const features = [
    { text: "Diferenciais Tecnológicos", icon: <Cpu size={40} />, height: "high" },
    { text: "Arquitetura Modular e Escalável", icon: <Layers size={40} />, height: "low" },
    { text: "Segurança Total Conforme LGPD", icon: <ShieldCheck size={40} />, height: "high" },
    { text: "Disponibilidade 24/7", icon: <Clock size={40} />, height: "low" },
    { text: "Interface Moderna e Intuitiva", icon: <Smartphone size={40} />, height: "high" },
    { text: "Base de Dados Integrada aos Sistemas Nacionais", icon: <Database size={40} />, height: "low" },
    { text: "Resultados para o SUS", icon: <Target size={40} />, height: "high" },
    { text: "Gestão Pública Orientada por Dados", icon: <BarChart3 size={40} />, height: "low" },
    { text: "Otimização de Recursos Financeiros", icon: <DollarSign size={40} />, height: "high" },
    { text: "Melhoria da Experiência do Paciente", icon: <Heart size={40} />, height: "low" },
    { text: "Integração Real entre os Níveis de Atenção", icon: <GitMerge size={40} />, height: "high" },
    { text: "Aumento da Transparência e da Eficiência", icon: <TrendingUp size={40} />, height: "low" },
];

const TechnologyScroll = () => {
    const trackRef = useRef(null);
    const controls = useAnimation();
    const [distance, setDistance] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const particlesContainerRef = useRef(null);

    // Configuração das partículas
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const particlesOptions = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 30,
            },
            opacity: {
                value: 0.2,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
    };

    // calcula a distância que o track precisa percorrer
    useEffect(() => {
        const update = () => {
            const el = trackRef.current;
            if (!el) return;
            const totalWidth = el.scrollWidth;
            const move = totalWidth / 2 || 0;
            setDistance(move);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // inicia a animação
    useEffect(() => {
        if (!distance) return;

        const baseDuration = Math.max(12, distance / 80);
        const animation = async () => {
            await controls.start({
                x: [-0, -distance],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: baseDuration,
                        ease: "linear",
                    },
                },
            });
        };

        if (!isPaused) animation();

        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [distance, isPaused]);

    // duplicamos o array para criar o loop suave
    const itemsForLoop = [...features, ...features];

    return (
        <motion.section
            className="technology-scroll-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Container das partículas limitado a esta seção */}
            <div ref={particlesContainerRef} className="particles-container">
                <Particles
                    id="tsparticles-technology"
                    init={particlesInit}
                    options={particlesOptions}
                    container={particlesContainerRef}
                />
            </div>

            <h2 className="technology-scroll-title">
                Tecnologia que Transforma a Gestão em Resultados
            </h2>

            <div
                className="scroll-viewport"
                onMouseEnter={() => {
                    setIsPaused(true);
                    controls.stop();
                }}
                onMouseLeave={() => {
                    setIsPaused(false);
                }}
            >
                <motion.div
                    className="scroll-track"
                    ref={trackRef}
                    animate={controls}
                    onFocus={() => {
                        setIsPaused(true);
                        controls.stop();
                    }}
                    onBlur={() => {
                        setIsPaused(false);
                    }}
                >
                    {itemsForLoop.map((item, index) => (
                        <motion.div
                            className={`bubble-card ${item.height}`}
                            key={index}
                            animate={{
                                y: item.height === "high" ? [-5, 5, -5] : [5, -5, 5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                scale: 1.1,
                                y: 0,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Sombra de fundo pulsante */}
                            <motion.div
                                className="bubble-shadow"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Conteúdo do card */}
                            <div className="bubble-content">
                                <div className="bubble-icon">{item.icon}</div>
                                <p className="bubble-text">{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TechnologyScroll;