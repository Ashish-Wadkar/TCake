import { useState, useEffect } from "react";
import "../assets/css/Contact.css";
// Contact Images
import ContactHero from "../assets/cake/c3.jpg";
import StoreExterior from "../assets/cake/c3.jpg";
import Interior from "../assets/cake/c2.jpg";

// Icon Images
import PhoneIcon from "../assets/cake/c2.jpg";
import EmailIcon from "../assets/cake/c2.jpg";
import LocationIcon from "../assets/cake/c2.jpg";
import ClockIcon from "../assets/cake/c2.jpg";
import CakeContactIcon from "../assets/cake/c2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    date: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("form");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      occasion: "",
      date: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Call Us",
      details: ["+91 7447234298", "+91 9370809556"],
      description: "Available 8AM - 10PM",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: EmailIcon,
      title: "Email Us",
      details: ["orders@tcake.com", "support@tcake.com"],
      description: "Response within 2 hours",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: LocationIcon,
      title: "Visit Us",
      details: ["123 Sweet Street", "Baner Pune, 410001"],
      description: "Free parking available",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: ClockIcon,
      title: "Store Hours",
      details: ["Mon-Fri: 7AM - 9PM", "Sat-Sun: 8AM - 10PM"],
      description: "24/7 online ordering",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I place my order?",
      answer:
        "We recommend ordering at least 48 hours in advance for standard cakes and 1 week for custom wedding cakes.",
    },
    {
      question: "Do you offer delivery?",
      answer:
        "Yes! We offer delivery within a 20-mile radius. Same-day delivery is available for orders placed before 12 PM.",
    },
    {
      question: "Can I customize my cake design?",
      answer:
        "Absolutely! We offer fully customizable designs. Book a consultation with our cake artists for detailed discussions.",
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer:
        "Yes, we offer gluten-free, vegan, and nut-free options. Please mention your requirements when ordering.",
    },
  ];

  const occasions = [
    "Birthday",
    "Wedding",
    "Anniversary",
    "Baby Shower",
    "Graduation",
    "Corporate Event",
    "Just Because",
    "Other",
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ContactHero}
            alt="Contact TCAKE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Let's <span className="text-amber-300">Create</span> Something Sweet
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up animation-delay-200">
            Whether you need a custom cake or have questions, our team is here
            to help make your celebration perfect
          </p>
          <div className="animate-slide-up animation-delay-400">
            <a
              href="#contact-form"
              className="inline-flex items-center bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <span>Start Your Order</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}
                >
                  <img
                    src={info.icon}
                    alt={info.title}
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{info.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span
                    className={`inline-block w-8 h-1 bg-gradient-to-r ${info.color} rounded-full group-hover:w-16 transition-all duration-500`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("form")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "form"
                  ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Send Message
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "faq"
                  ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              FAQs
            </button>
            <button
              onClick={() => setActiveTab("visit")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "visit"
                  ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Visit Our Store
            </button>
          </div>

          {/* Form Tab */}
          {activeTab === "form" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-up">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Let's <span className="text-pink-600">Bake</span> Your Dream
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Tell us about your celebration and we'll create something
                  special just for you. All fields marked with * are required.
                </p>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl animate-fade-in">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-green-800 font-medium">
                          Thank you! Your message has been sent.
                        </p>
                        <p className="text-green-600 text-sm mt-1">
                          We'll get back to you within 2 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                        placeholder="Ashish Wadkar"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                        placeholder="ashishwadkar@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                        placeholder="+91 7447234298"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Celebration Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Occasion *
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select an occasion</option>
                      {occasions.map((occasion, index) => (
                        <option key={index} value={occasion}>
                          {occasion}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Tell Us About Your Celebration *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your dream cake, number of guests, theme, colors, etc..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="w-4 h-4 text-pink-600 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="newsletter" className="text-gray-600">
                      Subscribe to our newsletter for sweet updates and special
                      offers
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center">
                      Send Your Request
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Quick <span className="text-pink-600">Response</span>{" "}
                    Guarantee
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Response within 2 hours during business hours
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Free consultation for custom orders
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-3 text-gray-700">
                        No commitment until you approve the design
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-pink-600 mt=1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Secure payment and satisfaction guarantee
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Urgent <span className="text-amber-600">Orders</span>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Need a cake today? Call us directly for last-minute orders:
                  </p>
                  <div className="flex items-center justify-center p-4 bg-white rounded-xl">
                    <span className="text-2xl font-bold text-gray-900">
                      +91 7447234298
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    * Same-day orders must be placed before 12 PM
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <div className="max-w-4xl mx-auto animate-fade-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Frequently Asked{" "}
                <span className="text-pink-600">Questions</span>
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                        {faq.question}
                      </h3>
                      <svg
                        className="w-6 h-6 text-pink-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">
                  Still have questions? We're here to help!
                </p>
                <button
                  onClick={() => setActiveTab("form")}
                  className="inline-flex items-center bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Contact Us Directly
                </button>
              </div>
            </div>
          )}

          {/* Visit Tab */}
          {activeTab === "visit" && (
            <div className="animate-fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Visit Our <span className="text-pink-600">Bakery</span>
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Store Hours
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Monday - Friday</span>
                          <span className="font-semibold">
                            7:00 AM - 9:00 PM
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Saturday</span>
                          <span className="font-semibold">
                            8:00 AM - 10:00 PM
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Sunday</span>
                          <span className="font-semibold">
                            8:00 AM - 8:00 PM
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Location & Parking
                      </h3>
                      <p className="text-gray-700 mb-4">
                        123 Sweet Street
                        <br />
                        Baner Pune, 410001
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-amber-600 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          Free parking lot behind the building
                        </li>
                        <li className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-amber-600 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          Wheelchair accessible
                        </li>
                        <li className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-amber-600 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          Tasting room available by appointment
                        </li>
                      </ul>
                    </div>

                     
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={StoreExterior}
                      alt="TCAKE Store Exterior"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={Interior}
                      alt="TCAKE Interior"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Get Directions
                    </h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://maps.google.com/?q=123+Sweet+Street+NY+10001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
                      >
                        Google Maps
                      </a>
                      <a
                        href="https://www.apple.com/maps/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-black transition-colors text-center"
                      >
                        Apple Maps
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Find Us on the <span className="text-pink-600">Map</span>
          </h2>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            {/* This would be your actual map component */}
            <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <img
                    src={LocationIcon}
                    alt="Location"
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  TCAKE Bakery
                </h3>
                <p className="text-gray-600 mb-4">
                  123 Sweet Street, Baner Pune, 410001
                </p>
                <a
                  href="https://www.google.com/maps/place/Pune,+Maharashtra/@18.5911626,73.7058343,17z/data=!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5246091!4d73.8786239!16zL20vMDE1eTJx?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-600 font-semibold hover:underline"
                >
                  Open in Google Maps
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Map Overlay Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8">
              <div className="text-center p-4">
                <div className="text-2xl font-bold mb-2">15 min</div>
                <div className="opacity-90">From Times Square</div>
              </div>
              <div className="text-center p-4 border-x border-white/20">
                <div className="text-2xl font-bold mb-2">5 min</div>
                <div className="opacity-90">Walk from subway</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold mb-2">Free</div>
                <div className="opacity-90">Parking Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Order CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Cake <span className="text-amber-200">Today</span>?
            </h2>

            <p className="text-xl mb-8 opacity-90">
              For urgent orders or last-minute celebrations, call us directly.
              We'll do our best to make your day special!
            </p>

            <div className="mb-10">
              <div className="inline-flex items-center justify-center bg-white text-amber-700 px-8 py-4 rounded-full text-2xl font-bold shadow-lg animate-pulse">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                +91 7447234298
              </div>
              <p className="text-sm opacity-75 mt-4">
                Available 7AM - 10PM daily
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7447234298"
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Call Now
              </a>
              <a
                href="#contact-form"
                onClick={() => setActiveTab("form")}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
