import React from "react";
import SectionHeading from "../components/SectionHeading";
import imgCityTours from "../assets/passenger-waving-outside.jpg";
import imgChow from "../assets/food.jpg";
import imgDeliveries from "../assets/rider-yellow-shirt-cap-hold-package-look-at-pjhone.jpg";
import imgPrivateRide from "../assets/passenger-on-call.jpg";

const services = [
    {
        title: "City Tours",
        description: "Get vehicles in seconds, ride in style.",
        buttonLabel: "Catch Ride",
        image: imgCityTours,
        alt: "Passenger waving from a car window",
    },
    {
        title: "Chow",
        description: "Cravings? We deliver vibes. Very fast!",
        buttonLabel: "Find Meals",
        image: imgChow,
        alt: "Breakfast plate with eggs and sausages",
    },
    {
        title: "Deliveries",
        description: "goKwickie gets it there: fast, fun and fuss-free.",
        buttonLabel: "Send Now",
        image: imgDeliveries,
        alt: "Courier holding parcels and checking his phone",
    },
    {
        title: "Private Ride",
        description: "Your ride, your way. Comfortable and private.",
        buttonLabel: "Ride Kwick",
        image: imgPrivateRide,
        alt: "Passenger on a phone call in the back of a car",
    },
];

const OurServices: React.FC = () => {
    return (
        <section id="services" className="bg-white pb-16 md:pb-24">
            <div className="container">
                <SectionHeading
                    eyebrow="Our services"
                    title="Everything you need, one app"
                    subtitle="Rides around town, food from your favourite spots and parcels across the city."
                />

                {/* Swipeable row on phones, grid from tablet up */}
                <div className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
                    {services.map((item) => (
                        <article
                            key={item.title}
                            className="group relative aspect-[3/4] w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl bg-gray-100 sm:w-auto"
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div
                                aria-hidden
                                className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-transparent"
                            />
                            <div className="relative flex flex-col items-start p-5 md:p-6">
                                <h3 className="text-xl font-bold text-white md:text-2xl">
                                    {item.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-snug text-white/90 md:text-base">
                                    {item.description}
                                </p>
                                <a
                                    href="#waitlist"
                                    className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand-50"
                                >
                                    {item.buttonLabel}
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
