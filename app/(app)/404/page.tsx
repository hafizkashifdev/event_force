import React from 'react';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      fontFamily: 'inherit',
    }}>
      <h1 style={{ fontSize: '4rem', margin: 0 }}>404</h1>
      <p style={{ fontSize: '1.5rem', color: '#888' }}>Page Not Found</p>
      <p style={{ color: '#888' }}>The page you are looking for does not exist. kashif</p>
    </div>
  );
};

export default NotFound;
