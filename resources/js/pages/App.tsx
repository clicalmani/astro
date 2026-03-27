import { useEffect } from "react";
import { FaArrowRight, FaBolt, FaCodeBranch, FaGithub, FaPaperPlane, FaPlus, FaReact, FaRocket, FaTwitter } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";

export default function App() {

    const codeSnippet = `<span class="text-primary">
                            import</span> { Elegant } <span class="text-primary">from</span> <span class="text-success">'driftql-react'</span>;

                            <span class="text-blue-400">export default function</span> <span class="text-warning">UserProfile</span>() {
                            <span class="text-muted">// Auto-Data Binding & Zero Fetch</span>
                            <span class="text-blue-400">return</span> (
                                &lt;<span class="text-danger">Elegant</span>
                                    as=<span class="text-success">"img"</span>
                                    resource=<span class="text-success">"User"</span>
                                    id={1}
                                    data-src=<span class="text-success">"avatar_url"</span>
                                    className=<span class="text-success">"rounded-full"</span>
                                /&gt;
                            );
                            `;

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            
            if (window.scrollY > 50) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            { /** --- NAVBAR --- */ }
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-transparent">
                <div className="container">
                    <a className="navbar-brand fw-bold d-flex align-items-center" href="https://github.com/clicalmani/astro">
                        <FaRocket className="fa-solid text-primary me-2" />
                        TONKA <span className="text-secondary fw-light ms-1">ASTRO</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#features">Fonctionnalités</a></li>
                            <li className="nav-item"><a className="nav-link" href="#code">Code</a></li>
                            <li className="nav-item ms-lg-3">
                                <a href="https://github.com/clicalmani/astro" className="btn btn-outline-light rounded-pill px-4">GitHub</a>
                            </li>
                            <li className="nav-item ms-2">
                                <a href="https://clicalmani.github.io/tonka" className="btn btn-primary btn-glow rounded-pill px-4">Commencer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            { /** --- HERO SECTION --- */ }
            <header className="d-flex align-items-center min-vh-100 position-relative overflow-hidden">
                { /** --- Background decorations (Gradients) --- */ }
                <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden z-0">
                    <div className="position-absolute top-0 start-50 translate-middle-x w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{top: "20%"}}></div>
                    <div className="position-absolute top-0 end-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{top: "40%"}}></div>
                </div>

                <div className="container position-relative z-10">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <span className="badge bg-transparent bg-opacity-25 text-primary mb-3 px-3 py-2 rounded-pill border border-primary border-opacity-25">
                                v1.10.0 Disponible
                            </span>
                            <h1 className="display-3 fw-bold mb-4">
                                Le React Stack <br/>
                                <span className="text-neon text-transparent bg-clip-text bg-gradient">Ultimate pour Tonka</span>
                            </h1>
                            <p className="lead text-muted mb-5">
                                Fusionne la puissance de PHP et la fluidité de React. 
                                InertiaJS, DriftQL et Tonka Router inclus. Zéro configuration.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="https://github.com/clicalmani/astro" className="btn btn-primary btn-lg btn-glow px-5">Documentation</a>
                                <a href="#" className="btn btn-outline-light btn-lg px-5">View Demo</a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center d-none d-lg-block">
                            { /** --- ILLUSTRATION --- */ }
                            <div className="d-flex align-items-center">
                                <img src="/react.svg" alt="React" className="w-175px" />
                                <FaPlus className="text-white opacity-25 ms-2 me-3" size={32} />
                                <img src="/logo.svg" alt="Tonka" className="w-200px" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            { /** --- MAGIC CODE SECTION (DriftQL Demo) --- */ }
            <section id="code" className="py-5 bg-darker">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="code-editor p-0 shadow-lg">
                                <div className="code-dots">
                                    <div className="dot bg-danger"></div>
                                    <div className="dot bg-warning"></div>
                                    <div className="dot bg-success"></div>
                                    <span className="ms-auto text-muted small ff-ms">UserProfile.tsx</span>
                                </div>
                                <pre className="m-0 p-4 text-white ff-ms text-small">
                                    <code dangerouslySetInnerHTML={{ __html: codeSnippet }}></code>
                                </pre>
                            </div>
                        </div>
                        <div className="col-lg-5 ms-lg-auto">
                            <h2 className="h1 fw-bold mb-4">Adieu <span className="text-primary">useEffect</span>, bonjour <span className="text-secondary">Elegant</span>.</h2>
                            <p className="text-muted fs-5 mb-4">
                                Avec DriftQL, accédez à votre base de données comme si c'était du JavaScript natif. Fini les `fetch` répétitifs.
                            </p>
                            <ul className="list-unstyled">
                                <li className="d-flex mb-3">
                                    <div className="me-3 text-primary"><FaBolt className="fa-solid fa-2x" /></div>
                                    <div>
                                        <h5 className="fw-bold text-light">Auto-Injection</h5>
                                        <p className="text-muted small mb-0">Remplit automatiquement le `src` ou le `href`.</p>
                                    </div>
                                </li>
                                <li className="d-flex mb-3">
                                    <div className="me-3 text-secondary"><FaShieldHalved className="fa-solid fa-2x" /></div>
                                    <div>
                                        <h5 className="fw-bold text-light">Secure</h5>
                                        <p className="text-muted small mb-0">Intégration native avec les Policies Tonka.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            { /** --- FEATURES GRID --- */ }
            <section id="features" className="py-5 bg-dark">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="h1 fw-bold">Pourquoi choisir Tonka Astro ?</h2>
                    </div>
                    <div className="row g-4">
                        { /** --- Feature 1 --- */}
                        <div className="col-md-4">
                            <div className="card card-glass p-4 h-100">
                                <div className="text-primary mb-3"><FaReact className="fa-brands fa-3x" /></div>
                                <h4 className="h4 fw-bold text-white mb-3">React 18 + Vite</h4>
                                <p className="text-muted mb-3">
                                    Profitez de la toute dernière version de React avec un Hot Module Replacement instantané.
                                </p>
                                <a href="https://vite.dev/guide/" className="text-primary text-decoration-none fw-bold">En savoir plus <FaArrowRight className="fa-solid ms-1" /></a>
                            </div>
                        </div>
                        { /** --- Feature 2 --- */ }
                        <div className="col-md-4">
                            <div className="card card-glass p-4 h-100">
                                <div className="text-secondary mb-3"><FaPaperPlane className="fa-solid fa-3x" /></div>
                                <h4 className="h4 fw-bold text-white mb-3">InertiaJS</h4>
                                <p className="text-muted mb-3">
                                    La puissance des Single Page Apps sans la complexité de créer une API REST.
                                </p>
                                <a href="https://inertiajs.com/" className="text-secondary text-decoration-none fw-bold">En savoir plus <FaArrowRight className="fa-solid ms-1" /></a>
                            </div>
                        </div>
                        { /** --- Feature 3 --- */ }
                        <div className="col-md-4">
                            <div className="card card-glass p-4 h-100">
                                <div className="text-success mb-3"><FaCodeBranch className="fa-solid fa-3x" /></div>
                                <h4 className="h4 fw-bold text-white mb-3">Tonka Router</h4>
                                <p className="text-muted mb-3">
                                    Utilisez vos routes backend nommées directement dans vos composants React.
                                </p>
                                <a href="https://github.com/clicalmani/tonka-router" className="text-success text-decoration-none fw-bold">En savoir plus <FaArrowRight className="fa-solid ms-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            { /** --- FOOTER --- */ }
            <footer className="py-4 bg-darker text-center border-top border-secondary border-opacity-25">
                <div className="container">
                    <p className="text-muted mb-0">© 2024 Tonka Astro. Built with ❤️ using React & PHP.</p>
                <div className="mt-2">
                    <a href="https://github.com/clicalmani" className="text-muted mx-2 text-decoration-none"><FaGithub className="fa-brands" /></a>
                    <a href="#" className="text-muted mx-2 text-decoration-none"><FaTwitter className="fa-brands" /></a>
                </div>
                </div>
            </footer>
        </>
    );
}