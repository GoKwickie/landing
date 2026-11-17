import React from "react";
import { Instagram, Facebook, Twitter, Music } from "lucide-react";
import logo from "../assets/logo.png";

const footerColumns = [
    {
        heading: "Our Services",
        links: [
            "City Rides",
            "City to City rides",
            "Food Delivery",
            "Parcels",
            "Supplies",
            "Why goKwickie",
        ],
    },
    {
        heading: "About Us",
        links: [
            "Company",
            "Blog",
            "Newsletter",
            "Contact Us",
            "Careers",
            "Our mission",
            "Press",
        ],
    },
    {
        heading: "Safety",
        links: ["Safety centre", "Rider Safety", "Driver Safety", "Bike Safety"],
    },
    {
        heading: "Earn",
        links: [
            "goKwickie Riders",
            "Food Merchants",
            "goKwickie Couriers",
        ],
    },
    {
        heading: "Location",
        links: ["Our cities", "Our Outlets"],
    },
    {
        heading: "For Businesses",
        links: [
            "Partner With Us",
            "Become a Merchant",
            "API / Integrations",
            "Business Pricing",
        ],
    },
    {
        heading: "Legal",
        links: ["Terms & Conditions", "Privacy Policy", "Cookie Policy"],
    },
];

const socialIcons = [
    { Icon: Instagram, label: "Instagram" },
    { Icon: Facebook, label: "Facebook" },
    { Icon: Twitter, label: "X" },
    { Icon: Music, label: "TikTok" },
];

const Footer: React.FC = () => {
    return (
        <footer className="relative overflow-hidden bg-ink text-white">
            <div className="container py-14 md:py-20">
                <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between">
                    <div>
                        <a href="#top" aria-label="goKwickie home">
                            <img
                                src={logo}
                                alt="goKwickie"
                                width={196}
                                height={32}
                                className="h-8 w-auto brightness-0 invert"
                            />
                        </a>
                        <p className="mt-3 max-w-xs text-sm text-white/60">
                            Rides, meals and deliveries that keep your day
                            moving.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        {socialIcons.map(({ Icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600 hover:text-white"
                            >
                                <Icon className="h-[18px] w-[18px]" aria-hidden />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:grid-cols-3 lg:grid-cols-7">
                    {footerColumns.map((col) => (
                        <div key={col.heading}>
                            <h3 className="text-sm font-semibold text-white">
                                {col.heading}
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-white/60 transition-colors hover:text-white"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8 text-sm text-white/50">
                    © {new Date().getFullYear()} goKwickie. All rights reserved.
                </div>
            </div>
            {/* Oversized wordmark bleeding off the bottom edge */}
            <p
                aria-hidden
                className="pointer-events-none -mb-[0.22em] select-none text-center font-display text-[24vw] font-extrabold italic leading-none tracking-[-0.05em] text-white/[0.04]"
            >
                gokwickie
            </p>
        </footer>
    );
};

export default Footer;
