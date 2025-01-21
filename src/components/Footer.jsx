import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
    </footer>
  );
};

const footerStyle = {
  textAlign: 'center',
  padding: '10px',
  backgroundColor: '#282c34',
  color: '#ffffff',
};

export default Footer;
