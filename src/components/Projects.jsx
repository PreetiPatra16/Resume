import React from 'react';
import Section from './Section';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ data }) => {
    return (
        <Section title="Projects" delay={0.4}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {data.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            background: 'var(--card-bg)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{project.year}</span>
                        </div>

                        <p style={{ color: 'var(--secondary-accent)', fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                            {project.tech}
                        </p>

                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            {project.points.map((pt, i) => <li key={i} style={{ marginBottom: '0.25rem' }}>{pt}</li>)}
                        </ul>

                        {/* Placeholders for links if they existed */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {/* <a href="#" style={{ display: 'flex', gap: '5px', fontSize: '0.9rem' }}><Github size={16}/> Code</a> */}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
