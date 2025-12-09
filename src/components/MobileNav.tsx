import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Placeholder logo - easy to swap for real image later
const LOGO_SRC = ''; // Set to logo image path when available

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Why Choose Us', href: '#' },
  { label: 'Contact', href: '#' },
];

const MobileNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Sticky Top Navigation Bar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16"
        style={{
          backgroundColor: '#F4F4F2',
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        }}
      >
        <div className="flex h-full items-center justify-between px-4">
          {/* Left: Hamburger Menu */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-black/5"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" style={{ color: '#0C1A23' }} />
          </button>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {LOGO_SRC ? (
              <img
                src={LOGO_SRC}
                alt="TravelWith"
                className="h-8 w-auto md:h-9"
              />
            ) : (
              <span
                className="font-serif text-xl font-semibold md:text-2xl"
                style={{ color: '#0C1A23' }}
              >
                TravelWith
              </span>
            )}
          </div>

          {/* Right: Empty placeholder */}
          <div className="w-10" />
        </div>
      </header>

      {/* Drawer Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/40 transition-opacity duration-300',
          drawerOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Slide-out Drawer */}
      <nav
        className={cn(
          'fixed left-0 top-0 z-50 h-full w-72 transition-transform duration-300 ease-out',
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        style={{ backgroundColor: '#F4F4F2' }}
      >
        {/* Drawer Header */}
        <div className="flex h-14 items-center justify-between border-b border-black/10 px-4 md:h-16">
          <span
            className="font-serif text-lg font-semibold"
            style={{ color: '#0C1A23' }}
          >
            Menu
          </span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-black/5"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" style={{ color: '#0C1A23' }} />
          </button>
        </div>

        {/* Nav Items */}
        <ul className="px-4 py-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-black/5"
                style={{ color: '#0C1A23' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
