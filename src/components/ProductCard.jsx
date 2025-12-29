import { useState } from "react";
import { FaShoppingCart, FaEye, FaHeart, FaRegHeart } from "react-icons/fa";
import { FiStar, FiPackage, FiTag } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../assets/css/ProductCart.css";
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle add to cart with animation
  const handleAddToCart = () => {
    addToCart(product);
    // You could add a toast notification here
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Product Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-linear-to-r from-pink-600 to-rose-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              New
            </span>
          )}
          {product.discount && (
            <span className="bg-linear-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              -{product.discount}%
            </span>
          )}
          {product.bestSeller && (
            <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pink-600 hover:scale-110 hover:bg-pink-50 transition-all duration-300 shadow-lg"
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isWishlisted ? <FaHeart className="text-pink-600" /> : <FaRegHeart />}
          </button>
          
          <Link
            to={`/product/${product.id}`}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:scale-110 hover:bg-blue-50 transition-all duration-300 shadow-lg"
            title="Quick View"
          >
            <FaEye />
          </Link>
          
          <button
            onClick={handleAddToCart}
            className="w-12 h-12 bg-linear-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg"
            title="Add to Cart"
          >
            <FaShoppingCart />
          </button>
        </div>

        {/* Category Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm">
            <FiPackage size={12} />
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1 group-hover:text-pink-600 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description || "Delicious cake made with premium ingredients"}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                className={`${
                  star <= (product.rating || 4)
                    ? "fill-current text-amber-500"
                    : "text-gray-300"
                }`}
                size={16}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">
            ({product.reviews || "24"} reviews)
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-pink-600">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            {product.shipping && (
              <span className="text-xs text-green-600 font-medium">
                {product.shipping}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="px-5 py-2.5 bg-linear-to-r from-pink-50 to-rose-50 text-pink-700 rounded-xl font-semibold hover:from-pink-100 hover:to-rose-100 hover:text-pink-800 hover:shadow-lg transition-all duration-300 group/btn flex items-center gap-2"
          >
            <FaShoppingCart className="group-hover/btn:scale-110 transition-transform" />
            Add
          </button>
        </div>

        {/* Tags */}
        {product.tags && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {product.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs flex items-center gap-1"
                >
                  <FiTag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stock Indicator */}
      {product.stock && product.stock < 10 && (
        <div className="px-5 pb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Only {product.stock} left!</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-amber-500 to-orange-500"
                style={{ width: `${(product.stock / 10) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;