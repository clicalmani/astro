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
        <div className="tonka-landing min-h-screen">
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

                /* --- Constellation --- */
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

                /* --- Code scrollbar --- */
                .code-scroll::-webkit-scrollbar { width: 8px; }
                .code-scroll::-webkit-scrollbar-track { background: transparent; }
                .code-scroll::-webkit-scrollbar-thumb { background-color: rgba(241, 237, 228, 0.12); border-radius: 4px; }
                .code-scroll::-webkit-scrollbar-thumb:hover { background-color: rgba(241, 237, 228, 0.22); }
                .code-scroll { scrollbar-width: thin; scrollbar-color: rgba(241, 237, 228, 0.12) transparent; }
            `}</style>

            {/** --- NAVBAR --- */}
            <nav className="navbar fixed top-0 left-0 right-0 z-50 w-full">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex items-center justify-between">
                        <a className="flex items-center text-lg font-bold tracking-tight" href="https://github.com/clicalmani/astro">
                            <FaRocket className="mr-2" style={{ color: "var(--gold)" }} />
                            Tonka <span className="ml-1 font-normal" style={{ color: "var(--muted)" }}>Astro</span>
                        </a>
                        <button className="lg:hidden p-2 rounded-md" style={{ color: "var(--text)" }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <div className="hidden lg:flex items-center gap-8">
                            <a className="text-sm transition-colors" style={{ color: "var(--muted)" }} href="#features">Features</a>
                            <a className="text-sm transition-colors" style={{ color: "var(--muted)" }} href="#code">Code</a>
                            <a href="https://github.com/clicalmani/astro" className="border rounded-lg px-6 py-2 text-sm transition-colors" style={{ borderColor: "var(--line)", color: "var(--text)" }}>GitHub</a>
                            <a href="https://clicalmani.github.io/tonka" className="rounded-lg px-6 py-2 text-sm font-semibold transition-colors" style={{ background: "var(--gold)", color: "var(--ink)" }}>Get started</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/** --- HERO SECTION --- */}
            <header className="flex items-center min-h-screen relative pt-24">
                <div className="container mx-auto px-4 max-w-6xl relative">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <span className="inline-flex items-center border px-3 py-2 rounded-lg mb-6 text-sm" style={{ borderColor: "var(--line)", background: "var(--gold-soft)", color: "var(--gold)", fontFamily: "'JetBrains Mono', monospace" }}>v1.10.5</span>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                A React frontend, <span style={{ color: "var(--gold)" }}>native</span> to PHP.
                            </h1>
                            <p className="mb-10 text-lg max-w-xl" style={{ color: "var(--muted)" }}>
                                Tonka Astro pairs your PHP backend with InertiaJS, typed routing, and DriftQL —
                                so your React components talk to your database without a REST layer in between.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://github.com/clicalmani/astro" className="rounded-lg px-6 py-3 font-semibold transition-colors" style={{ background: "var(--gold)", color: "var(--ink)" }}>Read the docs</a>
                                <a href="#code" className="border rounded-lg px-6 py-3 transition-colors" style={{ borderColor: "var(--line)", color: "var(--text)" }}>See a component</a>
                            </div>
                        </div>
                        <div className="hidden lg:block w-full lg:w-1/2">
                            <div className="constellation">
                                <svg viewBox="0 0 400 260" preserveAspectRatio="none">
                                    <path className="constellation-line" d="M 100 60 C 220 60, 180 200, 300 200" />
                                </svg>
                                <div className="constellation-node left">
                                    <img src="/logo.svg" alt="Tonka PHP" />
                                </div>
                                <span className="absolute text-xs" style={{ top: "122px", left: "18%", color: "var(--muted)", fontFamily: "'JetBrains Mono', monospace" }}>bridged by Astro</span>
                                <div className="constellation-node right">
                                    <img src="/react.svg" alt="React" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/** --- MAGIC CODE SECTION --- */}
            <section id="code" className="py-20" style={{ background: "var(--surface)" }}>
                <div className="container mx-auto px-4 max-w-6xl py-12">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="w-full lg:w-1/2">
                            <div className="rounded-xl overflow-hidden shadow-2xl" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
                                <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid var(--line)" }}>
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                    <span className="ml-auto text-xs ff-ms" style={{ color: "var(--muted)" }}>UserList.tsx</span>
                                </div>
                                <pre
                                    ref={codeScrollRef}
                                    className="m-0 p-6 ff-ms code-scroll text-sm leading-relaxed"
                                    style={{ maxHeight: "420px", overflowY: "auto", color: "var(--text)", background: "var(--surface)" }}
                                    onMouseEnter={() => { isPausedRef.current = true; }}
                                    onMouseLeave={() => { isPausedRef.current = false; }}
                                >
                                    <code dangerouslySetInnerHTML={{ __html: codeSnippet }}></code>
                                </pre>
                            </div>
                        </div>
                        <div className="w-full lg:w-5/12 lg:ml-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">No more <span style={{ color: "var(--muted)" }}>useEffect</span> for data.</h2>
                            <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>
                                DriftQL exposes your database models as hooks. Query, mutate, and authorize
                                from inside the component — no fetch calls, no duplicated endpoint logic.
                            </p>
                            <div>
                                <div className="flex py-4" style={{ borderBottom: "1px solid var(--line)" }}>
                                    <div className="mr-4 flex-shrink-0" style={{ color: "var(--gold)" }}><FaBolt className="text-lg" /></div>
                                    <div>
                                        <h5 className="font-bold mb-1 text-base">Auto-injection</h5>
                                        <p className="text-sm mb-0" style={{ color: "var(--muted)" }}>Component props and attribute bindings are hydrated automatically from the model.</p>
                                    </div>
                                </div>
                                <div className="flex py-4">
                                    <div className="mr-4 flex-shrink-0" style={{ color: "var(--gold)" }}><FaShieldHalved className="text-lg" /></div>
                                    <div>
                                        <h5 className="font-bold mb-1 text-base">Policies, not middleware</h5>
                                        <p className="text-sm mb-0" style={{ color: "var(--muted)" }}>Reads and writes go through Tonka's policy layer directly, without a duplicated API guard.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/** --- FEATURES GRID --- */}
            <section id="features" className="py-20">
                <div className="container mx-auto px-4 max-w-6xl py-12">
                    <div className="mb-12 max-w-xl">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">What's in the box</h2>
                        <p className="text-lg" style={{ color: "var(--muted)" }}>
                            Three tools, wired together, so you're not the one gluing them.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                        <div className="md:px-7 md:border-l" style={{ borderColor: "var(--line)" }}>
                            <div className="mb-4" style={{ color: "var(--violet)" }}><FaReact className="text-3xl" /></div>
                            <h4 className="text-lg font-bold mb-2">React 18 + Vite</h4>
                            <p className="mb-0" style={{ color: "var(--muted)" }}>
                                Hot module replacement, code-splitting, and the current React feature set — configured, not scaffolded from scratch.
                            </p>
                        </div>
                        <div className="md:px-7 md:border-l" style={{ borderColor: "var(--line)" }}>
                            <div className="mb-4" style={{ color: "var(--violet)" }}><FaPaperPlane className="text-3xl" /></div>
                            <h4 className="text-lg font-bold mb-2">InertiaJS routing</h4>
                            <p className="mb-0" style={{ color: "var(--muted)" }}>
                                Server-driven page navigation without hand-rolling a REST contract between PHP and React.
                            </p>
                        </div>
                        <div className="md:px-7 md:border-l" style={{ borderColor: "var(--line)" }}>
                            <div className="mb-4" style={{ color: "var(--violet)" }}><FaCodeBranch className="text-3xl" /></div>
                            <h4 className="text-lg font-bold mb-2">Typed route helpers</h4>
                            <p className="mb-0" style={{ color: "var(--muted)" }}>
                                Tonka Router generates named, typed route functions you call from inside your components.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 pt-6">
                        <a href="https://github.com/clicalmani/astro" className="inline-flex items-center border rounded-lg px-6 py-3 transition-colors" style={{ borderColor: "var(--line)", color: "var(--text)" }}>
                            Explore the documentation <FaArrowRight className="ml-2 text-xs" />
                        </a>
                    </div>
                </div>
            </section>

            {/** --- FOOTER --- */}
            <footer className="py-8 text-center" style={{ borderTop: "1px solid var(--line)" }}>
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm mb-0" style={{ color: "var(--muted)" }}>© 2026 Tonka Astro — built on React and PHP.</p>
                    <div className="mt-3">
                        <a href="https://github.com/clicalmani" className="mx-2 inline-block transition-colors" style={{ color: "var(--muted)" }}><FaGithub /></a>
                        <a href="https://x.com/clicalmani" className="mx-2 inline-block transition-colors" style={{ color: "var(--muted)" }}><FaTwitter /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}