import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Your personalized Nutrition Coach</h1>
            <h2>Fitness starts with what you eat!</h2>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
            <section>
                <h2>About Us</h2>
                <p><h2>Welcome to NutriWise, your personal guide to optimal 
                health and wellness! Our team of expert nutritionists
                and dietitians is dedicated to providing personalized
                nutrition plans. Whether you're looking to lose weight,
                gain muscle, or simply maintain a balanced lifestyle,
                we're here to support you every step of the way.</h2> </p>

                <p><h2>At NutriWise, we believe that healthy living starts 
                    with the right knowledge and support. That's why we offer 
                    a variety of resources, including recipes, meal plans, and 
                    nutritional tips, to empower you on your journey to better 
                    health. Our easy-to-use app makes it simple to track your
                     progress, set goals, and access expert guidance whenever you need it.</h2></p>

                <p><h3>Join our community today and discover the path to a healthier, 
                    happier you with NutriWise! Let's take the first step together towards
                     achieving your wellness goals.</h3></p>



            </section>
            <section>
                <h2>Contact Us</h2>
                <p>Email: support@nutriwise.com</p>
                <p>Phone: 123-456-7890</p>
            </section>
        </div>
    );
}

export default HomePage;
