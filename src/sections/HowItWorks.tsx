import React from "react";
import SectionHeading from "../components/SectionHeading";
import mapPhone from "../assets/map-on-phone.png";
import riderHoldingMap from "../assets/rider-holding--map.jpg";
import receiveImg from "../assets/woman-red-cap-shirt-giving-packages.jpg";
import patternSvg from "../assets/pattern.svg";

const steps = [
    {
        title: "Book",
        description:
            "Pick a ride, a meal or a delivery and confirm in a few taps.",
        image: mapPhone,
        alt: "Booking screen with a map on a phone",
        imageClass: "object-cover object-top bg-brand-50",
    },
    {
        title: "Track",
        description:
            "Follow your rider live on the map, from pickup to your door.",
        image: riderHoldingMap,
        alt: "Rider checking the live map on a phone",
        imageClass: "object-cover object-center",
    },
    {
        title: "Receive",
        description:
            "Arrive, eat up or collect your package. Simple as that.",
        image: receiveImg,
        alt: "Courier handing over packages from a car",
        imageClass: "object-cover object-[70%_center]",
    },
];

const HowItWorks: React.FC = () => {
    return (
        <section
            id="how-it-works"
            className="relative overflow-hidden bg-brand-600 py-16 md:py-24"
            style={{
                backgroundImage: `url(${patternSvg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container">
                <SectionHeading
                    inverted
                    align="center"
                    eyebrow="How it works"
                    title="Three steps. That's it."
                    subtitle="Whether you're going somewhere or sending something, it works the same way."
                />

                <ol className="mt-12 grid gap-6 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <li
                            key={step.title}
                            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={step.image}
                                    alt={step.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className={`absolute inset-0 h-full w-full ${step.imageClass}`}
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                                        {i + 1}
                                    </span>
                                    <h3 className="text-xl font-bold text-ink">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="mt-3 leading-relaxed text-ink-muted">
                                    {step.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default HowItWorks;
