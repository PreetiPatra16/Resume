import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, delay = 0 }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            style={{ marginBottom: '3rem' }}
        >
            <h2 style={{
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
                borderBottom: '2px solid var(--accent-color)',
                paddingBottom: '0.5rem',
                display: 'inline-block'
            }}>
                {title}
            </h2>
            {children}
        </motion.section>
    );
};

export default Section;
