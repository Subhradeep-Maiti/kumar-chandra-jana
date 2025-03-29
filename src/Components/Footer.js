import React from 'react';
import './Footer.css' // Import CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-content">
        <p>&copy; 2025 Kumar Chandra Jana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
