import React from 'react';

const Navbar = () => {
  return (
    <header className="terminal-header">
      <div className="controls" style={{ display: 'flex', gap: '8px' }}>
        {/* RESTORED COLORS HERE */}
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span> {/* Red */}
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span> {/* Yellow */}
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span> {/* Green */}
      </div>
      <div className="user-status" style={{ color: '#888', fontSize: '0.85rem', fontFamily: 'monospace' }}>
        user@siri:~/portfolio
      </div>
    </header>
  );
};

export default Navbar;