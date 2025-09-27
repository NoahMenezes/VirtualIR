import React, { useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Particle imports
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Component & Page imports
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import CreateAccount from './components/CreateAccount';
// ✅ 1. Import the new Testimonials component
import Testimonials from './components/Testimonials';

const particleOptions = {
    // ... your existing particleOptions object
    background: { color: { value: "#171717" } },
    fpsLimit: 120,
    interactivity: {
        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
        color: { value: "#ffffff" },
        links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
        move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 2, straight: false },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
};

// This component renders your main landing page layout
const MainLayout = () => (
    <>
        <Navbar />
        <main>
            <HeroSection />
            <FeatureSection />
            {/* ✅ 2. Add the Testimonials section to the main page */}
            <Testimonials />
        </main>
    </>
);

const App = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="app-wrapper">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particleOptions}
            />
            
            <Routes>
                {/* Route for the main landing page */}
                <Route path="/" element={<MainLayout />} />
                
                {/* Route for the authentication page */}
                <Route path="/auth" element={<CreateAccount />} />
            </Routes>
        </div>
    );
};

export default App;