import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/SignUp.css';
const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isRegistrationSuccess, setRegistrationSuccess] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const navigate = useNavigate();
    const handleLogin= ()=>{
        navigate('/login')
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!emailPattern.test(formData.email)) {
            alert('Email is not valid');
            return;
        }

        if (!passwordPattern.test(formData.password)) {
            alert('Invalid password. Password must be at least 8 characters including uppercase, lowercase, numbers and special characters.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert('Confirmation password does not match. Please check again.');
            return;
        }
        axios.post('https://63aa9f0e7d7edb3ae62c5cea.mockapi.io/user', formData)
            .then((response) => {
                alert('Sign up success!');
                window.location.href = "/home";
                setRegistrationSuccess(true);
            })
            .catch((error) => {
                alert('Sign up fail!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="bg">
            {isRegistrationSuccess && (
                <p className="text">Sign up success!</p>
            )}
            <div className="main2" >
                <div className="content">
                    <div className="maintext">
                        <div className="text2">Register for a free account</div>
                        <div className="properties">
                            <div className="name">
                                <label className="a username" >Username</label>
                                <input className="input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your first name" />
                            </div>
                            <div className="mb-4 gmail">
                                <label className="a email">Your email</label>
                                <input className="input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your email address" />
                            </div>
                            <div className="mb-4 password">
                                <label className="a password">Password</label>
                                <input className="input"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your secure password" />
                            </div>
                            <div className="mb-4">
                                <label className="a confirmPassword">Confirm pass</label>
                                <input className="input"
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder='confirm password'
                                    required />
                            </div>
                            <div className="button">
                                <button className="bt" onClick={handleLogin}>
                                    Login
                                </button>
                                <button className="btn-signup" style={{ borderRadius: 4 }}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default SignUp;

