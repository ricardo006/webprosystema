import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Services from './pages/Services/Services.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Contact from './pages/Contact/Contact.jsx';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />

            <main className="main-content">
                <div className="container mt-5 pt-5 pb-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<About />} />
                        <Route path="/servicos" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contato" element={<Contact />} />
                    </Routes>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;