import React from 'react';
import { CheckIcon } from './Icons';
import '../App.css';

const featureItems = [
    {
        title: "Code merge made easy",
        description: "Track the performance of your VR apps and gain insights into user behavior."
    },
    {
        title: "Review code without worry",
        description: "Track the performance of your VR apps and gain insights into user behavior."
    },
    {
        title: "AI Assistance to reduce time",
        description: "Track the performance of your VR apps and gain insights into user behavior."
    }
];

const FeatureSection = () => (
    <div className="container features-section">
        <div className="features-grid">
            <div className="code-block">
                <pre><code>
                    <span className="code-purple">const</span> VIRTUALIR_CONFIG = {'{\n'}
                    {'  '}<span className="code-cyan">apiKey</span>: <span className="code-orange">"YOUR_API_KEY"</span>,{'\n'}
                    {'  '}<span className="code-cyan">tracking</span>: {'{\n'}
                    {'    '}<span className="code-cyan">gestures</span>: <span className="code-yellow">true</span>,{'\n'}
                    {'    '}<span className="code-cyan">gaze</span>: <span className="code-yellow">true</span>,{'\n'}
                    {'    '}<span className="code-cyan">session</span>: <span className="code-yellow">true</span>,{'\n'}
                    {'  }'}{'}\n'}
                    {';\n\n'}
                    <span className="code-purple">function</span> <span className="code-green">setupTracking</span>() {'{\n'}
                    {'  '}<span className="code-cyan">VirtualIR</span>.<span className="code-green">init</span>(VIRTUALIR_CONFIG);{'\n'}
                    {'  '}<span className="code-gray">{'// Start gaining insights instantly'}</span>{'\n'}
                    {'}'}
                </code></pre>
            </div>
            <div className="features-list">
                {featureItems.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <div className="feature-icon-wrapper">
                            <CheckIcon />
                        </div>
                        <div className="feature-text">
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default FeatureSection;