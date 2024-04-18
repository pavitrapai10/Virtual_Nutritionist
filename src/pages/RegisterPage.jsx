import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPages.css'; // Import the CSS file

function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form handling logic here
        console.log(`Registering: ${firstName} ${lastName}, Email: ${email}, Mobile: ${mobileNumber}, Password: ${password}`);

        // Once registration is complete, navigate to the login page
        navigate('/login');
    };

    return (
        <div className="form-container"> {/* Apply form-container class */}
            <h2 className="form-title">Register</h2> {/* Apply form-title class */}
            <form onSubmit={handleSubmit}>
                <div className="form-group"> {/* Apply form-group class to group the label and input */}
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder="Enter your first name"
                        title="Your first name"
                        autoComplete="given-name"
                        className="form-input" // Apply form-input class
                    />
                </div>
                <div className="form-group"> {/* Apply form-group class */}
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        placeholder="Enter your last name"
                        title="Your last name"
                        autoComplete="family-name"
                        className="form-input" // Apply form-input class
                    />
                </div>
                <div className="form-group"> {/* Apply form-group class */}
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email address"
                        title="Your email address"
                        autoComplete="email"
                        className="form-input" // Apply form-input class
                    />
                </div>
                <div className="form-group"> {/* Apply form-group class */}
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                        id="mobileNumber"
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                        placeholder="Enter your mobile number"
                        title="Your mobile number"
                        autoComplete="tel"
                        className="form-input" // Apply form-input class
                    />
                </div>
                <div className="form-group"> {/* Apply form-group class */}
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                        title="Your password"
                        autoComplete="new-password"
                        className="form-input" // Apply form-input class
                    />
                </div>
                <button type="submit" className="form-button">Register</button> {/* Apply form-button class */}
            </form>
        </div>
    );
}

export default RegisterPage;
