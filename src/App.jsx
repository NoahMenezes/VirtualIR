import React, { useCallback } from 'react';
import './App.css';

// Particle imports
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Component imports
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// ✅ FIX: Corrected the typo in the import path from "FeatureSection" to "FeaturesSection"
import FeatureSection from './components/FeatureSection';

// Moved particleOptions outside the component for better performance
const particleOptions = {
    background: {
        color: {
            value: "#171717",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.3,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};

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

            <Navbar />
            <main>
                <HeroSection />
                <FeatureSection />
            </main>
        </div>
    );
};

export default App;