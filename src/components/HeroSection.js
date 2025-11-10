import React from 'react';

function HeroSection() {
  return (
    <section className="bg-starbucks-green text-white py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/hero-background.jpg" 
          alt="Military appreciation background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Thank you, veterans
            </h1>
            <p className="text-lg leading-relaxed">
              On Veterans Day, veterans, military service members, and military spouses receive a free tall brewed coffee. We're proud to support military communities, donating to the Wounded Warrior Project® and the USO.*
            </p>
            <button className="btn-outline">
              Find a store
            </button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="flex space-x-4">
              <img 
                src="/images/uso-logo.png" 
                alt="USO" 
                className="h-16 w-auto"
              />
              <img 
                src="/images/wounded-warrior-logo.png" 
                alt="Wounded Warrior Project" 
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;