// src/components/Pricing.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css'; // Create this new CSS file for the component

// Structured data for pricing plans
const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams getting started.",
    monthlyPrice: 29,
    annualPrice: 290,
    isPopular: false,
    features: [
      "5 Projects",
      "Basic Analytics",
      "24/7 Email Support",
      "10 GB Storage",
      "Up to 5 Team Members",
    ],
    buttonText: "Choose Plan",
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses that need more power and features.",
    monthlyPrice: 79,
    annualPrice: 790,
    isPopular: true,
    features: [
      "50 Projects",
      "Advanced Analytics",
      "Priority Phone & Email Support",
      "100 GB Storage",
      "Up to 25 Team Members",
      "AI Assistant",
      "API Access",
    ],
    buttonText: "Get Started Now",
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs and dedicated support.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    isPopular: false,
    features: [
      "Unlimited Projects",
      "Custom Analytics & Reporting",
      "Dedicated Account Manager",
      "Unlimited Storage",
      "Unlimited Team Members",
      "Single Sign-On (SSO)",
      "On-Premise Deployment Option",
    ],
    buttonText: "Contact Sales",
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annually'

  const handleToggle = () => {
    setBillingCycle(prev => (prev === 'monthly' ? 'annually' : 'monthly'));
  };

  return (
    <div className="pricing-section-wrapper">
      <div className="container pricing-section">
        {/* Section Header */}
        <div className="pricing-header">
          <h2 className="pricing-title">
            Flexible Plans for <span className="gradient-text">Every Team</span>
          </h2>
          <p className="pricing-subtitle">
            Choose the plan that's right for you. All plans come with a 14-day free trial. No credit card required.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="billing-toggle-container">
          <span>Monthly</span>
          <button 
            className={`toggle-switch ${billingCycle === 'annually' ? 'toggled' : ''}`}
            onClick={handleToggle}
            aria-label="Toggle billing cycle"
          >
            <span className="toggle-handle"></span>
          </button>
          <span>
            Annually <span className="discount-badge">Save 15%</span>
          </span>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-badge">Most Popular</div>}
              
              <div className="card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="price-section">
                {typeof plan.monthlyPrice === 'number' ? (
                  <>
                    <span className="price-currency">$</span>
                    <span className="price-amount">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice / 12}
                    </span>
                    <span className="price-cycle">/ month</span>
                  </>
                ) : (
                  <span className="price-custom">{plan.monthlyPrice}</span>
                )}
              </div>
              
              {typeof plan.annualPrice === 'number' && billingCycle === 'annually' && (
                  <p className="annual-billing-notice">Billed as ${plan.annualPrice} per year</p>
              )}

              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              
              <Link 
                to="/auth" 
                className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'} cta-button`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;