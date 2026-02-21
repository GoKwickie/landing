import React from "react";
import deliveryGuy from "../assets/man-red-hold-package-and-phone-red-shirt-red-cap.png";
import subtractShape from "../assets/Subtract.png";

const Hero: React.FC = () => {
    return (
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-white">
            {/* Glow blob behind hero image - yellowish-green, top right of image */}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-8 max-w-xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-black leading-[1.25]">
                            <span className="block">Move anywhere</span>
                            <span className="block mt-4">
                                Quick{" "}
                                <span className="inline-block text-[#38CB4E] text-[0.85em] font-medium -translate-y-0.5">
                                    with
                                </span>
                            </span>
                            <span className="block mt-3 italic">
                                <span className="font-normal">go</span>kwickie
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-md">
                            From rides to meals to deliveries, we keep your day
                            moving.
                        </p>
                        <div className="flex flex-wrap items-center gap-5 pt-2">
                            <a
                                href="#waitlist"
                                className="inline-flex items-center justify-center font-medium px-6 py-3.5 sm:px-12 text-base text-white rounded-full transition-opacity hover:opacity-95 w-full sm:w-auto sm:min-w-[260px]"
                                style={{ backgroundColor: "#38CB4E" }}
                            >
                                Join waitlist
                            </a>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end items-end">
                        {/* Light green cutout shape behind the person */}
                        <img
                            src={subtractShape}
                            alt=""
                            aria-hidden
                            className="absolute bottom-0 right-0 w-[90%] max-w-[440px] lg:max-w-[480px] h-full
                             object-contain object-bottom z-0 pointer-events-none"
                        />
                        <img
                            src={deliveryGuy}
                            alt="Delivery person with package"
                            className="relative z-10 scale-125 origin-bottom"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
