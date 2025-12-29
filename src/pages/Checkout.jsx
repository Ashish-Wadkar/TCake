import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { 
  FiUser, 
  FiHome, 
  FiPhone, 
  FiMail,
  FiMapPin,
  FiCreditCard,
  FiShield,
  FiClock,
  FiArrowLeft,
  FiCheckCircle,
  FiMessageSquare
} from "react-icons/fi";
import { 
  BsWhatsapp,
  BsCreditCard,
  BsCash,
  BsBank
} from "react-icons/bs";

const Checkout = () => {
  const { cart, totalAmount, clearCart } = useCart();
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    specialInstructions: "",
    paymentMethod: "whatsapp"
  });

  // Order state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    const phoneNumber = "7447234294"; 
    
    // Format date and time
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN');
    const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    // Format order summary
    let orderSummary = `*NEW ORDER - TCAKE BAKERY*\n\n`;
    orderSummary += `*Order Date:* ${dateStr} ${timeStr}\n`;
    orderSummary += `*Order ID:* TC${Date.now().toString().slice(-8)}\n\n`;
    orderSummary += `*Customer Details:*\n`;
    orderSummary += `👤 ${formData.fullName}\n`;
    orderSummary += `📞 ${formData.phone}\n`;
    orderSummary += `📧 ${formData.email}\n`;
    orderSummary += `📍 ${formData.address}, ${formData.city} - ${formData.pincode}\n\n`;
    
    if (formData.specialInstructions) {
      orderSummary += `*Special Instructions:*\n${formData.specialInstructions}\n\n`;
    }

    // Add cart items
    orderSummary += `*Order Summary:*\n`;
    cart.forEach((item, index) => {
      orderSummary += `${index + 1}. ${item.title} x${item.qty} = ₹${item.price * item.qty}\n`;
    });
    orderSummary += `\n*Subtotal:* ₹${totalAmount}\n`;
    orderSummary += `*Delivery Charges:* ₹${totalAmount > 5000 ? 0 : 99}\n`;
    orderSummary += `*Grand Total:* ₹${totalAmount + (totalAmount > 5000 ? 0 : 99)}\n\n`;
    orderSummary += `*Payment Method:* WhatsApp Confirmation\n\n`;
    orderSummary += `Please confirm availability and provide payment details.`;

    return encodeURIComponent(orderSummary);
  };

  // Handle order submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert("Please fill in all required fields");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    // Generate order ID
    const newOrderId = `TC${Date.now().toString().slice(-8)}`;
    setOrderId(newOrderId);

    // Generate WhatsApp URL
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/7447234294?text=${message}`;
    
    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setOrderPlaced(true);
      clearCart();
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-linear-to-b from-green-50 to-emerald-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center animate-fade-up">
          <div className="w-20 h-20 bg-linear-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheckCircle className="text-3xl text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {orderId}
            </div>
            <p className="text-gray-600 mb-4">
              Your order has been successfully placed
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <BsWhatsapp className="text-xl" />
              <span className="font-medium">WhatsApp order sent</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">
            Our team will contact you shortly to confirm details and discuss payment options.
            Please keep your phone handy.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <FiClock />
              <span>Order confirmation within 30 minutes</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <FiPhone />
              <span>You'll receive a call for payment details</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <FiShield />
              <span>100% secure payment process</span>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              to="/"
              className="block w-full bg-linear-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors mb-4 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Cart
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Secure <span className="text-pink-600">Checkout</span>
          </h1>
          <p className="text-gray-600">
            Complete your order with secure WhatsApp confirmation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form & Cart Summary */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-linear-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <FiUser className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Contact Information
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <FiHome className="text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Shipping Address
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Complete Address *
                      </label>
                      <div className="relative">
                        <FiMapPin className="absolute left-4 top-4 text-gray-400" />
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          rows="3"
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                          placeholder="House no., Building, Street, Area"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                          placeholder="Mumbai"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                          pattern="[0-9]{6}"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                          placeholder="400001"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Special Instructions (Optional)
                      </label>
                      <textarea
                        name="specialInstructions"
                        value={formData.specialInstructions}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                        placeholder="Delivery timing preferences, gift message, allergy information, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <FiCreditCard className="text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Payment Method
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-center p-4 border-2 border-pink-500 rounded-xl bg-pink-50 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="whatsapp"
                        checked={formData.paymentMethod === "whatsapp"}
                        onChange={handleChange}
                        className="w-5 h-5 text-pink-600"
                      />
                      <div className="ml-4 flex items-center gap-4">
                        <BsWhatsapp className="text-2xl text-green-600" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            WhatsApp Confirmation
                          </div>
                          <div className="text-sm text-gray-600">
                            Share order details via WhatsApp for manual payment confirmation
                          </div>
                        </div>
                      </div>
                    </label>

                     
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-linear-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FiMessageSquare />
                        Confirm Order via WhatsApp
                      </>
                    )}
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    By completing your order, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            {/* Order Summary Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6  top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 pb-4 border-b border-gray-100">
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">
                        {item.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          Qty: {item.qty}
                        </div>
                        <div className="font-semibold text-gray-900">
                          ₹{item.price * item.qty}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{totalAmount}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className={totalAmount > 5000 ? "text-green-600 font-semibold" : "font-semibold"}>
                    {totalAmount > 5000 ? "FREE" : "₹99"}
                  </span>
                </div>
                
                {totalAmount < 5000 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <div className="text-amber-700 text-sm">
                      Add ₹{5000 - totalAmount} more for free shipping!
                    </div>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount</span>
                    <span className="text-pink-600">
                      ₹{totalAmount + (totalAmount > 5000 ? 0 : 99)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    (Inclusive of all taxes)
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <FiShield className="text-green-600 text-xl" />
                  <div>
                    <div className="font-medium text-gray-900">Secure Checkout</div>
                    <div className="text-sm text-gray-600">
                      Your information is protected
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FiPhone className="text-xl" />
                <h3 className="font-bold">Need Help?</h3>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Our support team is here to help you with your order
              </p>
              <div className="text-lg font-bold mb-1">+91 98765 43210</div>
              <div className="text-sm opacity-80">Available 8AM - 10PM</div>
            </div>

            {/* Return Policy */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-bold text-gray-900 mb-3">Our Promise</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  <span>Freshly baked goods delivered</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  <span>Contact-free delivery available</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  <span>100% satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;