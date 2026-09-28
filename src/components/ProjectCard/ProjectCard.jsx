import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const cardReveal = useScrollReveal({ threshold: 0.1 });

  // Create abstract geometry based on project slug to fulfill design spec
  const renderGeometry = () => {
    switch (project.slug) {
      case 'progress-bar':
        return (
          <div className="pc-geo-wrapper">
            <div className="pc-geo-line-v"></div>
            <div className="pc-geo-block" style={{ top: '20%', backgroundColor: 'var(--color-amber)' }}></div>
            <div className="pc-geo-block" style={{ top: '50%', backgroundColor: 'var(--color-cyan)' }}></div>
            <div className="pc-geo-block" style={{ top: '80%', backgroundColor: 'var(--color-papaya)' }}></div>
          </div>
        );
      case 'pamoja-build':
        return (
          <div className="pc-geo-wrapper">
            <div className="pc-geo-circle" style={{ top: '30%', left: '30%', borderColor: 'var(--color-cyan)' }}></div>
            <div className="pc-geo-circle" style={{ top: '60%', left: '60%', borderColor: 'var(--color-scarlet)' }}></div>
            <div className="pc-geo-line-d"></div>
          </div>
        );
      case 'paykit':
        return (
          <div className="pc-geo-wrapper">
            <div className="pc-geo-rect" style={{ width: '60%', height: '20%', top: '40%', left: '20%', backgroundColor: 'var(--color-papaya)' }}></div>
            <div className="pc-geo-dot" style={{ top: '30%', right: '30%' }}></div>
          </div>
        );
      case 'ascii-art-web':
        return (
          <div className="pc-geo-wrapper pc-geo-grid">
            <span className="mono-label" style={{ color: 'var(--color-cerulean)', fontSize: '24px' }}>A</span>
            <span className="mono-label" style={{ color: 'var(--color-cyan)', fontSize: '24px' }}>S</span>
            <span className="mono-label" style={{ color: 'var(--color-cerulean)', fontSize: '24px' }}>C</span>
            <span className="mono-label" style={{ color: 'var(--color-amber)', fontSize: '24px' }}>I</span>
          </div>
        );
      default:
        return (
          <div className="pc-geo-wrapper">
            <div className="pc-geo-default"></div>
          </div>
        );
    }
  };

  return (
    <div
      className="project-card reveal-item"
      ref={cardReveal}
      style={{
        '--card-primary': project.colorTheme?.primary || 'var(--color-cerulean)',
        '--card-secondary': project.colorTheme?.secondary || 'var(--color-cyan)',
        '--card-accent': project.colorTheme?.accent || 'var(--color-scarlet)',
        '--card-bg': project.colorTheme?.background || 'var(--color-cerulean)'
      }}
    >
      <div className="project-card-visual">
        <div className="pc-visual-bg"></div>
        {renderGeometry()}
        <span className="pc-number mono">{project.number}</span>
      </div>

      <div className="project-card-content">
        <div className="pc-meta">
          <span className="label text-cerulean">{project.category}</span>
        </div>

        <h3 className="heading-sub pc-title">{project.title}</h3>
        <p className="pc-description">{project.description}</p>

        <div className="pc-stack">
          {project.stack.map(tech => (
            <span key={tech} className="mono-label pc-tech">{tech}</span>
          ))}
        </div>

        <Link to={`/work/${project.slug}`} className="pc-action">
          <span className="label">VIEW PROJECT</span>
          <ArrowRight size={16} className="pc-action-icon" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;