import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoProsystema from '../../assets/img/logo-prosystema.png';
import {
    Home,
    Users,
    Settings,
    Briefcase,
    Phone
} from 'lucide-react';

function Header() {
    const location = useLocation();

    const menuItems = [
        { id: 1, name: 'Home', path: '/', exact: true, icon: <Home size={20} /> },
        { id: 2, name: 'Sobre', path: '/sobre', icon: <Users size={20} /> },
        { id: 3, name: 'Serviços', path: '/servicos', icon: <Settings size={20} /> },
        { id: 4, name: 'Portfólio', path: '/portfolio', icon: <Briefcase size={20} /> },
        { id: 5, name: 'Contato', path: '/contato', icon: <Phone size={20} /> }
    ];

    const isActive = (item) => {
        if (item.exact) {
            return location.pathname === item.path;
        }
        return location.pathname.startsWith(item.path);
    };

    return (
        <header className="main-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid p-0">
                    {/* Logo à esquerda */}
                    <motion.div
                        className="navbar-brand-container"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link className="navbar-brand fw-bold" to="/">
                            <div className="logo-wrapper">
                                <img
                                    src={LogoProsystema}
                                    alt="Prosystema"
                                    className="logo-image"
                                />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Toggler button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu items centralizados */}
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
                                        <div className="nav-link-content">
                                            <span className="nav-icon">
                                                {item.icon}
                                            </span>
                                            <span className="nav-text">
                                                {item.name}
                                            </span>
                                        </div>
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