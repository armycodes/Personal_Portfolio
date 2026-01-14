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
  
  // Fade In Animations for Sections
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    sections.forEach(section => {
      gsap.fromTo(section, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          }
        }
      );
    });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="terminal-container">
        <TerminalHero />

        {/* About Section */}
        <section id="about" className="reveal-section" style={{ marginTop: '100px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> cat about_me.txt</p>
          <div style={{ paddingLeft: '20px', borderLeft: '2px solid #30363d', color: '#c9d1d9' }}>
            <p style={{ marginBottom: '10px' }}>{'>'} Backend-Focused Software Engineer with strong fundamentals in <span className="highlight">Data Structures & Algorithms</span>.</p>
            <p style={{ marginBottom: '10px' }}>{'>'} Education: <strong>B.Tech CSE @ Malla Reddy College</strong> (CGPA: 9.00/10) [2022-2026]</p>
            <p>{'>'} Philosophy: "Build scalable, reliable, and clean systems."</p>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <section id="projects" className="reveal-section" style={{ marginTop: '100px' }}>
          <p className="prompt"><span className="user">user@siri:~$</span> ps -aux | grep "featured"</p>
          
          <ProjectCard 
            pid="1024"
            name="DataPulse_System"
            status="RUNNING"
            title="DataPulse: Real-Time Monitoring"
            desc="A scalable, event-driven backend system to detect schema drift and data anomalies. Implemented async task processing for high-frequency monitoring jobs."
            tech="Java, Python, FastAPI, Redis, Celery, PostgreSQL"
            linkCode="#"
            linkDemo="#"
          />

          <ProjectCard 
            pid="2048"
            name="Justice_Genie_AI"
            status="STABLE"
            title="Justice Genie: AI Legal Assistant"
            desc="Production-ready backend for a multilingual chatbot serving 50+ users. Handled 52K+ requests with zero failures and 8ms latency."
            tech="Flask, MongoDB, React, NLP, Google Gemini API"
            linkCode="https://github.com/armycodes/Justice-Genie.git"
            linkDemo="https://justice-genie-mu.vercel.app/"
          />

          <ProjectCard 
             pid="4096"
             name="Task_Manager"
             status="SLEEPING"
             title="Task Management App"
             desc="React-based task manager with Drag-and-Drop functionality and real-time updates."
             tech="React, LocalStorage, DnD Kit"
             linkCode="https://github.com/armycodes/task-manager"
          />
        </section>

        {/* Contact Section */}
        <Contact />

      </main>
    </div>
  );
}

export default App;