import React from "react";
import imgCityTours from "../assets/passenger-waving-outside.jpg";
import imgChow from "../assets/food.jpg";
import imgDeliveries from "../assets/rider-yellow-shirt-cap-hold-package-look-at-pjhone.jpg";
import imgPrivateRide from "../assets/passenger-on-call.jpg";

const services = [
    {
        title: "City Tours",
        description: "Get vehicles in seconds, ride in style",
        buttonLabel: "Catch Ride",
        image: imgCityTours,
    },
    {
        title: "Chow",
        description: "Cravings? We deliver vibes. Very fast!",
        buttonLabel: "Find Meals",
        image: imgChow,
    },
    {
        title: "Deliveries",
        description: "GoKwickie gets it there - fast, fun, and fuss-free.",
        buttonLabel: "Send Now",
        image: imgDeliveries,
    },
    {
        title: "Private Ride",
        description: "Your ride, your way. Comfortable and private.",
        buttonLabel: "Ride Kwick",
        image: imgPrivateRide,
    },
];

const OurServices: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-8">
                    {services.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-2xl overflow-hidden flex flex-col aspect-[3/4] w-full min-h-[570px] group"
                        >
                            <div className="relative flex-1 min-h-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Dark gradient overlay: top to bottom for text legibility */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-transparent"
                                    aria-hidden
                                />
                                {/* Content: title, description, button - top-left of card */}
                                <div className="absolute inset-0 flex flex-col justify-start p-5 md:p-6 text-left">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-white/95 leading-snug mb-5">
                                        {item.description}
                                    </p>
                                    <button
                                        type="button"
                                        className="w-fit px-5 py-2.5 rounded-full text-sm font-medium bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                                    >
                                        {item.buttonLabel}
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
