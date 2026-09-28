import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './BuildSection.css';

const buildData = [
  {
    id: '01',
    title: 'BACKEND SYSTEMS',
    description: 'APIs, services, databases and backend applications primarily built with Go.',
    tech: 'Go / PostgreSQL / APIs',
    colorTheme: 'cerulean'
  },
  {
    id: '02',
    title: 'WEB APPLICATIONS',
    description: 'Practical web applications combining clean interfaces with reliable backend systems.',
    tech: 'React / JavaScript / Vite / HTML/CSS',
    colorTheme: 'cyan'
  },
  {
    id: '03',
    title: 'DEVELOPER PROJECTS',
    description: 'Experiments, tools and learning projects built to understand technology and solve programming problems.',
    tech: 'Algorithms / Open Source / Developer Tools',
    colorTheme: 'scarlet'
  }
];

const BuildSection = () => {
  const headerReveal = useScrollReveal();

  return (
    <section className="build-section section-padding">
      <div className="container">

        <div className="build-header" ref={headerReveal}>
          <h2 className="heading-section">WHAT I BUILD</h2>
          <p className="text-large" style={{ maxWidth: '600px' }}>
            I like building things that make an idea real — from backend systems
            and APIs to web applications and experiments.
          </p>
        </div>

        <div className="build-grid">
          {buildData.map((item, index) => {
            const cardReveal = useScrollReveal({ rootMargin: '0px 0px -5% 0px' });

            return (
              <div
                key={item.id}
                className={`build-card theme-${item.colorTheme} reveal-delay-${index + 1}`}
                ref={cardReveal}
              >
                <div className="build-card-inner">

                  {/* Geometric Art */}
                  <div className="build-geo-art">
                    {item.id === '01' && (
                      <div className="geo-backend">
                        <span className="geo-triangle"></span>
                        <span className="geo-block"></span>
                        <span className="geo-block"></span>
                      </div>
                    )}
                    {item.id === '02' && (
                      <div className="geo-web">
                        <span className="geo-circle"></span>
                        <span className="geo-rect-h"></span>
                      </div>
                    )}
                    {item.id === '03' && (
                      <div className="geo-dev">
                        <span className="geo-diamond"></span>
                        <span className="geo-dot"></span>
                        <span className="geo-dot"></span>
                      </div>
                    )}
                  </div>

                  <div className="build-content">
                    <span className="build-number mono">{item.id}</span>
                    <h3 className="heading-card">{item.title}</h3>
                    <p>{item.description}</p>
                    <p className="mono-label tech-stack">{item.tech}</p>
                  </div>

                  <div className="build-action">
                    <span className="action-text label">VIEW</span>
                    <ArrowRight size={16} className="action-icon" />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BuildSection;