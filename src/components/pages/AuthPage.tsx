import * as React from 'react';
import { useSearch, useNavigate, Link } from '@tanstack/react-router';
import LuxeBackground from '../common/LuxeBackground';

export default function AuthPage() {
  const search = useSearch({ from: '/auth' });
  const navigate = useNavigate();
  
  const [view, setView] = React.useState<'login' | 'signup'>('login');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);

  React.useEffect(() => {
    if (search.mode) {
      setView(search.mode);
    }
  }, [search.mode]);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowToast(true);

    // Simulate verification delay and redirect client-side to dashboard
    setTimeout(() => {
      setIsSubmitting(false);
      navigate({ to: '/dashboard' });
    }, 1500);
  };

  return (
    <div className="font-body-md text-on-surface min-h-screen relative overflow-hidden flex items-center justify-center p-6">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <LuxeBackground theme="dark" />
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-fixed/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-container/40 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 w-full max-w-[1100px] flex flex-col md:flex-row items-stretch min-h-[650px] glass-panel overflow-hidden rounded-xl shadow-2xl animate-rise">
        {/* Left Side: Brand/Visual */}
        <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-primary items-center justify-center p-12 text-center border-r border-secondary/20">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              alt="Emerald water ripples"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgKPhU529WQzk990SvDvmkHwC3GDz8zXt8i8qM30Tkglrqc0JApyrznzQIRGAr_OgMlTp7whqaKE-CGRW_-LItnwl6PilKG9LlC5Hga6wSUQcm2fbAjXq2VSW-daYIrLQK89ZzMLCEf8P3gZwswqOt74AV49ecaC0GDgwyD6z6oXqvmBFt13usx-k8flFRFplPAXC1H5mS8fn7olBoA4nDfwQa0NJ7KbdjhTQ4tlapJwQc8VZRNWcgVUjx8yngQsqUwZqSAd4TNyg"
            />
          </div>
          <div className="relative z-10 space-y-6">
            <Link to="/" className="font-display-lg text-display-lg text-secondary-fixed tracking-tight hover:opacity-80 transition-opacity block">
              LuxeBook
            </Link>
            <div className="h-px w-24 bg-secondary-fixed/50 mx-auto"></div>
            <p className="font-headline-sm text-headline-sm text-on-primary/90 max-w-sm mx-auto leading-relaxed">
              Clinical Excellence in Quiet Luxury.
            </p>
            <p className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest pt-4">
              Aesthetic Medical Group
            </p>
          </div>
        </div>

        {/* Right Side: Interaction */}
        <div className="w-full md:w-1/2 flex flex-col bg-white/50 backdrop-blur-md p-8 md:p-16">
          {/* Navigation Tabs */}
          <nav className="flex space-x-8 mb-12">
            <button
              className={`font-label-caps text-label-caps pb-2 border-b-2 transition-all duration-300 cursor-pointer ${
                view === 'login' ? 'border-secondary text-on-surface' : 'border-transparent text-on-surface-variant hover:text-on-surface'
              }`}
              id="tab-login"
              onClick={() => setView('login')}
            >
              Login
            </button>
            <button
              className={`font-label-caps text-label-caps pb-2 border-b-2 transition-all duration-300 cursor-pointer ${
                view === 'signup' ? 'border-secondary text-on-surface' : 'border-transparent text-on-surface-variant hover:text-on-surface'
              }`}
              id="tab-signup"
              onClick={() => setView('signup')}
            >
              Create Account
            </button>
          </nav>

          {/* Login View */}
          <div className={`fade-in space-y-8 flex-grow ${view === 'login' ? '' : 'hidden'}`} id="view-login">
            <div className="space-y-2">
              <h2 className="font-headline-md text-headline-md text-primary">Welcome Back</h2>
              <p className="font-body-md text-on-surface-variant">Please enter your credentials to access your clinical dashboard.</p>
            </div>
            <form className="space-y-6" onSubmit={handleAuthSubmit}>
              <div className="relative pt-4">
                <label className="font-label-caps text-[10px] text-secondary absolute top-0 left-0" htmlFor="email">Email Address</label>
                <input className="w-full py-4 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30" id="email" placeholder="e.g. adrian@luxury.com" required type="email"/>
              </div>
              <div className="relative pt-4">
                <label className="font-label-caps text-[10px] text-secondary absolute top-0 left-0" htmlFor="password">Secure Password</label>
                <input className="w-full py-4 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30" id="password" placeholder="••••••••" required type="password"/>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input className="w-4 h-4 border-secondary/30 rounded-sm text-secondary focus:ring-secondary/20" type="checkbox"/>
                  <span className="font-body-md text-[14px] text-on-surface-variant group-hover:text-on-surface transition-colors">Remember Me</span>
                </label>
                <a className="font-label-caps text-[11px] text-secondary hover:text-primary transition-colors underline underline-offset-4 cursor-pointer">Forgot Password?</a>
              </div>
              <div className="pt-6 space-y-4">
                <button
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary text-secondary-fixed border border-secondary-fixed/30 font-label-caps text-label-caps tracking-[0.2em] transition-all duration-500 hover:bg-primary-container hover:shadow-lg hover:shadow-primary/20 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'VERIFYING...' : 'LOGIN'}
                </button>
                <p className="text-center font-body-md text-[13px] text-on-surface-variant">
                  By signing in, you agree to our <a className="underline text-on-surface cursor-pointer">Privacy Standards</a>.
                </p>
              </div>
            </form>
          </div>

          {/* Sign Up View */}
          <div className={`fade-in space-y-8 flex-grow ${view === 'signup' ? '' : 'hidden'}`} id="view-signup">
            <div className="space-y-2">
              <h2 className="font-headline-md text-headline-md text-primary">Member Registration</h2>
              <p className="font-body-md text-on-surface-variant">Join our exclusive circle for bespoke aesthetic journeys.</p>
            </div>
            <form className="space-y-5" onSubmit={handleAuthSubmit}>
              <div className="relative pt-4">
                <label className="font-label-caps text-[10px] text-secondary absolute top-0 left-0" htmlFor="reg-name">Full Name</label>
                <input className="w-full py-3 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30" id="reg-name" placeholder="Evelyn Thorne" required type="text"/>
              </div>
              <div className="relative pt-4">
                <label className="font-label-caps text-[10px] text-secondary absolute top-0 left-0" htmlFor="reg-email">Email Address</label>
                <input className="w-full py-3 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30" id="reg-email" placeholder="Email Address" required type="email"/>
              </div>
              <div className="relative pt-4">
                <label className="font-label-caps text-[10px] text-secondary absolute top-0 left-0" htmlFor="reg-phone">Phone Number</label>
                <input className="w-full py-3 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30" id="reg-phone" placeholder="+1 (555) 000-0000" required type="tel"/>
              </div>
              <div className="relative pt-4">
                <label className="font-label-caps text-[10px] text-secondary absolute top-0 left-0" htmlFor="reg-password">Create Password</label>
                <input className="w-full py-3 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30" id="reg-password" placeholder="••••••••" required type="password"/>
              </div>
              <div className="pt-4 space-y-4">
                <button
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary text-secondary-fixed border border-secondary-fixed/30 font-label-caps text-label-caps tracking-[0.2em] transition-all duration-500 hover:bg-primary-container hover:shadow-lg hover:shadow-primary/20 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'CREATING...' : 'CREATE ACCOUNT'}
                </button>
              </div>
            </form>
          </div>

          {/* Footer Support */}
          <div className="mt-auto pt-8 border-t border-secondary/10 flex items-center justify-between">
            <span className="flex items-center text-on-surface-variant text-[12px] font-body-md">
              <span className="material-symbols-outlined mr-2 text-[18px]">verified_user</span>
              Secure SSL Encrypted
            </span>
            <button className="flex items-center text-on-surface-variant hover:text-secondary text-[12px] font-body-md transition-colors cursor-pointer">
              <span className="material-symbols-outlined mr-1 text-[18px]">support_agent</span>
              Support
            </button>
          </div>
        </div>
      </main>

      {/* Success Message Toast */}
      <div
        className={`fixed bottom-10 right-10 transition-all duration-500 z-50 ${
          showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
        id="toast"
      >
        <div className="glass-panel px-6 py-4 flex items-center space-x-4 border-l-4 border-secondary">
          <span className="material-symbols-outlined text-secondary">check_circle</span>
          <p className="font-body-md text-primary">Identity verified. Redirecting to clinical suite...</p>
        </div>
      </div>
    </div>
  );
}
