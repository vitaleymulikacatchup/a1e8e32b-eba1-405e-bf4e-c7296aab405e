import React, { useState } from 'react';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import HeroSection from './components/HeroSection';
import ProductSections from './components/ProductSections';
import Footer from './components/Footer';
import CookieModal from './components/CookieModal';

function App() {
  const [showCookieModal, setShowCookieModal] = useState(true);

  return (
    <div className="App">
      <Header />
      <AnnouncementBar />
      <main>
        <HeroSection />
        <ProductSections />
      </main>
      <Footer />
      {showCookieModal && <CookieModal onClose={() => setShowCookieModal(false)} />}
    </div>
  );
}

export default App;