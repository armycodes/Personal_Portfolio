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
            start: "top 85%", // Screen loki ragane start avthundi
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="skills" className="reveal-section" ref={container} style={{ marginTop: '80px' }}>
      <p className="prompt"><span className="user">user@siri:~$</span> run --skills --verbose</p>
      
      <div className="skill-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        
        {/* Languages */}
        <div className="skill-category">
          <h3 style={{ color: '#f778ba', borderBottom: '1px dashed #333', paddingBottom: '10px' }}>[ Languages ]</h3>
          <SkillBar name="Java (Core/Adv)" width="90%" />
          <SkillBar name="Python" width="85%" />
          <SkillBar name="SQL / NoSQL" width="80%" />
        </div>

        {/* Frameworks */}
        <div className="skill-category">
          <h3 style={{ color: '#f778ba', borderBottom: '1px dashed #333', paddingBottom: '10px' }}>[ Frameworks ]</h3>
          <SkillBar name="Spring Boot" width="85%" />
          <SkillBar name="FastAPI / Flask" width="80%" />
          <SkillBar name="React.js" width="70%" />
        </div>

        {/* Tools */}
        <div className="skill-category">
          <h3 style={{ color: '#f778ba', borderBottom: '1px dashed #333', paddingBottom: '10px' }}>[ Tools & Infra ]</h3>
          <div className="tags" style={{ marginTop: '15px' }}>
            {["Docker", "AWS", "Redis", "PostgreSQL", "Git", "Linux", "Postman"].map(tool => (
              <span key={tool} style={{ 
                display: 'inline-block', padding: '5px 10px', 
                border: '1px solid #333', marginRight: '10px', 
                marginBottom: '10px', color: '#2ea043' 
              }}>
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const SkillBar = ({ name, width }) => (
  <div style={{ marginBottom: '15px', marginTop: '15px' }}>
    <span style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>{name}</span>
    <div style={{ height: '8px', background: '#21262d', borderRadius: '4px', overflow: 'hidden' }}>
      <div className="bar-fill" data-width={width} style={{ height: '100%', background: '#58a6ff', width: '0%' }}></div>
    </div>
  </div>
);

export default Skills;