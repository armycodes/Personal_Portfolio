/*import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const DSAStats = () => {
  const container = useRef();
  const [inputValue, setInputValue] = useState("");
  const [isExecuted, setIsExecuted] = useState(false); // Command success ayinda leda?
  const [outputLines, setOutputLines] = useState([]); // Error messages store cheyyadaniki

  // User Enter kottinappudu em jaragali?
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const cmd = inputValue.trim().toLowerCase();
      
      // Valid Commands: 'show dsa_stats' OR './show_dsa_stats.sh' OR just 'dsa'
      if (cmd === "show dsa_stats" || cmd === "./show_dsa_stats.sh" || cmd === "dsa") {
        setIsExecuted(true); // Success! Animation start avthundi
      } else if (cmd !== "") {
        // Tappu command kodithe error message add chestham
        setOutputLines(prev => [...prev, `bash: ${cmd}: command not found`]);
        setInputValue(""); // Input clear chestham
      }
    }
  };

  useGSAP(() => {
    // Ee animation ONLY 'isExecuted' TRUE ainappude run avthundi
    if (isExecuted) {
      const ctx = gsap.context(() => {
        // 1. First boxes ni invisible nundi visible chestham
        gsap.set(".dsa-box", { display: "block", opacity: 0 });
        gsap.set(".dsa-content", { opacity: 0 });

        const tl = gsap.timeline();

        // 2. Boxes Appear
        tl.to(".dsa-box", { opacity: 1, duration: 0.2, stagger: 0.1 });

        // 3. Text Print avthundi (Typewriter feel)
        tl.to(".dsa-content", { 
          opacity: 1, 
          duration: 0.3, 
          stagger: 0.1 
        });

      }, container);
      return () => ctx.revert();
    }
  }, [isExecuted]); // Dependency isExecuted

  return (
    <section id="dsa" ref={container} style={{ marginTop: '80px', minHeight: '300px', marginBottom: '50px' }}>
      
      {/* 1. INTERACTIVE TERMINAL INPUT *//*}
      <div style={{ fontFamily: "'Consolas', monospace", fontSize: '1rem', marginBottom: '20px' }}>
        
        {/* Previous Error Logs (Mistake chesthe ikkada kanipisthayi) *//*}
        {outputLines.map((line, index) => (
          <div key={index} style={{ marginBottom: '5px' }}>
            <span className="user">user@siri:~$</span> <span style={{color: '#fff'}}>{line.split(':')[1]?.trim() || 'error'}</span>
            <div style={{ color: '#ff5555' }}>{line}</div>
          </div>
        ))}

        {/* Current Input Line *//*}
        {!isExecuted ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="user" style={{ marginRight: '10px' }}>user@siri:~$</span>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus={false} // Page load avvagane keyboard open avvakunda
              placeholder="type 'show dsa_stats'..."
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                outline: 'none',
                flex: 1,
                caretColor: '#fff' // White cursor
              }}
            />
          </div>
        ) : (
          // Success ayyaka Input freeze aipothundi
          <div>
            <span className="user">user@siri:~$</span> <span style={{ color: '#fff' }}>{inputValue}</span>
          </div>
        )}
      </div>

      {/* 2. OUTPUT BOXES (Hidden until command is correct) *//*}
      <div style={{ display: isExecuted ? 'grid' : 'none', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        {/* BOX 1 *//*}
        <div className="terminal-card dsa-box" style={{ opacity: 0 }}>
           <h4 className="dsa-content" style={{ color: '#ffffff', marginBottom: '15px', fontSize: '1.1rem' }}>
             // Core Concepts
           </h4>
           <ul style={{ listStyle: 'none', padding: 0, color: '#aaa', lineHeight: '1.8' }}>
             <li className="dsa-content"><i className="fas fa-check" style={{ color: '#fff', marginRight: '8px' }}></i> Arrays, Hashing, Recursion</li>
             <li className="dsa-content"><i className="fas fa-check" style={{ color: '#fff', marginRight: '8px' }}></i> Stacks, Queues, Trees</li>
             <li className="dsa-content"><i className="fas fa-check" style={{ color: '#fff', marginRight: '8px' }}></i> Time-Space Complexity, Tries, Graphs, DP</li>
             <li className="dsa-content" style={{ marginTop: '10px', color: '#666' }}>{'>'} Actively Solving Problems...</li>
           </ul>
        </div>

        {/* BOX 2 *//*}
        <div className="terminal-card dsa-box" style={{ opacity: 0 }}>
           <h4 className="dsa-content" style={{ color: '#ffffff', marginBottom: '15px', fontSize: '1.1rem' }}>
             // Platforms
           </h4>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
             <a href="https://leetcode.com/u/Vemula_Siri_Mahalaxmi/" target="_blank" className="hover-link dsa-content" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
               <i className="fas fa-code" style={{ color: '#fff' }}></i> LeetCode (Active)
             </a>
             <div className="dsa-content" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#888' }}>
               <i className="fas fa-terminal"></i> CodeForces (Learning)
             </div>
             <div className="dsa-content" style={{ marginTop: '15px', fontSize: '0.85rem', color: '#666' }}>
               Status: <span style={{ color: '#fff' }}>GRINDING</span>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default DSAStats;*/
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const DSAStats = () => {
  const container = useRef();
  const [inputValue, setInputValue] = useState("");
  const [isExecuted, setIsExecuted] = useState(false);
  const [outputLines, setOutputLines] = useState([]); 

  // OLD: handleKeyDown -> NEW: handleSubmit
  // Idi Mobile "Go" button ni mariyu Desktop "Enter" ni capture chestundi
  const handleInputSubmit = (e) => {
    e.preventDefault(); // Page reload avvakunda aaputhundi

    const cmd = inputValue.trim().toLowerCase();
    
    if (cmd === "show dsa_stats" || cmd === "./show_dsa_stats.sh" || cmd === "dsa") {
      setIsExecuted(true);
      // Mobile lo command kottagane Keyboard close aipovali (to see output)
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
        gsap.set(".dsa-box", { display: "block", opacity: 0 });
        gsap.set(".dsa-content", { opacity: 0 });

        const tl = gsap.timeline();

        tl.to(".dsa-box", { opacity: 1, duration: 0.2, stagger: 0.1 });

        tl.to(".dsa-content", { 
          opacity: 1, 
          duration: 0.3, 
          stagger: 0.1 
        });

      }, container);
      return () => ctx.revert();
    }
  }, [isExecuted]); 

  return (
    <section id="dsa" ref={container} style={{ marginTop: '80px', minHeight: '300px', marginBottom: '50px' }}>
      
      {/* 1. INTERACTIVE TERMINAL INPUT */}
      <div style={{ fontFamily: "'Consolas', monospace", fontSize: '1rem', marginBottom: '20px' }}>
        
        {/* Error Logs */}
        {outputLines.map((line, index) => (
          <div key={index} style={{ marginBottom: '5px' }}>
            <span className="user">user@siri:~$</span> <span style={{color: '#fff'}}>{line.split(':')[1]?.trim() || 'error'}</span>
            <div style={{ color: '#ff5555' }}>{line}</div>
          </div>
        ))}

        {/* Current Input Line */}
        {!isExecuted ? (
          // <FORM> TAG IS THE SECRET FOR MOBILE SUPPORT
          <form onSubmit={handleInputSubmit} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <span className="user" style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>user@siri:~$</span>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              // Mobile Attributes
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              enterKeyHint="go" // Mobile Keyboard lo "Go" ani chupistundi
              
              autoFocus={false} 
              placeholder="type 'show dsa_stats'..."
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
            {/* NO VISIBLE BUTTONS HERE. The form handles the enter key automatically. */}
          </form>
        ) : (
          // Success State
          <div>
            <span className="user">user@siri:~$</span> <span style={{ color: '#fff' }}>{inputValue}</span>
          </div>
        )}
      </div>

      {/* 2. OUTPUT BOXES */}
      <div style={{ display: isExecuted ? 'grid' : 'none', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        {/* BOX 1 */}
        <div className="terminal-card dsa-box" style={{ opacity: 0 }}>
           <h4 className="dsa-content" style={{ color: '#ffffff', marginBottom: '15px', fontSize: '1.1rem' }}>
             // Core Concepts
           </h4>
           <ul style={{ listStyle: 'none', padding: 0, color: '#aaa', lineHeight: '1.8' }}>
             <li className="dsa-content"><i className="fas fa-check" style={{ color: '#fff', marginRight: '8px' }}></i> Arrays, Hashing, Recursion</li>
             <li className="dsa-content"><i className="fas fa-check" style={{ color: '#fff', marginRight: '8px' }}></i> Stacks, Queues, Trees</li>
             <li className="dsa-content"><i className="fas fa-check" style={{ color: '#fff', marginRight: '8px' }}></i> Time-Space Complexity, Tries, Graphs, DP</li>
             <li className="dsa-content" style={{ marginTop: '10px', color: '#666' }}>{'>'} Actively Solving Problems...</li>
           </ul>
        </div>

        {/* BOX 2 */}
        <div className="terminal-card dsa-box" style={{ opacity: 0 }}>
           <h4 className="dsa-content" style={{ color: '#ffffff', marginBottom: '15px', fontSize: '1.1rem' }}>
             // Platforms
           </h4>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
             <a href="https://leetcode.com/u/Vemula_Siri_Mahalaxmi/" target="_blank" className="hover-link dsa-content" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
               <i className="fas fa-code" style={{ color: '#fff' }}></i> LeetCode (Active)
             </a>
             <div className="dsa-content" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#888' }}>
               <i className="fas fa-terminal"></i> CodeForces (Learning)
             </div>
             <div className="dsa-content" style={{ marginTop: '15px', fontSize: '0.85rem', color: '#666' }}>
               Status: <span style={{ color: '#fff' }}>GRINDING</span>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default DSAStats;