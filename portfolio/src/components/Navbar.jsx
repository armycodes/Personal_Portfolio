import React from 'react';

const Navbar = () => {
  return (
    <header className="terminal-header">
      <div className="controls">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="user-status" style={{ color: '#58a6ff', fontSize: '0.85rem' }}>
        user@siri-mahalaxmi:~/portfolio
      </div>
    </header>
  );
};

export default Navbar;