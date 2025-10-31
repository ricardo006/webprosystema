import './footer.css';
import LogoProsystema from '../../assets/img/logo-prosystema.png';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

function Footer() {
    return (
        <footer className="main-footer">
            {/* SVG Wave na parte superior do footer */}
            <div className="footer-wave-top">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="footer-wave"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        fill="#afd0f1ff"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        fill="#79aadbff"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        fill="#4383c5"
                    ></path>
                </svg>
            </div>

            {/* Conteúdo principal do footer */}
            <div className="footer-content text-white">
                <div className="p-4">
                    <div className="row align-items-start">
                        {/* Coluna da Logo e Descrição */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="footer-brand">
                                <img
                                    src={LogoProsystema}
                                    alt="PROSYSTEMA"
                                    className="footer-logo mb-3"
                                />
                                <p className="brand-tagline">
                                    Inovação e Inteligência Artificial a Serviço da Gestão em Saúde
                                </p>
                                <p className="brand-description">
                                    Transformando informações em decisões que geram impacto real.
                                </p>
                            </div>
                        </div>

                        {/* Coluna de Contato */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="footer-contact">
                                <h5 className="contact-title">Contato</h5>
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <Phone size={18} className="contact-icon" />
                                        <span>62 9 8453-3000</span>
                                    </div>
                                    <div className="contact-item">
                                        <Mail size={18} className="contact-icon" />
                                        <span>comercial@prosystema.com.br</span>
                                    </div>
                                    <div className="contact-item address">
                                        <MapPin size={18} className="contact-icon" />
                                        <span>
                                            Rua Goiania, Quadra 09 A, Lote 01B, Sala 03<br />
                                            Setor Central 2, Senador Canedo – GO<br />
                                            CEP 75251-461
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coluna de Informações Empresariais */}
                        <div className="col-lg-4 col-md-12 mb-2">
                            <div className="footer-company">
                                <h5 className="company-title">Informações</h5>
                                <div className="company-info">
                                    <div className="company-item">
                                        <strong>PROSYSTEMA EMPRESARIAL</strong><br />
                                        CNPJ 13.964.461/0001-26
                                    </div>
                                    <div className="company-links">
                                        <div className="company-link-item">
                                            <Globe size={16} className="company-link-icon" />
                                            <a href="https://www.prosystema.com.br" className="company-link">
                                                www.prosystema.com.br
                                            </a>
                                        </div>
                                        <div className="company-link-item">
                                            <Mail size={16} className="company-link-icon" />
                                            <a href="mailto:comercial@prosystema.com.br" className="company-link">
                                                comercial@prosystema.com.br
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Linha de Copyright */}
                    <div className="row pt-4 mt-3">
                        <div className="col-12 text-center">
                            <p className="copyright">
                                &copy; 2025 PROSYSTEMA. Todos os direitos reservados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;