import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(container.current, 
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", scrollTrigger: { trigger: container.current, start: "top 80%" } }
    );
  }, { scope: container });

  return (
    <section id="skills" style={{ marginTop: '100px', marginBottom: '80px' }}>
      
      <div ref={container} style={{
        border: '2px solid #ffffff',
        background: '#000000',
        maxWidth: '100%',
        margin: '0 auto',
        boxShadow: '15px 15px 0px #222'
      }}>
        
        {/* Title Bar */}
        <div style={{
          background: '#ffffff',
          color: '#000000',
          padding: '8px 15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: "'Consolas', monospace",
          fontWeight: 'bold',
          borderBottom: '2px solid #ffffff'
        }}>
          <span>Command Prompt - skills_inventory.exe</span>
          <div style={{ display: 'flex', gap: '2px' }}>
            <ControlBtn>_</ControlBtn>
            <ControlBtn>□</ControlBtn>
            <ControlBtn>X</ControlBtn>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '25px', fontFamily: "'Consolas', monospace", fontSize: '0.95rem', lineHeight: '1.6' }}>
          
          <p style={{ marginBottom: '20px', color: '#ccc' }}>
            Microsoft Windows [Version 10.0.19045.3693]<br/>
            (c) Microsoft Corporation. All rights reserved.
          </p>
          
          <p style={{ marginBottom: '20px' }}>
            <span style={{ color: '#fff' }}>C:\Users\Siri\Skills{'>'}</span> list --all --grouped
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', borderLeft: '2px dotted #333', paddingLeft: '20px' }}>
            
            {/* Column 1 */}
            <div>
              <SkillGroup title="PROGRAMMING_LANGUAGES">
                + Java (Expert) <br/>
                + Python <br/>
                + SQL <br/>
                + JavaScript / TypeScript
              </SkillGroup>

              <SkillGroup title="BACKEND_FRAMEWORKS">
                + Spring Boot <br/>
                + FastAPI / Flask <br/>
                + REST APIs & JWT Auth <br/>
                + OAuth 2.0 Integration {/* New Skill */}
              </SkillGroup>

              <SkillGroup title="DATABASES">
                + PostgreSQL <br/>
                + MySQL <br/>
                + MongoDB
              </SkillGroup>
            </div>

            {/* Column 2 */}
            <div>
              <SkillGroup title="CS_FUNDAMENTALS">
                + Data Structures & Algorithms <br/>
                + Object-Oriented Programming <br/>
                + System Design <br/>
                + Operating Systems
              </SkillGroup>

              <SkillGroup title="DEVOPS_CLOUD">
                + Docker <br/>
                + Kubernetes (Concepts) <br/>
                + AWS <br/>
                + GitHub Actions
              </SkillGroup>

              <SkillGroup title="TOOLS_&_API_INTEGRATION">
                 + Git & GitHub <br/>
                 + 3rd Party APIs (Spotify/Pexels) {/* New Skill */} <br/>
                 + Postman / JUnit <br/>
                 + Vercel / Cloudflare Pages
              </SkillGroup>
            </div>

          </div>

          <p style={{ marginTop: '30px' }}>
            <span style={{ color: '#fff' }}>C:\Users\Siri\Skills{'>'}</span> <span className="blink">_</span>
          </p>

        </div>
      </div>

      <style>{`
        .blink { animation: blinker 1s linear infinite; font-weight: bold; color: #fff; }
        @keyframes blinker { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
};

const ControlBtn = ({ children }) => (
  <div style={{
    width: '25px', height: '25px',
    border: '1px solid #000',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer',
    background: '#ddd'
  }}>
    {children}
  </div>
);

const SkillGroup = ({ title, children }) => (
  <div style={{ marginBottom: '30px' }}>
    <div style={{ 
      color: '#fff', 
      marginBottom: '10px', 
      fontWeight: 'bold', 
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }}>
      [{title}]
    </div>
    <div style={{ color: '#aaa', paddingLeft: '15px', borderLeft: '1px solid #444' }}>
      {children}
    </div>
  </div>
);

export default Skills;