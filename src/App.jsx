import React, { useState } from 'react';
import './App.css';

// --- Reusable Icon Components ---
const MenuIcon = () => (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8" />
    </svg>
);

const CloseIcon = () => (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const CheckIcon = () => (
    <svg className="icon check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

// --- Data ---
const navItems = [
    { href: "#", label: "Features" },
    { href: "#", label: "Workflow" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Testimonials" },
];

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

// --- Sub-Components ---
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo-container">
                    <img className="logo-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSIjZjU5ZTAwIj48cGF0aCBkPSJNMjI0IDEyOGEyNCAyNCAwIDAgMS0yNCAyNGgtNjguNjlsMjEuMTUgMjEuMTVhOCA4IDAgMCAxLTExLjMyIDExLjMxbC0zNi0zNmE4IDggMCAwIDEtLjAxLTEyLjQzbDM2LTM2YTggOCAwIDAgMSAxMS4zMiAxMS4zMUwxMzEuMzEgMTI4SDIwMGEyNCAyNCAwIDAgMSAyNCAyNFpNMzIgMTI4YTI0IDINCAwIDAgMCAyNCIDI0aDY4LjY5bC0yMS4xNSAyMS4xNWE4IDggMCAwIDAgMTEuMzIgMTEuMzFsMzYtMzZhOCA4IDAgMCAwIC4wMS0xMi4zN2wtMzYtMzZhOCA4IDAgMCAwLTExLjMyIDExLjMxTDEyNC42OSAxMjhoLTY4LjY5YTI0IDI0IDAgMCAwLTI0IDI0WiIvPjwvc3ZnPg==" alt="logo" />
                    <span className="logo-text">VirtualIR</span>
                </div>
                <ul className="nav-links">
                    {navItems.map((item, index) => (
                        <li key={index}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>
                <div className="nav-buttons">
                    <a href="#" className="btn btn-secondary">Sign In</a>
                    <a href="#" className="btn btn-primary">Create an Account</a>
                </div>
                <div className="mobile-menu-toggle">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            <div className={`mobile-menu ${mobileDrawerOpen ? 'open' : ''}`}>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>
                <div className="mobile-menu-buttons">
                    <a href="#" className="btn btn-secondary">Sign In</a>
                    <a href="#" className="btn btn-primary">Create an Account</a>
                </div>
            </div>
        </nav>
    );
};

const HeroSection = () => (
    <div className="hero-section">
        <h1 className="hero-title">
            Accelerate your
            <span className="gradient-text">
                {' '}coding workflow.
            </span>
        </h1>
        <p className="hero-subtitle">
            Track the performance of your VR apps and gain insights into user behavior. Empower your creativity and bring your ideas to life with our intuitive developer tools.
        </p>
    </div>
);

const FeaturesSection = () => (
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

// --- Main App Component ---
const App = () => {
    return (
        <div className="app-wrapper">
            <Navbar />
            <main>
                <HeroSection />
                <FeaturesSection />
            </main>
        </div>
    );
};

export default App;