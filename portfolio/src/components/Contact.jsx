import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const container = useRef();
  const [inputValue, setInputValue] = useState("");
  const [isExecuted, setIsExecuted] = useState(false);
  const [outputLines, setOutputLines] = useState([]);

  // Form Submit Logic for Desktop Enter & Mobile Go Button
  const handleInputSubmit = (e) => {
    e.preventDefault();
    const cmd = inputValue.trim().toLowerCase();
    
    // Command validation
    if (cmd === "ping" || cmd === "ping contact") {
      setIsExecuted(true);
      // Keyboard close avvadaniki
      if (document.activeElement) {
        document.activeElement.blur();
      }
    } else if (cmd !== "") {
      setOutputLines(prev => [...prev, `bash: ${cmd}: command not found`]);
      setInputValue("");
    }
  };

  useGSAP(() => {
    if (isExecuted) {
      const ctx = gsap.context(() => {
        // Line-by-line reveal animation
        gsap.set(".ping-line", { opacity: 0, x: -10 });
        
        gsap.to(".ping-line", { 
          opacity: 1, 
          x: 0,
          duration: 0.3, 
          stagger: 0.2 // Okko line madhya gap
        });
      }, container);
      return () => ctx.revert();
    }
  }, [isExecuted]);

  return (
    <section id="contact" ref={container} style={{ marginTop: '100px', marginBottom: '80px', minHeight: '250px' }}>
      
      <div style={{ fontFamily: "'Consolas', monospace", fontSize: '1rem', marginBottom: '20px' }}>
        
        {/* Error Logs */}
        {outputLines.map((line, index) => (
          <div key={index} style={{ marginBottom: '5px' }}>
            <span className="user">user@siri:~$</span> <span style={{color: '#fff'}}>{line.split(':')[1]?.trim() || 'error'}</span>
            <div style={{ color: '#ff5555' }}>{line}</div>
          </div>
        ))}

        {/* Interactive Input Form */}
        {!isExecuted ? (
          <form onSubmit={handleInputSubmit} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <span className="user" style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>user@siri:~$</span>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              enterKeyHint="go"
              autoFocus={false} 
              placeholder="type 'ping' to connect..."
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                outline: 'none',
                flex: 1,
                caretColor: '#fff',
                width: '100%'
              }}
            />
          </form>
        ) : (
          // Success State
          <div>
            <span className="user">user@siri:~$</span> <span style={{ color: '#fff' }}>{inputValue}</span>
          </div>
        )}
      </div>

      {/* OUTPUT DETAILS (Hidden until user types ping) */}
      <div style={{ display: isExecuted ? 'block' : 'none', paddingLeft: '20px', borderLeft: '2px solid #333' }}>
        
        <p className="ping-line" style={{ color: '#aaa', marginBottom: '20px' }}>
          {'>'} Pinging siri.server... Connection established.
        </p>
        
        {/* Email */}
        <div className="ping-line" style={{ marginBottom: '12px' }}>
          <span style={{ color: '#888', display: 'inline-block', width: '100px' }}>Email:</span> 
          <a href="mailto:sirimahalaxmivemula@gmail.com" className="hover-link" style={{ color: '#fff', fontWeight: 'bold' }}>
            sirimahalaxmivemula@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="ping-line" style={{ marginBottom: '12px' }}>
          <span style={{ color: '#888', display: 'inline-block', width: '100px' }}>LinkedIn:</span> 
          <a href="https://linkedin.com/in/sirimahalaxmivemula" target="_blank" rel="noreferrer" className="hover-link" style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: '#666' }}>
            Vemula Siri Mahalaxmi
          </a>
        </div>

        {/* GitHub */}
        <div className="ping-line" style={{ marginBottom: '20px' }}>
          <span style={{ color: '#888', display: 'inline-block', width: '100px' }}>GitHub:</span> 
          <a href="https://github.com/armycodes" target="_blank" rel="noreferrer" className="hover-link" style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: '#666' }}>
            armycodes
          </a>
        </div>

        {/* Fake Ping Stats for terminal feel */}
        <p className="ping-line" style={{ color: '#888', marginTop: '20px', fontSize: '0.9rem' }}>
          Ping statistics:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Packets: Sent = 3, Received = 3, Lost = 0 (0% loss)
        </p>

        {/* Footer */}
        <p className="ping-line" style={{ textAlign: 'center', marginTop: '60px', color: '#444', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Siri Mahalaxmi. Process finished with exit code 0.
        </p>

      </div>
    </section>
  );
};

export default Contact;