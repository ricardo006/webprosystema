import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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
            <nav className="navbar navbar-expand-lg navbar-dark bg-health">
                <div className="container">
                    {/* Logo com menos padding */}
                    <motion.div
                        className="navbar-brand-container"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link className="navbar-brand fw-bold" to="/">
                            Prosystema
                        </Link>
                    </motion.div>

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
                                <motion.li
                                    key={item.id}
                                    className="nav-item"
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        className={`nav-link ${isActive(item) ? 'active' : ''}`}
                                        to={item.path}
                                    >
                                        {item.name}
                                        {isActive(item) && (
                                            <motion.span
                                                className="active-indicator"
                                                layoutId="activeIndicator"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;