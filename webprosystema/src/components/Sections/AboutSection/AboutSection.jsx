import React, { useState, useEffect } from 'react';
import './AboutSection.css';

const AboutSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const galleryImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Robô e inteligência artificial",
            borderRadius: "top-left"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Equipe de tecnologia e inovação corporativa",
            borderRadius: "top-right"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb‑4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Desenvolvedor codificando para IA",
            borderRadius: "bottom-left"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Painel de dados e visualização de IA corporativa",
            borderRadius: "bottom-right"
        }
    ];


    // Auto-rotate das imagens principais
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % galleryImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [galleryImages.length]);

    return (
        <section className="about-section-grid mt-4">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Galeria em Grid 2x2 - Esquerda */}
                    <div className="col-lg-5">
                        <div className="square-gallery-container">
                            {/* SVG de fundo */}
                            <div className="svg-background">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
                                    <defs>
                                        <linearGradient id="meuGradiente" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#42a5f5" /> 
                                            <stop offset="100%" stopColor="#36ca5bff" /> 
                                        </linearGradient>
                                    </defs>
                                    <path d="M320 160a160 160 0 1 0-320 0v320h160V160h160ZM320 0v320H160a160 160 0 1 0 320 0V0H320Z" fill="url(#meuGradiente)"></path></svg>
                            </div>

                            <div className="gallery-grid-2x2">
                                {galleryImages.map((image, index) => (
                                    <div
                                        key={image.id}
                                        className={`grid-item ${image.borderRadius}`}
                                        onMouseEnter={() => setActiveIndex(index)}
                                    >
                                        <div className="image-wrapper">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="grid-image"
                                            />
                                            <div>
                                                <span className="grid-text">{image.alt}</span>
                                            </div>
                                            <div className="grid-border"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Conteúdo About Us - Direita */}
                    <div className="col-lg-7">
                        <div className="grid-about-content">
                            <div className="content-card">
                                <h2 className="grid-title">
                                    Transformando Ideias
                                    <span className="title-accent">em Realidade Digital</span>
                                </h2>

                                <p className="grid-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore.
                                </p>

                                {/* Stats */}
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <div className="stat-number">150+</div>
                                        <div className="stat-label">Tem Punctors</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">2000+</div>
                                        <div className="stat-label">Nunc Cedricus</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">99%</div>
                                        <div className="stat-label">Cristis Sapincinus</div>
                                    </div>
                                </div>

                                {/* Conteúdo original */}
                                <div className="original-content">
                                    <p className="about-text">
                                        A <strong>PROSYSTEMA</strong> é uma <strong>plataforma tecnológica completa</strong> que atua como
                                        <strong> hub central</strong>, integrando e consolidando dados de diversas fontes para transformar
                                        informações em <strong>decisões estratégicas que fortalecem o SUS</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;