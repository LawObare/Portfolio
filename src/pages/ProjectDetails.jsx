import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const ProjectDetails = () => {
  const { slug } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  const contentReveal1 = useScrollReveal();
  const contentReveal2 = useScrollReveal();

  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // Fallback data if full details aren't in array
  const problemText = project.problem || "Information about the problem solved by this project is currently being updated.";
  const ideaText = project.idea || "Information about the core concept is currently being updated.";
  const buildText = project.build || "Details regarding the implementation process are currently being updated.";
  const learningText = project.learning || "Key takeaways from this project will be documented here soon.";

  return (
    <div style={{
      paddingTop: 'var(--header-height)',
      minHeight: '100vh',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity var(--transition-normal), transform var(--transition-normal)',
      paddingBottom: 'var(--space-96)'
    }}>

      {/* Visual Header */}
      <div style={{
        width: '100%',
        height: '40vh',
        minHeight: '300px',
        backgroundColor: project.colorTheme?.background || 'var(--color-cerulean)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 'var(--space-24)', left: 'var(--space-24)', zIndex: 10 }}>
          <Link to="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-papaya)', fontWeight: 'bold' }}>
            <ArrowLeft size={20} /> BACK TO WORK
          </Link>
        </div>

        {/* Abstract Geometry per Spec rules */}
        <div style={{
          width: '200px', height: '200px',
          backgroundColor: project.colorTheme?.primary || 'var(--color-cyan)',
          borderRadius: project.slug === 'pamoja-build' ? '50%' : 'var(--radius-sm)',
          transform: 'rotate(15deg)',
          opacity: 0.8
        }}></div>
      </div>

      <div className="container" style={{ marginTop: 'calc(-1 * var(--space-48))', position: 'relative', zIndex: 2 }}>

        {/* Title Card */}
        <div style={{
          backgroundColor: 'var(--bg-primary)',
          padding: 'var(--space-48)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-md)',
          marginBottom: 'var(--space-64)'
        }}>
          <span className="mono" style={{ color: 'var(--color-cerulean)', fontSize: 'var(--text-2xl)', fontWeight: 'bold' }}>{project.number}</span>
          <h1 className="heading-hero" style={{ marginTop: 'var(--space-8)' }}>{project.title}</h1>
          <p className="text-large" style={{ marginTop: 'var(--space-16)', opacity: 0.8, maxWidth: '800px' }}>{project.description}</p>

          <div style={{ display: 'flex', gap: 'var(--space-16)', marginTop: 'var(--space-32)' }}>
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <GithubIcon size={18} /> GITHUB REPO
              </a>
            )}
            {project.live && project.live !== '#' && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                LIVE DEMO <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-64)' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-48)' }}>

            <div className="reveal-item" ref={contentReveal1} style={{ maxWidth: '800px' }}>
              <h2 className="heading-section" style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-cerulean)' }}>THE PROBLEM</h2>
              <p className="text-large">{problemText}</p>

              <h2 className="heading-section" style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-cerulean)', marginTop: 'var(--space-48)' }}>THE IDEA</h2>
              <p className="text-large">{ideaText}</p>
            </div>

            <div className="reveal-item" ref={contentReveal2} style={{ maxWidth: '800px' }}>
              <h2 className="heading-section" style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-cerulean)' }}>THE BUILD</h2>
              <p className="text-large">{buildText}</p>

              <h2 className="heading-section" style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-cerulean)', marginTop: 'var(--space-48)' }}>LEARNING</h2>
              <p className="text-large">{learningText}</p>
            </div>

          </div>

          {/* Sidebar / Tech Stack */}
          <div style={{
            backgroundColor: 'rgba(8, 103, 136, 0.05)',
            padding: 'var(--space-32)',
            borderRadius: 'var(--radius-md)',
            alignSelf: 'start'
          }}>
            <h3 className="heading-card" style={{ marginBottom: 'var(--space-16)' }}>TECHNOLOGIES</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
              {project.stack.map(tech => (
                <div key={tech} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
                  <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-scarlet)', borderRadius: '50%' }}></span>
                  <span className="mono-label" style={{ fontSize: '14px' }}>{tech}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;