import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import chat from "../../assets/chat.png"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleShowLogin = () => {
    navigate('/login');
  };

  const handleShowSignup = () => {
    navigate('/signup');
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
             <img src={chat} alt="App Logo" className="  " />
            <span className="text-2xl font-bold text-slate-900">WeChat</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#about" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              About
            </a>
            <a href="/#features" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              Features
            </a>
            <button
              onClick={handleShowLogin}
              className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Login
            </button>
            <button
              onClick={handleShowSignup}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-all font-medium shadow-md hover:shadow-lg"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="/#about" className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              About
            </a>
            <a href="/#features" className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              Features
            </a>
            <button
              onClick={() => {
                handleShowLogin();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-slate-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Login
            </button>
            <button
              onClick={() => {
                handleShowSignup();
                setIsMenuOpen(false);
              }}
              className="block w-full bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-all font-medium"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
