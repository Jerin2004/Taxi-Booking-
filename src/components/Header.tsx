import React from 'react';
import { Car } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

export function Header({ onLoginClick }: HeaderProps) {
  return (
    <header className="bg-indigo-600 shadow-lg fixed w-full top-0 z-40">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">SwiftCab</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="px-4 py-2 rounded-lg bg-white text-indigo-600 hover:bg-indigo-50 transition font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}