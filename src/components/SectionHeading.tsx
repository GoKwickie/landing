import React from "react";

interface SectionHeadingProps {
    eyebrow?: string;
    title: React.ReactNode;
    subtitle?: string;
    align?: "left" | "center";
    /** Use on green or dark backgrounds. */
    inverted?: boolean;
    className?: string;
}

/** The one heading pattern every section uses: eyebrow, title, optional subtitle. */
const SectionHeading: React.FC<SectionHeadingProps> = ({
    eyebrow,
    title,
    subtitle,
    align = "left",
    inverted = false,
    className = "",
}) => {
    const centered = align === "center";
    return (
        <div
            data-reveal
            className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
        >
            {eyebrow && (
                <span className={`eyebrow ${inverted ? "!text-white/90" : ""}`}>
                    {eyebrow}
                </span>
            )}
            <h2
                className={`${eyebrow ? "mt-4" : ""} text-4xl font-extrabold leading-[1.02] md:text-5xl ${inverted ? "text-white" : "text-ink"}`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`mt-4 text-lg leading-relaxed ${inverted ? "text-white/85" : "text-ink-muted"}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
