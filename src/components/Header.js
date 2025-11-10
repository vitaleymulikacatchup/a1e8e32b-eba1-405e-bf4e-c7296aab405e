import React from 'react';
import { MapPin } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <img 
                src="/images/starbucks-logo.svg" 
                alt="Starbucks" 
                className="h-12 w-12"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-starbucks-green font-semibold uppercase tracking-wider text-sm">
                MENU
              </a>
              <a href="#" className="text-gray-900 hover:text-starbucks-green font-semibold uppercase tracking-wider text-sm">
                REWARDS
              </a>
              <a href="#" className="text-gray-900 hover:text-starbucks-green font-semibold uppercase tracking-wider text-sm">
                GIFT CARDS
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-900 hover:text-starbucks-green">
              <MapPin className="h-5 w-5" />
              <span className="hidden sm:inline font-semibold text-sm">Find a store</span>
            </button>
            <button className="border border-gray-900 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors">
              Sign in
            </button>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors">
              Join now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;