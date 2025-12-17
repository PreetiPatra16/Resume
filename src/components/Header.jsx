import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Code } from 'lucide-react';

const Header = ({ data }) => {
    return (
        <header style={{
            textAlign: 'center',
            padding: '4rem 0',
            marginBottom: '2rem'
        }}>
            <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    background: 'linear-gradient(to right, #fff, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}
            >
                {data.name}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}
            >
                {data.role}
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    color: 'var(--text-secondary)'
                }}
            >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={18} /> {data.location}
                </span>
                <a href={`mailto:${data.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Mail size={18} /> {data.email}
                </a>
                <a href={`tel:${data.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={18} /> {data.phone}
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{ marginTop: '2rem' }}
            >
                <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'var(--accent-color)',
                        color: 'white',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px var(--accent-glow)',
                        marginRight: '1rem'
                    }}
                >
                    <Linkedin size={20} /> Contact me on LinkedIn
                </a>

                {/* Optional Leetcode if link exists, otherwise text */}
                {/* data.leetcode && <a href={data.leetcode} ... /> */}
            </motion.div>
        </header>
    );
};

export default Header;
