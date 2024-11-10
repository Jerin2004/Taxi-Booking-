import React from 'react';
import { MapPin, Clock, Shield, Star } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: MapPin,
      title: "Smart Location",
      description: "Real-time tracking and intelligent route optimization for faster pickups."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Verified drivers and encrypted payments for your peace of mind."
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Available round the clock with instant booking confirmation."
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Luxury vehicles and professional chauffeurs at your service."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose SwiftCab</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition group-hover:scale-110 group-hover:bg-indigo-200">
                <feature.icon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}