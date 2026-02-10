import React from 'react';
import Card from '../components/Card';
import imgRide from '../assets/passenger-on-call.jpg';
import imgFood from '../assets/food.jpg';
import imgGrocery from '../assets/rider-yellow-shirt-cap-hold-package-look-at-pjhone.jpg';
import imgCourier from '../assets/receiving-package.jpg';

const Services: React.FC = () => {
  const services = [
    { title: 'Ride', image: imgRide, action: 'Go' },
    { title: 'Food', image: imgFood, action: 'Order' },
    { title: 'Grocery', image: imgGrocery, action: 'Shop' },
    { title: 'Courier', image: imgCourier, action: 'Send' },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Our Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-[400px] relative group border-0 bg-transparent">
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <button className="flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-white transition-colors">
                  <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                    <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
