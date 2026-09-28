import React from 'react';
import { journey } from '../../data/journey';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Journey.css';

const Journey = () => {
  const headerReveal = useScrollReveal();
  const timelineReveal = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="journey" className="journey-section section-padding">
      <div className="container">

        <div className="journey-header" ref={headerReveal}>
          <h2 className="heading-section">THE JOURNEY</h2>
        </div>

        <div className="journey-timeline-container" ref={timelineReveal}>
          <div className="journey-line"></div>

          <div className="journey-stages">
            {journey.map((stage, index) => (
              <div
                key={stage.id}
                className={`journey-stage ${stage.isActive ? 'active' : ''}`}
                style={{ '--stage-delay': `${index * 150}ms` }}
              >
                <div className="stage-marker">
                  <div className="stage-dot"></div>
                </div>

                <div className="stage-content">
                  <h3 className="heading-card stage-title">{stage.title}</h3>
                  <p className="stage-desc">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;