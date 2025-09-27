import React from 'react';
import './Workflow.css';

const workflowSteps = [
  {
    step: "1",
    title: "Plan & Design",
    description: "Map out features, define goals, and create wireframes to guide your product roadmap.",
  },
  {
    step: "2",
    title: "Code & Iterate",
    description: "Write code in your preferred stack. Get instant feedback and error checking with our smart CLI tools.",
  },
  {
    step: "3",
    title: "Review & Merge",
    description: "Submit your code for peer review with version-controlled pull requests and automated tests.",
  },
  {
    step: "4",
    title: "Deploy & Monitor",
    description: "Push your code to production confidently with zero-downtime deployments and performance monitoring.",
  },
  {
    step: "5",
    title: "Analyze & Improve",
    description: "Use built-in analytics and user feedback to make continuous product improvements.",
  },
];

const Workflow = () => {
  return (
    <div className="container workflow-section">
      <h2 className="workflow-title">
        Elevate Your <span className="gradient-text">Workflow</span>
      </h2>
      <p className="workflow-subtitle">
        Streamline your development process from idea to production.
      </p>
      <div className="workflow-items">
        {workflowSteps.map((item, index) => (
          <div key={index} className="workflow-item">
            <div className="step-number">{item.step}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
