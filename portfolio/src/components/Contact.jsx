import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="reveal-section" style={{ marginTop: '100px', marginBottom: '50px' }}>
      <p className="prompt"><span className="user">user@siri:~$</span> ping sirimahalaxmivemula@gmail.com</p>
      
      <div style={{ paddingLeft: '20px', borderLeft: '2px solid #2ea043' }}>
        <p style={{ color: '#8b949e' }}>{'>'} Pinging server... Connection established.</p>
        <p style={{ color: '#8b949e' }}>{'>'} Packet loss: 0%</p>
        
        <div style={{ marginTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a href="mailto:sirimahalaxmivemula@gmail.com" style={{ color: '#c9d1d9', textDecoration: 'none' }} className="hover-link">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://linkedin.com/in/vemula-siri-mahalaxmi-b4b624319/" target="_blank" rel="noreferrer" style={{ color: '#c9d1d9', textDecoration: 'none' }} className="hover-link">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/armycodes" target="_blank" rel="noreferrer" style={{ color: '#c9d1d9', textDecoration: 'none' }} className="hover-link">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://leetcode.com/u/Vemula_Siri_Mahalaxmi/" target="_blank" rel="noreferrer" style={{ color: '#c9d1d9', textDecoration: 'none' }} className="hover-link">
            <i className="fas fa-code"></i> LeetCode
          </a>
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '60px', color: '#58a6ff', opacity: 0.5, fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Siri Mahalaxmi. Process finished with exit code 0.
      </p>
    </section>
  );
};

export default Contact;