import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../assets/css/Cart.css";
import {
  FiTrash2,
  FiPlus,
  FiMinus,
  FiShoppingBag,
  FiArrowLeft,
  FiCreditCard,
} from "react-icons/fi";
import { BsCartX, BsCartCheck } from "react-icons/bs";
import { useState } from "react";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalAmount } =
    useCart();

  const [isAnimating, setIsAnimating] = useState(false);
  const [discount] = useState(0);
  const shipping = totalAmount > 5000 ? 0 : 99;

  const handleRemove = (id) => {
    setIsAnimating(true);
    setTimeout(() => {
      removeFromCart(id);
      setIsAnimating(false);
    }, 300);
  };

  const finalTotal = totalAmount - discount + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-b from-pink-50 to-amber-50 flex items-center justify-center px-4">
        <div className="text-center animate-fade-up">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-linear-to-r from-pink-100 to-rose-100 rounded-full mb-8">
            <BsCartX className="text-6xl text-pink-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Looks like you haven't added anything sweet to your cart yet. Let's
            fill it with delicious treats!
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <FiShoppingBag className="group-hover:rotate-12 transition-transform" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 to-amber-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 animate-fade-up">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors mb-6 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Continue Shopping
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Your <span className="text-pink-600">Sweet</span> Cart
              </h1>
              <p className="text-gray-600">
                {cart.length} item{cart.length > 1 ? "s" : ""} in your cart
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
                  isAnimating ? "animate-shake" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Product Image */}
                  <div className="md:w-48 h-48 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {item.description ||
                            "Delicious cake made with premium ingredients"}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between">
                      {/* Price */}
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          ₹{item.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          ₹{item.price * item.qty} total
                        </div>
                        {item.selectedSize && (
                          <div className="text-sm text-gray-600 mt-1 capitalize">
                            Size:{" "}
                            <span className="font-semibold">
                              {item.selectedSize}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-10 h-10 flex items-center justify-center border-2 border-gray-200 rounded-full hover:border-pink-500 hover:bg-pink-50 hover:text-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={item.qty <= 1}
                        >
                          <FiMinus />
                        </button>

                        <div className="w-16 text-center">
                          <span className="text-2xl font-bold text-gray-900">
                            {item.qty}
                          </span>
                        </div>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="w-10 h-10 flex items-center justify-center border-2 border-gray-200 rounded-full hover:border-pink-500 hover:bg-pink-50 hover:text-pink-600 transition-all"
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-linear-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                    <BsCartCheck className="text-2xl text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Order Summary
                  </h2>
                </div>

                {/* Coupon Code */}

                {/* Pricing Breakdown */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900 font-semibold">
                      ₹{totalAmount}
                    </span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Discount</span>
                      <span className="text-green-600 font-semibold">
                        -₹{discount}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shipping</span>
                    <span
                      className={
                        shipping === 0
                          ? "text-green-600 font-semibold"
                          : "text-gray-900 font-semibold"
                      }
                    >
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>

                  {totalAmount < 5000 && (
                    <div className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                      Add ₹{5000 - totalAmount} more for free shipping!
                    </div>
                  )}

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">
                        Total Amount
                      </span>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-pink-600">
                          ₹{finalTotal}
                        </div>
                        <div className="text-sm text-gray-500">
                          (Inclusive of all taxes)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  to="/checkout"
                  className="block w-full bg-linear-to-r from-pink-600 to-rose-600 text-white py-4 rounded-xl font-bold text-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center gap-3">
                    <FiCreditCard className="group-hover:scale-110 transition-transform" />
                    Proceed to Checkout
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed / Recommendations */}
        <div className="mt-16 animate-fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Chocolate Fudge Cake",
                price: "₹599",
                image:
                  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
              },
              {
                name: "Red Velvet Pastry",
                price: "₹299",
                image:
                  "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w-400&h=300&fit=crop",
              },
              {
                name: "Birthday Cupcakes",
                price: "₹399",
                image:
                  "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=300&fit=crop",
              },
              {
                name: "Celebration Balloons",
                price: "₹199",
                image:
                  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-pink-600">
                      {item.price}
                    </span>
                    <button className="text-sm bg-pink-50 text-pink-600 px-3 py-1 rounded-full font-semibold hover:bg-pink-100 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
