import React from 'react';
import { skills } from '../../data/skills';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

const Skills = () => {
  const headerReveal = useScrollReveal();

  return (
    <section className="skills-section section-padding">
      <div className="container">

        <div className="skills-header" ref={headerReveal}>
          <h2 className="heading-section">TOOLS I WORK WITH</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => {
            const groupReveal = useScrollReveal();
            return (
              <div
                key={skillGroup.category}
                className={`skills-group reveal-delay-${(index % 4) + 1}`}
                ref={groupReveal}
              >
                <h3 className="mono-label skills-category">{skillGroup.category}</h3>
                <ul className="skills-list">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="skills-item text-large">{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;