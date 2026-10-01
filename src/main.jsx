import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './portfolio.css';
import './animations.css';

import portrait from './assets/figma/hero-portrait.png';
import projectImage from './assets/figma/project-placeholder.png';
import articleImage from './assets/figma/article-placeholder.png';
import mail from './assets/figma/contact-mail.svg';
import whatsapp from './assets/figma/contact-whatsapp.svg';
import phone from './assets/figma/contact-phone.svg';
import location from './assets/figma/contact-location.svg';
import arrowBack from './assets/figma/arrow-back.svg';
import arrowForward from './assets/figma/arrow-forward.svg';
import chevronRight from './assets/figma/chevron-right.svg';
import closeIcon from './assets/figma/close-icon.svg';
import socialLi from './assets/figma/social-li.svg';
import socialGhBg from './assets/figma/social-gh.svg';
import githubMark from './assets/figma/gh-icon.svg';
import socialTw from './assets/figma/social-tw.svg';
import socialDv from './assets/figma/social-dv.svg';

import s01 from './assets/figma/stack-01.svg';
import s02 from './assets/figma/stack-02.svg';
import s03 from './assets/figma/stack-03.svg';
import s04 from './assets/figma/stack-04.svg';
import s05 from './assets/figma/stack-05.svg';
import s06 from './assets/figma/stack-06.svg';
import s07 from './assets/figma/stack-07.svg';
import s08 from './assets/figma/stack-08.svg';
import s09 from './assets/figma/stack-09.svg';
import s10 from './assets/figma/stack-10.svg';
import s11 from './assets/figma/stack-11.svg';
import s12 from './assets/figma/stack-12.svg';
import s13 from './assets/figma/stack-13.svg';
import s14 from './assets/figma/stack-14.svg';
import s15 from './assets/figma/stack-15.svg';
import s16 from './assets/figma/stack-16.svg';
import s17 from './assets/figma/stack-17.svg';
import s18 from './assets/figma/stack-18.svg';
import s19 from './assets/figma/stack-19.svg';
import s20 from './assets/figma/stack-20.svg';
import s21 from './assets/figma/stack-21.svg';
import s22 from './assets/figma/stack-22.svg';
import s23 from './assets/figma/stack-23.svg';
import s24 from './assets/figma/stack-24.svg';
import s25 from './assets/figma/stack-25.svg';
import s26 from './assets/figma/stack-26.svg';
import s27 from './assets/figma/stack-27.svg';

import cvFile from './assets/CV/LawrenceOyondiObare_CV.pdf';

const nav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['My Projects', 'projects'],
  ['My Services', 'services'],
  ['My Stack', 'stack'],
  ['Articles', 'articles'],
];

const socialLinks = [
  { href: 'https://linkedin.com', label: 'LinkedIn', type: 'img', src: socialLi },
  { href: 'https://github.com', label: 'GitHub', type: 'github' },
  { href: 'https://x.com', label: 'X', type: 'img', src: socialTw },
  { href: 'https://dev.to', label: 'DEV', type: 'img', src: socialDv },
];

const stackRows = [
  [
    { src: s01, title: 'Vue.js' }, { src: s02, title: 'React' }, { src: s03, title: 'SQL Developer' },
    { src: s04, title: 'SQLite' }, { src: s05, title: 'Svelte' }, { src: s06, title: 'Supabase' },
    { src: s07, title: 'WordPress' }, { src: s08, title: 'Node.js' }, { src: s09, title: 'Go / Golang' }
  ],
  [
    { src: s10, title: 'Docker' }, { src: s11, title: 'Docker / Kubernetes' }, { src: s12, title: 'Python' },
    { src: s13, title: 'Flutter' }, { src: s14, title: 'MySQL' }, { src: s15, title: 'PostgreSQL' },
    { src: s16, title: 'Redis' }, { src: s17, title: 'NPM' }, { src: s18, title: 'Fiber' }
  ],
  [
    { src: s19, title: 'Gin' }, { src: s20, title: 'FastAPI' }, { src: s21, title: 'Git' },
    { src: s22, title: 'GitHub' }, { src: s23, title: 'Linux/WSL' }, { src: s24, title: 'Vercel' },
    { src: s25, title: 'Vite' }, { src: s26, title: 'HTML5' }, { src: s27, title: 'CSS3' }
  ],
];

const services = [
  {
    n: '01.',
    t: 'Backend & API Development (Go)',
    p: 'I design backend architecture, REST APIs, authentication, business logic, data processing, and third-party integrations that are dependable in production.',
  },
  {
    n: '02.',
    t: 'Full-Stack Web Development (JavaScript/Typescript)',
    p: 'I am able to connect frontend and backend systems seamlessly, develop end-to-end applications from database to user interface, implement authentication and user management systems, build platforms for alumni networks, community connections, and institutional systems, and create developer tools and productivity applications.',
  },
  {
    n: '03.',
    t: 'Fintech & Payment Solutions',
    p: 'Payment collection, transaction processing, reconciliation, reporting, and integrations with M-Pesa, Airtel Money, Pesapal, and Flutterwave.',
  },
  {
    n: '04.',
    t: 'UI/UX Design',
    p: 'Clear, responsive user interfaces and data-driven applications with practical, user-centered design.',
  },
];

const projects = [
  {
    title: 'Project1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    title: 'Project2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    title: 'Project3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
];

const articles = [
  {
    title: 'Blog title heading will go here',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    title: 'Blog title heading will go here',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    title: 'Blog title heading will go here',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
];

const contacts = [
  [mail, 'Email', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.', 'email@example.com', 'mailto:email@example.com'],
  [whatsapp, 'WhatsApp', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.', 'Start new chat', 'https://wa.me/'],
  [phone, 'Phone', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.', '+1 (555) 000-0000', 'tel:+15550000000'],
  [location, 'My Location', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.', '123 Sample St, Sydney NSW 2000 AU', '#contact'],
];

function Socials() {
  return (
    <div className="socials">
      {socialLinks.map((s) =>
        s.type === 'github' ? (
          <a href={s.href} aria-label={s.label} key={s.label} className="social-github">
            <img src={socialGhBg} alt="" className="social-bg" />
            <img src={githubMark} alt="" className="social-gh-icon" />
          </a>
        ) : (
          <a href={s.href} aria-label={s.label} key={s.label}>
            <img src={s.src} alt="" />
          </a>
        )
      )}
    </div>
  );
}

function CarouselControls({ active = 0, total = 6, onPrev, onNext }) {
  return (
    <div className="carousel">
      <div className="dots" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <i className={i === active ? 'on' : ''} key={i} />
        ))}
      </div>
      <div className="slider-btns">
        <button type="button" aria-label="Previous" onClick={onPrev}>
          <img src={arrowBack} alt="" width={24} height={24} />
        </button>
        <button type="button" aria-label="Next" onClick={onNext}>
          <img src={arrowForward} alt="" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

function ExternalArrow({ className = '' }) {
  return (
    <span className={`ext-arrow ${className}`} aria-hidden="true">
      <img src={arrowForward} alt="" width={24} height={24} />
    </span>
  );
}

function Navbar({ onContact }) {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -55%' }
    );
    document.querySelectorAll('main section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <nav>
        <button className="menu" type="button" onClick={() => setOpen(!open)}>
          Menu
        </button>
        <div className={open ? 'links open' : 'links'}>
          {nav.map(([label, id]) => (
            <a
              className={active === id ? 'active' : ''}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              key={id}
            >
              {label}
            </a>
          ))}
        </div>
        <button className="contactBtn" type="button" onClick={onContact}>
          Contact me
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (isReducedMotion) return;
    const handleScroll = () => {
      // Limit to ~60px
      const y = Math.min(window.scrollY * 0.1, 60);
      setOffsetY(y);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReducedMotion]);

  return (
    <section className="hero" id="home">
      <div className="hero-stage">
        <p className="greeting">
          <span className="dash">-</span>Hello there! I’m
        </p>
        <h1 className="heroName">
          <span className="lawrence">Lawrence</span>
          <span className="obare">Obare</span>
        </h1>
        <div className="bigOrb" aria-hidden="true" />
        <div className="smallOrb" aria-hidden="true" />
        <div className="portrait-frame" style={{ transform: `translateY(-${offsetY}px)` }}>
          <img className="portrait" src={portrait} alt="Lawrence Obare" />
        </div>
        <div className="heroText">
          <p>Software Engineer & UI/UX Designer. Bulding solutions and having fun along the way</p>
        </div>
        <div className="hero-ctas">
          <a className="outline" href={cvFile} download="Lawrence_Obare_CV.pdf">
            Download my CV
          </a>
          <a className="black" href="#projects">
            View my work
          </a>
        </div>
        <p className="connect-label">Lets connect</p>
        <div className="connect-socials">
          <Socials />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="aboutCard">
        <h2 className="reveal-up">About Me</h2>
        <div className="aboutImage reveal-left" />
        <i className="aboutAccent" />
        <p className="reveal-right">
          I’m a software developer passionate about building practical solutions with code. I specialize in Go and backend development, enjoy solving challenging problems, and learn best by building real projects. I’m constantly improving my skills and working toward becoming a strong, well-rounded backend engineer.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="wide">
        <div className="heading reveal-up">
          <h2>
            My <span>Projects</span>
          </h2>
        </div>
        <div className="cards">
          {projects.map((p, index) => (
            <article className={`reveal-up stagger-${index + 1}`} key={p.title}>
              <div className="card-media">
                <img src={projectImage} alt="" />
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3>{p.title}</h3>
                  <ExternalArrow />
                </div>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
        <CarouselControls />
      </div>
    </section>
  );
}

function Services() {
  const [expanded, setExpanded] = useState(1);

  return (
    <section className="services" id="services">
      <div className="heading reveal-up">
        <h2>
          <span>Services</span> I Provide
        </h2>
      </div>
      <div className="services-list">
        {services.map((s, i) => (
          <article className={`reveal-up stagger-${i + 1} ${expanded === i ? 'service expanded' : 'service'}`} key={s.n}>
            <button type="button" onClick={() => setExpanded(expanded === i ? null : i)}>
              <b>{s.n}</b>
              <span>{s.t}</span>
              <i className={expanded === i ? 'open' : ''}>
                <img src={arrowForward} alt="" width={24} height={24} />
              </i>
            </button>
            <div className="service-content">
              <div className="service-inner">
                <p>{s.p}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="stack" id="stack">
      <div className="heading reveal-up">
        <h2>
          My <span>Stack</span>
        </h2>
      </div>
      <div className="stack-rows">
        {stackRows.map((row, i) => (
          <div className="stack-row" key={i}>
            {row.map((item, j) => (
              <div className={`stack-icon-wrapper reveal-scale stagger-${j + 1}`} key={`${i}-${j}`}>
                <img src={item.src} alt={item.title} />
                <span className="stack-tooltip">{item.title}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Articles() {
  return (
    <section className="articles" id="articles">
      <div className="articleWrap">
        <div className="heading reveal-up">
          <h2>
            <span>Articles</span> & <span>Posts</span>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="articleCards">
          {articles.map((a, i) => (
            <article className={`reveal-up stagger-${i + 1}`} key={i}>
              <img src={articleImage} alt="" />
              <small>5 min read</small>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <a href="#contact">
                Read more <img src={chevronRight} alt="" width={24} height={24} />
              </a>
            </article>
          ))}
        </div>
        <CarouselControls />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wide contact-wide">
        <div className="heading reveal-up">
          <h2>
            Contact <span>Me</span>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="contact-grid">
          {contacts.map(([icon, title, text, link, href], index) => (
            <article className={`reveal-up stagger-${index + 1}`} key={title}>
              <img src={icon} alt="" width={48} height={48} />
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={href}>{link}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ onEmail }) {
  return (
    <footer>
      <div className="footer-inner">
        <p className="quick">Quick links</p>
        <div className="footer-top">
          <div className="footer-left">
            <nav>
              {nav.slice(1).map(([label, id]) => (
                <a href={`#${id}`} key={id}>
                  {label}
                </a>
              ))}
            </nav>
            <Socials />
          </div>
          <button className="email-now" type="button" onClick={onEmail}>
            Email Me Now
          </button>
        </div>
        <hr />
        <div className="legal">
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
          <a href="#contact">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}

function EmailModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="email-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="write-to-me"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
          <img src={closeIcon} alt="" width={24} height={24} />
        </button>
        <div className="modal-title">
          <h2 id="write-to-me">
            Write To <span>Me</span>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <form
          className="modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Type your message..." required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-visible', 'true');
          } else {
            e.target.removeAttribute('data-visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Navbar onContact={() => setModalOpen(true)} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Stack />
        <Articles />
        <Contact />
      </main>
      <Footer onEmail={() => setModalOpen(true)} />
      <EmailModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
