import React from 'react';

function Footer() {
  return (
    <footer className="bg-starbucks-cream text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-starbucks-green">Our Company</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Our Coffee</a></li>
              <li><a href="#" className="hover:text-starbucks-green">About Starbucks</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Starbucks Archive</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Investor Relations</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Customer Service</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Careers</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-starbucks-green">Culture and Values</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Belonging at Starbucks</a></li>
              <li><a href="#" className="hover:text-starbucks-green">College Achievement Plan</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Alumni Community</a></li>
              <li><a href="#" className="hover:text-starbucks-green">U.S. Careers</a></li>
              <li><a href="#" className="hover:text-starbucks-green">International Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Social Impact</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-starbucks-green">Communities</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Starbucks Foundation</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Sustainability</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Environmental and Social Impact Reporting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Business Partners</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-starbucks-green">Landlord Support Center</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Suppliers</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Corporate Gift Card Sales</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Office and Foodservice Coffee</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Order and Pick Up</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-starbucks-green">Order on the App</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Order on the Web</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Delivery</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Order and Pick Up Options</a></li>
              <li><a href="#" className="hover:text-starbucks-green">Explore and Find Coffee for Home</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-starbucks-green">
                <span className="sr-only">Spotify</span>
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-600 hover:text-starbucks-green">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-600 hover:text-starbucks-green">
                <span className="sr-only">Pinterest</span>
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-600 hover:text-starbucks-green">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-600 hover:text-starbucks-green">
                <span className="sr-only">YouTube</span>
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-600 hover:text-starbucks-green">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              </a>
            </div>
          </div>
          
          <div className="mt-8 space-y-4 text-sm text-gray-600">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-starbucks-green">Privacy Notice</a>
              <a href="#" className="hover:text-starbucks-green">Consumer Health Privacy Notice</a>
              <a href="#" className="hover:text-starbucks-green">Terms of Use</a>
              <a href="#" className="hover:text-starbucks-green">Do Not Sell or Share My Personal Information</a>
              <a href="#" className="hover:text-starbucks-green">CA Supply Chain Act</a>
              <a href="#" className="hover:text-starbucks-green">Accessibility</a>
              <a href="#" className="hover:text-starbucks-green">Cookie Preferences</a>
            </div>
            
            <p className="text-xs">
              © 2025 Starbucks Coffee Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;