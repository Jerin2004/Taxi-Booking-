import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  onBookClick: () => void;
}

export function Pricing({ onBookClick }: PricingProps) {
  const plans = [
    {
      name: "Standard",
      price: "2.50",
      features: [
        "Up to 4 passengers",
        "Standard sedan",
        "Air conditioning",
        "Phone charging",
        "24/7 support"
      ]
    },
    {
      name: "Premium",
      price: "3.75",
      features: [
        "Up to 6 passengers",
        "Premium SUV",
        "Climate control",
        "Wi-Fi included",
        "Priority support",
        "Refreshments"
      ]
    },
    {
      name: "Luxury",
      price: "5.00",
      features: [
        "Up to 4 passengers",
        "Luxury sedan",
        "Premium amenities",
        "Personal chauffeur",
        "VIP support",
        "Customizable experience"
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect ride option that suits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="fade-in bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              style={{transitionDelay: `${index * 0.2}s`}}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-indigo-600">${plan.price}</span>
                <span className="text-gray-600">/km</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onBookClick}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-500 transition transform hover:-translate-y-0.5"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}