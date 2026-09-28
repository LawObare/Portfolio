import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contentReveal = useScrollReveal();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-geo">
        <div className="contact-geo-red"></div>
        <div className="contact-geo-cyan"></div>
        <div className="contact-geo-yellow"></div>
      </div>

      <div className="container contact-container">
        <div className="contact-content reveal-item" ref={contentReveal}>

          <h2 className="heading-hero contact-heading">
            HAVE SOMETHING TO BUILD?
            <span className="contact-subheading">LET'S MAKE IT REAL.</span>
          </h2>

          <p className="text-large contact-text">
            I'm interested in interesting problems, useful software, projects and
            opportunities to keep learning through building.
          </p>

          <div className="contact-actions">
            <a href="mailto:obarelawrence.acc@gmail.com" className="btn btn-primary contact-btn-primary">
              GET IN TOUCH <ArrowRight size={20} className="action-arrow" />
            </a>

            <a href="https://github.com/LawObare" target="_blank" rel="noopener noreferrer" className="btn btn-secondary contact-btn-secondary">
              GitHub <ArrowUpRight size={18} className="action-arrow-up" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;