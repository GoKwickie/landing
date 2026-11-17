import React from "react";
import { ArrowUpRight } from "lucide-react";
import imgCityTours from "../assets/passenger-waving-outside.jpg";
import imgChow from "../assets/food.jpg";
import imgDeliveries from "../assets/rider-yellow-shirt-cap-hold-package-look-at-pjhone.jpg";
import imgPrivateRide from "../assets/passenger-on-call.jpg";

/**
 * Mixed-size grid. Two columns on phones, four on tablet and up:
 * City Tours is the big tile, Chow is wide, the last two are small.
 */
const services = [
    {
        tag: "Rides",
        title: "City Tours",
        description: "Get a car in seconds and ride around town in style.",
        cta: "Catch a ride",
        image: imgCityTours,
        alt: "Passenger waving from a car window",
        tile: "col-span-2 h-[380px] md:row-span-2 md:h-auto",
        imgPos: "object-center",
        big: true,
    },
    {
        tag: "Food",
        title: "Chow",
        description: "Cravings? Your favourite spots, delivered hot and fast.",
        cta: "Find meals",
        image: imgChow,
        alt: "Breakfast plate with eggs and sausages",
        tile: "col-span-2 h-[260px] md:h-auto",
        imgPos: "object-center",
    },
    {
        tag: "Parcels",
        title: "Deliveries",
        description: "Fast, fun and fuss-free.",
        cta: "Send now",
        image: imgDeliveries,
        alt: "Courier holding parcels and checking his phone",
        tile: "col-span-1 h-[260px] md:h-auto",
        imgPos: "object-[60%_center]",
    },
    {
        tag: "Rides",
        title: "Private Ride",
        description: "Your ride, your way.",
        cta: "Ride Kwick",
        image: imgPrivateRide,
        alt: "Passenger on a phone call in the back of a car",
        tile: "col-span-1 h-[260px] md:h-auto",
        imgPos: "object-[65%_center]",
    },
];

const OurServices: React.FC = () => {
    return (
        <section id="services" className="bg-white py-20 md:py-28">
            <div className="container">
                <div className="grid items-end gap-6 md:grid-cols-2">
                    <div data-reveal>
                        <span className="eyebrow">Our services</span>
                        <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] text-ink md:text-6xl">
                            One app.
                            <br />
                            Every errand.
                        </h2>
                    </div>
                    <p
                        data-reveal
                        style={{ "--d": "100ms" } as React.CSSProperties}
                        className="max-w-md text-lg leading-relaxed text-ink-muted md:justify-self-end"
                    >
                        Rides around town, food from the spots you love and
                        parcels across the city. Book them all from the same
                        place.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-4 md:h-[640px] md:grid-cols-4 md:grid-rows-2 md:gap-5">
                    {services.map((s, i) => (
                        <article
                            key={s.title}
                            data-reveal
                            style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
                            className={`group relative overflow-hidden rounded-3xl bg-ink ${s.tile}`}
                        >
                            <img
                                src={s.image}
                                alt={s.alt}
                                loading="lazy"
                                decoding="async"
                                className={`absolute inset-0 h-full w-full object-cover ${s.imgPos} transition-transform duration-700 ease-out group-hover:scale-105`}
                            />
                            <div
                                aria-hidden
                                className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent"
                            />
                            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur md:left-5 md:top-5">
                                {s.tag}
                            </span>

                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-6">
                                <div className="min-w-0">
                                    <h3
                                        className={`font-bold text-white ${s.big ? "text-3xl md:text-5xl" : "text-xl md:text-3xl"}`}
                                    >
                                        {s.title}
                                    </h3>
                                    <p
                                        className={`mt-1.5 text-sm leading-snug text-white/80 md:text-base ${s.big ? "max-w-sm" : "hidden max-w-xs sm:block"}`}
                                    >
                                        {s.description}
                                    </p>
                                </div>
                                <a
                                    href="#waitlist"
                                    aria-label={`${s.cta}: join the waitlist`}
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-[background-color,transform] duration-300 hover:bg-accent group-hover:-rotate-12 md:h-14 md:w-14"
                                >
                                    <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
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
