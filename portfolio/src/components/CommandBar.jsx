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
        alert("COMMANDS: \n> about \n> education \n> skills \n> projects \n> contact \n> clear");
      } 
      else if (cmd === 'clear') {
        window.scrollTo(0, 0);
        window.location.reload();
      }
      else {
        const section = document.getElementById(cmd);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
           // Optional: Shake effect or error msg
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
      background: '#000000',
      borderTop: '2px solid #ffffff', /* Thick white line like CMD */
      padding: '10px 20px',
      fontFamily: "'Consolas', 'Lucida Console', monospace", /* CMD Font */
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <span style={{ color: '#ffffff', fontWeight: 'bold' }}>C:\Users\Siri{'>'}</span>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleCommand}
        placeholder="type command..."
        autoFocus
        style={{
          background: 'transparent',
          border: 'none',
          color: '#ffffff',
          outline: 'none',
          fontSize: '1rem',
          flex: 1,
          fontFamily: 'inherit'
        }}
      />
      {lastCommand && <span style={{ fontSize: '0.8rem', color: '#888' }}>[Exec: {lastCommand}]</span>}
    </div>
  );
};

export default CommandBar;