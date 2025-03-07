import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        website: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            subject: '',
            website: '',
            description: '',
        });
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.row}>
                    <div style={styles.fieldContainer}>
                        <label style={styles.label}>Full name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.fieldContainer}>
                        <label style={styles.label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                </div>
                
                <div style={styles.row}>
                    <div style={styles.fieldContainer}>
                        <label style={styles.label}>Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.fieldContainer}>
                        <label style={styles.label}>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                </div>
                
                <label style={styles.label}>Website/Page link</label>
                <input
                    type="text"
                    name="website"
                    placeholder="Website/Page link"
                    value={formData.website}
                    onChange={handleChange}
                    style={styles.input}
                />
                
                <label style={styles.label}>Description</label>
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    style={styles.textarea}
                />
                
                <button type="submit" style={styles.button}>Claim Now</button>
            </form>
           
        </div>
    );
};

const styles = {
    container: {
        background: 'linear-gradient(135deg, #F7E6FF, #E0C3FC)',
        padding: '30px',
        width: '94%', 
        maxWidth: '700px', 
        margin: '0 auto',
        marginBottom: '50px',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '15px',
    },
    fieldContainer: {
        flex: '1', 
        marginRight: '35px', 
    },
    label: {
        margin: '10px 0 5px',
        color: '#4B0082',
        fontWeight: 'bold',
    },
    input: {
        padding: '10px',
        margin: '0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%', 
    },
    textarea: {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        minHeight: '100px',
    },
    button: {
        padding: '10px',
        background: '#4B0082', 
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily:'Poppins',
        fontWeight: 'bold',
    },
    link: {
        textAlign: 'center',
        display: 'block',
        marginTop: '20px',
        color: '#4B0082',
        textDecoration: 'none',
    },
};

export default Form;