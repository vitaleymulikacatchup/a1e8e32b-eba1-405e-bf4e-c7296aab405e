import React from 'react';

function AnnouncementBar() {
  return (
    <div className="bg-starbucks-green text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <span className="text-sm font-medium mr-4">It's a great day for coffee</span>
        <button className="bg-white text-starbucks-green px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
          Start an order
        </button>
      </div>
    </div>
  );
}

export default AnnouncementBar;