// src/components/Workflow.jsx

import React from 'react';
import './Workflow.css'; // Make sure to create and link this CSS file

// Expanded and more detailed workflow steps
const workflowSteps = [
  {
    icon: " M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.773 4.773zM21 12a9 9 0 11-18 0 9 9 0 0118 0z", // Search Icon
    title: "1. Discovery & Planning",
    description: "Every great project begins with a solid plan. We collaborate with you to define project goals, identify key features, and map out the user journey. This phase ensures we're all aligned before writing a single line of code.",
    details: [
      "Requirement Analysis",
      "Feature Prioritization",
      "Technical Specification Document",
    ],
  },
  {
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10", // Edit/Design Icon
    title: "2. UI/UX Design & Prototyping",
    description: "With a clear plan, our design team creates intuitive and visually stunning interfaces. We build interactive prototypes that allow you to experience the look and feel of the application before development starts.",
    details: [
        "Wireframing & Mockups",
        "Interactive Prototypes",
        "User Feedback & Revisions",
    ],
  },
  {
    icon: "M17.25 6.75c0 3.28-2.69 5.94-6 5.94s-6-2.66-6-5.94C5.25 3.47 7.94.81 11.25.81s6 2.66 6 5.94zM11.25 12.75c-6.14 0-11.25 4.03-11.25 9 .01 1.65 1.35 3 3 3h16.5c1.65 0 2.99-1.35 3-3 0-4.97-5.11-9-11.25-9z", // Code Icon
    title: "3. Agile Development",
    description: "We break down the project into manageable sprints, developing and delivering features iteratively. This agile approach allows for flexibility, transparency, and continuous feedback throughout the coding process.",
    details: [
        "Frontend & Backend Development",
        "API Integration",
        "Regular Sprint Demos",
    ],
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", // Check/Quality Icon
    title: "4. Quality Assurance",
    description: "Quality is not an afterthought. Our dedicated QA team performs rigorous testing—including automated, manual, and performance tests—to ensure your application is stable, secure, and bug-free before it reaches your users.",
    details: [
        "Automated & Manual Testing",
        "Security Audits",
        "Performance Benchmarking",
    ],
  },
  {
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.18a14.98 14.98 0 00-7.5 12.12 14.98 14.98 0 006.16 12.12m3.87-5.71a6 6 0 01-5.84-7.38v4.8m5.84 2.58a6 6 0 01-5.84 7.38z", // Deploy Icon
    title: "5. Deployment & Launch",
    description: "We handle the entire deployment process, ensuring a smooth and seamless launch. Our CI/CD pipelines automate the release cycle, allowing for zero-downtime deployments and consistent delivery.",
    details: [
        "CI/CD Pipeline Setup",
        "Cloud Infrastructure Management",
        "Go-Live Support",
    ],
  },
  {
    icon: "M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197", // Maintenance Icon
    title: "6. Monitoring & Maintenance",
    description: "Our job isn't over after launch. We provide ongoing support, monitor application performance, and use analytics to gather insights for future improvements, ensuring your product evolves with your users' needs.",
    details: [
        "24/7 Performance Monitoring",
        "Regular Updates & Patches",
        "Data-Driven Improvement Cycles",
    ],
  },
];

const Workflow = () => {
  return (
    <div className="workflow-section-wrapper">
      <div className="container workflow-section">
        <div className="workflow-header">
          <h2 className="workflow-main-title">
            From <span className="gradient-text">Concept to Reality</span>
          </h2>
          <p className="workflow-main-subtitle">
            Our structured and transparent workflow is designed to deliver high-quality results efficiently. We turn complex ideas into robust, scalable, and user-friendly applications through a proven, step-by-step process.
          </p>
        </div>

        <div className="workflow-grid">
          {workflowSteps.map((item, index) => (
            <div key={index} className="workflow-card">
              <div className="workflow-card-header">
                <div className="workflow-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                </div>
                <h3 className="workflow-card-title">{item.title}</h3>
              </div>
              <p className="workflow-card-description">{item.description}</p>
              <ul className="workflow-card-details">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="workflow-footer">
            <h3>Ready to build something amazing?</h3>
            <p>Let our streamlined workflow bring your vision to life.</p>
            <a href="#contact" className="btn btn-primary">Start Your Project</a>
        </div>
      </div>
    </div>
  );
};

export default Workflow;