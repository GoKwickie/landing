import React from 'react';

const cardGray = '#F7F7F7';
const cardGreen = '#E6F7E6';
const titleColor = '#1E1E1E';
const descColor = '#4A4A4A';
const buttonBorder = '#E0E0E0';

const features = [
  {
    title: 'Book a Ride',
    description: 'Get moving in minutes. No stress, no wait. Just tap and go.',
    buttonLabel: 'Catch Ride',
    background: cardGray,
  },
  {
    title: 'Order Chow',
    description: 'Your favorite meals, hot and ready: just how you like it.',
    buttonLabel: 'Find Meals',
    background: cardGreen,
  },
  {
    title: 'Send a Package',
    description: "Got something to drop? We'll get it there Kwick: Safe, simple, sorted.",
    buttonLabel: 'Send Now',
    background: cardGray,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 md:p-8 text-left"
              style={{ backgroundColor: item.background }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: titleColor }}
              >
                {item.title}
              </h3>
              <p
                className="text-base font-normal leading-normal mb-6"
                style={{ color: descColor }}
              >
                {item.description}
              </p>
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-3 rounded-full font-normal text-base bg-white border transition-colors hover:bg-gray-50"
                style={{ color: titleColor, borderColor: buttonBorder, borderWidth: 1 }}
              >
                {item.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
