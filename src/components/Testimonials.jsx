// src/components/Testimonials.jsx

import React from 'react';
import './Testimonials.css'; // Import the new styles

// Sample data for the testimonials
const testimonialsData = [
  {
    quote: "VirtualIR's tools have completely transformed our development workflow. The AI assistance is a game-changer, cutting our debug time in half!",
    name: "Alex Johnson",
    title: "Lead VR Developer, Innovatech",
    avatar: "https://placehold.co/48x48/262626/FFFFFF?text=AJ"
  },
  {
    quote: "As a small studio, efficiency is key. The code merge and review features are incredibly intuitive and have saved us countless hours.",
    name: "Samantha Lee",
    title: "Founder, Pixel Perfect Studios",
    avatar: "https://placehold.co/48x48/262626/FFFFFF?text=SL"
  },
  {
    quote: "The analytics are surprisingly powerful. We're now making data-driven decisions to improve user experience in our VR apps. Highly recommended!",
    name: "David Chen",
    title: "Product Manager, Reality Scape",
    avatar: "https://placehold.co/48x48/262626/FFFFFF?text=DC"
  },
];

const Testimonials = () => {
  return (
    <div className="container testimonials-section">
      <h2 className="hero-title">
        Loved by <span className="gradient-text">Developers Worldwide</span>
      </h2>
      <p className="hero-subtitle">
        Hear what our amazing users have to say about their experience with VirtualIR.
      </p>

      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="user-info">
              <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
              <div className="user-details">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;