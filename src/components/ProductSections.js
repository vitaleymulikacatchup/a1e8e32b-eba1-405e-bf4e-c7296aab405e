import React from 'react';

function ProductSections() {
  return (
    <div className="space-y-0">
      {/* Holiday Drinks Section */}
      <section className="bg-starbucks-red text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-md space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Bring on the merry
              </h2>
              <p className="text-lg leading-relaxed">
                Festive flavors of spiced gingerbread, sweet peppermint, rich caramel and buttery sugar cookie are here to make every moment merrier.
              </p>
              <button className="btn-outline">
                Order a seasonal treat
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/images/holiday-drinks.jpg" 
              alt="Holiday drinks" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Thanksgiving Blend Section */}
      <section className="bg-starbucks-green text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <div className="relative order-2 lg:order-1">
            <img 
              src="/images/thanksgiving-blend.jpg" 
              alt="Thanksgiving blend coffee" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center p-8 lg:p-16 order-1 lg:order-2">
            <div className="max-w-md space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Best brewed together
              </h2>
              <p className="text-lg leading-relaxed">
                Featuring beans from the world's most distinctive coffee regions, and with notes of candied pecan and sage, Starbucks® Thanksgiving® Blend whole bean coffee is perfect to gift, share and savor.
              </p>
              <button className="btn-outline">
                Order now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Non-dairy Section */}
      <section className="bg-starbucks-red text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-md space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Make it nondairy. No extra charge.
              </h2>
              <p className="text-lg leading-relaxed">
                Enjoy your favorite holiday beverage or other drink of your choice with nondairy milk. Choose from oat, almond, coconut or soy— for no additional charge.
              </p>
              <button className="btn-outline">
                Order now
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/images/nondairy-drink.jpg" 
              alt="Non-dairy holiday drink" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section className="bg-starbucks-cream text-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
          <div className="relative order-2 lg:order-1">
            <img 
              src="/images/holiday-cup.jpg" 
              alt="Holiday cup" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center p-8 lg:p-16 order-1 lg:order-2">
            <div className="max-w-md space-y-6 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Our gift to you
              </h2>
              <p className="text-lg leading-relaxed">
                Make the season merrier with a <strong>free handcrafted drink</strong> with purchase. It's our treat during your first week as a Starbucks® Rewards member.**
              </p>
              <button className="bg-starbucks-green text-white px-6 py-3 rounded-full font-semibold hover:bg-starbucks-dark-green transition-colors">
                Join now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductSections;