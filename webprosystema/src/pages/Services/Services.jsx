function Services() {
    const services = [
        'Desenvolvimento Web',
        'Consultoria TI',
        'Design UX/UI',
        'Manutenção de Sistemas'
    ];

    return (
        <div>
            <h1 className="text-center mb-4">Nossos Serviços</h1>
            <div className="row">
                {services.map((service, index) => (
                    <div key={index} className="col-md-6 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h6>{service}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;