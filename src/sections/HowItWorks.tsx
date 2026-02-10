import React from "react";
import driverPov from "../assets/driver-looking-at-mirror.jpg";
import mapPhone from "../assets/map-on-phone.png";
import riderHoldingMap from "../assets/rider-holding--map.jpg";
import receiveImg from "../assets/woman-red-cap-shirt-giving-packages.jpg";
import patternSvg from "../assets/pattern.svg";

const steps = [
    { title: "Book", image: mapPhone },
    { title: "Track", image: riderHoldingMap },
    { title: "Receive", image: receiveImg },
];

const HowItWorks: React.FC = () => {
    return (
        <section
            className="relative py-16 md:py-24 overflow-hidden"
            style={{
                backgroundColor: "#4CAF50",
                backgroundImage: `url(${patternSvg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="relative z-10 px-6 md:px-10 lg:px-12 max-w-6xl mx-auto">
                {/* Top: large white rounded card with driver POV image */}
                <div className="mb-10 md:mb-14 -mx-2 md:-mx-4 lg:-mx-8">
                    <div className="bg-white rounded-t-3xl rounded-b-xl overflow-visible shadow-lg max-w-5xl mx-auto">
                        <div className="aspect-[2.2/1] md:aspect-[2.5/1] relative overflow-visible flex items-center justify-center">
                            <img
                                src={driverPov}
                                alt="Driver perspective"
                                className="absolute inset-0 w-full h-full object-cover object-center scale-200 origin-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Section title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10 md:mb-12">
                    How It Works
                </h2>

                {/* Step cards: Book (label + image) | Track (image as bg), then Receive (image as bg) full width */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
                    {/* Book: label left, image right */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-row items-end gap-6 shadow-md min-h-[220px]">
                        <h3 className="text-lg md:text-xl font-medium text-black shrink-0 pl-1">
                            {steps[0].title}
                        </h3>
                        <div className="relative flex-1 w-full min-h-[200px] overflow-hidden rounded-xl flex-shrink-0">
                            <img
                                src={steps[0].image}
                                alt={steps[0].title}
                                className="absolute inset-0 w-full h-full object-cover object-right"
                            />
                            <div
                                className="absolute inset-0 w-2/5 left-0 bg-gradient-to-r from-white to-transparent pointer-events-none"
                                aria-hidden
                            />
                        </div>
                    </div>

                    {/* Track: image as full card background */}
                    <div
                        className="relative rounded-2xl overflow-hidden shadow-md min-h-[220px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${riderHoldingMap})` }}
                    >
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent pointer-events-none"
                            aria-hidden
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                            <h3 className="text-lg md:text-xl font-medium text-black">
                                {steps[1].title}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Receive: image as full card background */}
                <div className="mt-8 md:mt-10 max-w-5xl mx-auto">
                    <div
                        className="relative rounded-2xl overflow-hidden shadow-md min-h-[400px] bg-cover"
                        style={{ backgroundImage: `url(${receiveImg})` }}
                    >
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent pointer-events-none"
                            aria-hidden
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                            <h3 className="text-lg md:text-xl font-medium text-black">
                                {steps[2].title}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
