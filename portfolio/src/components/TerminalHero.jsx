import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const TerminalHero = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".typing-effect", {
      width: 0,
      duration: 1.5,
      ease: "steps(20)",
      overflow: "hidden",
      borderRight: "2px solid #2ea043"
    })
    .to(".typing-effect", { borderRight: "none" })
    .to(".hidden-content", { opacity: 1, visibility: "visible", duration: 0.5 })
    .from(".glitch", { y: 20, opacity: 0, duration: 0.8 })
    .from(".role, .sub-text, .cta-group", { y: 20, opacity: 0, stagger: 0.2, duration: 0.8 });
    
  }, { scope: container });

  return (
    <div ref={container} className="section hero" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p className="prompt">
        <span className="user">user@siri:~$</span> <span className="typing-effect" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>./init_portfolio.sh</span>
      </p>
      
      <div className="hidden-content" style={{ opacity: 0, visibility: 'hidden' }}>
        <h1 className="glitch">Siri Mahalaxmi Vemula</h1>
        <h2 className="role">Backend-Focused Software Engineer</h2>
        <p className="sub-text">
          Building scalable systems with <span className="highlight">Java</span>, <span className="highlight">Python</span> & <span className="highlight">Cloud Architecture</span>.
        </p>
        
        <div className="cta-group" style={{ marginTop: '30px' }}>
          <a href="#projects" className="terminal-btn">[ View_Projects ]</a>
          <a href="/assets/Siri_Mahalaxmi_Resume.pdf" download className="terminal-btn" style={{ borderColor: '#2ea043', color: '#2ea043' }}>[ Download_Resume ]</a>
        </div>
      </div>
      <div style={{ marginTop: '40px', fontSize: '0.9rem', color: '#8b949e', opacity: 0.8 }}>
  <p>
    <i className="fas fa-keyboard"></i> Pro Tip: Type <span style={{ color: '#f778ba' }}>help</span> in the terminal below to navigate.
  </p>
</div>
<div style={{ marginTop: '40px', fontSize: '0.9rem', color: '#666' }}>
  <p>
    <i className="fas fa-keyboard"></i> Pro Tip: Type <span style={{ color: '#fff', fontWeight: 'bold' }}>help</span> in the command bar below.
  </p>
</div>
    </div>
  );
};

export default TerminalHero;