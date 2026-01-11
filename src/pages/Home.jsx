import React from 'react'
import hospital from '../images/hospital.png'
import './Home.css'  

export default function Home() {
  return (
    <div className="home-container">
        
        <div className="home-text">
            <h1>Welcome to Apna Hospital</h1>
            <p>Your trusted healthcare partner providing quality treatment.</p>
            <p>We care for your health and well-being every day.</p>
            <p>24/7 Emergency Services Available.</p>

            {/* Additional Info */}
            <div className="home-info">
                <p><strong>Address:</strong> 123 Hospital Road, Indore, Madhya Pradesh</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Email:</strong> support@apnahospital.com</p>
                <p><strong>Specialties:</strong> Cardiology • Neurology • Dental • Gynecology • Pediatrics</p>
            </div>
        </div>

        <div className="home-image-wrapper">
            <img src={hospital} alt="" />
        </div>

    </div>
  )
}
