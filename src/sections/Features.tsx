import React from "react";
import { Car, UtensilsCrossed, Package, type LucideIcon } from "lucide-react";

interface Feature {
    title: string;
    description: string;
    buttonLabel: string;
    Icon: LucideIcon;
    highlight?: boolean;
}

const features: Feature[] = [
    {
        title: "Book a Ride",
        description: "Get moving in minutes. No stress, no wait. Just tap and go.",
        buttonLabel: "Catch Ride",
        Icon: Car,
    },
    {
        title: "Order Chow",
        description: "Your favourite meals, hot and ready, just how you like them.",
        buttonLabel: "Find Meals",
        Icon: UtensilsCrossed,
        highlight: true,
    },
    {
        title: "Send a Package",
        description:
            "Got something to drop? We'll get it there Kwick. Safe, simple, sorted.",
        buttonLabel: "Send Now",
        Icon: Package,
    },
];

const Features: React.FC = () => {
    return (
        <section aria-label="What you can do" className="bg-white pb-16 md:pb-24">
            <div className="container grid gap-5 md:grid-cols-3 lg:gap-6">
                {features.map(({ title, description, buttonLabel, Icon, highlight }) => (
                    <div
                        key={title}
                        className={`flex flex-col rounded-2xl p-6 md:p-8 ${highlight ? "bg-brand-50 ring-1 ring-brand-100" : "bg-gray-50 ring-1 ring-gray-100"}`}
                    >
                        <span
                            className={`flex h-11 w-11 items-center justify-center rounded-xl ${highlight ? "bg-brand-600 text-white" : "bg-white text-brand-700 ring-1 ring-gray-200"}`}
                        >
                            <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
                        <p className="mt-2 leading-relaxed text-ink-muted">
                            {description}
                        </p>
                        <a
                            href="#waitlist"
                            className="btn-secondary mt-6 self-start px-5 py-2.5 text-sm"
                        >
                            {buttonLabel}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
