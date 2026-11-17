import React from "react";

const items = ["Rides", "Chow", "Parcels", "City Tours", "Private Rides", "Move Kwick"];

/** Three slanted bars, like speed lines, between the words. */
const SpeedLines: React.FC = () => (
    <span aria-hidden className="flex items-center gap-1">
        <span className="h-1.5 w-6 -skew-x-[20deg] rounded-full bg-brand-500" />
        <span className="h-1.5 w-4 -skew-x-[20deg] rounded-full bg-brand-500/70" />
        <span className="h-1.5 w-2 -skew-x-[20deg] rounded-full bg-brand-500/40" />
    </span>
);

const Marquee: React.FC = () => {
    return (
        <section aria-label="What goKwickie does" className="overflow-hidden bg-ink py-5 md:py-7">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {[0, 1].map((copy) => (
                    <ul
                        key={copy}
                        aria-hidden={copy === 1}
                        className="flex shrink-0 items-center"
                    >
                        {items.map((item) => (
                            <li
                                key={item}
                                className="flex items-center whitespace-nowrap font-display text-3xl font-bold tracking-tight text-cream md:text-5xl"
                            >
                                <span className="px-6 md:px-10">{item}</span>
                                <SpeedLines />
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </section>
    );
};

export default Marquee;
