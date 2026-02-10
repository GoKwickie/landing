import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import OurServices from "./sections/OurServices";
import HowItWorks from "./sections/HowItWorks";
import EarlyAccess from "./sections/EarlyAccess";
import GreenBanner from "./sections/GreenBanner";
import News from "./sections/News";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-green selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <OurServices />
                <HowItWorks />
                <EarlyAccess />
                <GreenBanner />
                <News />
            </main>
            <Footer />
        </div>
    );
};

export default App;
