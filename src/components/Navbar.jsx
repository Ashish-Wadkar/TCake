import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Navbar.css";
import { 
  FiShoppingCart, 
  FiUser, 
  FiSearch, 
  FiMenu, 
  FiX,
  FiHome,
  FiPackage,
  FiInfo,
  FiPhone,
  FiChevronDown
} from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: <FiHome /> },
    { path: "/shop", label: "Shop", icon: <FiPackage /> },
    // { path: "/#", label: "Categories", icon: <FiChevronDown />, submenu: [
    //   { path: "/cakes", label: "Cakes" },
    //   { path: "/pastries", label: "Pastries" },
    //   { path: "/cupcakes", label: "Cupcakes" },
    //   { path: "/decorations", label: "Decorations" },
    // ]},
    { path: "/about", label: "About", icon: <FiInfo /> },
    { path: "/contact", label: "Contact", icon: <FiPhone /> },
  ];

  const cartItemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Implement your search logic here
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-xl" 
          : "bg-linear-to-r from-gray-900 via-black to-gray-900"
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                scrolled 
                  ? "bg-linear-to-r from-pink-600 to-rose-600" 
                  : "bg-linear-to-r from-pink-500 to-rose-500"
              }`}>
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <h1 className={`text-2xl font-bold transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}>
                  T<span className="text-pink-500">CAKE</span>
                </h1>
                <span className={`text-xs transition-colors ${
                  scrolled ? "text-gray-500" : "text-gray-300"
                }`}>
                  Sweet Moments
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  <Link
                    to={link.path}
                    className={`flex items-center gap-2 font-medium transition-all duration-300 ${
                      scrolled 
                        ? location.pathname === link.path
                          ? "text-pink-600"
                          : "text-gray-700 hover:text-pink-600"
                        : location.pathname === link.path
                          ? "text-pink-400"
                          : "text-gray-300 hover:text-pink-400"
                    }`}
                  >
                    <span className="text-sm">{link.icon}</span>
                    {link.label}
                  </Link>
                  
                  {/* Active Indicator */}
                  {location.pathname === link.path && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-pink-500 to-rose-500 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  scrolled 
                    ? "hover:bg-gray-100 text-gray-700" 
                    : "hover:bg-white/10 text-white"
                }`}
                aria-label="Search"
              >
                <FiSearch size={20} />
              </button>

              {/* User Account */}
              <Link
                to="#"
                className={`hidden md:block p-2 rounded-full transition-all duration-300 ${
                  scrolled 
                    ? "hover:bg-gray-100 text-gray-700" 
                    : "hover:bg-white/10 text-white"
                }`}
                aria-label="Account"
              >
                <FiUser size={20} />
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2"
                aria-label="Cart"
              >
                <div className={`relative p-2 rounded-full transition-all duration-300 ${
                  scrolled 
                    ? "hover:bg-gray-100 text-gray-700" 
                    : "hover:bg-white/10 text-white"
                }`}>
                  <FiShoppingCart size={22} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-linear-to-r from-pink-600 to-rose-600 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                      {cartItemCount}
                    </span>
                  )}
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  scrolled 
                    ? "hover:bg-gray-100 text-gray-700" 
                    : "hover:bg-white/10 text-white"
                }`}
                aria-label="Menu"
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-2xl animate-slide-down">
            <div className="max-w-3xl mx-auto px-4 py-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for cakes, pastries, decorations..."
                  className="w-full px-6 py-4 pr-14 text-gray-900 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-600 transition-colors"
                >
                  <FiSearch size={22} />
                </button>
              </form>
              
              {/* Search Suggestions */}
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  "Birthday Cakes",
                  "Wedding Cakes",
                  "Cupcakes",
                  "Pastries",
                  "Balloons",
                  "Decorations",
                  "Chocolate Cake",
                  "Red Velvet"
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchQuery(suggestion)}
                    className="px-3 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-pink-50 hover:text-pink-700 rounded-lg transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 bg-white shadow-2xl animate-slide-in-right">
            <div className="p-6 h-full overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">TCAKE</h2>
                    <span className="text-xs text-gray-500">Menu</span>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-700"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* User Info */}
              <div className="mb-6 p-4 bg-linear-to-r from-pink-50 to-rose-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <FiUser className="text-pink-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Welcome!</h3>
                    <Link
                      to="#"
                      className="text-sm text-pink-600 hover:text-pink-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      Sign in / Register
                    </Link>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2 mb-8">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                        location.pathname === link.path
                          ? "bg-linear-to-r from-pink-50 to-rose-50 text-pink-700 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-pink-600">{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  </div>
                ))}
              </nav>

              

               

               
            </div>
          </div>
        </div>
      )}

      
       
    </>
  );
};

export default Navbar;