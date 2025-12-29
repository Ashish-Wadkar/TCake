import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { 
  FiShoppingCart, 
  FiHeart,  
  FiStar,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiPackage,
  FiChevronRight,
  FiChevronLeft
} from "react-icons/fi";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart, toggleWishlist, cart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("medium");
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-pink-600 hover:text-pink-700 font-semibold">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&fit=crop",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&fit=crop"
  ];

  const sizes = [
    { id: "small", label: "Small (Serves 6-8)", price: product.price * 0.7 },
    { id: "medium", label: "Medium (Serves 10-12)", price: product.price },
    { id: "large", label: "Large (Serves 15-20)", price: product.price * 1.5 },
    { id: "Extra Large", label: "Extra Large (Serves 25+)", price: product.price * 2 }
  ];

  const isInCart = cart.some(item => item.id === product.id);
  const currentPrice = sizes.find(s => s.id === selectedSize)?.price || product.price;

  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      qty: quantity,
      price: currentPrice,
      selectedSize,
    };
    addToCart(cartProduct);
  };

  

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-pink-600">Home</Link>
          <FiChevronRight className="mx-2" />
          <Link to="/shop" className="hover:text-pink-600">Shop</Link>
          <FiChevronRight className="mx-2" />
          <Link to={`/shop/${product.category}`} className="hover:text-pink-600 capitalize">
            {product.category}
          </Link>
          <FiChevronRight className="mx-2" />
          <span className="text-gray-900 font-medium truncate">{product.title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="sticky top-6">
              {/* Main Image */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
                <img
                  src={productImages[selectedImage]}
                  alt={product.title}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-linear-to-r from-pink-600 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    -{product.discount}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-4 overflow-x-auto pb-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 ${
                      selectedImage === index 
                        ? "border-pink-500" 
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Image Navigation */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : productImages.length - 1)}
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-600"
                >
                  <FiChevronLeft />
                  Previous
                </button>
                <button
                  onClick={() => setSelectedImage(prev => prev < productImages.length - 1 ? prev + 1 : 0)}
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-600"
                >
                  Next
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {/* Product Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold capitalize">
                    {product.category}
                  </span>
                  {product.isBestSeller && (
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                      🔥 Best Seller
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`${
                          i < Math.floor(product.rating || 4.5)
                            ? "fill-current text-amber-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.reviews || "24"} reviews
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="text-green-600 font-semibold">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-linear-to-r from-pink-50 to-rose-50 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold text-pink-600">
                    ₹{currentPrice}
                  </div>
                  {product.originalPrice && (
                    <>
                      <div className="text-2xl text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </div>
                      <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Save ₹{product.originalPrice - currentPrice}
                      </div>
                    </>
                  )}
                </div>
                <p className="text-gray-600">
                  Free shipping on orders above ₹5000
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Size</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedSize === size.id
                          ? "border-pink-500 bg-pink-50"
                          : "border-gray-200 hover:border-pink-300"
                      }`}
                    >
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 mb-1">
                          {size.label.split(" ")[0]}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          {size.label.split("(")[1]}
                        </div>
                        <div className="font-bold text-pink-600">
                          ₹{size.price}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                    <div className="flex items-center bg-gray-100 rounded-xl">
                      <button
                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                        className="px-4 py-3 text-gray-600 hover:text-pink-600"
                      >
                        -
                      </button>
                      <span className="px-6 py-3 text-xl font-bold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(prev => prev + 1)}
                        className="px-4 py-3 text-gray-600 hover:text-pink-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Total</h3>
                    <div className="text-3xl font-bold text-pink-600">
                      ₹{currentPrice * quantity}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg transition-all ${
                      isInCart
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-linear-to-r from-pink-600 to-rose-600 text-white hover:shadow-xl hover:scale-105"
                    }`}
                  >
                    <FiShoppingCart size={20} />
                    {isInCart ? "Added to Cart ✓" : "Add to Cart"}
                  </button>

                  <button
                    onClick={() => toggleWishlist(product)}
                    className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl border-2 border-pink-500 text-pink-600 font-bold hover:bg-pink-50 transition-colors"
                  >
                    <FiHeart size={20} />
                    Wishlist
                  </button>
                </div>

                
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FiTruck className="text-pink-600 text-xl" />
                  </div>
                  <div className="font-semibold text-gray-900">Free Shipping</div>
                  <div className="text-sm text-gray-600">Above ₹1000</div>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FiShield className="text-pink-600 text-xl" />
                  </div>
                  <div className="font-semibold text-gray-900">Quality Guarantee</div>
                  <div className="text-sm text-gray-600">100% Fresh</div>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FiRefreshCw className="text-pink-600 text-xl" />
                  </div>
                  <div className="font-semibold text-gray-900">Easy Returns</div>
                  <div className="text-sm text-gray-600">24 Hours</div>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FiPackage className="text-pink-600 text-xl" />
                  </div>
                  <div className="font-semibold text-gray-900">Gift Ready</div>
                  <div className="text-sm text-gray-600">Free Wrapping</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap gap-4">
              {["description", "ingredients", "delivery", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-semibold capitalize border-b-2 ${
                    activeTab === tab
                      ? "border-pink-600 text-pink-600"
                      : "border-transparent text-gray-600 hover:text-pink-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Product Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our {product.title} is handcrafted with premium ingredients to ensure 
                  exceptional taste and quality. Each cake is freshly baked daily using 
                  traditional methods combined with modern techniques.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span>Made with 100% natural ingredients</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span>Freshly baked on the day of delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span>Customizable designs available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span>Suitable for all occasions</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "ingredients" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Ingredients & Nutrition</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Ingredients</h4>
                    <ul className="space-y-2">
                      {["Wheat Flour", "Fresh Cream", "Belgian Chocolate", "Natural Fruits", "Pure Vanilla", "Fresh Eggs"].map((ing) => (
                        <li key={ing} className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Nutrition (per 100g)</h4>
                    <div className="space-y-3">
                      {[
                        { label: "Calories", value: "320 kcal" },
                        { label: "Carbohydrates", value: "45g" },
                        { label: "Proteins", value: "6g" },
                        { label: "Fats", value: "12g" },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between items-center">
                          <span className="text-gray-700">{item.label}</span>
                          <span className="font-semibold">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "delivery" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Delivery Information</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-3">Standard Delivery</h4>
                    <p className="text-gray-700 mb-4">3-5 business days</p>
                    <div className="text-2xl font-bold text-pink-600">Free</div>
                  </div>
                  <div className="p-6 bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-3">Express Delivery</h4>
                    <p className="text-gray-700 mb-4">1-2 business days</p>
                    <div className="text-2xl font-bold text-amber-600">₹99</div>
                  </div>
                  <div className="p-6 bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-3">Same Day Delivery</h4>
                    <p className="text-gray-700 mb-4">Order before 12 PM</p>
                    <div className="text-2xl font-bold text-green-600">₹199</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                <div className="space-y-6">
                  {[
                    { name: "Sarah M.", rating: 5, date: "2 days ago", comment: "Absolutely delicious! The cake was fresh and beautifully decorated." },
                    { name: "Michael R.", rating: 4, date: "1 week ago", comment: "Great taste and quality. Delivery was on time!" },
                    { name: "Priya S.", rating: 5, date: "2 weeks ago", comment: "Perfect for my daughter's birthday. Everyone loved it!" }
                  ].map((review, index) => (
                    <div key={index} className="p-6 bg-white rounded-2xl shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="font-semibold text-gray-900">{review.name}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <FiStar
                                  key={i}
                                  className={`${
                                    i < review.rating
                                      ? "fill-current text-amber-500"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;