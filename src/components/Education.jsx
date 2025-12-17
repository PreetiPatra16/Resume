import React from 'react';
import Section from './Section';

const Education = ({ education, certifications }) => {
    return (
        <Section title="Education & Certifications" delay={0.5}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                {/* Education Block */}
                <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Education</h3>
                    {education.map((edu, idx) => (
                        <div key={idx} style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{edu.institution}</h4>
                                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>{edu.duration}</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{edu.degree}</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: 'var(--secondary-accent)' }}>Relevant Coursework:</span> {edu.coursework}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Certifications Block */}
                <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Certifications</h3>
                    <ul style={{ listStyle: 'none' }}>
                        {certifications.map((cert, idx) => (
                            <li key={idx} style={{
                                marginBottom: '0.8rem',
                                position: 'relative',
                                paddingLeft: '1.5rem',
                                color: 'var(--text-secondary)'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '8px',
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: 'var(--secondary-accent)'
                                }}></span>
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </Section>
    );
};

export default Education;
