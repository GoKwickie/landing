import React from "react";
import { Check, ArrowRight } from "lucide-react";
import driverImg from "../assets/driver-looking-at-mirror.jpg";
import merchantImg from "../assets/phone-over-counter.jpg";

const Earn: React.FC = () => {
    return (
        <section id="earn" className="bg-ink py-20 text-cream md:py-28">
            <div className="container">
                <div className="grid items-end gap-6 md:grid-cols-2">
                    <div data-reveal>
                        <span className="eyebrow !text-accent">Partners</span>
                        <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] text-white md:text-6xl">
                            Earn with
                            <br />
                            goKwickie
                        </h2>
                    </div>
                    <p
                        data-reveal
                        style={{ "--d": "100ms" } as React.CSSProperties}
                        className="max-w-md text-lg leading-relaxed text-cream/75 md:justify-self-end"
                    >
                        We're building goKwickie with the drivers, riders and
                        businesses in your city. Register your interest and
                        we'll onboard early partners first.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 lg:grid-cols-5">
                    {/* Drivers and couriers: the larger panel */}
                    <article
                        data-reveal
                        className="flex flex-col overflow-hidden rounded-3xl bg-white/[0.06] ring-1 ring-white/10 lg:col-span-3"
                    >
                        <div className="aspect-[16/8] overflow-hidden">
                            <img
                                src={driverImg}
                                alt="Driver adjusting the mirror before a trip"
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover object-[60%_35%]"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-6 md:p-9">
                            <span className="text-sm font-semibold text-brand-500">
                                Drivers, riders and couriers
                            </span>
                            <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                                Drive or deliver on your schedule
                            </h3>
                            <ul className="mt-6 space-y-3">
                                {[
                                    "Choose when and where you work",
                                    "Rides, food and parcels in one app",
                                    "Early sign-ups are onboarded first",
                                ].map((t) => (
                                    <li key={t} className="flex items-center gap-3 text-cream/85">
                                        <Check className="h-5 w-5 shrink-0 text-brand-500" aria-hidden />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <a href="#waitlist" className="btn-primary mt-8 self-start">
                                Register interest
                                <ArrowRight className="h-4 w-4" aria-hidden />
                            </a>
                        </div>
                    </article>

                    {/* Restaurants and merchants: the bright panel */}
                    <article
                        data-reveal
                        style={{ "--d": "120ms" } as React.CSSProperties}
                        className="flex flex-col overflow-hidden rounded-3xl bg-accent text-ink lg:col-span-2"
                    >
                        <div className="flex flex-1 flex-col p-6 md:p-9">
                            <span className="text-sm font-semibold text-ink/70">
                                Restaurants and merchants
                            </span>
                            <h3 className="mt-2 text-3xl font-bold md:text-4xl">
                                Bring your kitchen or shop online
                            </h3>
                            <ul className="mt-6 space-y-3">
                                {[
                                    "Reach new customers nearby",
                                    "Our couriers handle the delivery",
                                    "Early partners are onboarded first",
                                ].map((t) => (
                                    <li key={t} className="flex items-center gap-3 text-ink/85">
                                        <Check className="h-5 w-5 shrink-0" aria-hidden />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#waitlist"
                                className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-ink px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-900"
                            >
                                Partner with us
                                <ArrowRight className="h-4 w-4" aria-hidden />
                            </a>
                        </div>
                        <div className="mx-6 mb-6 aspect-[16/9] overflow-hidden rounded-2xl md:mx-9 md:mb-9">
                            <img
                                src={merchantImg}
                                alt="Merchant taking a phone payment at a counter"
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Earn;
