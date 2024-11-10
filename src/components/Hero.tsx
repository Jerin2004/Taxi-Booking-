import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative h-screen pt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
          alt="Luxury Taxi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-800/75"></div>
      </div>
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Premium Rides for Every Journey</h1>
          <p className="text-xl mb-8 text-indigo-100">Experience comfort and reliability with our professional drivers. Available 24/7 for your convenience.</p>
          <button
            onClick={onBookClick}
            className="px-8 py-4 bg-indigo-500 text-white rounded-lg text-lg font-semibold hover:bg-indigo-400 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book Your Ride
          </button>
        </div>
      </div>
    </section>
  );
}