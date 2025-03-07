import React from 'react';
import logo from './logo.jpeg';

const NavBar = () => {
    return (
        <header style={{ background: '#f8f8f8', padding: '15px 70px', margin: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.5em', color: '#4B0082' }}>
                <img src={logo} alt="NexGenix Logo" style={{ height: '60px', marginRight: '10px' }} />
                
            </div>
            <nav style={{ display: 'flex', alignItems: 'center' }}>
                <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0, fontFamily: 'Inter' }}>
                    <li style={{ margin: '0 20px', color: '#4B0082', }}><a href="#" style={{ textDecoration: 'none', color: '#4B0082' }}>Home</a></li>
                    <li style={{ margin: '0 20px', color: '#4B0082',}}><a href="#" style={{ textDecoration: 'none', color: '#4B0082' }}>About us</a></li>
                    <li style={{ margin: '0 20px', color: '#4B0082',}}><a href="#" style={{ textDecoration: 'none', color: '#4B0082' }}>Our services</a></li>
                    <li style={{ margin: '0 20px', color: '#4B0082',  }}><a href="#" style={{ textDecoration: 'none', color: '#4B0082' }}>Our works</a></li>
                </ul>
                <button style={{ background: 'transparent', border: '2px solid #ff69b4', color: '#4B0082', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginLeft: '20px' }}>
                    Contact Us
                </button>
            </nav>
        </header>
    );
};

export default NavBar;