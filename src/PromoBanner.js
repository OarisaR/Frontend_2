import React from 'react';

const PromoBanner = () => {
    return (
        <div style={styles.banner}>
            <h1 style={styles.mainText}>Get a Free Session For FREE</h1>
            <p style={styles.subText}>Only for limited time</p>
        </div>
    );
};

const styles = {
    banner: {
        
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px',
       
    },
    mainText: {
        color: '#330B51',
        fontSize: '2.5em',
        fontWeight: 'bold',
        margin: '0',
    },
    subText: {
        color: '#5F1D91',
        fontSize: '1.2em',
        fontWeight: 'normal',
        margin: '10px 0 0',
    },
};

export default PromoBanner;
