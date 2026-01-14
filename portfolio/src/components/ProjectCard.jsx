import React from 'react';

const ProjectCard = ({ pid, name, status, title, desc, tech, linkCode, linkDemo }) => {
  return (
    <div className="project-card" style={{ 
      background: 'rgba(22, 27, 34, 0.8)', 
      border: '1px solid #30363d', 
      borderRadius: '6px', 
      padding: '20px', 
      marginBottom: '30px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Header (Process Style) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #30363d', paddingBottom: '10px', marginBottom: '15px', fontSize: '0.8rem', color: '#8b949e' }}>
        <span>PID: {pid}</span>
        <span>{name}</span>
        <span style={{ color: status === 'RUNNING' ? '#2ea043' : '#58a6ff' }}>{status}</span>
      </div>

      {/* Content */}
      <h3 style={{ color: '#fff', marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: '#8b949e', marginBottom: '15px', lineHeight: '1.6' }}>{desc}</p>
      
      <p style={{ fontSize: '0.9rem', color: '#c9d1d9' }}>
        <strong style={{ color: '#58a6ff' }}>Stack:</strong> {tech}
      </p>

      {/* Buttons */}
      <div style={{ marginTop: '20px' }}>
        {linkCode && <a href={linkCode} target="_blank" rel="noreferrer" className="terminal-btn" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>[ View_Code ]</a>}
        {linkDemo && <a href={linkDemo} target="_blank" rel="noreferrer" className="terminal-btn" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>[ Live_Demo ]</a>}
      </div>
    </div>
  );
};

export default ProjectCard;