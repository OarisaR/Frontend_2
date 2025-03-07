import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.subscriptionSection}>
                <label htmlFor="email" style={styles.label}>Get Updates</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    style={styles.input}
                />
                <button style={styles.subscribeButton}>Subscribe</button>
            </div>
            <div style={styles.brandNavContainer}>
                <h1 style={styles.brandMessage}>LET YOUR BRAND <br />SHINE ONLINE</h1>
                <nav style={styles.nav}>
                    <a href="#" style={styles.navLink}>Home</a>
                    <a href="#" style={styles.navLink}>Team</a>
                    <a href="#" style={styles.navLink}>Projects</a>
                    <a href="#" style={styles.navLink}>Contact</a>
                </nav>
            </div>
            <div style={styles.socialMedia}>
                <span style={styles.getInTouch}>Get in touch:</span>
                <div style={styles.icons}>
                    <FaFacebook style={styles.icon} />
                    <FaLinkedin style={styles.icon} />
                    <FaInstagram style={styles.icon} />
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#4B0082', 
        color: '#ff69b4', 
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    subscriptionSection: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '10px',
        fontSize: '1em',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        marginRight: '10px',
        width: '180px',
    },
    subscribeButton: {
        padding: '10px 15px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    brandNavContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0', 
    },
    brandMessage: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: 'white',
        margin: '0 20px 0 0', 
    },
    nav: {
        display: 'flex', 
        margin: '0', 
    },
    navLink: {
        margin: '0 50px', 
        
        color: 'white',
        textDecoration: 'none',
        fontSize: '0.9em',
    },
    socialMedia: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    getInTouch: {
        marginBottom: '10px',
    },
    icons: {
        display: 'flex',
        gap: '15px',
    },
    icon: {
        fontSize: '1.6em',
        color: 'white', 
    },
};

export default Footer;