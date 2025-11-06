import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';
import { useAuth } from '@/layouts/Root';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated } = useSelector(state => state.user);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Quality', href: '/quality' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-800 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Precision Works
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? isScrolled
                      ? 'text-primary-800'
                      : 'text-white'
                    : isScrolled
                    ? 'text-gray-600 hover:text-primary-800'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      isScrolled ? 'bg-primary-800' : 'bg-white'
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                  Welcome, {user?.firstName || 'User'}
                </span>
                <Button
                  variant={isScrolled ? "outline" : "secondary"}
                  size="sm"
                  onClick={handleLogout}
                  icon="LogOut"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant={isScrolled ? "outline" : "secondary"} size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant={isScrolled ? "primary" : "accent"} size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
              isScrolled
                ? 'text-gray-600 hover:text-primary-800'
                : 'text-white hover:text-gray-200'
            }`}
          >
            <ApperIcon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg mt-2"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-primary-800 bg-primary-50'
                          : 'text-gray-600 hover:text-primary-800 hover:bg-primary-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Auth Section */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  {isAuthenticated ? (
                    <>
                      <div className="px-3 py-2 text-sm text-gray-600">
                        Welcome, {user?.firstName || 'User'}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleLogout}
                        icon="LogOut"
                        className="w-full"
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <Link to="/login" className="block">
                        <Button variant="outline" size="sm" className="w-full">
                          Login
                        </Button>
                      </Link>
                      <Link to="/signup" className="block">
                        <Button variant="primary" size="sm" className="w-full">
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;