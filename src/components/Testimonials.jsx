// src/components/Testimonials.jsx

import React from 'react';
import './Testimonials.css'; // Make sure to update your CSS file with the new styles

// Expanded and more detailed testimonial data
const testimonialsData = [
  {
    quote: "VirtualIR's tools have completely transformed our development workflow. The AI assistance is a game-changer, cutting our debug time in half!",
    name: "Alex Johnson",
    title: "Lead VR Developer",
    company: "Innovatech Solutions",
    avatar: "https://i.pravatar.cc/150?u=alexjohnson",
    rating: 5,
    logo: "https://via.placeholder.com/100x40/FFFFFF/000000?text=Innovatech"
  },
  {
    quote: "As a small studio, efficiency is key. The code merge and review features are incredibly intuitive and have saved us countless hours of work. We can now focus more on creativity.",
    name: "Samantha Lee",
    title: "Founder & Creative Director",
    company: "Pixel Perfect Studios",
    avatar: "https://i.pravatar.cc/150?u=samanthalee",
    rating: 5,
    logo: "https://via.placeholder.com/100x40/FFFFFF/000000?text=Pixel+Perfect"
  },
  {
    quote: "The analytics are surprisingly powerful. We're now making data-driven decisions to improve user experience in our VR apps. The insights have been invaluable for our product strategy. Highly recommended!",
    name: "David Chen",
    title: "Product Manager",
    company: "Reality Scape",
    avatar: "https://i.pravatar.cc/150?u=davidchen",
    rating: 5,
    logo: "https://via.placeholder.com/100x40/FFFFFF/000000?text=RealityScape"
  },
  {
    quote: "The deployment process used to be our biggest bottleneck. With VirtualIR's CI/CD integration, we're pushing updates with zero downtime and complete confidence.",
    name: "Maria Garcia",
    title: "DevOps Engineer",
    company: "QuantumLeap",
    avatar: "https://i.pravatar.cc/150?u=mariagarcia",
    rating: 4,
    logo: "https://via.placeholder.com/100x40/FFFFFF/000000?text=QuantumLeap"
  },
  {
    quote: "Collaboration has never been smoother. The real-time code review and feedback tools have drastically improved our team's synergy and code quality.",
    name: "Ben Carter",
    title: "Senior Software Engineer",
    company: "Code Weavers",
    avatar: "https://i.pravatar.cc/150?u=bencarter",
    rating: 5,
    logo: "https://via.placeholder.com/100x40/FFFFFF/000000?text=CodeWeavers"
  },
  {
    quote: "I was skeptical about the AI Assistant at first, but it has become an indispensable part of my toolkit. It suggests optimizations I would have never thought of.",
    name: "Emily White",
    title: "Freelance Developer",
    company: "E. White Creations",
    avatar: "https://i.pravatar.cc/150?u=emilywhite",
    rating: 5,
    logo: "https://via.placeholder.com/100x40/FFFFFF/000000?text=Creations"
  },
];

// A helper component to render the star ratings
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`star-icon ${i <= rating ? 'filled' : ''}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <div className="container testimonials-section">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Loved by <span className="gradient-text">Developers Worldwide</span>
          </h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it. Hear what our amazing users have to say about their experience with VirtualIR.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="card-content">
                <img src={testimonial.logo} alt={`${testimonial.company} logo`} className="company-logo" />
                <StarRating rating={testimonial.rating} />
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div className="user-info">
                <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                <div className="user-details">
                  <p className="user-name">{testimonial.name}</p>
                  <p className="user-title">{testimonial.title}, <span>{testimonial.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-footer">
          <h3>Join Thousands of Happy Developers</h3>
          <p>Start your 14-day free trial and experience the difference yourself.</p>
          <a href="/auth" className="btn btn-primary">Create Your Free Account</a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;