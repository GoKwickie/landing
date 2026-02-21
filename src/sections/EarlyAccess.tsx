import React, { useState } from "react";
import { supabase } from "../lib/supabase";

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
      setError(err.message);
      return;
    }

    setSuccess(true);
    setEmail("");
    setPhone("");
  };

  return (
    <section id="waitlist" className="bg-white min-h-[50vh]">
      <div className="py-16 md:py-20 px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10 md:mb-12">
          Get early access
        </h2>

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

          {success ? (
            <p className="text-green-600 font-medium mb-8">
              Thanks! You&apos;re on the list. We&apos;ll be in touch soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-lg mx-auto mb-8"
            >
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 disabled:opacity-60"
                style={{ borderColor: "#E5E7EB" }}
              />
              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={loading}
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 disabled:opacity-60"
                style={{ borderColor: "#E5E7EB" }}
              />
              {error && (
                <p className="text-red-600 text-sm text-left">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3.5 rounded-xl font-medium text-white whitespace-nowrap transition-opacity hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#4CAF50" }}
              >
                {loading ? "Submitting…" : "Get Notified"}
              </button>
            </form>
          )}

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
