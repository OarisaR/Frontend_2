import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import GoogleAdsSteps from './GoogleAdsSteps';
import googleAdsIcon from './hero2.jpeg';

const GoogleAdsPage = () => {
    return (
        <div>
            <NavBar />
            <section style={styles.heroSection}>
                <div style={styles.heroText}>
                    <h1 style={styles.title}>Google Ads</h1>
                    <p style={styles.description}>
                        Maximize your online visibility and connect with the right audience at the right time. Our expert Google Ads management services ensure every dollar of your budget delivers measurable results.
                    </p>
                </div>
                <img src={googleAdsIcon} alt="Google Ads Icon" style={styles.heroImage} />
            </section>
            <h2 style={styles.subheading}>Our Proven Process For Google Ads Success</h2>
            <h2 style={styles.subheading}>Why Choose Us for Google Ads?</h2>
            <GoogleAdsSteps />
            <Footer />
        </div>
    );
};

const styles = {
    heroSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '50px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        margin: '20px auto',
        maxWidth: '800px',
    },
    heroText: {
        flex: 1,
        marginRight: '20px',
    },
    title: {
        fontSize: '2.5em',
        color: '#4B0082', // Dark purple
        marginBottom: '20px',
    },
    description: {
        fontSize: '1.1em',
        marginBottom: '30px',
        lineHeight: '1.5',
    },
    heroImage: {
        width: '200px', // Adjust as needed
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    },
    subheading: {
        textAlign: 'center',
        fontSize: '1.5em',
        color: '#4B0082', // Dark purple
        margin: '20px 0',
    },
};

export default GoogleAdsPage;
