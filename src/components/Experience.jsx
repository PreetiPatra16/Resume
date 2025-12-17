import React from 'react';
import Section from './Section';
import { Calendar, MapPin } from 'lucide-react';

const Experience = ({ data }) => {
    return (
        <Section title="Internship Experience" delay={0.3}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {data.map((job, index) => (
                    <div
                        key={index}
                        style={{
                            background: 'var(--card-bg)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            borderLeft: '4px solid var(--accent-color)',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{job.company}</h3>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                <Calendar size={14} /> {job.duration}
                            </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--secondary-accent)' }}>
                            <span style={{ fontWeight: '500' }}>{job.role}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                <MapPin size={14} /> {job.location}
                            </span>
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            {job.points.map((pt, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem' }}>{pt}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
