import React from "react";
import { Globe, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Earn", href: "#earn" },
];

const Navbar: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/75">
            <nav
                aria-label="Main"
                className="container flex h-16 items-center justify-between gap-6"
            >
                <a href="#top" className="shrink-0" aria-label="goKwickie home">
                    <img
                        src={logo}
                        alt="goKwickie"
                        width={196}
                        height={32}
                        className="block h-7 w-auto md:h-8"
                    />
                </a>

                <ul className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-6">
                    <button
                        type="button"
                        className="hidden items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink lg:flex"
                        aria-label="Language: English"
                    >
                        <Globe className="h-4 w-4" aria-hidden />
                        <span>EN</span>
                        <ChevronDown className="h-4 w-4" aria-hidden />
                    </button>
                    <a
                        href="#waitlist"
                        className="btn-primary px-5 py-2.5 text-sm"
                    >
                        Join waitlist
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
