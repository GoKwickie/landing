import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import OurServices from "./sections/OurServices";
import HowItWorks from "./sections/HowItWorks";
import EarlyAccess from "./sections/EarlyAccess";
import Earn from "./sections/Earn";
import News from "./sections/News";
import Footer from "./components/Footer";
import { useReveal } from "./lib/useReveal";

const App: React.FC = () => {
    useReveal();
    return (
        <div className="min-h-screen overflow-x-hidden bg-white font-sans text-ink selection:bg-accent selection:text-ink">
            <Navbar />
            <main>
                <Hero />
                <Marquee />
                <OurServices />
                <HowItWorks />
                <Earn />
                <News />
                <EarlyAccess />
            </main>
            <Footer />
        </div>
    );
};

export default App;
