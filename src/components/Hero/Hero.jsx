import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    // Only apply on desktop devices that support hover
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate normalized position (-1 to 1)
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;

      setMousePos({ x, y });
    }
  };

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      <div className={`container hero-container ${isLoaded ? 'loaded' : ''}`}>

        {/* Text Content Area */}
        <div className="hero-content">
          <p className="hero-greeting mono-label reveal-hero-1">HELLO, I'M</p>

          <h1 className="heading-hero reveal-hero-2">
            <span className="text-cerulean">LAWRENCE</span> OBARE<span className="text-scarlet">.</span>
          </h1>

          <p className="hero-role reveal-hero-3">SOFTWARE DEVELOPER</p>

          <p className="hero-description text-large reveal-hero-4">
            I learn by building and solve problems with software.
            Backend-minded developer building toward full-stack engineering.
          </p>

          <div className="hero-actions reveal-hero-5">
            <Link to="/work" className="btn btn-primary">
              VIEW MY WORK <ArrowRight size={16} />
            </Link>
            <a href="#contact" className="btn btn-secondary">
              LET'S CONNECT
            </a>
            <a href="https://github.com/LawObare" target="_blank" rel="noopener noreferrer" className="btn-icon">
              <GithubIcon size={24} />
            </a>
          </div>
        </div>

        {/* Abstract Geometric Composition */}
        <div className="hero-visual reveal-hero-6">
          <div className="geo-composition">

            {/* Base geometric shape (parallax) */}
            <div
              className="geo-base-shape"
              style={{
                transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`
              }}
            ></div>

            {/* Main Portrait/Graphic Frame (parallax) */}
            <div
              className="geo-main-frame"
              style={{
                transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`
              }}
            >
              <div className="geo-portrait-placeholder">
                <span className="geo-initials">LO</span>
              </div>
            </div>

            {/* Accents (parallax) */}
            <div
              className="geo-accent-1"
              style={{
                transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px) rotate(15deg)`
              }}
            ></div>
            <div
              className="geo-accent-2"
              style={{
                transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`
              }}
            ></div>

          </div>

          {/* Supporting Metrics */}
          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-title">GO</span>
              <span className="metric-desc">Backend Focus</span>
            </div>
            <div className="metric-item">
              <span className="metric-title">ZONE01</span>
              <span className="metric-desc">Developer Training</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;