import React from "react";
import { Globe, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const navGray = "#4A4A4A";
const navGreen = "#4CAF50";

const Navbar: React.FC = () => {
    return (
        <nav
            className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
            style={{ backgroundColor: "#FFFFFF" }}
        >
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                {/* Logo: go + (·· K in green) + wickie */}
                <a
                    href="#"
                    className="flex items-center gap-0.5 font-bold text-xl tracking-tight"
                >
                    <img
                        src={logo}
                        alt="goKwickie"
                        className="h-8 w-auto block"
                    />
                </a>

                <div className="hidden md:flex items-center gap-8 ml-auto">
                    {/* Language selector */}
                    <button
                        type="button"
                        className="flex items-center gap-1.5 text-sm font-medium hover:opacity-80 transition-opacity"
                        style={{ color: navGray }}
                    >
                        <Globe className="w-4 h-4" aria-hidden />
                        <span>EN</span>
                        <ChevronDown className="w-4 h-4" aria-hidden />
                    </button>
                    <a
                        href="#help"
                        className="text-sm font-medium hover:opacity-80 transition-opacity"
                        style={{ color: navGray }}
                    >
                        Help
                    </a>
                    <a
                        href="#login"
                        className="text-sm font-medium hover:opacity-80 transition-opacity"
                        style={{ color: navGray }}
                    >
                        Login
                    </a>
                    <button
                        type="button"
                        className="ml-2 px-6 py-2.5 text-sm font-semibold text-white rounded-full hover:opacity-95 transition-opacity"
                        style={{ backgroundColor: navGreen }}
                    >
                        Register
                    </button>
                </div>

                {/* Mobile: show only Register */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        type="button"
                        className="px-5 py-2.5 text-sm font-semibold text-white rounded-full"
                        style={{ backgroundColor: navGreen }}
                    >
                        Register
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
