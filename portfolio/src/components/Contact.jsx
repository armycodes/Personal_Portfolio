import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="reveal-section" style={{ marginTop: '100px', marginBottom: '50px' }}>
      <p className="prompt"><span className="user">user@siri:~$</span> ping sirimahalaxmivemula@gmail.com</p>
      
      {/* Border changed from Green to Dark Grey */}
      <div style={{ paddingLeft: '20px', borderLeft: '2px solid #333' }}>
        <p style={{ color: '#888' }}>{'>'} Pinging server... Connection established.</p>
        <p style={{ color: '#888' }}>{'>'} Packet loss: 0%</p>
        
        <div style={{ marginTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a href="mailto:sirimahalaxmivemula@gmail.com" className="hover-link">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover-link">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover-link">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '60px', color: '#444', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Siri Mahalaxmi. Process finished with exit code 0.
      </p>
    </section>
  );
};

export default Contact;