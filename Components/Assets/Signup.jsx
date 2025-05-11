import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post('http://localhost:5000/api/auth/login', form);

        if (res && res.data) {
            alert('Login successful! Token: ' + res.data.token);
        } else {
            alert('Unexpected response format.');
        }

    } catch (err) {
        // Defensive error message
        if (err.response && err.response.data) {
            alert('Error: ' + err.response.data);
        } else {
            console.error(err); // Log full error for debugging
            alert('Network or server error.');
        }
    }
};



    return (
        <div className="container mt-5">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-control mb-2" name="username" placeholder="Username" onChange={handleChange} />
                <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" className="form-control mb-2" name="password" placeholder="Password" onChange={handleChange} />
                <button className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
