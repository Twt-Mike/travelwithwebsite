import { useState } from 'react';
import { Menu, X, Heart, ShoppingCart } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Why Choose Us', href: '#' },
  { label: 'Contact', href: '#' },
];

const LOGO_SRC = '';

const MobileNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Fixed header - transparent to overlay on hero */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14">
        <div className="flex h-full items-center justify-between px-4">
          {/* Left: Logo */}
          <div>
            {LOGO_SRC ? (
              <img
                src={LOGO_SRC}
                alt="TravelWith"
                className="h-8 w-auto"
              />
            ) : (
              <span className="text-xl font-bold text-white tracking-tight">
                TravelWith
              </span>
            )}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-2">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="Wishlist"
            >
              <Heart className="h-6 w-6 text-white" />
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="Cart"
            >
              <ShoppingCart className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Slide-out drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-14 items-center justify-between px-4 border-b border-gray-100">
          <span className="text-lg font-semibold text-gray-900">Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
