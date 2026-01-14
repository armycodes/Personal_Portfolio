import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const container = useRef();

  useGSAP(() => {
    const bars = gsap.utils.toArray(".bar-fill");
    
    bars.forEach((bar) => {
      gsap.fromTo(bar, 
        { width: "0%" },
        {
          width: bar.dataset.width,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="skills" className="reveal-section" ref={container} style={{ marginTop: '80px' }}>
      <p className="prompt"><span className="user">user@siri:~$</span> run --skills --verbose --all</p>
      
      <div className="skill-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        
        {/* 1. Programming Languages */}
        <div className="skill-category">
          <h3 style={categoryTitleStyle}>[ Programming Languages ]</h3>
          <SkillBar name="Java" width="90%" />
          <SkillBar name="Python" width="85%" />
          <SkillBar name="JavaScript / TypeScript" width="80%" />
          <SkillBar name="SQL" width="75%" />
        </div>

        {/* 2. CS Fundamentals */}
        <div className="skill-category">
          <h3 style={categoryTitleStyle}>[ CS Fundamentals ]</h3>
          <SkillTags tags={["Data Structures & Algo", "OOPs", "System Design", "DBMS", "OS (Linux/Windows)"]} />
        </div>

        {/* 3. Backend & Frameworks */}
        <div className="skill-category">
          <h3 style={categoryTitleStyle}>[ Backend & Frameworks ]</h3>
          <SkillBar name="Spring Boot" width="85%" />
          <SkillBar name="FastAPI / Flask" width="80%" />
          <SkillBar name="REST APIs & JWT" width="90%" />
        </div>

        {/* 4. Databases */}
        <div className="skill-category">
          <h3 style={categoryTitleStyle}>[ Databases ]</h3>
          <SkillTags tags={["PostgreSQL", "MySQL", "MongoDB"]} color="#f778ba" />
        </div>

        {/* 5. DevOps & Cloud */}
        <div className="skill-category">
          <h3 style={categoryTitleStyle}>[ DevOps & Cloud ]</h3>
          <SkillTags tags={["Docker", "Kubernetes (Concepts)", "AWS", "GitHub Actions"]} color="#58a6ff" />
        </div>

        {/* 6. Tools & OS */}
        <div className="skill-category">
          <h3 style={categoryTitleStyle}>[ Tools & OS ]</h3>
          <SkillTags tags={["Git & GitHub", "Linux", "Postman", "VS Code"]} />
        </div>

        {/* 7. Deployment */}
        <div className="skill-category">
          <h3 style={categoryTitleStyle}>[ Deployment ]</h3>
          <SkillTags tags={["Vercel", "Cloudflare Pages"]} color="#2ea043" />
        </div>

        {/* 8. Testing */}
        <div className="skill-category">
          <h3 style={categoryTitleStyle}>[ Testing ]</h3>
          <SkillBar name="Java Automation (JUnit)" width="70%" />
        </div>

      </div>
    </section>
  );
};

// Styles & Components
const categoryTitleStyle = { color: '#f778ba', borderBottom: '1px dashed #333', paddingBottom: '10px', marginBottom: '15px' };

const SkillBar = ({ name, width }) => (
  <div style={{ marginBottom: '15px' }}>
    <span style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#c9d1d9' }}>{name}</span>
    <div style={{ height: '6px', background: '#21262d', borderRadius: '3px', overflow: 'hidden' }}>
      <div className="bar-fill" data-width={width} style={{ height: '100%', background: '#58a6ff', width: '0%' }}></div>
    </div>
  </div>
);

const SkillTags = ({ tags, color = '#2ea043' }) => (
  <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
    {tags.map(tag => (
      <span key={tag} style={{ 
        padding: '5px 10px', border: `1px solid #333`, 
        color: color, fontSize: '0.85rem', background: 'rgba(255,255,255,0.02)' 
      }}>
        {tag}
      </span>
    ))}
  </div>
);

export default Skills;