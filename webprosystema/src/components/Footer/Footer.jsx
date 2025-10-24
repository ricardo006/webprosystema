import './footer.css';

function Footer() {
    return (
        <footer className="main-footer bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Prosystema</h5>
                        <p className="mb-0">Soluções profissionais em desenvolvimento web.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="mb-0">
                            &copy; 2024 Web Prosystema. Todos os direitos reservados.
                        </p>
                        <small>Desenvolvido com React e Bootstrap</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;