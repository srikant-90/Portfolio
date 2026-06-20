import { useState, useEffect } from 'react'
import portrait from './assets/portfolio-pic.jpeg'
import ecareThumb from './assets/e-care-thumbnail.png'
import eduzenThumb from './assets/eduzen-thumbnail.png'
import './App.css'

/* ── react-icons ── */
import { FaHtml5, FaCss3Alt, FaReact, FaLinux, FaPython, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiJavascript, SiGooglegemini, SiOpenai, SiEclipseide } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { TbRobot } from 'react-icons/tb'
import { MdEmail } from 'react-icons/md'
import { HiArrowNarrowRight } from 'react-icons/hi'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

/* ─────────── SVG helpers ─────────── */
function CodeIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 70 48" aria-hidden="true">
      <path d="M26 11 13 24l13 13M44 11l13 13-13 13M39 6 31 42" />
    </svg>
  )
}

function AboutIllustration() {
  return (
    <svg className="about-illustration" viewBox="0 0 430 235" role="img" aria-label="Laptop with code on screen">
      <defs>
        <linearGradient id="screen" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#eff7ff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="blue" x1="0" x2="1">
          <stop stopColor="#2587f2" />
          <stop offset="1" stopColor="#6aa8ff" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="#cae0f5" strokeWidth="2" d="M356 53v30l15 14v28m-3-49 19 18v31m-1-50 17 17v25" />
        <path stroke="#91c5f2" strokeWidth="2" d="M337 112v-22m0-11v-5m34 58v-7m16 0v-8m16 8v-7" />
        <circle cx="337" cy="86" r="3" fill="#74b3ed" stroke="none" />
        <path fill="#dfefff" stroke="#74ade9" strokeWidth="2" d="M65 202c7-20 1-36-14-51 18 8 25 22 24 40 4-24 14-45 31-59-2 23-10 43-23 61 10-9 20-14 31-15-7 12-17 21-31 27Z" />
        <path stroke="#2f85e5" strokeWidth="2" d="M78 205c-1-24-8-43-19-58m19 50c7-25 16-45 27-59m-27 60c9-9 19-16 30-19" />
        <path fill="#eaf5ff" stroke="#247add" strokeWidth="2" d="M57 204h39l-4 29H62Z" />
        <rect x="106" y="28" width="226" height="188" rx="9" fill="url(#screen)" stroke="#1768c7" strokeWidth="3" />
        <path fill="url(#blue)" stroke="#1768c7" strokeWidth="2" d="M115 28h208a9 9 0 0 1 9 9v12H106V37a9 9 0 0 1 9-9Z" />
        <circle cx="119" cy="39" r="3" fill="#fff" stroke="none" /><circle cx="129" cy="39" r="3" fill="#d4eaff" stroke="none" /><circle cx="139" cy="39" r="3" fill="#d4eaff" stroke="none" />
        <path stroke="#2e89ed" strokeWidth="6" d="m164 93-16 14 16 14m29-28 16 14-16 14m-8-37-13 47" />
        <g stroke="#b9d7f1" strokeWidth="6"><path d="M230 87h45m-45 16h62m-62 16h47m-130 39h142m-142 17h112m-112 17h129" /></g>
        <path fill="url(#blue)" stroke="#1768c7" strokeWidth="2" d="M88 216h262c-4 11-15 17-27 17H116c-12 0-22-6-28-17Z" />
        <path stroke="#fff" strokeWidth="2" d="M191 222h58" />
        <path fill="#77b6f2" stroke="#1768c7" strokeWidth="2" d="M356 184h34v47h-34z" />
        <path stroke="#1768c7" strokeWidth="3" d="M390 193h9c10 0 10 24 0 25h-9" />
      </g>
    </svg>
  )
}

/* ─────────── Section heading ─────────── */
function SectionHeading({ id, title }) {
  return (
    <div className="section-heading" id={id}>
      <span className="heading-line" />
      <h2>{title}</h2>
      <span className="heading-line" />
    </div>
  )
}

/* ─────────── Skills data ─────────── */
const frontendSkills = [
  { icon: <FaHtml5 />, label: 'HTML', color: '#e34c26' },
  { icon: <FaCss3Alt />, label: 'CSS', color: '#264de4' },
  { icon: <SiJavascript />, label: 'Javascript', color: '#f7df1e' },
  { icon: <FaReact />, label: 'React', color: '#61dafb' },
]

const aiTools = [
  { icon: <span className="claude-icon">✳</span>, label: 'Claude', color: '#d97706', bg: '#fff5e6' },
  { icon: <SiOpenai />, label: 'ChatGPT', color: '#10a37f', bg: '#e6f7f2' },
  { icon: <TbRobot />, label: 'Co-pilot', color: '#7b4ae2', bg: '#f0eaff' },
  { icon: <SiGooglegemini />, label: 'Gemini', color: '#4285f4', bg: '#e8f0fe' },
  { icon: <SiOpenai />, label: 'Codex', color: '#222', bg: '#f5f5f5' },
  { icon: <VscCode />, label: 'Anti-gravity', color: '#1174dd', bg: '#e8f4ff' },
]

const otherTools = [
  { icon: <FaLinux />, label: 'Linux', color: '#333', bg: '#f5f5f5' },
  { icon: <VscCode />, label: 'VS Code', color: '#007acc', bg: '#e8f4ff' },
  { icon: <SiEclipseide />, label: 'Eclipse', color: '#2c2255', bg: '#ece9f5' },
  { icon: <FaPython />, label: 'IDLE', color: '#3776ab', bg: '#e8f3fd' },
]

/* ─────────── Projects data ─────────── */
const projects = [
  {
    title: 'E-Care Website',
    subtitle: '(Healthcare Platform)',
    desc: 'A responsive healthcare platform that helps users book appointments, view services, and connect with medical professionals.',
    link: 'https://e-careweb.netlify.app',
    thumbnail: ecareThumb,
  },
  {
    title: 'Edu Zen',
    subtitle: '(E-learning Platform)',
    desc: 'An e-learning platform where users can explore courses, track progress, and enhance their skills with interactive learning.',
    link: 'https://e-pathsala.netlify.app',
    thumbnail: eduzenThumb,
  },
]

/* ─────────── Contact data ─────────── */
const contacts = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    handle: '@srikant-90',
    desc: 'View my repositories and projects',
    link: 'https://github.com/srikant-90',
    color: '#181717',
    bg: '#f5f5f5',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    handle: '/in/srikant-behera',
    desc: "Let's connect and build a network",
    link: 'https://www.linkedin.com/in/srikant-behera',
    color: '#0a66c2',
    bg: '#e8f3fc',
  },
  {
    icon: <MdEmail />,
    label: 'Email',
    handle: 'srikantbehera1803@gmail.com',
    desc: 'Drop me a message anytime!',
    link: 'mailto:srikantbehera1803@gmail.com',
    color: '#1174dd',
    bg: '#e8f4ff',
  },
]

/* ─────────── App ─────────── */
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')

  /* sticky navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* active section tracker */
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const name = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
            setActiveSection(name)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      {/* ── NAVBAR ── */}
      <header className={`navbar${scrolled ? ' navbar-sticky' : ''}`}>
        <a href="" className="brand" aria-label="SKB home">
          <CodeIcon />
          <span>SKB</span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              className={activeSection === item ? 'active' : ''}
              key={item}
              onClick={(e) => { e.preventDefault(); scrollTo(item) }}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* ── HERO ── */}
      <section id="home" className="hero-section">
        <span className="brace brace-left">{'{'}</span>
        <div className="hero-copy">
          <p className="eyebrow">Hi, I'm <span /></p>
          <h1>Srikant Kumar <strong>Behera</strong></h1>
          <h2><span>›</span> Frontend Developer</h2>
          <p className="intro">I build responsive, user-friendly, and visually appealing web interfaces using modern technologies. I'm passionate about crafting clean code and seamless user experiences.</p>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" /><span className="orbit-dot dot-three" />
          <div className="portrait-frame"><img src={portrait} alt="Srikant Kumar Behera" /></div>
          <div className="floating-code"><CodeIcon /></div>
          <div className="tech-tag tag-css">CSS</div>
          <div className="tech-tag tag-js">JS</div>
          <div className="tech-tag tag-html">HTML</div>
          <span className="brace brace-right">{'}'}</span>
          <div className="code-lines"><i /><i /><i /><i /></div>
          <div className="dot-grid" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about-card">
        <div className="about-copy">
          <div className="about-heading">
            <div className="profile-icon">
              <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="13" r="7" /><path d="M8 33c1-9 5-13 12-13s11 4 12 13" /></svg>
            </div>
            <h2>About Me</h2>
          </div>
          <p>I'm a passionate Frontend Developer who loves building clean, responsive, and user-friendly web applications. I enjoy turning ideas into real-world solutions using modern technologies. I'm constantly learning and exploring new tools to improve my skills and deliver better user experiences.</p>
        </div>
        <div className="about-art"><div className="art-dots" /><AboutIllustration /></div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="skills-section">
        <SectionHeading title="My Skills" />

        <div className="skills-grid">
          {/* Front-end card */}
          <div className="skill-card">
            <div className="skill-card-header">
              <span className="skill-card-icon frontend-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </span>
              <h3>Front-end</h3>
            </div>
            <div className="skill-divider" />
            <div className="skill-icons-grid">
              {frontendSkills.map((s) => (
                <div key={s.label} className="skill-item">
                  <span className="skill-react-icon" style={{ color: s.color }}>{s.icon}</span>
                  <span className="skill-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools card */}
          <div className="skill-card">
            <div className="skill-card-header">
              <span className="skill-card-icon ai-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M12 2l2 4 4.5.65-3.25 3.17.77 4.48L12 12.1l-4.02 2.2.77-4.48L5.5 6.65 10 6z" />
                  <path d="M5 20h14M8 17l4-5 4 5" />
                </svg>
              </span>
              <h3>AI Tools</h3>
            </div>
            <div className="skill-divider" />
            <div className="skill-icons-grid ai-grid">
              {aiTools.map((s) => (
                <div key={s.label} className="skill-item">
                  <span className="skill-react-icon ai-tool-icon" style={{ color: s.color, background: s.bg }}>{s.icon}</span>
                  <span className="skill-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other Tools card */}
          <div className="skill-card">
            <div className="skill-card-header">
              <span className="skill-card-icon tools-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" />
                </svg>
              </span>
              <h3>Other Tools</h3>
            </div>
            <div className="skill-divider" />
            <div className="skill-icons-grid other-grid">
              {otherTools.map((s) => (
                <div key={s.label} className="skill-item">
                  <span className="skill-react-icon other-tool-icon" style={{ color: s.color, background: s.bg }}>{s.icon}</span>
                  <span className="skill-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="projects-section">
        <SectionHeading title="My Projects" />

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-thumbnail">
                <img src={p.thumbnail} alt={`${p.title} screenshot`} className="thumbnail-img" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
                <p className="project-desc">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-btn" aria-label={`View ${p.title}`}>
                  View Project <HiArrowNarrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact-section">
        <SectionHeading title="Contact Me" />

        <div className="contact-card">
          {contacts.map((c) => (
            <a key={c.label} href={c.link} className="contact-item" aria-label={c.label}>
              <span className="contact-icon" style={{ color: c.color, background: c.bg }}>{c.icon}</span>
              <div className="contact-info">
                <span className="contact-label">{c.label}</span>
                <span className="contact-handle">{c.handle}</span>
                <span className="contact-desc">{c.desc}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="footer-inner">
          {/* Brand col */}
          <div className="footer-brand">
            <div className="footer-logo">
              <CodeIcon />
              <span>SKB</span>
            </div>
            <p className="footer-role">Frontend Developer</p>
            <p className="footer-tagline">Building modern, responsive and user-friendly web experiences.</p>
            <div className="footer-socials">
              <a href="https://github.com/srikant-90" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/srikant-behera" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="mailto:srikantbehera1803@gmail.com" aria-label="Email"><MdEmail /></a>
            </div>
          </div>

          {/* Quick Links col */}
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(item) }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Let's Connect col */}
          <div className="footer-connect-col">
            <h4>Let's Connect</h4>
            <p>Always open to discuss new opportunities or exciting projects.</p>
            <div className="footer-code-deco">
              <CodeIcon />
              <span className="deco-dots">· · · · · · · ·</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 Srikant Kumar Behera. All rights reserved.</span>
          <span>Designed &amp; Built with <span className="heart">♥</span> by Srikant Kumar Behera</span>
        </div>
      </footer>
    </div>
  )
}

export default App
