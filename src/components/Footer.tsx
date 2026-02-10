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
            "Why gokwickie",
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
        links: ["Safety tab", "Rider Safety", "Driver Safety", "Bike Safety"],
    },
    {
        heading: "Earn",
        links: [
            "goKwickie Riders",
            "Why gokwickie",
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
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-18 max-w-7xl">
                {/* Top section: logo (left) + seven columns */}
                <div className="flex flex-col gap-12 lg:gap-10 pb-16">
                    {/* Logo - top left */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center gap-1.5">
                            <img
                                src={logo}
                                alt="gokwickie"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>

                    {/* Seven columns of links */}
                    <div className="flex flex-wrap gap-x-10 gap-y-8 lg:flex-1 lg:justify-between">
                        {footerColumns.map((col) => (
                            <div key={col.heading}>
                                <h4 className="font-bold text-white text-sm mb-4">
                                    {col.heading}
                                </h4>
                                <ul className="space-y-2.5 text-sm text-white/90">
                                    {col.links.map((link) => (
                                        <li
                                            key={link}
                                            className="flex items-center gap-2"
                                        >
                                            <span
                                                className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"
                                                aria-hidden
                                            />
                                            <a
                                                href="#"
                                                className="hover:text-white transition-colors"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom section: social (left) + logo (right) */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
                    <div className="flex gap-4">
                        {socialIcons.map(({ Icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: "#4CAF50" }}
                                aria-label={label}
                            >
                                <Icon className="w-5 h-5" strokeWidth={2} />
                            </a>
                        ))}
                    </div>
                    <a href="#" className="flex items-center gap-1.5">
                        <img
                            src={logo}
                            alt="gokwickie"
                            className="h-7 w-auto brightness-0 invert"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
