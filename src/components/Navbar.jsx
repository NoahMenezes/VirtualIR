import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, CloseIcon } from './Icons';
import '../App.css';

const navItems = [
    { to: "/features", label: "Features" },
    { to: "/workflow", label: "Workflow" },
    { to: "/pricing", label: "Pricing" },
    { to: "/testimonials", label: "Testimonials" },
];

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo-container">
                    <Link to="/" className="logo-link">
                        <img className="logo-img" src="data:image/svg+xml;base64,...your-logo..." alt="logo" />
                        <span className="logo-text">VirtualIR</span>
                    </Link>
                </div>

                <ul className="nav-links">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to}>{item.label}</Link>
                        </li>
                    ))}
                </ul>

                <div className="nav-buttons">
                    <Link to="/auth" className="btn btn-secondary">Sign In</Link>
                    <Link to="/auth" className="btn btn-primary">Create an Account</Link>
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
                        <li key={index}>
                            <Link to={item.to} onClick={toggleNavbar}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className="mobile-menu-buttons">
                    <Link to="/auth" className="btn btn-secondary" onClick={toggleNavbar}>Sign In</Link>
                    <Link to="/auth" className="btn btn-primary" onClick={toggleNavbar}>Create an Account</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
