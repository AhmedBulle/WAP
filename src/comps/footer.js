import React from 'react';
import Head from 'next/head';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          {/* Social Media Icons */}
          <div className="social-media-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-abdullahi-38b48b337/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="copyright">
            <p>&copy; 2024 Ahmed Abdullahi</p>
          </div>
        </div>
      </footer>

      {/* Font Awesome CDN link */}
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
    </>
  );
}

export default Footer;
