import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container section-padding" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <h1 className="heading-hero" style={{ marginBottom: '1rem', color: 'var(--color-cerulean)' }}>404</h1>
      <p className="text-large" style={{ marginBottom: '2rem' }}>Looks like this page missed its deployment.</p>
      <Link to="/" className="btn btn-primary">
        [ BACK HOME ]
      </Link>
    </div>
  );
};

export default NotFound;