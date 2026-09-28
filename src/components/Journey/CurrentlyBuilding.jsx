import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CurrentlyBuilding = () => {
  const reveal = useScrollReveal();

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        <div
          ref={reveal}
          className="reveal-item"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-24)',
            maxWidth: '600px',
            backgroundColor: '#fff',
            padding: 'var(--space-32)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            borderLeft: '4px solid var(--color-amber)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
            <h2 className="heading-card" style={{ margin: 0 }}>CURRENTLY BUILDING</h2>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(7, 160, 195, 0.1)',
              padding: '4px 8px',
              borderRadius: 'var(--radius-full)'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--color-cyan)',
                borderRadius: '50%',
                animation: 'pulseStatus 2.5s infinite ease-in-out'
              }}></span>
              <span className="mono-label" style={{ color: 'var(--color-cerulean)', fontSize: '10px' }}>BUILDING</span>
            </div>
          </div>

          <div>
            <h3 className="heading-sub" style={{ marginBottom: 'var(--space-8)' }}>PROGRESS BAR</h3>
            <p>
              A personal developer growth platform focused on structured goals,
              progress tracking and consistency.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-8)' }}>
            <span className="label" style={{ fontSize: '12px', color: 'var(--color-cerulean)' }}>CURRENT FOCUS:</span>
            {['Go', 'Backend Systems', 'React', 'Algorithms'].map(focus => (
              <span key={focus} className="mono-label" style={{ opacity: 0.7 }}>{focus}</span>
            ))}
          </div>

          <Link to="/work/progress-bar" className="btn btn-secondary" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-8)' }}>
            VIEW PROJECT <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseStatus {
          0% { opacity: 0.6; }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.6; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pulse-status { animation: none !important; }
        }
      `}} />
    </section>
  );
};

export default CurrentlyBuilding;