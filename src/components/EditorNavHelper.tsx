
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const EditorNavHelper = () => {
  const location = useLocation();
  
  // Only show this component in development mode or Lovable editor
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-800 text-white p-4 rounded-lg shadow-lg opacity-75 hover:opacity-100 transition-opacity">
      <h4 className="text-sm font-bold mb-2">Editor Navigation</h4>
      <div className="flex flex-col gap-2 text-sm">
        <Link 
          to="/" 
          className={`${location.pathname === '/' ? 'font-bold text-green-400' : 'text-white'}`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`${location.pathname === '/about' ? 'font-bold text-green-400' : 'text-white'}`}
        >
          About
        </Link>
        <Link 
          to="/haggisinjapan" 
          className={`${location.pathname === '/haggisinjapan' ? 'font-bold text-green-400' : 'text-white'}`}
        >
          Haggis in Japan
        </Link>
        <Link 
          to="/ourtraveltreatsjpn" 
          className={`${location.pathname === '/ourtraveltreatsjpn' ? 'font-bold text-green-400' : 'text-white'}`}
        >
          Our Travel Treats Japan
        </Link>
        <Link 
          to="/haggisinjapannovember2026" 
          className={`${location.pathname === '/haggisinjapannovember2026' ? 'font-bold text-green-400' : 'text-white'}`}
        >
          Haggis in Japan Nov 2026
        </Link>
      </div>
    </div>
  );
};

export default EditorNavHelper;
