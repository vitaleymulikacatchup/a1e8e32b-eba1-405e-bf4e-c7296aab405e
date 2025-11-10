import React from 'react';

function CookieModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-4">
        <h2 className="text-xl font-bold text-gray-900">
          This site uses cookies, but not the kind you eat
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          We use cookies to remember log in details, provide secure log in, improve site functionality, and deliver personalized content. By continuing to browse the site, you accept cookies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button 
            onClick={onClose}
            className="bg-starbucks-green text-white px-6 py-2 rounded-full font-semibold hover:bg-starbucks-dark-green transition-colors flex-1"
          >
            Agree
          </button>
          <button className="text-starbucks-green border border-starbucks-green px-6 py-2 rounded-full font-semibold hover:bg-starbucks-light-green transition-colors flex-1">
            Change cookie settings
          </button>
        </div>
        
        <div className="pt-2">
          <a href="#" className="text-starbucks-green text-sm hover:underline">
            Privacy Notice
          </a>
        </div>
      </div>
    </div>
  );
}

export default CookieModal;