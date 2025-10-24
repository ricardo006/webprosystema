function Contact() {
    return (
        <div>
            <h1 className="text-center mb-4">Contato</h1>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Nome</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mensagem</label>
                                    <textarea className="form-control" rows="4"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;