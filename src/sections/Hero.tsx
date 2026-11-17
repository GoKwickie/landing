import React from "react";
import { ArrowRight } from "lucide-react";
import deliveryGuy from "../assets/man-red-hold-package-and-phone-red-shirt-red-cap.png";
import subtractShape from "../assets/Subtract.png";

const Hero: React.FC = () => {
    return (
        <section id="top" className="relative overflow-hidden bg-white">
            <div className="container relative grid items-center gap-10 pb-12 pt-12 md:pb-20 md:pt-20 lg:grid-cols-2 lg:gap-16 lg:pb-24">
                <div className="max-w-xl">
                    <span className="eyebrow">Launching soon</span>

                    <h1 className="mt-5 text-[2.75rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl xl:text-7xl">
                        <span className="block">Move anywhere</span>
                        <span className="block">
                            Quick{" "}
                            <span className="font-medium text-brand-500">
                                with
                            </span>
                        </span>
                        <span className="block italic">
                            <span className="font-normal">go</span>kwickie
                        </span>
                    </h1>

                    <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
                        From rides to meals to deliveries, we keep your day
                        moving.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <a href="#waitlist" className="btn-primary px-8 py-3.5">
                            Join waitlist
                        </a>
                        <a href="#how-it-works" className="btn-secondary px-8 py-3.5">
                            See how it works
                            <ArrowRight className="h-4 w-4" aria-hidden />
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto flex w-full max-w-md items-end justify-center lg:max-w-none lg:justify-end">
                    {/* Light green cutout shape behind the person */}
                    <img
                        src={subtractShape}
                        alt=""
                        aria-hidden
                        className="pointer-events-none absolute bottom-0 right-0 h-full w-[90%] max-w-[480px] object-contain object-bottom"
                    />
                    <img
                        src={deliveryGuy}
                        alt="goKwickie rider holding a package and a phone"
                        width={1400}
                        height={933}
                        fetchPriority="high"
                        className="relative w-full max-w-[560px] lg:scale-110 lg:origin-bottom-right"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
