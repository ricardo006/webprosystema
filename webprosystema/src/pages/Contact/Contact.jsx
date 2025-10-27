import { motion } from 'framer-motion';
import { MessageCircle, Send, User, Mail, FileText } from 'lucide-react';
import './contact.css';

function Contact() {
    return (
        <div className="contact-container">
            {/* Círculos animados de fundo - COM CLASSES ESPECÍFICAS */}
            <div className="contact-bubble contact-bubble-1"></div>
            <div className="contact-bubble contact-bubble-2"></div>
            <div className="contact-bubble contact-bubble-3"></div>
            <div className="contact-bubble contact-bubble-4"></div>
            <div className="contact-bubble contact-bubble-5"></div>

            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    {/* Texto à esquerda - Ocupa toda a linha em telas menores */}
                    <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="contact-content"
                        >
                            <motion.h1
                                className="display-4 fw-bold mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                style={{ color: '#263238' }}
                            >
                                Entre em Contato
                                <span className="text-primary-health"> Conosco</span>
                            </motion.h1>

                            <motion.p
                                className="lead text-muted mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                Estamos prontos para transformar sua gestão em saúde com tecnologia e inovação
                            </motion.p>

                            <motion.div
                                className="contact-info"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <div className="contact-info-item">
                                    <MessageCircle size={24} className="contact-info-icon" />
                                    <div>
                                        <h6>Fale Conosco</h6>
                                        <p className="mb-0">Tire suas dúvidas e solicite informações</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <Send size={24} className="contact-info-icon" />
                                    <div>
                                        <h6>Resposta Rápida</h6>
                                        <p className="mb-0">Retornaremos em até 24 horas</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Formulário à direita - Ocupa toda a linha em telas menores */}
                    <div className="col-12 col-lg-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="contact-form-container"
                        >
                            <div className="contact-form-wrapper">
                                <motion.div
                                    className="contact-form-card"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="card-body p-4">
                                        <h4 className="card-title text-center mb-4">
                                            <MessageCircle size={28} className="me-2" />
                                            Envie sua Mensagem
                                        </h4>

                                        <form>
                                            <div className="row">
                                                {/* Nome - Ocupa 6 colunas em telas médias para cima */}
                                                <div className="col-12 col-md-6 mb-3">
                                                    <label className="contact-form-label">
                                                        <User size={18} className="me-2" />
                                                        Nome Completo
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="contact-form-control contact-form-control-lg"
                                                        placeholder="Seu nome completo"
                                                    />
                                                </div>

                                                {/* Email - Ocupa 6 colunas em telas médias para cima */}
                                                <div className="col-12 col-md-6 mb-3">
                                                    <label className="contact-form-label">
                                                        <Mail size={18} className="me-2" />
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="contact-form-control contact-form-control-lg"
                                                        placeholder="seu@email.com"
                                                    />
                                                </div>
                                            </div>

                                            {/* Assunto - Ocupa 12 colunas (linha completa) */}
                                            <div className="row">
                                                <div className="col-12 mb-3">
                                                    <label className="contact-form-label">
                                                        <FileText size={18} className="me-2" />
                                                        Assunto
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="contact-form-control contact-form-control-lg"
                                                        placeholder="Assunto da mensagem"
                                                    />
                                                </div>
                                            </div>

                                            {/* Mensagem - Ocupa 12 colunas (linha completa) */}
                                            <div className="row">
                                                <div className="col-12 mb-4">
                                                    <label className="contact-form-label">
                                                        <MessageCircle size={18} className="me-2" />
                                                        Mensagem
                                                    </label>
                                                    <textarea
                                                        className="contact-form-control contact-form-textarea"
                                                        rows="4"
                                                        placeholder="Descreva sua necessidade ou dúvida..."
                                                    ></textarea>
                                                </div>
                                            </div>

                                            {/* Botão - Ocupa 12 colunas (linha completa) */}
                                            <div className="row">
                                                <div className="col-12">
                                                    <motion.button
                                                        type="submit"
                                                        className="contact-btn-primary"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Send size={20} className="me-2" />
                                                        Enviar Mensagem
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;