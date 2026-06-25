import * as React from 'react';
import { Link } from '@tanstack/react-router';

interface HeaderProps {
  variant?: 'light' | 'dark';
}

export default function Header({ variant = 'light' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const baseNavClass =
    variant === 'dark'
      ? 'fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 bg-primary/70 backdrop-blur-xl border-b border-white/10 text-white transition-all duration-300'
      : 'fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 bg-background/70 backdrop-blur-xl border-b border-secondary/30 text-on-surface shadow-sm transition-all duration-300';

  const logoColorClass = variant === 'dark' ? 'text-white' : 'text-primary';

  const activeLinkClass = 'text-secondary border-b border-secondary font-medium pb-1';
  const inactiveLinkClass =
    variant === 'dark'
      ? 'text-white/70 hover:text-secondary transition-colors duration-300 pb-1'
      : 'text-on-surface-variant hover:text-secondary transition-colors duration-300 pb-1';

  return (
    <nav className={baseNavClass}>
      {/* Logo */}
      <Link to="/" className={`font-display-lg text-headline-sm tracking-tight ${logoColorClass}`}>
        LuxeBook
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-12">
        <Link to="/treatments" activeProps={{ className: activeLinkClass }} inactiveProps={{ className: inactiveLinkClass }}>
          Treatments
        </Link>
        <Link to="/services" activeProps={{ className: activeLinkClass }} inactiveProps={{ className: inactiveLinkClass }}>
          Services
        </Link>
        <Link to="/about" activeProps={{ className: activeLinkClass }} inactiveProps={{ className: inactiveLinkClass }}>
          About
        </Link>
        <Link to="/booking" activeProps={{ className: activeLinkClass }} inactiveProps={{ className: inactiveLinkClass }}>
          Booking
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="hidden md:flex items-center space-x-6">
        <Link
          to="/auth"
          search={{ mode: 'login' }}
          className={`font-label-caps text-label-caps transition-all ${
            variant === 'dark' ? 'text-white/70 hover:text-white' : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          Sign In
        </Link>
        <Link
          to="/auth"
          search={{ mode: 'signup' }}
          className="font-label-caps text-label-caps px-6 py-3 bg-primary text-on-primary gold-border hover:bg-primary-container transition-all"
        >
          Member Club
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex items-center justify-center p-2 rounded-md hover:text-secondary transition-colors focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-3xl">
          {isMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] h-[calc(100vh-60px)] bg-background/95 dark:bg-primary/95 backdrop-blur-2xl z-40 flex flex-col p-8 space-y-8 animate-fade-in md:hidden border-t border-secondary/20 shadow-2xl">
          <div className="flex flex-col space-y-6 text-xl">
            <Link
              to="/treatments"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{ className: 'text-secondary font-medium' }}
              className="font-display-lg text-headline-sm text-on-surface-variant dark:text-white/70 hover:text-secondary transition-colors"
            >
              Treatments
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{ className: 'text-secondary font-medium' }}
              className="font-display-lg text-headline-sm text-on-surface-variant dark:text-white/70 hover:text-secondary transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{ className: 'text-secondary font-medium' }}
              className="font-display-lg text-headline-sm text-on-surface-variant dark:text-white/70 hover:text-secondary transition-colors"
            >
              About
            </Link>
            <Link
              to="/booking"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{ className: 'text-secondary font-medium' }}
              className="font-display-lg text-headline-sm text-on-surface-variant dark:text-white/70 hover:text-secondary transition-colors"
            >
              Booking
            </Link>
          </div>
          
          <div className="h-px bg-secondary/20 w-full" />
          
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              to="/auth"
              search={{ mode: 'login' }}
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-4 font-label-caps text-label-caps border border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/auth"
              search={{ mode: 'signup' }}
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-4 bg-primary text-on-primary gold-border font-label-caps text-label-caps hover:bg-primary-container transition-all"
            >
              Member Club
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
