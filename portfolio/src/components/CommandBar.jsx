import React, { useState } from 'react';

const CommandBar = () => {
  const [input, setInput] = useState('');
  const [lastCommand, setLastCommand] = useState('');

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      setLastCommand(cmd);
      setInput('');

      // Command Logic
      if (cmd === 'help') {
        alert("Available commands: about, skills, projects, contact, clear");
      } 
      else if (cmd === 'clear') {
        window.scrollTo(0, 0);
        window.location.reload();
      }
      else {
        // Try to find section with ID
        const section = document.getElementById(cmd);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else if (['about', 'skills', 'projects', 'contact'].includes(cmd)) {
           // Mapping short commands to ids if they differ
           document.getElementById(cmd).scrollIntoView({ behavior: 'smooth' });
        } else {
           // Unknown command feedback could go here
        }
      }
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',
      background: 'rgba(13, 17, 23, 0.95)',
      borderTop: '1px solid #30363d',
      padding: '10px 20px',
      fontFamily: "'Fira Code', monospace",
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <span style={{ color: '#2ea043', fontWeight: 'bold' }}>user@siri:~$</span>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleCommand}
        placeholder="type 'help' or section name..."
        autoFocus
        style={{
          background: 'transparent',
          border: 'none',
          color: '#c9d1d9',
          outline: 'none',
          fontSize: '1rem',
          flex: 1,
          fontFamily: 'inherit'
        }}
      />
      {lastCommand && <span style={{ fontSize: '0.8rem', color: '#8b949e' }}>Last exec: {lastCommand}</span>}
    </div>
  );
};

export default CommandBar;