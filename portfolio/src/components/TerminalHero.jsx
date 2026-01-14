import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TerminalHero = () => {
  const component = useRef();
  const [text, setText] = useState("");
  const fullText = "./init_portfolio.sh";

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Initial State: Name & Buttons hide chestunnam
      gsap.set(".hero-content", { autoAlpha: 0, y: 20 });
      
      // 2. Typing Animation Logic (Slower Speed)
      let i = 0;
      const typeWriter = setInterval(() => {
        setText(fullText.substring(0, i + 1));
        i++;
        
        if (i === fullText.length) {
          clearInterval(typeWriter);
          // 3. Reveal content after typing
          revealContent(); 
        }
      }, 150); // <--- CHANGED: Speed 50 nundi 150 ki pencha (Slower typing)

    }, component);

    return () => ctx.revert();
  }, []);

  const revealContent = () => {
    gsap.to(".hero-content", {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  };

  return (
    <section ref={component} style={{ 
      minHeight: "80vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", /* Body center lo untundi */
      textAlign: "center"
    }}>
      
      {/* --- PROMPT: LEFT ALIGNED --- */}
      {/* Wrapper to force left alignment for just this line */}
      <div style={{ width: '100%', textAlign: 'left', paddingLeft: '10px', marginBottom: '40px' }}>
        <p className="prompt" style={{ minHeight: '24px', margin: 0 }}>
          <span className="user">user@siri:~$</span> {text}<span className="blink">_</span>
        </p>
      </div>
      
      {/* --- CONTENT: CENTER ALIGNED --- */}
      <div className="hero-content" style={{ opacity: 0 }}>
        <h1 className="glitch">Siri Mahalaxmi Vemula</h1>
        <h2 className="role">Backend-Focused Software Engineer</h2>
        
        <p className="desc" style={{ maxWidth: '600px', margin: '0 auto 30px auto', color: '#888', fontSize: '1.1rem' }}>
          Building scalable systems with <span className="highlight">Java</span>, <span className="highlight">Python</span> & <span className="highlight">Cloud Architecture</span>.
        </p>

        <div className="cta-group" style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '15px', 
          justifyContent: 'center' 
        }}>
          <a href="#projects" className="terminal-btn hero-btn">[ View_Projects ]</a>
          <a href="/assets/Siri_Mahalaxmi_Resume.pdf" target="_blank" className="terminal-btn outline hero-btn">[ Download_Resume ]</a>
        </div>
      </div>

      <div className="hero-content" style={{ opacity: 0, marginTop: '80px', fontSize: '0.9rem', color: '#666', borderTop: '1px dashed #333', paddingTop: '15px', display: 'inline-block' }}>
        <p>
          <i className="fas fa-keyboard"></i> Pro Tip: Type <span style={{ color: '#fff', fontWeight: 'bold' }}>help</span> in the command bar below.
        </p>
      </div>

      <style>{`
        .blink { animation: blinker 1s step-end infinite; color: #fff; font-weight: bold; margin-left: 5px; }
        @keyframes blinker { 50% { opacity: 0; } }
      `}</style>

    </section>
  );
};

export default TerminalHero;