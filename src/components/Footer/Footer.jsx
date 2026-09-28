import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer style={{
      padding: 'var(--space-64) 0 var(--space-32)',
      backgroundColor: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-color)',
      marginTop: 'auto'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-32)'
      }}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-8)'
        }}>
          <h2 style={{
            fontSize: 'var(--text-xl)',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            margin: 0
          }}>LAW/OBARE</h2>
          <p className="mono-label" style={{ color: 'var(--color-cerulean)', margin: 0 }}>Software Developer</p>
        </div>

        <div style={{
          display: 'flex',
          gap: 'var(--space-24)',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {['GitHub', 'LinkedIn', 'Dev.to', 'Email'].map((link) => (
            <a
              key={link}
              href={link === 'Email' ? 'mailto:obarelawrence.acc@gmail.com' : '#'}
              style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: '600',
                fontSize: 'var(--text-sm)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-cerulean)'}
              onMouseLeave={(e) => e.target.style.color = 'inherit'}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-8)',
          marginTop: 'var(--space-32)'
        }}>
          <p className="text-small" style={{ opacity: 0.7 }}>&copy; {year} Lawrence Obare</p>
          <p className="mono-label" style={{ opacity: 0.5, fontSize: '10px' }}>Built with React.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;