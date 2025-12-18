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


        </footer>
    );
};

export default Footer;
