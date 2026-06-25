import * as React from 'react';
import { Link } from '@tanstack/react-router';

export default function Footer() {
  return (
    <footer className="w-full py-20 px-6 md:px-20 flex flex-col items-center space-y-8 bg-surface-container-highest border-t border-secondary/20 z-10 relative">
      <Link to="/" className="font-display-lg text-headline-md text-primary tracking-tight">
        LuxeBook
      </Link>
      
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-4">
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all cursor-pointer">
          Privacy Policy
        </a>
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all cursor-pointer">
          Terms of Service
        </a>
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all cursor-pointer">
          Sustainability
        </a>
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all cursor-pointer">
          Accessibility
        </a>
        <Link to="/contact" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all">
          Contact Us
        </Link>
      </div>
      
      <div className="flex space-x-8 mb-4">
        <a className="text-secondary hover:scale-110 transition-transform cursor-pointer" aria-label="Website">
          <span className="material-symbols-outlined">language</span>
        </a>
        <a className="text-secondary hover:scale-110 transition-transform cursor-pointer" aria-label="Podcast">
          <span className="material-symbols-outlined">podcasts</span>
        </a>
        <a className="text-secondary hover:scale-110 transition-transform cursor-pointer" aria-label="Instagram">
          <span className="material-symbols-outlined">photo_camera</span>
        </a>
      </div>
      
      <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-xl opacity-80">
        © 2024 LuxeBook Aesthetic Clinic. All rights reserved. Clinical Excellence in Quiet Luxury.
      </p>
    </footer>
  );
}
