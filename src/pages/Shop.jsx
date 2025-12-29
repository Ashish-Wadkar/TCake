import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { 
  FiFilter, 
  FiGrid, 
  FiList, 
  FiSearch, 
  FiX,
  FiChevronDown,
  FiStar,
  FiTag,
  FiTrendingUp,
  FiRefreshCw
} from "react-icons/fi";

const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "Cakes", name: "Cakes", count: products.filter(p => p.category === "Cakes").length },
  { id: "Pastries", name: "Pastries", count: products.filter(p => p.category === "Pastries").length },
  { id: "Cupcakes", name: "Cupcakes", count: products.filter(p => p.category === "Cupcakes").length },
  { id: "Balloons", name: "Balloons", count: products.filter(p => p.category === "Balloons").length },
  { id: "Decorations", name: "Decorations", count: products.filter(p => p.category === "Decorations").length },
  { id: "Birthday", name: "Birthday Special", count: products.filter(p => p.category === "Birthday").length },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "newest", label: "Newest First" },
  { id: "popular", label: "Most Popular" },
];

const Shop = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedOccasions, setSelectedOccasions] = useState([]);

  const occasions = ["Birthday", "Anniversary", "Baby Shower"];

  // Filter products based on all criteria
  const filteredProducts = products.filter(product => {
    // Category filter
    if (category && category !== "all" && product.category !== category) {
      return false;
    }

    // Search filter
    if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !product.description?.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Rating filter
    if (selectedRating > 0 && product.rating < selectedRating) {
      return false;
    }

    // Occasions filter
    if (selectedOccasions.length > 0 && !selectedOccasions.some(occ => 
      product.occasions?.includes(occ) || product.tags?.includes(occ))) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      case "popular":
        return (b.popularity || 0) - (a.popularity || 0);
      default:
        return 0;
    }
  });

  const handleOccasionToggle = (occasion) => {
    setSelectedOccasions(prev =>
      prev.includes(occasion)
        ? prev.filter(o => o !== occasion)
        : [...prev, occasion]
    );
  };

  const handleResetFilters = () => {
    setPriceRange([0, 5000]);
    setSelectedRating(0);
    setSelectedOccasions([]);
    setSearchQuery("");
  };

  const getCurrentCategory = () => {
    return categories.find(cat => cat.id === category) || categories[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {getCurrentCategory().name}
              </h1>
              <p className="text-xl opacity-90">
                Discover our collection of delicious treats and celebration essentials
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-center">
              <div className="text-4xl font-bold mb-2">{sortedProducts.length}</div>
              <div className="opacity-80">Products Available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Controls Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for cakes, pastries, balloons..."
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FiX />
              </button>
            )}
          </div>

          {/* Sort and View Controls */}
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-10 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none cursor-pointer"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-white shadow" : "hover:bg-white/50"}`}
              >
                <FiGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${viewMode === "list" ? "bg-white shadow" : "hover:bg-white/50"}`}
              >
                <FiList size={20} />
              </button>
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg"
            >
              <FiFilter />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters (Desktop & Mobile when toggled) */}
          <div className={`${showFilters ? 'block fixed inset-0 z-50 lg:static lg:block' : 'hidden lg:block'} lg:w-1/4`}>
            {/* Backdrop for mobile */}
            {showFilters && (
              <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
                onClick={() => setShowFilters(false)}
              />
            )}
            
            {/* Filters Panel */}
            <div className={`bg-white rounded-2xl shadow-lg p-6 lg:sticky lg:top-24 ${
              showFilters ? 'fixed top-0 right-0 h-full w-80 lg:static lg:w-auto z-50 overflow-y-auto animate-slide-in-right' : ''
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700"
                  >
                    <FiRefreshCw />
                    Reset
                  </button>
                  {showFilters && (
                    <button
                      onClick={() => setShowFilters(false)}
                      className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
                    >
                      <FiX size={24} />
                    </button>
                  )}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Min: ₹{priceRange[0]}</span>
                    <span className="text-sm text-gray-600">Max: ₹{priceRange[1]}</span>
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="100"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Categories Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                  {categories.map(cat => (
                    <Link
                      key={cat.id}
                      to={`/shop/${cat.id}`}
                      onClick={() => window.innerWidth < 1024 && setShowFilters(false)}
                      className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                        category === cat.id
                          ? "bg-pink-50 text-pink-700 font-semibold border-l-4 border-pink-500"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        category === cat.id
                          ? "bg-pink-100 text-pink-700"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {cat.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Occasions Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Occasions</h4>
                <div className="space-y-2">
                  {occasions.map(occasion => (
                    <button
                      key={occasion}
                      onClick={() => handleOccasionToggle(occasion)}
                      className={`flex items-center gap-2 p-3 rounded-lg w-full text-left transition-all ${
                        selectedOccasions.includes(occasion)
                          ? "bg-pink-50 text-pink-700 font-semibold border-l-4 border-pink-500"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <FiTag className="text-gray-400" />
                      <span>{occasion}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Filters */}
              {(selectedOccasions.length > 0 || priceRange[0] > 0 || priceRange[1] < 5000) && (
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h5 className="font-semibold text-blue-900 mb-2">Active Filters</h5>
                  <div className="flex flex-wrap gap-2">
                    {priceRange[0] > 0 && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        Min ₹{priceRange[0]}
                      </span>
                    )}
                    {priceRange[1] < 5000 && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        Max ₹{priceRange[1]}
                      </span>
                    )}
                    {selectedOccasions.map(occasion => (
                      <span key={occasion} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {occasion}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {sortedProducts.length} Products Found
                  </h2>
                  <p className="text-gray-600">
                    in {getCurrentCategory().name}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FiTrendingUp className="text-green-500" />
                  <span className="text-gray-600">
                    Showing {Math.min(12, sortedProducts.length)} of {sortedProducts.length} results
                  </span>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {sortedProducts.length > 0 ? (
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-6"
              }>
                {sortedProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <FiSearch className="text-gray-400 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Products Found
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We couldn't find any products matching your filters. 
                  Try adjusting your search or browse all categories.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg"
                >
                  <FiRefreshCw />
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Pagination (Optional) */}
            {sortedProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                    ←
                  </button>
                  {[1].map(page => (
                    <button
                      key={page}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                        page === 1
                          ? "bg-pink-600 text-white"
                          : "border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50">
                    →
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;