import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import TerminalHero from './components/TerminalHero';
import Skills from './components/Skills';
import DSAStats from './components/DSAStats';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import CommandBar from './components/CommandBar';
import './styles/Terminal.css'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  useEffect(() => {
    // Reveal Animation for Sections (except DSA which has its own)
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

        {/* 1. OBJECTIVE SECTION */}
        <section id="objective" className="reveal-section" style={{ marginTop: '100px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> cat objective.txt</p>
          <div className="terminal-card" style={{ borderLeft: '4px solid #ffffff' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Backend-focused Software Engineer with strong fundamentals in <span className="highlight">Data Structures, Algorithms, OOD, and Databases</span>. 
              Experienced in building scalable backend systems, designing RESTful APIs, and delivering production-grade software.
            </p>
          </div>
        </section>

        {/* 2. EDUCATION SECTION */}
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

        {/* 3. DSA SECTION (Live Stats) */}
        <DSAStats />

        {/* 4. SKILLS SECTION */}
        <Skills />

        {/* 5. PROJECTS SECTION */}
        <section id="projects" className="reveal-section" style={{ marginTop: '100px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> ps -aux | grep "featured"</p>
          
          {/* Echoa Project */}
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

          {/* DataPulse Project */}
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

          {/* Justice Genie Project */}
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

      {/* FIXED COMMAND BAR */}
      <CommandBar />

    </div>
  );
}

export default App;