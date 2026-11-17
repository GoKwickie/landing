import React from "react";
import SectionHeading from "../components/SectionHeading";
import featuredImg from "../assets/package-delivery-man-woman-hands.jpg";
import img1 from "../assets/phone-over-counter.jpg";
import img2 from "../assets/two-women-bed-look-laptop.jpg";
import img3 from "../assets/woman-red-cap-shirt-giving-packages.jpg";

const mainArticle = {
    image: featuredImg,
    title: "goKwickie and others participate in African Tech Expo with new innovations in Kenya",
    description:
        "goKwickie has teamed up with other technologies to offer an affordable transportation logistics app that boosts safety and peace of mind.",
    date: "2026-02-13",
};

const sideArticles = [
    {
        image: img1,
        title: "goKwickie and others participate in African Tech Expo with new innovations in Kenya",
        date: "2026-07-07",
    },
    {
        image: img2,
        title: "goKwickie and others participate in African Tech Expo with new innovations in Kenya",
        date: "2026-02-13",
    },
    {
        image: img3,
        title: "goKwickie and others participate in African Tech Expo with new innovations in Kenya",
        date: "2026-03-30",
    },
];

const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

const News: React.FC = () => {
    return (
        <section id="news" className="bg-white py-20 md:py-28">
            <div className="container">
                <SectionHeading
                    eyebrow="Latest news"
                    title="Right now at goKwickie"
                />

                <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
                    <article data-reveal className="group overflow-hidden rounded-3xl bg-cream lg:col-span-2">
                        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                            <img
                                src={mainArticle.image}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 md:p-8">
                            <time
                                dateTime={mainArticle.date}
                                className="text-sm font-medium text-brand-700"
                            >
                                {formatDate(mainArticle.date)}
                            </time>
                            <h3 className="mt-2 text-2xl font-bold leading-snug text-ink md:text-3xl">
                                {mainArticle.title}
                            </h3>
                            <p className="mt-3 leading-relaxed text-ink-muted">
                                {mainArticle.description}
                            </p>
                        </div>
                    </article>

                    <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties} className="flex flex-col divide-y divide-ink/10">
                        {sideArticles.map((item) => (
                            <article
                                key={item.date}
                                className="flex gap-4 py-5 first:pt-0 last:pb-0"
                            >
                                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gray-100 md:h-28 md:w-28">
                                    <img
                                        src={item.image}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <time
                                        dateTime={item.date}
                                        className="text-xs font-medium text-brand-700"
                                    >
                                        {formatDate(item.date)}
                                    </time>
                                    <h4 className="mt-1 text-lg font-semibold leading-snug text-ink">
                                        {item.title}
                                    </h4>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
