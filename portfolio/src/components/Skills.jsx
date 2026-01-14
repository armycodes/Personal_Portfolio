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
          scrollTrigger: { trigger: bar, start: "top 90%" }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="skills" className="reveal-section" ref={container} style={{ marginTop: '80px' }}>
      <p className="prompt"><span className="user">user@siri:~$</span> cat technical_skills.json</p>
      
      <div className="skill-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        <SkillCategory title="Programming Languages">
          <SkillBar name="Java (Expert)" width="95%" />
          <SkillBar name="Python" width="90%" />
          <SkillBar name="SQL" width="85%" />
          <SkillBar name="JavaScript / TypeScript" width="80%" />
        </SkillCategory>

        <SkillCategory title="CS Fundamentals">
          <SkillTags tags={["Data Structures & Algo", "OOP", "System Design", "DBMS", "OS"]} />
        </SkillCategory>

        <SkillCategory title="Backend & Frameworks">
          <SkillBar name="Spring Boot" width="90%" />
          <SkillBar name="FastAPI / Flask" width="85%" />
          <SkillBar name="REST APIs & JWT" width="90%" />
        </SkillCategory>

        <SkillCategory title="Databases">
          <SkillTags tags={["PostgreSQL", "MySQL", "MongoDB"]} />
        </SkillCategory>

        <SkillCategory title="DevOps & Cloud">
          <SkillTags tags={["Docker", "Kubernetes", "AWS", "GitHub Actions"]} />
        </SkillCategory>

        <SkillCategory title="Tools & OS">
          <SkillTags tags={["Git & GitHub", "Linux", "Postman", "VS Code"]} />
        </SkillCategory>

      </div>
    </section>
  );
};

// Components without any colors
const SkillCategory = ({ title, children }) => (
  <div className="terminal-card">
    <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '1.1rem', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
      {title}
    </h3>
    {children}
  </div>
);

const SkillBar = ({ name, width }) => (
  <div style={{ marginBottom: '15px' }}>
    <span style={{ fontSize: '0.9rem', color: '#ccc', display: 'block', marginBottom: '5px' }}>{name}</span>
    <div style={{ height: '4px', background: '#222', borderRadius: '2px', overflow: 'hidden' }}>
      <div className="bar-fill" data-width={width} style={{ height: '100%', background: '#ffffff', width: '0%' }}></div>
    </div>
  </div>
);

const SkillTags = ({ tags }) => (
  <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
    {tags.map(tag => (
      <span key={tag} style={{ 
        padding: '6px 12px', border: `1px solid #333`, borderRadius: '4px',
        color: '#aaa', fontSize: '0.85rem', background: 'transparent' 
      }}>
        {tag}
      </span>
    ))}
  </div>
);

export default Skills;