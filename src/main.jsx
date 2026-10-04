import aboutVideo from "./assets/About video.mp4";
import { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import golfVideo from './assets/Hobbies/Golf shot.mp4';
import './portfolio.css';
import './animations.css';

import portrait from './assets/figma/hero-portrait.png';
import mobilePortrait from './assets/figma/hero-image-2.png';
import projectImage from './assets/figma/project-placeholder.png';
import imgAmatsi from './assets/Project images/Amatsi.png';
import imgMwangaza from './assets/Project images/Mwangaza.png';
import imgProgressbar from './assets/Project images/progressbar.png';

import articleImage from './assets/figma/article-placeholder.png';
import postAmbassador from './assets/posts/Ambassador.jpeg';
import postKanz from './assets/posts/Kanz.png';
import postPiscine from './assets/posts/Piscine.jpeg';
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
  ['My Hobbies', 'hobbies'],
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/lawrence-obare-bb0390425/', label: 'LinkedIn', type: 'img', src: socialLi },
  { href: 'https://github.com/LawObare', label: 'GitHub', type: 'github' },
  { href: 'https://x.com/Lawinvisioned', label: 'X', type: 'img', src: socialTw },
  { href: 'https://dev.to/obare', label: 'DEV', type: 'img', src: socialDv },
];

const stackRows = [
  [
    { src: s01, title: 'Vue.js' }, { src: s02, title: 'React' }, { src: s03, title: 'MongoDB' },
    { src: s04, title: 'SQLite' }, { src: s05, title: 'Svelte' }, { src: s06, title: 'Supabase' },
    { src: s07, title: 'WordPress' }, { src: s08, title: 'Node.js' }, { src: s09, title: 'Neovim' }
  ],
  [
    { src: s10, title: 'Go' }, { src: s11, title: 'VS Code' }, { src: s12, title: 'Python' },
    { src: s13, title: 'Flutter' }, { src: s14, title: 'MySQL' }, { src: s15, title: 'PostgreSQL' },
    { src: s16, title: 'Redis' }, { src: s17, title: 'npm' }, { src: s18, title: 'Firebase' }
  ],
  [
    { src: s19, title: 'Figma' }, { src: s20, title: 'Vite' }, { src: s21, title: 'JavaScript' },
    { src: s22, title: 'npm' }, { src: s23, title: 'CSS3' }, { src: s24, title: 'HTML5' },
    { src: s25, title: 'Linux' }, { src: s26, title: 'Docker' }, { src: s27, title: 'GitHub' }
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
    p: 'I am able to connect frontend and backend systems seamlessly, develop end-to-end applications from database to user interface, and implement authentication and user management systems.',
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
    title: 'Amatsi',
    text: 'A full-stack smart-irrigation advisory system combining satellite weather and soil data to deliver personalized irrigation recommendations via SMS.',
    fullText: "Amatsi is a full-stack smart-irrigation advisory system for smallholder farmers that combines satellite weather and soil data from KijaniBox with a deterministic rule engine to deliver personalized irrigation recommendations (irrigate now, wait for rain, monitor, or conserve water) via SMS through Africa's Talking. The platform features a Next.js frontend with OpenStreetMap integration, a Go backend API with Redis/Asynq job queuing, a Python AI service for recommendations, and PostgreSQL persistence, all deployed on Vercel, Render, and Upstash with seamless local development via Docker Compose and full rate limiting and security controls.",
    img: imgAmatsi,
    link: 'https://amatsi.vercel.app/'
  },
  {
    title: 'Mwangaza',
    text: 'Satellite-driven farm advisory system fetching real-time weather data to generate and send SMS alerts to farmers.',
    fullText: "Mwangaza is a satellite-driven farm advisory system that fetches real-time weather data from OpenWeatherMap, runs a decision engine to generate farming recommendations, and sends SMS alerts to farmers via Africa's Talking. The full-stack application includes a Go REST API backend, a Flutter mobile/web dashboard with OpenStreetMap integration, and SQLite-backed demo data with seamless Docker Compose deployment for offline-first hackathon-friendly demos.",
    img: imgMwangaza,
    link: 'https://mwangaza-mwangaza.vercel.app/'
  },
  {
    title: 'Progress Bar',
    text: 'A developer growth companion tool designed to help developers stay consistent with long-term goals through structured planning and progress tracking.',
    fullText: "Progressbar (v2) is a developer growth companion tool designed to help developers stay consistent with long-term goals through structured planning, progress tracking, and reflection. Built with React + Vite on the frontend, it's a refined MVP that improves on version 1 by focusing on feature maturity and production readiness. Version 1 serves as a feature testing ground while v2 represents the polished, final deliverable.",
    img: imgProgressbar,
    link: 'https://progressbar-roan.vercel.app/'
  },
];

const articles = [
  {
    title: "My close up with the Chargé d'Affaires",
    image: postAmbassador,
    objectPosition: 'center 20%',
    text: 'An inspiring encounter where I had the privilege to discuss technology and innovation with the diplomatic envoy.',
    content: (
      <>
        <p className="lead">An inspiring encounter where I had the privilege to discuss technology and innovation with the diplomatic envoy.</p>
        
        <p>Before my journey into tech, the closest I had ever come to meeting a high-ranking official was during high school. I distinctly remember the excitement when our principal announced a visit from the Minister of Education. However, the reality of that day was far less personal than I had hoped. I was simply one of hundreds of students bundled in a massive crowd, catching only a fleeting glimpse of the visiting dignitary. For a long time, that was my only reference point for interacting with influential figures—distant, formal, and entirely inaccessible.</p>
        
        <p>That perception changed completely shortly after I joined Zone01 Kisumu. I was still relatively new and barely known by the wider team, so it came as a complete surprise when I was selected as one of the apprentices to engage directly with the U.S. Chargé d'Affaires, Susan M. Barnes, during her visit to our campus.</p>
        
        <h2>The Weight of Expectation</h2>
        <p>As the moment of the visit approached, the pressure began to mount. I was incredibly nervous, certain that I would stumble over my words. I spent time trying to mentally rehearse exactly what I was going to say, striving for the perfect professional pitch. In hindsight, over-preparing in this way was a recipe for disaster. I was building up the interaction to be an intimidating, high-stakes presentation rather than a genuine conversation.</p>
        
        <p>When she finally approached my desk, every perfectly crafted phrase I had practiced completely vanished from my mind. I braced myself to fumble through the interaction, but what happened next caught me entirely off guard. She didn't approach me with the stiff formality I had anticipated; instead, she spoke with a remarkably calm, compassionate, and welcoming voice.</p>
        

        <h2>A Genuine Connection</h2>
        <p>She was genuinely curious about who I was and the projects I had been working on. Within moments, she completely transformed the atmosphere of the room. As we spoke about technology, innovation, and my personal journey, the daunting hierarchy dissolved. For the duration of our conversation, I didn't feel like I was speaking to a high-ranking embassy official—it felt much more like a casual, engaging chat with a friend who was genuinely invested in my growth.</p>
        
        <p>That brief but profound encounter has forever changed my perspective. It taught me that no matter a person's title or status, genuine connection is built on empathy, curiosity, and human warmth. It has fundamentally reshaped how I view and interact with people both in my personal life and professional career, reminding me that true leadership is often found in the ability to make others feel seen, heard, and valued.</p>
      </>
    )
  },
  {
    title: "Smashed records in the world's biggest hackathon",
    image: postKanz,
    text: 'Reflecting on an intense 48 hours of coding, collaboration, and pushing boundaries to build a winning solution.',
    content: (
      <>
        <p className="lead">Reflecting on an intense 48 hours of coding, collaboration, and pushing boundaries to build a winning solution.</p>
        <p>Coming soon...</p>
      </>
    )
  },
  {
    title: 'Piscine, the tough selection process that broke a child but built a man',
    image: postPiscine,
    objectPosition: 'center top',
    text: 'My journey through the grueling 4-week coding bootcamp that tested my limits and transformed my approach to software development.',
    content: (
      <>
        <p className="lead">My journey through the grueling 4-week coding bootcamp that tested my limits and transformed my approach to software development.</p>
        <p>Coming soon...</p>
      </>
    )
  },
];

const contacts = [
  [mail, 'Email', 'Feel free to reach out to me via email for any inquiries or collaborations.', 'obarelawrence.acc@gmail.com', 'mailto:obarelawrence.acc@gmail.com'],
  [whatsapp, 'WhatsApp', 'Send me a direct message on WhatsApp for a quick chat.', 'Start new chat', 'https://wa.me/254741133956'],
  [phone, 'Phone', 'You can call me directly on my personal number.', '+254 741 133 956', 'tel:+254741133956'],
  [location, 'My Location', 'I am currently based in Nairobi, Kenya, open to remote and global opportunities.', 'Nairobi, Kenya', '#contact'],
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
    window.addEventListener('scroll', onScroll, { passive: true });
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

function Hero({ onViewCV }) {
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
          <picture>
            <img className="portrait" src={portrait} alt="Lawrence Obare" />
          </picture>
        </div>
        <div className="heroText">
          <p>Software Engineer with a strong focus on backend development and problem-solving.</p>
        </div>
        <div className="hero-ctas">
          <button type="button" className="outline" onClick={onViewCV} style={{ cursor: 'pointer', background: 'transparent' }}>
            View my CV
          </button>
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
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="aboutCard">
        <h2 className="reveal-up">About Me</h2>
        <div className="aboutImage reveal-left" ref={containerRef}>
          {inView && (
            <video
              src={aboutVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>
        <i className="aboutAccent" />
        <p className="reveal-right">
          I’m a software developer passionate about building practical solutions with code. I specialize in Go and backend development, enjoy solving challenging problems, and learn best by building real projects. I’m constantly improving my skills and working toward becoming a strong, well-rounded backend engineer.
        </p>
      </div>
    </section>
  );
}

function Projects({ onSelectProject }) {
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
                <img src={p.img || projectImage} alt={p.title} />
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3>{p.title}</h3>
                  <button className="project-arrow-btn" onClick={() => onSelectProject(p)} aria-label={`View ${p.title} details`}>
                    <ExternalArrow />
                  </button>
                </div>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
        {projects.length > 3 && <CarouselControls total={projects.length} />}
      </div>
    </section>
  );
}

function Services() {
  const [expanded, setExpanded] = useState(null);

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
          My <span>Stack</span> and <span>Tools</span>
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

function Articles({ onReadArticle }) {
  return (
    <section className="articles" id="articles">
      <div className="articleWrap">
        <div className="heading reveal-up">
          <h2>
            <span>Articles</span> & <span>Posts</span>
          </h2>
          <p>Read all about my latest thoughts and experiences in software engineering.</p>
        </div>
        <div className="articleCards">
          {articles.map((a, i) => (
            <article className={`reveal-up stagger-${i + 1}`} key={i}>
              <div className="card-media">
                <img src={a.image || articleImage} alt="" style={{ objectPosition: a.objectPosition || 'center' }} />
              </div>
              <small>5 min read</small>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <a href="#" onClick={(e) => { e.preventDefault(); onReadArticle(a); }}>
                Read more <img src={chevronRight} alt="" width={24} height={24} />
              </a>
            </article>
          ))}
        </div>
        {articles.length > 3 && <CarouselControls total={articles.length} />}
      </div>
    </section>
  );
}


function Hobbies() {
  return (
    <section className="hobbies" id="hobbies">
      <div className="wide">
        <div className="heading reveal-up">
          <h2>
            My <span>Hobbies</span>
          </h2>
        </div>
        <div className="hobbies-content">
          <div className="hobbies-visual reveal-left">
            <div className="hobbies-big-orb" aria-hidden="true" />
            <div className="hobbies-small-orb" aria-hidden="true" />
            <div className="hobbies-videos">
              <video 
                className="hobby-video" 
                src={golfVideo} 
                autoPlay
                loop
                muted 
                playsInline
                style={{ opacity: 1 }}
              />
            </div>
          </div>
          <div className="hobbies-text reveal-right">
            <p>
              Outside code I love immersing myself in fun and challenging activities. I love mostly golfing. Its a good way to recollect after a long week, get some fresh air and stretch my back. I love traveling, mostly because of the feel of the open road and the excitement that comes with seeing new places. I also love reading and hanging out with friends and family.
            </p>
          </div>
        </div>
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
          <p>Feel free to reach out for any inquiries or collaborations.</p>
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
          <p>Fill out the form below to send me a direct message.</p>
        </div>
        <form
          className="modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:obarelawrence.acc@gmail.com?subject=${subject}&body=${body}`;
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

function CVModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="email-modal project-modal cv-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
          <img src={closeIcon} alt="" width={24} height={24} />
        </button>
        <div className="modal-title cv-header-row">
          <h2 id="cv-modal-title" style={{ margin: 0, fontSize: '36px' }}>
            My <span>CV</span>
          </h2>
          <a className="black cv-download-btn" href={cvFile} download="Lawrence_Obare_CV.pdf">
            Download CV
          </a>
        </div>
        <div className="project-modal-body">
          <iframe 
            src={cvFile} 
            title="CV" 
            className="cv-iframe"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="email-modal project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
          <img src={closeIcon} alt="" width={24} height={24} />
        </button>
        <div className="modal-title">
          <h2 id="project-modal-title">
            {project.title}
          </h2>
        </div>
        <div className="project-modal-body">
          <div className="project-modal-img-wrapper">
             <img src={project.img} alt={project.title} className="project-modal-img" />
          </div>
          <p>{project.fullText}</p>
          <div className="project-modal-actions">
            <a href={project.link} target="_blank" rel="noreferrer" className="black">
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogNavbar({ onBack, onContact }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header>
      <nav style={{ justifyContent: 'space-between' }}>
        <button className="back-btn" type="button" onClick={onBack}>
          <img src={arrowBack} alt="" width={20} height={20} /> Back
        </button>
        <button className="contactBtn" type="button" onClick={onContact}>
          Contact me
        </button>
      </nav>
    </header>
  );
}

function BlogPost({ article }) {
  return (
    <section className="blog-post">
      <div className="blog-post-header">
        <h1>{article.title}</h1>
        <div className="blog-post-meta">
          <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </div>
      
      <div className="blog-post-image">
        <img src={article.image || articleImage} alt={article.title} style={{ objectPosition: article.objectPosition || 'center' }} />
      </div>

      <div className="blog-post-content">
        {article.content}
      </div>
    </section>
  );
}
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const progressRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (progressRef.current) {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = (totalScroll / windowHeight) * 100;
            progressRef.current.style.width = `${scroll}%`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    // Use setTimeout to ensure DOM is fully painted after state change before observing
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .hero-stage > *').forEach((el) => observer.observe(el));
    }, 0);
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [selectedArticle]);

  if (selectedArticle) {
    return (
      <>
        <div className="scroll-progress" ref={progressRef} />
        <BlogNavbar onBack={() => setSelectedArticle(null)} onContact={() => setModalOpen(true)} />
        <main>
          <BlogPost article={selectedArticle} />
        </main>
        <Footer onEmail={() => setModalOpen(true)} />
        <EmailModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </>
    );
  }

  return (
    <>
      <div className="scroll-progress" ref={progressRef} />
      <Navbar onContact={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
      <main>
        <Hero onViewCV={() => setCvModalOpen(true)} />
        <About />
        <Projects onSelectProject={setSelectedProject} />
        <Services />
        <Stack />
        <Articles onReadArticle={setSelectedArticle} />
        <Hobbies />
        <Contact />
      </main>
      <Footer onEmail={() => setModalOpen(true)} />
      <EmailModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CVModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
