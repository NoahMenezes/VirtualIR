import React from 'react';
import './features.css';

const Features = () => {
  const featuresData = [
    {
      title: "Smart Scheduling",
      description: "Easily coordinate meetings with automated time slot suggestions and real-time availability tracking.",
    },
    {
      title: "AI-Powered Analytics",
      description: "Get deep insights into your virtual meetings using intelligent analysis of participation, sentiment, and feedback.",
    },
    {
      title: "Secure File Sharing",
      description: "Share sensitive documents with end-to-end encryption and permission-based access control.",
    },
    {
      title: "Team Collaboration",
      description: "Create channels, assign tasks, and keep track of project milestones within one seamless interface.",
    },
  ];

  return (
    <div className="features-section container">
      <h2 className="features-title">Powerful Features Built for Virtual IR</h2>
      <p className="features-subtitle">Everything you need to make investor relations seamless and effective.</p>

      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
