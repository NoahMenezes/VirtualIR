import React, { useState } from 'react';
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
                    <img className="logo-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSIjZjU5ZTAwIj48cGF0aCBkPSJNMjI0IDEyOGEyNCAyNCAwIDAgMS0yNCAyNGgtNjguNjlsMjEuMTUgMjEuMTVhOCA4IDAgMCAxLTExLjMyIDExLjMxbC0zNi0zNmE4IDggMCAwIDEtLjAxLTEyLjQzbDM2LTM2YTggOCAwIDAgMSAxMS4zMiAxMS4zMUwxMzEuMzEgMTI4SDIwMGEyNCAyNCAwIDAgMSAyNCAyNFpNMzIgMTI4YTI0IDINCAwIDAgMCAyNCIDI0aDY4LjY5bC0yMS4xNSAyMS4xNWE4IDggMCAwIDAgMTEuMzIgMTEuMzFsMzYtMzZhOCA4IDAgMCAwIC4wMS0xMi4zN2wtMzYtMzZhOCA4IDAgMCAwLTExLjMyIDExLjMxTDEyNC42OSAxMjhoLTY4LjY5YTI0IDIIVCAwIDAgMC0yNCAyNFoiLz48L3N2Zz4=" alt="logo" />
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
export default Navbar;