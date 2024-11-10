import React from 'react';
import { Car, Battery, Gauge, Users } from 'lucide-react';

export function Fleet() {
  const vehicles = [
    {
      name: "Economy Sedan",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      specs: {
        passengers: "4",
        range: "500km",
        charging: "Fast",
        speed: "180km/h"
      }
    },
    {
      name: "Premium SUV",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      specs: {
        passengers: "6",
        range: "600km",
        charging: "Ultra Fast",
        speed: "200km/h"
      }
    },
    {
      name: "Luxury Sedan",
      image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      specs: {
        passengers: "4",
        range: "700km",
        charging: "Ultra Fast",
        speed: "250km/h"
      }
    }
  ];

  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Our Premium Fleet</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience luxury and comfort with our diverse range of premium vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="fade-in" style={{transitionDelay: `${index * 0.2}s`}}>
              <div className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{vehicle.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-indigo-400" />
                      <span>{vehicle.specs.passengers} Seats</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Battery className="w-5 h-5 text-indigo-400" />
                      <span>{vehicle.specs.charging}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Car className="w-5 h-5 text-indigo-400" />
                      <span>{vehicle.specs.range}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gauge className="w-5 h-5 text-indigo-400" />
                      <span>{vehicle.specs.speed}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}