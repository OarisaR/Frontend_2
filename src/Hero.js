import React from 'react';
import heroImage from './hero.jpg';

const Hero = () => {
    return (
        <section style={{ display: 'flex', alignItems: 'center', padding: '15px 70px', marginLeft:'24px',background: '#fff', textAlign: 'left' }}>
            <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#330B51', margin: '0 0 20px' }}>
                    Social media marketing
                </h1>
                <p style={{ fontFamily:'Inter',fontSize: '1.2em', lineHeight: '51.17px', color: '#330B51', margin: '0 0 30px' }}>
                    With our unique blend of creativity, strategy, and dedication, we make your brand stand out in a crowded online space. Whether you're looking to boost brand awareness or generate leads, we're here to make it happen.
                </p>
                
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <img src={heroImage} alt="Social Media" style={{ width: '80%', borderRadius: '10px' }} />
            </div>
        </section>
    );
};

export default Hero;
