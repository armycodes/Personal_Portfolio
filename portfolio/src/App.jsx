import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import TerminalHero from './components/TerminalHero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import CommandBar from './components/CommandBar';
import './styles/Terminal.css'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  useEffect(() => {
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
      <Navbar />
      
      <main className="terminal-container" style={{ paddingBottom: '100px' }}>
        <TerminalHero />

        {/* OBJECTIVE SECTION */}
        <section id="objective" className="reveal-section" style={{ marginTop: '100px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> cat objective.txt</p>
          <div className="terminal-card" style={{ borderLeft: '4px solid #ffffff' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Backend-focused Software Engineer with strong fundamentals in <span className="highlight">Data Structures, Algorithms, OOD, and Databases</span>. 
              Experienced in building scalable backend systems, designing RESTful APIs, and delivering production-grade software.
            </p>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="reveal-section" style={{ marginTop: '60px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> head -n 5 education.log</p>
          <div style={{ paddingLeft: '20px', borderLeft: '1px solid #333' }}>
             <h3 style={{ color: '#fff' }}>B.Tech in Computer Science and Engineering</h3>
             <p style={{ color: '#888', margin: '5px 0' }}>Malla Reddy College of Engineering | 2022 - 2026</p>
             <p style={{ marginTop: '10px', fontSize: '1.1rem' }}>
                Performance: <span style={{ color: '#000000', background: '#ffffff', fontWeight: 'bold', padding: '2px 8px', borderRadius: '4px' }}>CGPA: 9.00 / 10.0</span>
             </p>
          </div>
        </section>

        {/* DSA SECTION */}
        <section id="dsa" className="reveal-section" style={{ marginTop: '80px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> ./show_dsa_stats.sh</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div className="terminal-card">
               <h4 style={{ color: '#ffffff', marginBottom: '15px', fontSize: '1.1rem' }}>// Core Concepts</h4>
               <ul style={{ listStyle: 'none', padding: 0, color: '#aaa', lineHeight: '1.8' }}>
                 <li><i className="fas fa-check" style={{ color: '#fff', marginRight: '8px' }}></i> Arrays, Hashing, Recursion</li>
                 <li><i className="fas fa-check" style={{ color: '#fff', marginRight: '8px' }}></i> Stacks, Queues, Trees</li>
                 <li><i className="fas fa-check" style={{ color: '#fff', marginRight: '8px' }}></i> Time-Space Complexity</li>
               </ul>
            </div>
            <div className="terminal-card">
               <h4 style={{ color: '#ffffff', marginBottom: '15px', fontSize: '1.1rem' }}>// Platforms</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                 <a href="https://leetcode.com/u/Vemula_Siri_Mahalaxmi/" target="_blank" className="hover-link" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <i className="fas fa-code" style={{ color: '#fff' }}></i> LeetCode (Active)
                 </a>
                 <a href="#" className="hover-link" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <i className="fas fa-terminal" style={{ color: '#fff' }}></i> CodeForces
                 </a>
               </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <Skills />

        {/* PROJECTS SECTION */}
        <section id="projects" className="reveal-section" style={{ marginTop: '100px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> ps -aux | grep "featured"</p>
          
          {/* --- NEW ECHOA PROJECT ADDED HERE --- */}
          <ProjectCard 
            pid="4096"
            name="Echoa"
            status="ALPHA"
            title="Echoa – Cinematic Music Experience"
            desc="A design-first web application that reimagines the music listening experience. By integrating Spotify, Gemini AI, and Pexels, Echoa acts as a living canvas, analyzing the emotional heartbeat of your current track—lyrics, tempo, and mood—to instantly render a synchronized, cinematic video atmosphere. It bridges the gap between sound and sight, turning a static playlist into an immersive visual void."
            tech="React (Vite), Spotify API, Google Gemini AI, Pexels API, Framer Motion."
            linkDemo="https://echoa-v1.pages.dev"
            linkCode="https://github.com/armycodes/Echoa_V1.git"
          />

          <ProjectCard 
            pid="1024"
            name="DataPulse_System"
            status="STABLE"
            title="DataPulse: Real-Time Monitoring"
            desc="A scalable, event-driven backend system to detect schema drift and data anomalies."
            tech="Java, Python, FastAPI, Redis, Celery, PostgreSQL"
            linkDemo="https://data-pulse-eight.vercel.app/"
            linkCode="https://github.com/armycodes/DataPulse.git"
            
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

        <Contact />

      </main>

      <CommandBar />

    </div>
  );
}

export default App;