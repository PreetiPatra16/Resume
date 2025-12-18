import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

import Education from './components/Education';
import Footer from './components/Footer';
import { resumeData } from './data/resumeData';

function App() {
  return (
    <div className="container">
      <Header data={resumeData.personalInfo} />
      <Skills data={resumeData.skills} />
      <Experience data={resumeData.experience} />
      <Projects data={resumeData.projects} />

      <Education education={resumeData.education} certifications={resumeData.certifications} />
      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '2px solid var(--accent-color)', display: 'inline-block' }}>Positions of Responsibility</h2>
        {resumeData.responsibilities.map((role, index) => (
          <div key={index} style={{ marginBottom: '1.5rem', background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{role.role}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <span>{role.organization}</span>
              <span>{role.duration}</span>
            </div>
            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
              {role.points.map((pt, i) => <li key={i} style={{ marginBottom: '0.25rem' }}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <Footer contact={resumeData.personalInfo} />
    </div>
  );
}

export default App;
