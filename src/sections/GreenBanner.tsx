import React from 'react';

const GreenBanner: React.FC = () => {
  return (
    <section
      className="relative py-14 md:py-20 px-6 md:px-10 lg:px-16 min-h-[520px] md:min-h-[600px] flex flex-col"
      style={{ backgroundColor: '#30A94F' }}
    >
      {/* Top: centered heading and tagline */}
      <div className="text-center pt-4 md:pt-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Deliver Smarter, On the Go
        </h2>
        <p className="text-white text-base md:text-lg mt-4 max-w-2xl mx-auto font-normal">
          Manage your deliveries anytime, anywhere with the GoKwickie app.
        </p>
      </div>

      {/* Bottom area: card (left) + date (right) */}
      <div className="relative flex-1 flex flex-col justify-end mt-12 md:mt-16 pb-8 md:pb-10">
        {/* White info card - bottom left, large and wide (60-70% width, ~40-50% height) */}
        <div className="bg-white rounded-[1.75rem] md:rounded-[2rem] p-8 md:p-10 lg:p-12 w-full md:max-w-[70%] min-h-[220px] md:min-h-[260px] shadow-none border-0">
          <h3 className="text-black font-bold text-lg md:text-xl leading-snug mb-4">
            Gokwickie and others participates in African Tech Expo with new innovations in Kenya
          </h3>
          <p className="text-black/90 text-base md:text-lg font-normal leading-relaxed">
            Gokwickie has teamed up with other technologies to offer an affordable transportation logistics app that boosts safety and peace of mind.
          </p>
        </div>

        {/* Date - bottom right */}
        <p className="absolute bottom-8 md:bottom-10 right-6 md:right-10 text-white text-sm">
          13/2/2026
        </p>
      </div>
    </section>
  );
};

export default GreenBanner;
