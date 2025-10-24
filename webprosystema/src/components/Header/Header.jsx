import './header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const menuItems = [
        { id: 1, name: 'Home', path: '/', exact: true },
        { id: 2, name: 'Sobre', path: '/sobre' },
        { id: 3, name: 'Serviços', path: '/servicos' },
        { id: 4, name: 'Portfólio', path: '/portfolio' },
        { id: 5, name: 'Contato', path: '/contato' }
    ];

    const isActive = (item) => {
        if (item.exact) {
            return location.pathname === item.path;
        }
        return location.pathname.startsWith(item.path);
    };

    return (
        <header className="main-header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">
                        Prosystema
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            {menuItems.map((item) => (
                                <li key={item.id} className="nav-item">
                                    <Link
                                        className={`nav-link ${isActive(item) ? 'active' : ''}`}
                                        to={item.path}
                                    >
                                        {item.name}
                                        {isActive(item) && <span className="visually-hidden">(current)</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;