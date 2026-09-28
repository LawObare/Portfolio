import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Work = () => {
  const headerReveal = useScrollReveal();
  const [filter, setFilter] = useState('ALL');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Get unique categories for simple filtering
  const categories = ['ALL', ...Array.from(new Set(projects.map(p => p.category.split(' / ')[0])))];

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    <div style={{
      paddingTop: 'var(--header-height)',
      minHeight: '100vh',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity var(--transition-normal), transform var(--transition-normal)'
    }}>
      <div className="container section-padding">

        <div ref={headerReveal} className="reveal-item" style={{ marginBottom: 'var(--space-64)' }}>
          <h1 className="heading-hero">ALL PROJECTS</h1>
          <p className="text-large" style={{ maxWidth: '600px', opacity: 0.8 }}>
            A complete collection of applications, tools, and experiments I've built.
          </p>
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-12)',
          marginBottom: 'var(--space-48)'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="mono-label"
              style={{
                padding: 'var(--space-8) var(--space-16)',
                borderRadius: 'var(--radius-full)',
                backgroundColor: filter === cat ? 'var(--color-cerulean)' : 'rgba(8, 103, 136, 0.05)',
                color: filter === cat ? 'var(--color-papaya)' : 'var(--text-primary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-48)'
        }}>
          {filteredProjects.map((project, index) => (
            <div key={project.slug} style={{ animation: `revealStage 400ms ease-out forwards ${index * 100}ms`, opacity: 0, transform: 'translateY(20px)' }}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Work;