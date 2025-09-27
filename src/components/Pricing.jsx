import React, { useState } from 'react';
import { CheckIcon } from './Icons'; // Assuming you have this from a previous step
import './Pricing.css';

const pricingOptions = [
  {
    title: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'For individuals and small teams getting started.',
    features: ['5 Projects', '1 Team Member', 'Basic Analytics', 'Community Support'],
    featured: false,
  },
  {
    title: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 144,
    description: 'For growing teams that need more power and support.',
    features: ['Unlimited Projects', '5 Team Members', 'Advanced Analytics', 'Priority Email Support', 'AI Assistant'],
    featured: true,
  },
  {
    title: 'Enterprise',
    monthlyPrice: 49,
    yearlyPrice: 520,
    description: 'For large organizations with advanced security and support needs.',
    features: ['Everything in Pro', 'Unlimited Team Members', 'Dedicated Account Manager', 'SSO & Security Audits'],
    featured: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="container pricing-section">
      <h2 className="hero-title">
        Choose a Plan That's <span className="gradient-text">Right For You</span>
      </h2>
      <p className="hero-subtitle">
        Simple, transparent pricing. No hidden fees.
      </p>

      <div className="pricing-toggle">
        <span className={!isYearly ? 'font-semibold' : 'text-gray-400'}>Monthly</span>
        <label className="toggle-switch">
          <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
          <span className="slider"></span>
        </label>
        <span className={isYearly ? 'font-semibold' : 'text-gray-400'}>Yearly (Save 20%)</span>
      </div>

      <div className="pricing-grid">
        {pricingOptions.map((option, index) => (
          <div key={index} className={`pricing-card ${option.featured ? 'featured' : ''}`}>
            <h3>{option.title}</h3>
            <p className="mt-4 text-gray-400">{option.description}</p>
            <div className="price">
              ${isYearly ? option.yearlyPrice / 12 : option.monthlyPrice}
              <span className="price-period">/month</span>
            </div>
            <ul className="feature-list">
              {option.features.map((feature, i) => (
                <li key={i}>
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#" className={`btn ${option.featured ? 'btn-primary' : 'btn-secondary'}`}>
              Get Started
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
