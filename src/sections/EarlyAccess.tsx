import React from "react";

const EarlyAccess: React.FC = () => {
    return (
        <section className="bg-white min-h-[50vh]">
            <div className="py-16 md:py-20 px-4 md:px-6">
                {/* Top heading - centered, above card */}
                <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10 md:mb-12">
                    Get early access
                </h2>

                {/* Main content card */}
                <div
                    className="max-w-2xl mx-auto rounded-xl p-8 md:p-10 text-center bg-white border border-gray-100"
                    style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)" }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-5">
                        Get early access
                    </h3>
                    <p
                        className="text-base text-center leading-relaxed mb-8 max-w-md mx-auto"
                        style={{ color: "#6B7280" }}
                    >
                        Be part of the excitement;
                        <br />
                        Receive exclusive launch updates and notifications.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-[2] min-w-0 rounded-xl border border-gray-300 px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
                            style={{ borderColor: "#E5E7EB" }}
                        />
                        <button
                            type="submit"
                            className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl font-medium text-white whitespace-nowrap transition-opacity hover:opacity-95"
                            style={{ backgroundColor: "#4CAF50" }}
                        >
                            Get Notified
                        </button>
                    </form>

                    <p className="text-sm" style={{ color: "#9CA3AF" }}>
                        Join the waitlist to enjoy early access to{" "}
                        <span className="font-bold italic">gokwickie!</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EarlyAccess;
