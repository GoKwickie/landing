import React from "react";
import { ArrowRight, Car, UtensilsCrossed, PackageCheck } from "lucide-react";
import deliveryGuy from "../assets/man-red-hold-package-and-phone-red-shirt-red-cap.png";
import patternSvg from "../assets/pattern.svg";

/** Little status cards floating around the rider, showing what the app does. */
const chips = [
    {
        Icon: Car,
        title: "Driver arriving",
        detail: "3 min away",
        iconClass: "bg-brand-100 text-brand-700",
        position: "left-0 top-[16%] sm:-left-6",
        delay: "0s",
    },
    {
        Icon: UtensilsCrossed,
        title: "Chow picked up",
        detail: "On its way to you",
        iconClass: "bg-accent text-ink",
        position: "right-0 top-[44%] sm:-right-4",
        delay: "1.2s",
    },
    {
        Icon: PackageCheck,
        title: "Parcel delivered",
        detail: "Signed for at 2:14 pm",
        iconClass: "bg-ink text-accent",
        position: "bottom-[7%] left-[4%] sm:left-[2%]",
        delay: "2.4s",
    },
];

const Hero: React.FC = () => {
    return (
        <section id="top" className="relative overflow-hidden bg-cream">
            <div className="container grid items-center gap-14 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-12 lg:gap-6">
                <div className="lg:col-span-6">
                    <p className="inline-flex animate-rise items-center gap-2.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink shadow-card ring-1 ring-ink/5">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70 motion-reduce:hidden" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
                        </span>
                        Launching soon. Get early access
                    </p>

                    <h1 className="mt-7 text-[clamp(2.75rem,6.2vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.035em] text-ink">
                        <span className="block animate-rise [animation-delay:80ms]">
                            Move anywhere.
                        </span>
                        <span className="block animate-rise [animation-delay:160ms]">
                            Quick with
                        </span>
                        <span className="relative inline-block animate-rise pb-2 text-brand-600 [animation-delay:240ms]">
                            <span className="italic">gokwickie</span>
                            {/* Hand-drawn underline swash */}
                            <svg
                                aria-hidden
                                viewBox="0 0 300 16"
                                preserveAspectRatio="none"
                                className="absolute -bottom-1 left-0 h-3 w-full text-accent md:h-4"
                            >
                                <path
                                    d="M3 11C60 4 140 2 297 8"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h1>

                    <p className="mt-7 max-w-md animate-rise text-lg leading-relaxed text-ink-muted [animation-delay:320ms] md:text-xl">
                        Rides, meals and deliveries in one app. We keep your day
                        moving, fast.
                    </p>

                    <div className="mt-9 flex animate-rise flex-col gap-3 [animation-delay:400ms] sm:flex-row sm:items-center">
                        <a href="#waitlist" className="btn-primary px-8 py-4 text-lg">
                            Join the waitlist
                        </a>
                        <a href="#how-it-works" className="btn-secondary px-7 py-4 text-lg">
                            See how it works
                            <ArrowRight className="h-4 w-4" aria-hidden />
                        </a>
                    </div>
                </div>

                <div className="relative lg:col-span-6">
                    <div className="relative mx-auto aspect-[1/1.05] w-full max-w-[560px] animate-rise [animation-delay:200ms]">
                        {/* Green stage behind the rider */}
                        <div
                            className="absolute inset-x-[6%] bottom-0 top-[10%] overflow-hidden rounded-[2.5rem] bg-brand-600"
                            style={{
                                backgroundImage: `url(${patternSvg})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <div
                                aria-hidden
                                className="absolute -right-14 -top-14 h-56 w-56 rounded-full bg-accent"
                            />
                            <div
                                aria-hidden
                                className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-brand-700/60"
                            />
                        </div>

                        <img
                            src={deliveryGuy}
                            alt="goKwickie rider holding a parcel and a phone"
                            width={1400}
                            height={933}
                            fetchPriority="high"
                            className="absolute bottom-0 left-1/2 w-[132%] max-w-none -translate-x-1/2"
                        />

                        {chips.map(({ Icon, title, detail, iconClass, position, delay }) => (
                            <div
                                key={title}
                                className={`absolute ${position} animate-float`}
                                style={{ animationDelay: delay }}
                            >
                                <div className="flex items-center gap-3 rounded-2xl bg-white/95 py-2.5 pl-2.5 pr-4 shadow-float ring-1 ring-ink/5 backdrop-blur">
                                    <span
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
                                    >
                                        <Icon className="h-[18px] w-[18px]" aria-hidden />
                                    </span>
                                    <span className="leading-tight">
                                        <span className="block text-sm font-semibold text-ink">
                                            {title}
                                        </span>
                                        <span className="block text-xs text-ink-muted">
                                            {detail}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
