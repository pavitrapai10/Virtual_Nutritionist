import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your stylesheet

function HomePage() {
    return (
        <div>
            {/* Header Section */}
            <header>
                <h1>HealthyBite</h1>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Sign Up</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main>
                <h2>Fitness Starts with What You Eat!</h2>
                <section>
                    <h3>About Us</h3>
                    <p>Welcome to HealthyBite, your personal guide to optimal health and wellness! Our team of expert nutritionists and dietitians is dedicated to providing personalized nutrition plans. Whether you're looking to lose weight, gain muscle, or simply maintain a balanced lifestyle, we're here to support you every step of the way.</p>
                    <p>At HealthyBite, we believe that healthy living starts with the right knowledge and support. That's why we offer a variety of resources, including recipes, meal plans, and nutritional tips, to empower you on your journey to better health. Our easy-to-use app makes it simple to track your progress, set goals, and access expert guidance whenever you need it.</p>
                    <p>Join our community today and discover the path to a healthier, happier you with NutriWise! Let's take the first step together towards achieving your wellness goals.</p>
                </section>
                <section>
                    <h3>Contact Us</h3>
                    <p>Email: support@healthybite.com</p>
                    <p>Phone: 123-456-7890</p>
                </section>
            </main>

            {/* Footer Section */}
            <footer>
                <p>&copy; {new Date().getFullYear()} HealthyBite. All rights reserved.</p>
                <nav>
                    <ul className="footer-links">
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service">Terms of Service</Link></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}

export default HomePage;
