import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import BuildSection from '../components/BuildSection/BuildSection';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import Skills from '../components/Skills/Skills';
import Journey from '../components/Journey/Journey';
import CurrentlyBuilding from '../components/Journey/CurrentlyBuilding';
import Contact from '../components/Contact/Contact';

const SelectedWork = () => {
  const headerReveal = useScrollReveal();
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-papaya)' }}>
      <div className="container">

        <div ref={headerReveal} className="reveal-item" style={{ marginBottom: 'var(--space-64)' }}>
          <h2 className="heading-section">SELECTED WORK</h2>
          <p className="text-large" style={{ maxWidth: '600px' }}>
            A selection of things I've built while learning, experimenting and
            solving real problems.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-48)' }}>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-64)', display: 'flex', justifyContent: 'center' }}>
          <Link to="/work" className="btn btn-secondary">
            VIEW ALL PROJECTS <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <BuildSection />
      <SelectedWork />
      <Skills />
      <Journey />
      <CurrentlyBuilding />
      <Contact />
    </div>
  );
};

export default Home;