import React from "react";

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
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
            className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
        >
            {eyebrow && (
                <span
                    className={
                        inverted
                            ? "inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
                            : "eyebrow"
                    }
                >
                    {eyebrow}
                </span>
            )}
            <h2
                className={`${eyebrow ? "mt-4" : ""} text-3xl font-bold tracking-tight md:text-4xl ${inverted ? "text-white" : "text-ink"}`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`mt-3 text-base leading-relaxed md:text-lg ${inverted ? "text-white/85" : "text-ink-muted"}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
