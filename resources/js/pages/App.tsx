import { useEffect, useRef } from "react";
import { FaArrowRight, FaBolt, FaCodeBranch, FaGithub, FaPaperPlane, FaReact, FaRocket, FaTwitter } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";

export default function App() {

    const codeSnippet = `<span class="text-primary">// components/UserList.tsx</span>
<span class="text-primary">import</span> { useElegant } <span class="text-primary">from</span> <span class="text-success">'driftql-react'</span>;

<span class="text-blue-400">interface</span> <span class="text-warning">User</span> {
  id: <span class="text-blue-400">number</span>;
  name: <span class="text-blue-400">string</span>;
  email: <span class="text-blue-400">string</span>;
}

<span class="text-blue-400">function</span> <span class="text-warning">UserList</span>() {
  <span class="text-blue-400">const</span> { all, find, delete: deleteUser } = <span class="text-warning">useElegant</span>&lt;<span class="text-warning">User</span>&gt;(<span class="text-success">'User'</span>);
  <span class="text-blue-400">const</span> [users, setUsers] = <span class="text-warning">useState</span>&lt;<span class="text-warning">User</span>[]&gt;([]);
  <span class="text-blue-400">const</span> [loading, setLoading] = <span class="text-warning">useState</span>(<span class="text-blue-400">false</span>);

  <span class="text-warning">useEffect</span>(() => {
    <span class="text-warning">setLoading</span>(<span class="text-blue-400">true</span>);
    <span class="text-warning">all</span>()
      .<span class="text-warning">then</span>(setUsers)
      .<span class="text-warning">finally</span>(() => <span class="text-warning">setLoading</span>(<span class="text-blue-400">false</span>));
  }, []);

  <span class="text-blue-400">const</span> <span class="text-warning">handleDelete</span> = <span class="text-blue-400">async</span> (id: <span class="text-blue-400">number</span>) => {
    <span class="text-blue-400">await</span> <span class="text-warning">deleteUser</span>(id);
    <span class="text-warning">setUsers</span>(users.<span class="text-warning">filter</span>(u => u.id !== id));
  };

  <span class="text-blue-400">if</span> (loading) <span class="text-blue-400">return</span> &lt;<span class="text-danger">div</span>&gt;Loading...&lt;/<span class="text-danger">div</span>&gt;;

  <span class="text-blue-400">return</span> (
    &lt;<span class="text-danger">ul</span>&gt;
      {users.<span class="text-warning">map</span>(user => (
        &lt;<span class="text-danger">li</span> key={user.id}&gt;
          {user.name} - {user.email}
          &lt;<span class="text-danger">button</span> onClick={() => <span class="text-warning">handleDelete</span>(user.id)}&gt;Delete&lt;/<span class="text-danger">button</span>&gt;
        &lt;/<span class="text-danger">li</span>&gt;
      ))}
    &lt;/<span class="text-danger">ul</span>&gt;
  );
}`;

    // --- Navbar scroll effect ---
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

    // --- Code block auto-scroll effect ---
    const codeScrollRef = useRef<HTMLPreElement | null>(null);
    const isPausedRef = useRef(false);

    useEffect(() => {
        const el = codeScrollRef.current;
        if (!el) return;

        let animationId: number;
        const speed = 0.4;

        const step = () => {
            if (el && !isPausedRef.current) {
                const maxScroll = el.scrollHeight - el.clientHeight;

                if (maxScroll > 0) {
                    if (el.scrollTop >= maxScroll) {
                        el.scrollTop = 0;
                    } else {
                        el.scrollTop += speed;
                    }
                }
            }
            animationId = requestAnimationFrame(step);
        };

        animationId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="tonka-landing">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

                .tonka-landing {
                    --ink: #0D1321;
                    --surface: #141B2E;
                    --surface-2: #1B2438;
                    --line: rgba(241, 237, 228, 0.09);
                    --text: #F1EDE4;
                    --muted: #8C93A8;
                    --gold: #E8A33D;
                    --gold-soft: rgba(232, 163, 61, 0.12);
                    --violet: #6C7FE0;

                    background: var(--ink);
                    color: var(--text);
                    font-family: 'Inter', sans-serif;
                }

                .tonka-landing h1, .tonka-landing h2, .tonka-landing h4, .tonka-landing h5 {
                    font-family: 'Space Grotesk', sans-serif;
                    letter-spacing: -0.01em;
                }

                .tonka-landing .ff-ms { font-family: 'JetBrains Mono', monospace; }
                .tonka-landing .text-muted { color: var(--muted) !important; }
                .tonka-landing .bg-darker { background: var(--surface); }
                .tonka-landing .bg-dark { background: var(--ink); }
                .tonka-landing a { color: inherit; }

                /* --- Navbar --- */
                .tonka-landing .navbar {
                    padding: 1.35rem 0;
                    border-bottom: 1px solid transparent;
                    transition: background-color .25s ease, border-color .25s ease, padding .25s ease;
                }
                .tonka-landing .navbar.scrolled {
                    background-color: rgba(13, 19, 33, 0.88);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border-bottom-color: var(--line);
                    padding: 0.85rem 0;
                }
                .tonka-landing .navbar-brand {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.15rem;
                    letter-spacing: 0.01em;
                }
                .tonka-landing .nav-link {
                    color: var(--muted);
                    font-size: 0.95rem;
                    transition: color .2s ease;
                }
                .tonka-landing .nav-link:hover { color: var(--text); }

                /* --- Buttons --- */
                .tonka-landing .btn { border-radius: 8px; font-weight: 500; font-size: 0.95rem; }
                .tonka-landing .btn-primary {
                    background: var(--gold);
                    border-color: var(--gold);
                    color: var(--ink);
                    font-weight: 600;
                }
                .tonka-landing .btn-primary:hover {
                    background: #f2b158;
                    border-color: #f2b158;
                    color: var(--ink);
                }
                .tonka-landing .btn-outline-light {
                    border: 1px solid var(--line);
                    color: var(--text);
                }
                .tonka-landing .btn-outline-light:hover {
                    background: rgba(241, 237, 228, 0.04);
                    border-color: rgba(241, 237, 228, 0.25);
                    color: var(--text);
                }

                /* --- Hero --- */
                .tonka-landing .eyebrow-badge {
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid var(--line);
                    background: var(--gold-soft);
                    color: var(--gold);
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.8rem;
                }
                .tonka-landing .hero-title { font-size: clamp(2.4rem, 4.2vw, 3.4rem); line-height: 1.08; }
                .tonka-landing .hero-title .accent { color: var(--gold); }

                .tonka-landing .constellation {
                    position: relative;
                    width: 100%;
                    height: 260px;
                }
                .tonka-landing .constellation svg { position: absolute; inset: 0; width: 100%; height: 100%; }
                .tonka-landing .constellation-line {
                    stroke: var(--violet);
                    stroke-width: 1.5;
                    stroke-dasharray: 4 7;
                    fill: none;
                    opacity: 0.55;
                    animation: dash-move 22s linear infinite;
                }
                @keyframes dash-move { to { stroke-dashoffset: -400; } }
                .tonka-landing .constellation-node {
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 96px;
                    height: 96px;
                    border-radius: 20px;
                    background: var(--surface);
                    border: 1px solid var(--line);
                }
                .tonka-landing .constellation-node img { width: 44px; height: 44px; }
                .tonka-landing .constellation-node.left { top: 18px; left: 8%; }
                .tonka-landing .constellation-node.right { bottom: 18px; right: 8%; }
                .tonka-landing .constellation-label {
                    position: absolute;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.7rem;
                    color: var(--muted);
                }

                /* --- Code panel --- */
                .tonka-landing .code-editor {
                    background: var(--surface);
                    border: 1px solid var(--line);
                    border-radius: 12px;
                    overflow: hidden;
                }
                .tonka-landing .code-dots {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 0.85rem 1rem;
                    border-bottom: 1px solid var(--line);
                }
                .tonka-landing .code-dots .dot { width: 10px; height: 10px; border-radius: 50%; }
                .tonka-landing .code-scroll {
                    background: var(--surface);
                    font-size: 0.85rem;
                    line-height: 1.65;
                }
                .code-scroll::-webkit-scrollbar { width: 8px; }
                .code-scroll::-webkit-scrollbar-track { background: transparent; }
                .code-scroll::-webkit-scrollbar-thumb { background-color: rgba(241, 237, 228, 0.12); border-radius: 4px; }
                .code-scroll::-webkit-scrollbar-thumb:hover { background-color: rgba(241, 237, 228, 0.22); }
                .code-scroll { scrollbar-width: thin; scrollbar-color: rgba(241, 237, 228, 0.12) transparent; }

                .tonka-landing .benefit-row { border-bottom: 1px solid var(--line); padding: 1.1rem 0; }
                .tonka-landing .benefit-row:last-child { border-bottom: none; }
                .tonka-landing .benefit-icon { color: var(--gold); flex-shrink: 0; }

                /* --- Features --- */
                .tonka-landing .feature-col {
                    padding: 0 1.75rem;
                    border-left: 1px solid var(--line);
                }
                .tonka-landing .feature-col:first-child { border-left: none; padding-left: 0; }
                @media (max-width: 767px) {
                    .tonka-landing .feature-col { border-left: none; border-top: 1px solid var(--line); padding: 1.75rem 0 0; margin-top: 1.75rem; }
                    .tonka-landing .feature-col:first-child { border-top: none; margin-top: 0; padding-top: 0; }
                }
                .tonka-landing .feature-icon { color: var(--violet); margin-bottom: 1rem; }

                .tonka-landing footer { border-top: 1px solid var(--line) !important; }
                .tonka-landing footer a:hover { color: var(--text) !important; }
            `}</style>

            { /** --- NAVBAR --- */}
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-transparent">
                <div className="container">
                    <a className="navbar-brand fw-bold d-flex align-items-center" href="https://github.com/clicalmani/astro">
                        <FaRocket className="fa-solid me-2" style={{ color: "var(--gold)" }} />
                        Tonka <span style={{ color: "var(--muted)", fontWeight: 400 }}>Astro</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                            <li className="nav-item"><a className="nav-link" href="#code">Code</a></li>
                            <li className="nav-item ms-lg-3">
                                <a href="https://github.com/clicalmani/astro" className="btn btn-outline-light rounded-3 px-4">GitHub</a>
                            </li>
                            <li className="nav-item ms-2">
                                <a href="https://clicalmani.github.io/tonka" className="btn btn-primary rounded-3 px-4">Get started</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            { /** --- HERO SECTION --- */}
            <header className="d-flex align-items-center min-vh-100 position-relative">
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <span className="eyebrow-badge px-3 py-2 rounded-3 mb-4">v1.10.5</span>
                            <h1 className="hero-title fw-bold mb-4">
                                A React frontend, <span className="accent">native</span> to PHP.
                            </h1>
                            <p className="text-muted mb-5" style={{ fontSize: "1.15rem", maxWidth: "34rem" }}>
                                Tonka Astro pairs your PHP backend with InertiaJS, typed routing, and DriftQL —
                                so your React components talk to your database without a REST layer in between.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="https://github.com/clicalmani/astro" className="btn btn-primary px-4 py-2">Read the docs</a>
                                <a href="#code" className="btn btn-outline-light px-4 py-2">See a component</a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="constellation">
                                <svg viewBox="0 0 400 260" preserveAspectRatio="none">
                                    <path className="constellation-line" d="M 100 60 C 220 60, 180 200, 300 200" />
                                </svg>
                                <div className="constellation-node left">
                                    <img src="/logo.svg" alt="Tonka PHP" />
                                </div>
                                <span className="constellation-label" style={{ top: "122px", left: "18%" }}>bridged by Astro</span>
                                <div className="constellation-node right">
                                    <img src="/react.svg" alt="React" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            { /** --- MAGIC CODE SECTION (DriftQL Demo) --- */}
            <section id="code" className="py-5 bg-darker">
                <div className="container py-5">
                    <div className="row align-items-start">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="code-editor shadow-lg">
                                <div className="code-dots">
                                    <div className="dot bg-danger"></div>
                                    <div className="dot bg-warning"></div>
                                    <div className="dot bg-success"></div>
                                    <span className="ms-auto text-muted small ff-ms">UserList.tsx</span>
                                </div>
                                <pre
                                    ref={codeScrollRef}
                                    className="m-0 p-4 ff-ms code-scroll"
                                    style={{ maxHeight: "420px", overflowY: "auto", color: "var(--text)" }}
                                    onMouseEnter={() => { isPausedRef.current = true; }}
                                    onMouseLeave={() => { isPausedRef.current = false; }}
                                >
                                    <code dangerouslySetInnerHTML={{ __html: codeSnippet }}></code>
                                </pre>
                            </div>
                        </div>
                        <div className="col-lg-5 ms-lg-auto">
                            <h2 className="h1 fw-bold mb-4">No more <span style={{ color: "var(--muted)" }}>useEffect</span> for data.</h2>
                            <p className="text-muted fs-5 mb-4">
                                DriftQL exposes your database models as hooks. Query, mutate, and authorize
                                from inside the component — no fetch calls, no duplicated endpoint logic.
                            </p>
                            <div>
                                <div className="d-flex benefit-row">
                                    <div className="me-3 benefit-icon"><FaBolt className="fa-solid fa-lg" /></div>
                                    <div>
                                        <h5 className="fw-bold mb-1" style={{ fontSize: "1.05rem" }}>Auto-injection</h5>
                                        <p className="text-muted small mb-0">Component props and attribute bindings are hydrated automatically from the model.</p>
                                    </div>
                                </div>
                                <div className="d-flex benefit-row">
                                    <div className="me-3 benefit-icon"><FaShieldHalved className="fa-solid fa-lg" /></div>
                                    <div>
                                        <h5 className="fw-bold mb-1" style={{ fontSize: "1.05rem" }}>Policies, not middleware</h5>
                                        <p className="text-muted small mb-0">Reads and writes go through Tonka's policy layer directly, without a duplicated API guard.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            { /** --- FEATURES GRID --- */}
            <section id="features" className="py-5">
                <div className="container py-5">
                    <div className="mb-5" style={{ maxWidth: "34rem" }}>
                        <h2 className="h1 fw-bold mb-3">What's in the box</h2>
                        <p className="text-muted fs-5">
                            Three tools, wired together, so you're not the one gluing them.
                        </p>
                    </div>
                    <div className="row g-4 g-md-0">
                        <div className="col-md-4 feature-col">
                            <div className="feature-icon"><FaReact className="fa-brands fa-2x" /></div>
                            <h4 className="h5 fw-bold mb-2">React 18 + Vite</h4>
                            <p className="text-muted mb-0">
                                Hot module replacement, code-splitting, and the current React feature set — configured, not scaffolded from scratch.
                            </p>
                        </div>
                        <div className="col-md-4 feature-col">
                            <div className="feature-icon"><FaPaperPlane className="fa-solid fa-2x" /></div>
                            <h4 className="h5 fw-bold mb-2">InertiaJS routing</h4>
                            <p className="text-muted mb-0">
                                Server-driven page navigation without hand-rolling a REST contract between PHP and React.
                            </p>
                        </div>
                        <div className="col-md-4 feature-col">
                            <div className="feature-icon"><FaCodeBranch className="fa-solid fa-2x" /></div>
                            <h4 className="h5 fw-bold mb-2">Typed route helpers</h4>
                            <p className="text-muted mb-0">
                                Tonka Router generates named, typed route functions you call from inside your components.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 pt-3">
                        <a href="https://github.com/clicalmani/astro" className="btn btn-outline-light px-4 py-2">
                            Explore the documentation <FaArrowRight className="fa-solid ms-2" style={{ fontSize: "0.8rem" }} />
                        </a>
                    </div>
                </div>
            </section>

            { /** --- FOOTER --- */}
            <footer className="py-4 text-center">
                <div className="container">
                    <p className="text-muted mb-0 small">© 2026 Tonka Astro — built on React and PHP.</p>
                    <div className="mt-2">
                        <a href="https://github.com/clicalmani" className="text-muted mx-2 text-decoration-none"><FaGithub className="fa-brands" /></a>
                        <a href="https://x.com/clicalmani" className="text-muted mx-2 text-decoration-none"><FaTwitter className="fa-brands" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}