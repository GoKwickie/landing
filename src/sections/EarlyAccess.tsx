import React, { useState } from "react";
import { CheckCircle2, Bell, Zap, Gift } from "lucide-react";
import { supabase } from "../lib/supabase";
import patternSvg from "../assets/pattern.svg";

const perks = [
    { Icon: Zap, text: "Be among the first to ride, order and send" },
    { Icon: Gift, text: "Exclusive launch offers for early members" },
    { Icon: Bell, text: "Launch updates straight to your inbox" },
];

const inputClass =
    "w-full rounded-xl border border-ink/10 bg-cream px-4 py-3.5 text-ink placeholder:text-ink/35 transition-colors focus:border-brand-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-600/15 disabled:opacity-60";

const EarlyAccess: React.FC = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const { error: err } = await supabase.from("waitlist").insert({
            email: email.trim(),
            phone: phone.trim() || null,
        });

        setLoading(false);

        if (err) {
            setError(
                err.code === "23505"
                    ? "This email is already on the waitlist."
                    : "Something went wrong. Please check your details and try again.",
            );
            return;
        }

        setSuccess(true);
        setEmail("");
        setPhone("");
    };

    return (
        <section id="waitlist" className="bg-cream py-16 md:py-24">
            <div className="container">
                <div
                    data-reveal
                    className="relative overflow-hidden rounded-[2rem] bg-brand-950 px-6 py-12 sm:px-10 md:rounded-[2.5rem] md:px-14 md:py-16 lg:px-16"
                >
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-25"
                        style={{
                            backgroundImage: `url(${patternSvg})`,
                            backgroundSize: "cover",
                        }}
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/50 blur-3xl"
                    />

                    <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <span className="eyebrow !text-accent">Early access</span>
                            <h2 className="mt-4 text-4xl font-extrabold leading-[1] text-white md:text-6xl">
                                Be first on
                                <br />
                                <span className="italic text-brand-500">gokwickie.</span>
                            </h2>
                            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
                                Join the waitlist and we'll tell you the moment
                                we launch in your city.
                            </p>
                            <ul className="mt-8 space-y-4">
                                {perks.map(({ Icon, text }) => (
                                    <li key={text} className="flex items-center gap-3">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent">
                                            <Icon className="h-4 w-4" aria-hidden />
                                        </span>
                                        <span className="text-white/90">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-white p-6 shadow-float sm:p-8">
                            {success ? (
                                <div className="py-8 text-center" role="status">
                                    <CheckCircle2
                                        className="mx-auto h-14 w-14 text-brand-600"
                                        aria-hidden
                                    />
                                    <h3 className="mt-4 text-3xl font-bold text-ink">
                                        You're on the list!
                                    </h3>
                                    <p className="mt-2 text-ink-muted">
                                        Thanks for joining. We'll be in touch
                                        soon.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h3 className="text-2xl font-bold text-ink">
                                        Get notified at launch
                                    </h3>
                                    <p className="mt-1 text-sm text-ink-muted">
                                        It takes less than a minute.
                                    </p>

                                    <div className="mt-6 space-y-4">
                                        <div>
                                            <label
                                                htmlFor="waitlist-email"
                                                className="mb-1.5 block text-sm font-medium text-ink"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                id="waitlist-email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="you@example.com"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                disabled={loading}
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="waitlist-phone"
                                                className="mb-1.5 block text-sm font-medium text-ink"
                                            >
                                                Phone number{" "}
                                                <span className="font-normal text-ink-muted">
                                                    (optional)
                                                </span>
                                            </label>
                                            <input
                                                id="waitlist-phone"
                                                type="tel"
                                                autoComplete="tel"
                                                placeholder="+254 700 000 000"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                disabled={loading}
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    {error && (
                                        <p
                                            role="alert"
                                            className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
                                        >
                                            {error}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary mt-6 w-full py-4 text-lg"
                                    >
                                        {loading ? "Joining…" : "Join the waitlist"}
                                    </button>

                                    <p className="mt-4 text-center text-xs text-ink-muted">
                                        We'll only use your details to contact
                                        you about goKwickie. No spam.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EarlyAccess;
