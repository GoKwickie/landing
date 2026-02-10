import React from 'react';
import featuredImg from '../assets/package-delivery-man-woman-hands.jpg';
import img1 from '../assets/phone-over-counter.jpg';
import img2 from '../assets/two-women-bed-look-laptop.jpg';
import img3 from '../assets/woman-red-cap-shirt-giving-packages.jpg';

const mainArticle = {
  image: featuredImg,
  title: 'Gokwickie and others participates in African Tech Expo with new innovations in Kenya',
  description:
    'Gokwickie has teamed up with other technologies to offer an affordable transportation logistics app that boosts safety and peace of mind.',
};

const sideArticles = [
  { image: img1, title: 'Gokwickie and others participates in African Tech Expo with new innovations in Kenya.', date: '07/7/2026' },
  { image: img2, title: 'Gokwickie and others participates in African Tech Expo with new innovations in Kenya.', date: '13/2/2026' },
  { image: img3, title: 'Gokwickie and others participates in African Tech Expo with new innovations in Kenya.', date: '30/3/2026' },
];

const News: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Thin green stripe at top */}
      <div className="h-1.5 w-full" style={{ backgroundColor: '#30A94F' }} />

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-14 max-w-6xl">
        {/* Latest News pill - centered */}
        <div className="flex justify-center mb-4">
          <span
            className="inline-block px-5 py-2 rounded-full text-white text-sm font-medium"
            style={{ backgroundColor: '#1f2937' }}
          >
            Latest News
          </span>
        </div>

        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12 md:mb-14">
          Right now at goKwickie
        </h2>

        {/* Two columns: featured (left) + list (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Left - large featured card */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="aspect-[16/10] md:aspect-[2/1] relative overflow-hidden">
                <img
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black leading-snug mb-4">
                  {mainArticle.title}
                </h3>
                <p className="text-black text-base leading-relaxed">
                  {mainArticle.description}
                </p>
              </div>
            </article>
          </div>

          {/* Right - three stacked entries */}
          <div className="flex flex-col gap-6">
            {sideArticles.map((item) => (
              <article
                key={item.date}
                className="flex flex-row gap-4 items-start"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h4 className="text-sm md:text-base font-bold text-black leading-snug mb-2">
                    {item.title}
                  </h4>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium text-black border border-black"
                  >
                    {item.date}
                  </span>
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
