import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Fleet } from './components/Fleet';
import { Contact } from './components/Contact';
import { LoginModal } from './components/LoginModal';
import { BookingModal } from './components/BookingModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 smooth-scroll">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      <section className="scroll-section">
        <Hero onBookClick={() => setIsBookingOpen(true)} />
      </section>
      
      <section className="scroll-section">
        <Features />
      </section>
      
      <section className="scroll-section">
        <Fleet />
      </section>
      
      <section className="scroll-section">
        <Pricing onBookClick={() => setIsBookingOpen(true)} />
      </section>
      
      <section className="scroll-section">
        <Testimonials />
      </section>
      
      <section className="scroll-section">
        <Contact />
      </section>
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}

export default App;