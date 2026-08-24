"use client";

import {
  ArrowUpRight,
  BookOpen,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const publications = [
  {
    year: "2026",
    venue: "Neurocomputing · Elsevier",
    title: "Rapid Parameter-Efficient Calibration for Cross-Session Intracortical Speech Decoding: Cross-Dataset Evaluation",
    status: "Submitted · With Editor",
    linkLabel: null,
    link: null,
  },
  {
    year: "2026",
    venue: "QPAIN",
    title: "Fast Label-Free Cross-Session Calibration for Intra-Cortical Speech Decoding",
    status: "Published",
    linkLabel: "DOI",
    link: "https://doi.org/10.1109/QPAIN69676.2026.11546072",
  },
  {
    year: "2026",
    venue: "ECCT · Taylor & Francis",
    title: "Baseline-Aware Practical Framework for EEG Workload Classification with Reduced Electrodes Across Multiple Datasets",
    status: "Accepted · Presented",
    linkLabel: "Scholar",
    link: "https://scholar.google.com/citations?user=6y0LEcUAAAAJ&hl=en",
  },
  {
    year: "2025",
    venue: "IEEE ICCIT",
    title: "Hardware-Aware RIS-Assisted ISAC with Quantized Feedback: A Robust DRL Framework",
    status: "Published",
    linkLabel: "DOI",
    link: "https://doi.org/10.1109/ICCIT68739.2025.11491470",
  },
  {
    year: "2025",
    venue: "IEEE EICT",
    title: "Learning-Augmented RIS-Aided Hybrid Beamforming for Secure and Low-Latency Transmission",
    status: "Published",
    linkLabel: "DOI",
    link: "https://doi.org/10.1109/EICT68394.2025.11355568",
  },
];

const research = [
  {
    label: "Undergraduate thesis · Intracortical BCI",
    title: "Rapid parameter-efficient calibration for cross-session speech decoding",
    description:
      "A cross-session intracortical speech decoding framework evaluated on the public T12 and T15 datasets. Its input-space calibration strategy updates only 65,792 parameters—less than 0.05% of the complete decoder—while keeping the BiGRU encoder and CTC classifier frozen.",
    details: [
      "Strict chronological training, validation, and held-out future-session evaluation",
      "T12 macro phoneme error rate reduced by 11.37% and 15.51% with 40 and 80 calibration trials",
      "Up to 10.05% relative improvement on independent T15 evaluation",
    ],
  },
  {
    label: "EEG · Workload classification",
    title: "Baseline-aware EEG classification",
    description:
      "A subject-independent EEG workload classification study using leakage-safe evaluation, reduced electrode configurations, and nested leave-one-subject-out validation.",
    details: [
      "EEGMAT and STEW datasets with nested leave-one-subject-out validation",
      "Reduced and shared montages with handcrafted and Riemannian features",
      "Balanced accuracy of 0.8199 on EEGMAT and 0.8519 on STEW",
    ],
  },
];

const projects = [
  {
    title: "trECEnto",
    subtitle: "ECE department event management platform",
    description:
      "A responsive event platform with account verification, event registration, announcements, role-based administration, and participation analytics.",
    tags: ["Next.js", "RBAC", "Analytics"],
    image: "/project-event-management.webp",
    imageAlt: "trECEnto event management platform overview",
    link: "https://roy056.github.io/trecento/",
  },
  {
    title: "Nutrition Intelligence",
    subtitle: "Software Project I",
    description:
      "A web application for BMI, BMR, and daily calorie estimation with activity-aware nutrition guidance and OTP-secured accounts.",
    tags: ["JavaScript", "Web", "OTP authentication"],
    image: "/project-nutrition-website.webp",
    imageAlt: "Nutrition Intelligence website project overview",
    link: "https://roy056.github.io/nutrition-intelligence/",
  },
  {
    title: "Women Safety Device",
    subtitle: "Embedded systems project",
    description:
      "An ESP32-based device paired with an Android SOS application for GPS sharing, Bluetooth control, and incident logging.",
    tags: ["ESP32", "Android", "IoT"],
    image: "/project-women-safety-device.webp",
    imageAlt: "Women Safety Device project overview",
    link: "https://drive.google.com/file/d/1IPyJvhyNzcH58sB0dpp2ONQFg49kDn3-/view?usp=sharing",
  },
];

const skills = [
  ["Programming", "Python, MATLAB, C++, JavaScript"],
  ["Neural signals", "MNE-Python, EEG preprocessing, spectral analysis"],
  ["Research tools", "LaTeX, Jupyter, Git, reproducible workflows"],
  ["Development", "Next.js, MERN stack, HTML, CSS"],
];

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

function SectionHeading({ number, title, description }: { number: string; title: string; description?: string }) {
  return (
    <header className="section-heading">
      <span>{number}</span>
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="site-name" href="#about" aria-label="Dibakar Roy home">Dibakar Roy</a>
          <nav className={menuOpen ? "site-nav open" : "site-nav"} aria-label="Main navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#research" onClick={() => setMenuOpen(false)}>Research</a>
            <a href="#publications" onClick={() => setMenuOpen(false)}>Publications</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="/Dibakar_Roy_CV.pdf" target="_blank" rel="noreferrer">CV</a>
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="about-section page-section" id="about">
          <div className="about-grid">
            <div className="about-primary">
              <div className="intro-block">
                <p className="kicker">Electrical &amp; Computer Engineering</p>
                <h1>Dibakar Roy</h1>
                <p className="intro-role">ECE graduate with research interests in brain-computer interfaces, neural engineering, intracortical speech decoding, EEG signal processing, and biomedical machine learning.</p>
                <p className="affiliation">Rajshahi University of Engineering &amp; Technology (RUET), Bangladesh</p>
              </div>

              <article className="about-copy">
                <h2>About</h2>
                <p>
                  I completed my BSc in Electrical &amp; Computer Engineering at RUET in 2026. My undergraduate research examined parameter-efficient cross-session calibration for intracortical speech decoding and subject-independent EEG workload classification.
                </p>
                <p>
                  I am interested in neural signal processing, brain-computer interfaces, and adaptive neural-decoding methods that remain reliable across people, recording sessions, and sensor configurations. I also enjoy building software and embedded systems that translate technical ideas into usable tools.
                </p>
                <p>
                  During my undergraduate studies, I served as a class representative, supported university and American Center events, and represented my department in competitive sports.
                </p>

                <div className="research-interests" aria-label="Research interests">
                  <strong>Research interests</strong>
                  <span>Neural decoding</span>
                  <span>EEG</span>
                  <span>Brain-computer interfaces</span>
                  <span>Cross-session neural adaptation</span>
                  <span>Adaptive neural decoding</span>
                  <span>Biomedical machine learning</span>
                </div>

                <div className="profile-links">
                  <a href="https://scholar.google.com/citations?user=6y0LEcUAAAAJ&hl=en" target="_blank" rel="noreferrer"><BookOpen size={16} /> Google Scholar</a>
                  <a href="/Dibakar_Roy_CV.pdf" download><Download size={16} /> Download CV</a>
                  <a href="mailto:dibakarroy4056@gmail.com"><Mail size={16} /> Email</a>
                </div>
              </article>
            </div>

            <aside className="profile-panel" aria-label="Profile summary">
              <div className="profile-image">
                <Image src="/dibakar-roy-profile.png" alt="Portrait of Dibakar Roy" fill priority sizes="(max-width: 760px) 280px, 300px" />
              </div>
              <dl>
                <div><dt>Degree</dt><dd>BSc in Electrical &amp; Computer Engineering</dd></div>
                <div><dt>Graduated</dt><dd>2026</dd></div>
                <div><dt>CGPA</dt><dd>3.39 / 4.00</dd></div>
                <div><dt>Institution</dt><dd>RUET</dd></div>
              </dl>
              <div className="social-links" aria-label="External profiles">
                <a href="https://github.com/roy056" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/dibakar0804" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="https://scholar.google.com/citations?user=6y0LEcUAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar"><BookOpen size={18} /></a>
              </div>
            </aside>
          </div>
        </section>

        <section className="page-section" id="research">
          <SectionHeading number="01" title="Research" description="Selected undergraduate research in neural engineering and EEG-based machine learning." />
          <div className="research-list">
            {research.map((item) => (
              <article className="research-item" key={item.title}>
                <p className="item-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section" id="publications">
          <SectionHeading number="02" title="Publications" description="Peer-reviewed and accepted work listed in reverse chronological order." />
          <ol className="publication-list">
            {publications.map((publication) => (
              <li key={publication.title}>
                <div className="publication-main">
                  <p>{publication.venue} · {publication.year}</p>
                  <h3>{publication.title}</h3>
                </div>
                <div className="publication-side">
                  <span>{publication.status}</span>
                  {publication.link && publication.linkLabel ? (
                    <a href={publication.link} target="_blank" rel="noreferrer">{publication.linkLabel} <ArrowUpRight size={14} /></a>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="page-section" id="projects">
          <SectionHeading number="03" title="Academic and software projects" description="Coursework and independent projects across web development, embedded systems, and applied engineering." />
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-item" href={project.link} target="_blank" rel="noreferrer" key={project.title}>
                <div className="project-image">
                  <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 760px) 100vw, 260px" />
                </div>
                <div className="project-copy">
                  <p className="item-label">{project.subtitle}</p>
                  <h3>{project.title} <ArrowUpRight size={16} /></h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="page-section background-section" id="background">
          <SectionHeading number="04" title="Background" />
          <div className="background-grid">
            <article>
              <GraduationCap size={21} />
              <p className="item-label">Education · 2022–2026</p>
              <h3>Rajshahi University of Engineering &amp; Technology</h3>
              <p>BSc in Electrical &amp; Computer Engineering · CGPA 3.39 / 4.00</p>
            </article>
            <article>
              <p className="item-label">Technical background</p>
              <dl className="skills-list">
                {skills.map(([name, value]) => <div key={name}><dt>{name}</dt><dd>{value}</dd></div>)}
              </dl>
            </article>
            <article>
              <p className="item-label">Industrial training · 2025</p>
              <h3>BJIT Academy</h3>
              <p>SDLC, Agile/Scrum, Python OOP, and software quality assurance.</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Dibakar Roy</strong>
          <p>Neural engineering · EEG · Brain-computer interfaces</p>
        </div>
        <a href="mailto:dibakarroy4056@gmail.com">dibakarroy4056@gmail.com</a>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
