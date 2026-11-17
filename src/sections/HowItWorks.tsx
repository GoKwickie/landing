import React from "react";
import mapPhone from "../assets/map-on-phone.png";
import riderHoldingMap from "../assets/rider-holding--map.jpg";
import receiveImg from "../assets/woman-red-cap-shirt-giving-packages.jpg";
import patternSvg from "../assets/pattern.svg";

const steps = [
    {
        title: "Book",
        description: "Pick a ride, a meal or a delivery and confirm in a few taps.",
        image: mapPhone,
        alt: "Booking screen with a map on a phone",
        imgPos: "object-top",
    },
    {
        title: "Track",
        description: "Follow your rider live on the map, from pickup to your door.",
        image: riderHoldingMap,
        alt: "Rider checking the live map on a phone",
        imgPos: "object-center",
    },
    {
        title: "Receive",
        description: "Arrive, eat up or collect your parcel. Simple as that.",
        image: receiveImg,
        alt: "Courier handing over packages from a car",
        imgPos: "object-[70%_center]",
    },
];

const HowItWorks: React.FC = () => {
    return (
        <section
            id="how-it-works"
            className="relative overflow-hidden bg-brand-600 py-20 md:py-28"
            style={{
                backgroundImage: `url(${patternSvg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container grid gap-12 lg:grid-cols-12 lg:gap-10">
                <div data-reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
                    <span className="eyebrow !text-white/90">How it works</span>
                    <h2 className="mt-4 text-5xl font-extrabold leading-[0.95] text-white md:text-7xl">
                        Three taps.
                        <br />
                        <span className="text-accent">You're moving.</span>
                    </h2>
                    <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/85">
                        Going somewhere or sending something, it works the same
                        way every time.
                    </p>
                    <a href="#waitlist" className="btn-light mt-8 px-7 py-3.5">
                        Join the waitlist
                    </a>
                </div>

                <ol className="border-y border-white/20 lg:col-span-7">
                    {steps.map((step, i) => (
                        <li
                            key={step.title}
                            data-reveal
                            style={{ "--d": `${i * 100}ms` } as React.CSSProperties}
                            className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-5 border-white/20 py-8 sm:grid-cols-[auto_1fr_auto] md:gap-x-8 [&:not(:first-child)]:border-t"
                        >
                            <span className="font-display text-6xl font-extrabold leading-none tracking-tighter text-white/30 tabular-nums md:text-8xl">
                                0{i + 1}
                            </span>
                            <div>
                                <h3 className="text-3xl font-bold text-white md:text-4xl">
                                    {step.title}
                                </h3>
                                <p className="mt-2 max-w-xs leading-relaxed text-white/85">
                                    {step.description}
                                </p>
                            </div>
                            <div className="col-span-2 h-44 overflow-hidden rounded-2xl bg-brand-50 sm:col-span-1 sm:h-32 sm:w-40 md:h-36 md:w-52">
                                <img
                                    src={step.image}
                                    alt={step.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className={`h-full w-full object-cover ${step.imgPos}`}
                                />
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default HowItWorks;
