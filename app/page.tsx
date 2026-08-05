"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CircuitBoard,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Radio,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const publications = [
  {
    year: "2026",
    venue: "QPAIN",
    title: "Fast Label-Free Cross-Session Calibration for Intracortical Speech Neuroprostheses",
    status: "Published",
    linkLabel: "Open DOI",
    link: "https://doi.org/10.1109/QPAIN69676.2026.11546072",
    accent: "violet",
  },
  {
    year: "2026",
    venue: "ECCT · Taylor & Francis",
    title: "Baseline-Aware Practical Framework for EEG Workload Classification with Reduced Electrodes Across Multiple Datasets",
    status: "Accepted · Presented",
    linkLabel: "Scholar profile",
    link: "https://scholar.google.com/citations?user=6y0LEcUAAAAJ&hl=en",
    accent: "cyan",
  },
  {
    year: "2025",
    venue: "IEEE ICCIT",
    title: "Hardware-Aware RIS-Assisted ISAC with Quantized Feedback: A Robust DRL Framework",
    status: "Published",
    linkLabel: "Open DOI",
    link: "https://doi.org/10.1109/ICCIT68739.2025.11491470",
    accent: "blue",
  },
  {
    year: "2025",
    venue: "IEEE EICT",
    title: "Learning-Augmented RIS-Aided Hybrid Beamforming for Secure and Low-Latency Transmission",
    status: "Published",
    linkLabel: "Open DOI",
    link: "https://doi.org/10.1109/EICT68394.2025.11355568",
    accent: "mint",
  },
];

const projects = [
  {
    number: "01",
    title: "Department Event Hub",
    subtitle: "Full-stack platform",
    description:
      "A centralized event management system with role-based dashboards, secure authentication, email verification, and real-time updates.",
    tags: ["Next.js", "MERN", "RBAC"],
    icon: Code2,
    tone: "purple",
    image: "/project-event-management.webp",
    imageAlt: "Event Management Website project overview showing dashboards, role-based access control, email verification, and the Next.js MERN stack",
  },
  {
    number: "02",
    title: "Women Safety Device",
    subtitle: "Connected safety system",
    description:
      "An ESP32 device paired with a custom Android SOS app for live GPS sharing, Bluetooth control, and incident logging.",
    tags: ["ESP32", "Android", "IoT"],
    icon: CircuitBoard,
    tone: "cyan",
    image: "/project-women-safety-device.webp",
    imageAlt: "Women Safety Device project emblem featuring ESP32, Bluetooth, SOS location sharing, and the wearable safety device",
    link: "https://drive.google.com/file/d/1IPyJvhyNzcH58sB0dpp2ONQFg49kDn3-/view?usp=sharing",
  },
  {
    number: "03",
    title: "Nutrition Intelligence",
    subtitle: "Health web platform",
    description:
      "A health-focused platform for BMI, BMR, and daily calorie estimation with activity-aware guidance and OTP-secured accounts.",
    tags: ["JavaScript", "Web", "OTP Auth"],
    icon: Sparkles,
    tone: "lime",
    image: "/project-nutrition-website.webp",
    imageAlt: "Nutrition Website project emblem illustrating BMI, BMR, calorie estimation, nutrition guidance, and OTP verification",
    link: "https://roy056.github.io/nutrition-intelligence/",
  },
];

const skills = [
  ["Programming", "Python · MATLAB · C++ · JavaScript"],
  ["Neural signals", "MNE-Python · EEG preprocessing · Spectral analysis"],
  ["Research", "Git · LaTeX · Jupyter · Reproducible workflows"],
  ["Development", "Next.js · MERN Stack · HTML · CSS"],
];

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <button className="icon-button" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      <Sun className="sun-icon" size={18} />
      <Moon className="moon-icon" size={18} />
    </button>
  );
}

function NeuralField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const move = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
      node.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
    };
    node.addEventListener("pointermove", move);
    return () => node.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="neural-field" ref={ref} aria-hidden="true">
      <div className="field-glow" />
      <svg viewBox="0 0 800 660" role="presentation">
        <defs>
          <linearGradient id="signal" x1="0" x2="1">
            <stop offset="0" stopColor="#7c5cff" stopOpacity="0" />
            <stop offset="0.48" stopColor="#8f7aff" />
            <stop offset="1" stopColor="#3de2d0" stopOpacity="0" />
          </linearGradient>
          <filter id="blurGlow"><feGaussianBlur stdDeviation="4" /></filter>
        </defs>
        <g className="network-lines">
          <path d="M93 420L208 314L347 366L472 225L637 282L724 154" />
          <path d="M208 314L270 164L472 225L548 90" />
          <path d="M347 366L415 518L584 448L637 282" />
          <path d="M93 420L185 542L415 518" />
          <path d="M270 164L163 80" />
          <path d="M584 448L707 534" />
        </g>
        <g className="network-nodes">
          {[[93,420],[208,314],[347,366],[472,225],[637,282],[724,154],[270,164],[548,90],[415,518],[584,448],[185,542],[163,80],[707,534]].map(([cx,cy], i) => (
            <g key={i} style={{ animationDelay: `${i * -0.37}s` }}>
              <circle cx={cx} cy={cy} r="12" className="node-halo" />
              <circle cx={cx} cy={cy} r="4" className="node-core" />
            </g>
          ))}
        </g>
        <path className="signal-glow" d="M0 395 C55 395 58 395 78 395 L92 395 L105 370 L118 430 L132 340 L147 460 L161 395 C205 395 229 395 271 395 L283 395 L297 370 L310 420 L326 354 L340 440 L355 395 C405 395 443 395 486 395 L503 395 L517 365 L533 430 L548 338 L566 450 L582 395 C644 395 714 395 800 395" />
        <path className="signal-line" pathLength="1" d="M0 395 C55 395 58 395 78 395 L92 395 L105 370 L118 430 L132 340 L147 460 L161 395 C205 395 229 395 271 395 L283 395 L297 370 L310 420 L326 354 L340 440 L355 395 C405 395 443 395 486 395 L503 395 L517 365 L533 430 L548 338 L566 450 L582 395 C644 395 714 395 800 395" />
      </svg>
      <div className="signal-label"><Radio size={13} /> neural signal · live</div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-header reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dibakar Roy home">
          <span className="brand-mark">DR</span>
          <span className="brand-copy">Dibakar Roy<small>ECE graduate · Neural researcher</small></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {[["Research","#research"],["Publications","#publications"],["Projects","#projects"],["About","#about"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="mailto:dibakarroy4056@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <NeuralField />
        <div className="hero-copy">
          <div className="availability"><span /> Open to research collaboration</div>
          <h1>Decoding signals.<br /><span>Designing intelligence.</span></h1>
          <p className="hero-intro">
            I&apos;m <strong>Dibakar Roy</strong>, an Electrical &amp; Computer Engineering graduate and neural engineering researcher working at the intersection of neural signals, brain-computer interfaces, and adaptive machine learning.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#research">Explore my research <ArrowDown size={17} /></a>
            <a className="secondary-button" href="/Dibakar_Roy_CV.pdf" download>Download CV <Download size={17} /></a>
          </div>
          <div className="hero-metrics">
            <div><strong>04</strong><span>Publications</span></div>
            <div><strong>3.99</strong><span>Last 60 credits</span></div>
            <div><strong>02</strong><span>Neural research tracks</span></div>
          </div>
        </div>
        <a className="scroll-cue" href="#research"><span>Scroll to explore</span><ArrowDown size={15} /></a>
      </section>

      <section className="section research-section" id="research">
        <SectionHeader eyebrow="01 · Research focus" title="Making neural systems adapt faster." description="My work centers on robust neural decoding under real-world constraints: session shifts, limited labels, reduced sensors, and subject variability." />
        <div className="research-grid">
          <article className="research-card featured reveal">
            <div className="card-top"><span className="card-index">R / 01</span><BrainCircuit size={23} /></div>
            <div className="research-visual speech-visual" aria-hidden="true"><span className="scan" /><div className="spikes">{Array.from({length: 28}).map((_,i)=><i key={i} style={{height:`${18 + ((i*37)%72)}%`}} />)}</div></div>
            <span className="micro-label">Thesis research · Intracortical BCI</span>
            <h3>Rapid Cross-Session Calibration for Speech Decoding</h3>
            <p>A parameter-efficient, collapse-resistant CTC framework that adapts speech neuroprostheses with only 80 labeled calibration trials per session.</p>
            <ul><li>All six held-out T12 sessions improved</li><li>Encoder and CTC head remain frozen</li><li>Chronological, session-level evaluation</li></ul>
          </article>
          <article className="research-card reveal">
            <div className="card-top"><span className="card-index">R / 02</span><Radio size={23} /></div>
            <div className="research-visual eeg-visual" aria-hidden="true"><div className="head-map"><span /><span /><span /><span /><span /><span /><span /></div></div>
            <span className="micro-label">EEG · Workload decoding</span>
            <h3>Baseline-Aware EEG Classification</h3>
            <p>A leakage-safe, subject-independent framework tested across EEGMAT and STEW with nested leave-one-subject-out validation.</p>
            <div className="score-row"><div><strong>0.8199</strong><span>EEGMAT</span></div><div><strong>0.8519</strong><span>STEW</span></div></div>
          </article>
          <aside className="research-note reveal">
            <span className="micro-label">Research philosophy</span>
            <blockquote>“Useful neural interfaces must remain reliable when the person, session, and sensor setup change.”</blockquote>
            <div className="topic-cloud"><span>Neural decoding</span><span>EEG</span><span>BCI</span><span>Riemannian features</span><span>Adaptive systems</span><span>Biomedical ML</span></div>
          </aside>
        </div>
      </section>

      <section className="section publications-section" id="publications">
        <SectionHeader eyebrow="02 · Selected work" title="Publications" description="Peer-reviewed work spanning neural interfaces, intelligent surfaces, secure communication, and deep reinforcement learning." />
        <div className="publication-list">
          {publications.map((publication, index) => (
            <a className={`publication-row reveal accent-${publication.accent}`} href={publication.link} target="_blank" rel="noreferrer" key={publication.title}>
              <span className="publication-number">0{index + 1}</span>
              <div className="publication-title"><span>{publication.venue}</span><h3>{publication.title}</h3></div>
              <div className="publication-meta"><span>{publication.status}</span><strong>{publication.year}</strong></div>
              <span className="publication-arrow"><span>{publication.linkLabel}</span><ArrowUpRight size={18} /></span>
            </a>
          ))}
        </div>
        <a className="text-link" href="https://scholar.google.com/citations?user=6y0LEcUAAAAJ&hl=en" target="_blank" rel="noreferrer">View Google Scholar profile <ArrowUpRight size={16} /></a>
      </section>

      <section className="section project-section" id="projects">
        <SectionHeader eyebrow="03 · Built systems" title="Projects beyond the lab" description="Selected software and hardware projects that turn ideas into usable, human-centered systems." />
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            const content = <><div className="project-head"><span>{project.number}</span><Icon size={25} /></div><div className={`project-art project-image ${project.tone}`}><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 720px) calc(100vw - 80px), (max-width: 980px) 45vw, 390px" /></div><span className="micro-label">{project.subtitle}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-cta">{project.link ? <>View project <ArrowUpRight size={16} /></> : <>Academic project</>}</div></>;
            return project.link ? <a className="project-card reveal" key={project.title} href={project.link} target="_blank" rel="noreferrer">{content}</a> : <article className="project-card static reveal" key={project.title}>{content}</article>;
          })}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-layout">
          <figure className="profile-card reveal">
            <div className="profile-image-wrap">
              <Image
                src="/dibakar-roy-profile.png"
                alt="Portrait of Dibakar Roy"
                fill
                sizes="(max-width: 980px) 260px, 22vw"
              />
              <span className="profile-signal" aria-hidden="true" />
            </div>
            <figcaption>
              <strong>Dibakar Roy</strong>
              <span>ECE Graduate · Neural Engineering Researcher</span>
            </figcaption>
          </figure>
          <div className="about-main reveal">
            <span className="eyebrow">04 · About</span>
            <h2>An engineer with a researcher&apos;s curiosity.</h2>
            <p>I recently completed my BSc in Electrical &amp; Computer Engineering at Rajshahi University of Engineering &amp; Technology, with a research focus on neural engineering, brain-computer interfaces, and biomedical machine learning.</p>
            <p>I enjoy crossing boundaries between signal processing, machine learning, embedded systems, and full-stack software to build systems that remain useful beyond controlled settings.</p>
            <p>Alongside research, I&apos;ve served as a class representative, supported university and American Center events, and represented my department in competitive sports.</p>
            <div className="education-card"><GraduationCap size={24} /><div><span>2022 — 2026</span><strong>Rajshahi University of Engineering &amp; Technology</strong><small>BSc, Electrical &amp; Computer Engineering · CGPA 3.39 / 4.00</small></div></div>
          </div>
          <div className="skills-panel reveal">
            <span className="micro-label">Toolkit</span>
            {skills.map(([name, list]) => <div className="skill-row" key={name}><strong>{name}</strong><span>{list}</span></div>)}
            <div className="experience-stamp"><span>Industrial training</span><strong>BJIT Academy · 2025</strong><small>SDLC · Agile/Scrum · Python OOP · SQA</small></div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-signal" aria-hidden="true"><svg viewBox="0 0 900 120"><path pathLength="1" d="M0 60h180l20-38 20 76 24-58 21 40 22-20h180l18-34 23 68 25-50 18 16h349" /></svg></div>
        <span className="eyebrow">Have a question or an idea?</span>
        <h2>Let&apos;s explore what&apos;s possible.</h2>
        <p>I&apos;m interested in research collaborations, graduate opportunities, and thoughtful engineering projects.</p>
        <a className="primary-button" href="mailto:dibakarroy4056@gmail.com">Start a conversation <Mail size={18} /></a>
      </section>

      <footer>
        <div><span className="brand-mark">DR</span><p>Researching adaptive intelligence<br />from neural signals.</p></div>
        <div className="footer-links"><a href="https://github.com/roy056" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="https://www.linkedin.com/in/dibakar0804" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="https://scholar.google.com/citations?user=6y0LEcUAAAAJ&hl=en" target="_blank" rel="noreferrer"><BookOpen size={18} /> Scholar</a></div>
        <span className="footer-note">© {new Date().getFullYear()} Dibakar Roy</span>
      </footer>
      </main>
    </>
  );
}
