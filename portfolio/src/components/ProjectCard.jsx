import React from 'react';

const ProjectCard = ({ pid, name, status, title, desc, tech, linkCode, linkDemo }) => {
  return (
    <div className="project-card">
      {/* Header (Process Style) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '15px', fontSize: '0.8rem', color: '#666' }}>
        <span>PID: {pid}</span>
        <span>{name}</span>
        {/* Status forced to White/Grey */}
        <span style={{ color: '#fff', fontWeight: 'bold' }}>[{status}]</span>
      </div>

      {/* Content */}
      <h3>{title}</h3>
      <p style={{ color: '#888', marginBottom: '15px', lineHeight: '1.6' }}>{desc}</p>
      
      <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
        <strong style={{ color: '#fff' }}>Stack:</strong> {tech}
      </p>

      {/* Buttons */}
      <div style={{ marginTop: '20px' }}>
        {linkCode && <a href={linkCode} target="_blank" rel="noreferrer" className="terminal-btn">[ View_Code ]</a>}
        {linkDemo && <a href={linkDemo} target="_blank" rel="noreferrer" className="terminal-btn outline" style={{ marginLeft: '10px' }}>[ Live_Demo ]</a>}
      </div>
    </div>
  );
};

export default ProjectCard;