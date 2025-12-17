import React from 'react';

const Footer = ({ contact }) => {
    return (
        <footer style={{
            marginTop: '4rem',
            textAlign: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            color: 'var(--text-secondary)',
            paddingBottom: '2rem'
        }}>
            <p style={{ marginBottom: '1rem' }}>&copy; {new Date().getFullYear()} {contact.name}. All rights reserved.</p>

            <p>
                Built with React & Vite
            </p>

            {/* Redundant button at bottom for easy access */}
            <div style={{ marginTop: '1.5rem' }}>
                <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: 'var(--accent-color)',
                        border: '1px solid var(--accent-color)',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                        fontSize: '0.9rem'
                    }}
                >
                    View LinkedIn Profile
                </a>
            </div>
        </footer>
    );
};

export default Footer;
