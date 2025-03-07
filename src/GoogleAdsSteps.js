import React from 'react';
import { FaUser, FaHandHoldingHeart, FaBell } from 'react-icons/fa'; // Importing icons from react-icons

const GoogleAdsSteps = () => {
    return (
        <div style={styles.container}>
            <div style={styles.step}>
                <FaUser style={styles.icon} />
                <h3 style={styles.title}>Step 1: Understanding Your Business Needs</h3>
                <p style={styles.description}>
                    We start by conducting a thorough analysis of your business and target audience.
                </p>
            </div>
            <div style={styles.step}>
                <FaHandHoldingHeart style={styles.icon} />
                <h3 style={styles.title}>Step 2: Crafting Targeted Ad Campaigns</h3>
                <p style={styles.description}>
                    Our team creates tailored ad campaigns that resonate with your audience.
                </p>
            </div>
            <div style={styles.step}>
                <FaBell style={styles.icon} />
                <h3 style={styles.title}>Step 3: Monitoring and Optimising Performance</h3>
                <p style={styles.description}>
                    We continuously track performance metrics to optimize your campaigns for better results.
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '50px 20px',
        backgroundColor: '#4B0082', // Dark purple background
        color: 'white',
        borderRadius: '10px',
        margin: '20px auto',
        maxWidth: '800px',
    },
    step: {
        textAlign: 'center',
        flex: 1,
        margin: '0 10px',
    },
    icon: {
        fontSize: '3em',
        marginBottom: '10px',
    },
    title: {
        fontSize: '1.5em',
        margin: '10px 0',
    },
    description: {
        fontSize: '1em',
        lineHeight: '1.5',
    },
};

export default GoogleAdsSteps;