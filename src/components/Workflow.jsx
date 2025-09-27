import React from 'react';
import './Workflow.css';

const workflowSteps = [
  {
    step: "1",
    title: "Code & Iterate",
    description: "Write your code in your preferred environment. Our CLI tool provides instant feedback and error checking.",
  },
  {
    step: "2",
    title: "Review & Merge",
    description: "Submit your code for review. Our platform provides a clear, version-controlled history of all changes.",
  },
  {
    step: "3",
    title: "Deploy & Monitor",
    description: "Deploy your application to any environment with a single command. Monitor performance with our built-in analytics.",
  },
];

const Workflow = () => {
  return (
    <div className="container workflow-section">
      <h2 className="hero-title">
        Accelerate Your <span className="gradient-text">Workflow</span>
      </h2>
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
