import React from "react";
import patternSvg from "../assets/pattern.svg";

const GreenBanner: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container">
                <div
                    className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-14 text-center sm:px-12 md:py-20"
                    style={{
                        backgroundImage: `url(${patternSvg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-500/40 blur-2xl"
                    />

                    <div className="relative mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                            Deliver smarter, on the go
                        </h2>
                        <p className="mt-4 text-lg text-white/90">
                            Manage your rides, meals and deliveries anytime,
                            anywhere with the goKwickie app.
                        </p>
                        <a
                            href="#waitlist"
                            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                        >
                            Join the waitlist
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GreenBanner;
