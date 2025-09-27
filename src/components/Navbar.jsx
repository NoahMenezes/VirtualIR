import React, { useState } from 'react';
// 1. Import the Link component
import { Link } from 'react-router-dom';
import { MenuIcon, CloseIcon } from './Icons';
import '../App.css';

const navItems = [
    { href: "#", label: "Features" },
    { href: "#", label: "Workflow" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Testimonials" },
];

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo-container">
                    {/* Make the logo link to the homepage */}
                    <Link to="/"> 
                        <img className="logo-img" src="data:image/svg+xml;base64,...(your long svg string)..." alt="logo" />
                    </Link>
                    <Link to="/">
                        <span className="logo-text">VirtualIR</span>
                    </Link>
                </div>
                
                <ul className="nav-links">
                    {navItems.map((item, index) => (
                        <li key={index}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>

                {/* 2. UPDATE THE BUTTONS */}
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
                 {/* Also update the mobile menu buttons */}
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}><a href={item.href} onClick={toggleNavbar}>{item.label}</a></li>
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