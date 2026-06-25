import * as React from "react";
import { Link } from "@tanstack/react-router";

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant = "light" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<any>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    // Session state
    const stored = localStorage.getItem("currentUser");
    if (stored) {
      setCurrentUser(JSON.parse(stored));
    }

    // Scroll state listener
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    window.location.reload();
  };

  // Luxury Floating Glassmorphic Pill Transition
  const navContainerClass = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled ? "p-4" : "p-0"
  }`;

  const navBarClass = `mx-auto w-full flex justify-between items-center transition-all duration-500 ${
    isScrolled
      ? "max-w-[1280px] px-8 py-3 bg-background/80 dark:bg-primary/80 shadow-[0_12px_35px_rgba(6,29,21,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl border border-[#cda052]/30 rounded-full"
      : "max-w-full px-6 md:px-20 py-6 bg-background/20 dark:bg-primary/20 backdrop-blur-sm border-b border-[#cda052]/10"
  }`;

  const logoColorClass = variant === "dark" 
    ? "text-white" 
    : "text-primary dark:text-white";

  // Sleek capsule tabs instead of boring plain lines
  const activeLinkClass = "text-primary dark:text-[#cda052] font-semibold px-4 py-2 bg-[#cda052]/15 dark:bg-[#cda052]/20 border border-[#cda052]/35 rounded-full transition-all duration-300";
  const inactiveLinkClass = "text-on-surface-variant dark:text-white/80 hover:text-primary dark:hover:text-[#cda052] font-medium px-4 py-2 hover:bg-[#cda052]/8 dark:hover:bg-white/5 rounded-full transition-all duration-300 hover:scale-[1.02]";

  const hamburgerBarColor = variant === "dark" || isMenuOpen ? "bg-white" : "bg-primary dark:bg-[#cda052]";

  return (
    <nav className={navContainerClass}>
      <div className={navBarClass}>
        {/* Logo */}
        <Link 
          to="/" 
          className={`font-display-lg text-headline-sm tracking-tight transition-all duration-300 flex items-center gap-1.5 group ${logoColorClass}`}
        >
          <span className="text-[#cda052] font-serif text-2xl transition-transform duration-700 ease-out group-hover:rotate-180 group-hover:scale-110">✥</span>
          <span className="relative overflow-hidden py-1">
            MediCore
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#cda052] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <Link
            to="/treatments"
            activeProps={{ className: activeLinkClass }}
            inactiveProps={{ className: inactiveLinkClass }}
          >
            Departments
          </Link>
          <Link
            to="/services"
            activeProps={{ className: activeLinkClass }}
            inactiveProps={{ className: inactiveLinkClass }}
          >
            Services
          </Link>
          <Link
            to="/about"
            activeProps={{ className: activeLinkClass }}
            inactiveProps={{ className: inactiveLinkClass }}
          >
            About Us
          </Link>
          <Link
            to="/booking"
            activeProps={{ className: activeLinkClass }}
            inactiveProps={{ className: inactiveLinkClass }}
          >
            Book Now
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {currentUser ? (
            <div className="flex items-center space-x-4 animate-fade-in">
              {/* VIP User Profile Chip */}
              <Link 
                to="/dashboard" 
                className="flex items-center gap-2 bg-gradient-to-r from-[#cda052]/10 to-[#cda052]/5 dark:from-white/10 dark:to-white/5 border border-[#cda052]/40 hover:border-[#cda052] px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_2px_8px_rgba(205,160,82,0.1)] hover:shadow-[0_4px_12px_rgba(205,160,82,0.2)] cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#cda052] animate-pulse"></span>
                <span className="text-primary dark:text-[#cda052] font-semibold text-[11px] font-label-caps tracking-wider">
                  {currentUser.name}
                </span>
              </Link>
              {/* Sign Out Button */}
              <button
                onClick={handleSignOut}
                className="flex items-center gap-1.5 font-label-caps text-[9px] tracking-widest text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 bg-red-500/5 hover:bg-red-500/10 px-4 py-2.5 border border-red-500/20 hover:border-red-500/40 rounded-full transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <span className="material-symbols-outlined text-[13px]">logout</span>
                SIGN OUT
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <Link
                to="/auth"
                search={{ mode: "login" }}
                className={`font-label-caps text-[10px] tracking-widest hover:scale-105 transition-all duration-300 ${
                  variant === "dark"
                    ? "text-white/80 hover:text-[#cda052]"
                    : "text-on-surface-variant hover:text-primary dark:hover:text-[#cda052]"
                }`}
              >
                Sign In
              </Link>
              <Link
                to="/auth"
                search={{ mode: "signup" }}
                className="font-label-caps text-[10px] tracking-widest px-6 py-3 border border-[#cda052]/30 rounded-full transition-all duration-500 hover:scale-105 font-bold relative overflow-hidden shimmer-gold text-primary hover:text-primary-container"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button (Animated Bars) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-[2px] ${hamburgerBarColor} transition-all duration-300 transform ${isMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
          <span className={`w-6 h-[2px] ${hamburgerBarColor} transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-[2px] ${hamburgerBarColor} transition-all duration-300 transform ${isMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-background/98 dark:bg-primary/98 backdrop-blur-3xl z-40 flex flex-col justify-center p-12 space-y-10 animate-fade-in md:hidden border-b-2 border-[#cda052]/20">
          
          {/* Logo in Drawer */}
          <div className="text-center animate-float">
            <span className="text-[#cda052] text-4xl block mb-2 font-serif">✥</span>
            <span className="font-display-lg text-headline-md tracking-wider text-primary dark:text-white">
              MediCore
            </span>
          </div>

          {/* Links with staggered delay */}
          <div className="flex flex-col space-y-6 text-center text-xl">
            <Link
              to="/treatments"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{ className: "text-[#cda052] font-semibold" }}
              className="font-display-lg text-headline-sm text-on-surface-variant dark:text-white/70 hover:text-[#cda052] transition-colors"
            >
              Departments
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{ className: "text-[#cda052] font-semibold" }}
              className="font-display-lg text-headline-sm text-on-surface-variant dark:text-white/70 hover:text-[#cda052] transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{ className: "text-[#cda052] font-semibold" }}
              className="font-display-lg text-headline-sm text-on-surface-variant dark:text-white/70 hover:text-[#cda052] transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/booking"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{ className: "text-[#cda052] font-semibold" }}
              className="font-display-lg text-headline-sm text-on-surface-variant dark:text-white/70 hover:text-[#cda052] transition-colors"
            >
              Book Now
            </Link>
          </div>

          <div className="h-px bg-[#cda052]/20 w-full" />

          {/* Drawer Actions */}
          <div className="flex flex-col space-y-4 pt-4">
            {currentUser ? (
              <>
                <div className="text-center font-body-md text-on-surface-variant text-sm">
                  Logged in as <span className="font-semibold text-primary dark:text-[#cda052]">{currentUser.name}</span>
                </div>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center py-4 bg-primary text-on-primary border border-[#cda052]/30 rounded-full font-label-caps text-label-caps hover:bg-primary-container transition-all"
                >
                  My Profile
                </Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleSignOut();
                  }}
                  className="w-full text-center py-4 border border-red-500/20 text-red-500 hover:bg-red-500/5 rounded-full font-label-caps text-label-caps transition-colors cursor-pointer"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  search={{ mode: "login" }}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center py-3 font-label-caps text-label-caps border border-[#cda052]/30 text-secondary hover:bg-secondary/10 transition-colors rounded-full"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth"
                  search={{ mode: "signup" }}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center py-3 border border-[#cda052]/30 rounded-full font-label-caps text-label-caps transition-all shimmer-gold text-primary hover:text-primary-container"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
