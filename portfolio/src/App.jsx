import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import TerminalHero from './components/TerminalHero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import './styles/Terminal.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  useEffect(() => {
    // Reveal Animation for Sections
    const sections = document.querySelectorAll(".reveal-section");
    sections.forEach(section => {
      gsap.fromTo(section, 
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 85%" }
        }
      );
    });
  }, []);

  return (
    <div className="app-container">
      {/* Navbar (Top Bar) */}
      <Navbar />
      
      <main className="terminal-container">
        {/* Hero Section (Typing Effect) */}
        <TerminalHero />

        {/* 1. OBJECTIVE SECTION */}
        <section id="objective" className="reveal-section" style={{ marginTop: '100px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> cat objective.txt</p>
          <div className="terminal-card" style={{ borderLeft: '4px solid #f778ba' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Backend-focused Software Engineer with strong fundamentals in <span className="highlight">Data Structures, Algorithms, OOD, and Databases</span>. 
              Experienced in building scalable backend systems, designing RESTful APIs, and delivering production-grade software.
            </p>
          </div>
        </section>

        {/* 2. EDUCATION SECTION */}
        <section id="education" className="reveal-section" style={{ marginTop: '60px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> head -n 5 education.log</p>
          <div style={{ paddingLeft: '20px', borderLeft: '1px solid #30363d' }}>
             <h3 style={{ color: '#fff' }}>B.Tech in Computer Science and Engineering</h3>
             <p style={{ color: '#8b949e', margin: '5px 0' }}>Malla Reddy College of Engineering | 2022 - 2026</p>
             <p style={{ marginTop: '10px', fontSize: '1.1rem' }}>
                Performance: <span style={{ color: '#0d1117', background: '#2ea043', fontWeight: 'bold', padding: '2px 8px', borderRadius: '4px' }}>CGPA: 9.00 / 10.0</span>
             </p>
          </div>
        </section>

        {/* 3. PROBLEM SOLVING (DSA) */}
        <section id="dsa" className="reveal-section" style={{ marginTop: '80px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> ./show_dsa_stats.sh</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {/* Concepts */}
            <div className="terminal-card">
               <h4 style={{ color: '#58a6ff', marginBottom: '10px' }}>// Core Concepts</h4>
               <ul style={{ listStyle: 'none', padding: 0, color: '#8b949e', lineHeight: '1.8' }}>
                 <li>✅ Arrays, Hashing, Recursion</li>
                 <li>✅ Stacks, Queues, Trees</li>
                 <li>✅ Time-Space Complexity</li>
               </ul>
            </div>
            {/* Platforms */}
            <div className="terminal-card">
               <h4 style={{ color: '#2ea043', marginBottom: '10px' }}>// Platforms</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                 <a href="https://leetcode.com/u/Vemula_Siri_Mahalaxmi/" target="_blank" className="hover-link" style={{ textDecoration: 'none', color: '#c9d1d9' }}>
                   <i className="fas fa-code"></i> LeetCode (Active)
                 </a>
                 <a href="#" className="hover-link" style={{ textDecoration: 'none', color: '#c9d1d9' }}>
                   <i className="fas fa-terminal"></i> CodeForces
                 </a>
               </div>
            </div>
          </div>
        </section>

        {/* 4. SKILLS SECTION */}
        <Skills />

        {/* 5. PROJECTS SECTION */}
        <section id="projects" className="reveal-section" style={{ marginTop: '100px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> ps -aux | grep "featured"</p>
          
          <ProjectCard 
            pid="1024"
            name="DataPulse_System"
            status="RUNNING"
            title="DataPulse: Real-Time Monitoring"
            desc="A scalable, event-driven backend system to detect schema drift and data anomalies."
            tech="Java, Python, FastAPI, Redis, Celery, PostgreSQL"
            linkCode="#"
          />

          <ProjectCard 
            pid="2048"
            name="Justice_Genie_AI"
            status="STABLE"
            title="Justice Genie: AI Legal Assistant"
            desc="Production-ready backend for a multilingual chatbot serving 50+ users. 52K+ requests handled."
            tech="Flask, MongoDB, React, NLP, Google Gemini API"
            linkCode="https://github.com/armycodes/Justice-Genie.git"
            linkDemo="https://justice-genie-mu.vercel.app/"
          />
        </section>

        {/* 6. CONTACT SECTION */}
        <Contact />

      </main>
    </div>
  );
}

export default App;