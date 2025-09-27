import React, { useState } from 'react';
// Ensure Link is imported correctly
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
                     {/* This Link takes you to the homepage */}
                    <Link to="/" className="logo-link">
                        <img className="logo-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSIjZjU5ZTAwIj48cGF0aCBkPSJNMjI0IDEyOGEyNCAyNCAwIDAgMS0yNCAyNGgtNjguNjlsMjEuMTUgMjEuMTVhOCA4IDAgMCAxLTExLjMyIDExLjMxbC0zNi0zNmE4IDggMCAwIDEtLjAxLTEyQzbDMzYtMzZhOCA4IDAgMCAxIDExLjMyIDExLjMxTDEzMS4zMSAxMjhoLTY4LjY5YTI0IDI0IDAgMCAwLTI0IDI0WiIvPjwvc3ZnPg==" alt="logo" />
                        <span className="logo-text">VirtualIR</span>
                    </Link>
                </div>
                
                <ul className="nav-links">
                    {navItems.map((item, index) => (
                        <li key={index}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>

                {/* These buttons MUST use the Link component with the 'to' prop */}
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
