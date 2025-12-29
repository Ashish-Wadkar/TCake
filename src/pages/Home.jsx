import CategorySection from "../components/CategorySection";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "../App.css";
// Hero Images
import HeroCake from "../assets/cake/c1.jpg";
import CelebrationBg from "../assets/cake/c1.jpg";

// Category Images
import CakeCategory from "../assets/cake/c1.jpg";
import PastryCategory from "../assets/cake/c1.jpg";
import DecorationCategory from "../assets/cake/c1.jpg";

// Feature Images
import FreshBakedImg from "../assets/cake/c1.jpg";
import PremiumIngredientsImg from "../assets/cake/c1.jpg";
import OnTimeDeliveryImg from "../assets/cake/c1.jpg";

// CTA Image
import CelebrationCake from "../assets/cake/c1.jpg";

const Home = () => {
  return (
    <>
      {/* Parallax Celebration Section */}
      <section className="relative min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover transform scale-105"
          style={{ backgroundImage: `url(${CelebrationBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 to-purple-900/70"></div>
        </div>

        <div className="relative z-10 min-h-[500px] flex items-center">
          <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Celebrate
                 <span className="text-amber-300"> Moment</span>{" "}
                 with TCAKE
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                
                Handcrafted cakes, artisanal pastries, beautiful decorations &
            everything you need to make your celebrations unforgettable
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/occasions"
                  className="bg-white text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  Browse Occasions
                </a>
                <a
                  href="/gift-cards"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  Gift Cards
                </a>
              </div>
            </div>

            <div className="relative h-96 animate-float-slow">
              {/* <img
                src={CelebrationCake}
                alt="Celebration cake"
                className="absolute w-full h-full object-contain drop-shadow-2xl"
              /> */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with enhanced animation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-100 py-24 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            <span className="block text-gray-800"> Make  Every</span>
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Celebration Sweeter
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-300">
            From intimate gatherings to grand celebrations, we provide the
                perfect treats and decorations to make your moments magical
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-500">
            <a
              href="/shop"
              className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-rose-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <span>Explore Collection</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
            <a
              href="/custom-order"
              className="inline-flex items-center justify-center bg-white text-pink-600 border-2 border-pink-200 px-10 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 hover:border-pink-300 hover:scale-105 transition-all duration-300"
            >
              Custom Order
            </a>
          </div>
        </div>

        {/* Floating Hero Image with enhanced animation */}
        <div className="relative mt-16 h-64 md:h-80 overflow-hidden">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-full">
            <img
              src={HeroCake}
              alt="Beautiful decorative cake"
              className="absolute w-full h-full object-contain animate-float-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-pink-50/30"></div>
          </div>
        </div>
      </section>

      {/* Categories Section with images */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-up">
              Explore Our <span className="text-pink-600">Delicious</span>{" "}
              Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From decadent cakes to delightful pastries and festive
              decorations, we have everything for your perfect celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Signature Cakes",
                description: "Custom-designed cakes for every occasion",
                image: CakeCategory,
                link: "/shop/cakes",
                color: "from-pink-500 to-rose-500",
              },
              {
                name: "Artisan Pastries",
                description: "Freshly baked pastries & desserts",
                image: PastryCategory,
                link: "/shop/pastries",
                color: "from-amber-500 to-orange-500",
              },
              {
                name: "Celebration Decor",
                description: "Balloons, banners & party supplies",
                image: DecorationCategory,
                link: "/shop/decorations",
                color: "from-purple-500 to-pink-500",
              },
            ].map((cat, index) => (
              <div
                key={cat.name}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-20`}
                  ></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {cat.description}
                  </p>
                  <a
                    href={cat.link}
                    className="inline-flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 hover:underline"
                  >
                    Shop Now
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>

                <div className="absolute top-6 right-6">
                  <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Popular
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with animated cards */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-pink-600">Thousands</span> Choose TCAKE
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to making your celebrations extraordinary with
              quality, creativity, and care in every product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Freshly Baked Daily",
                description:
                  "Our cakes and pastries are made fresh every morning using traditional baking methods",
                image: FreshBakedImg,
                icon: "🍰",
              },
              {
                title: "Premium Quality Ingredients",
                description:
                  "We source only the finest ingredients, from organic flour to Belgian chocolate",
                image: PremiumIngredientsImg,
                icon: "🌿",
              },
              {
                title: "On-Time Guaranteed Delivery",
                description:
                  "Your celebration items arrive exactly when you need them, perfectly preserved",
                image: OnTimeDeliveryImg,
                icon: "🚚",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {feature.icon}
                </div>

                <div className="mt-10 mb-6 h-48 overflow-hidden rounded-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>

                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <span className="inline-block w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full group-hover:w-24 transition-all duration-500"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-pink-50 to-rose-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-up">
              Ready to <span className="text-pink-600">Celebrate</span>?
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200">
              Join thousands of happy customers who've made their celebrations
              unforgettable with TCAKE
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up animation-delay-400">
              <a
                href="/shop"
                className="group relative overflow-hidden bg-gradient-to-r from-pink-600 to-rose-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <span className="relative z-10">
                  Shop Celebration Collection
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur opacity-0 group-hover:opacity-30 group-hover:animate-ping"></div>
              </a>

              <a
                href="/contact"
                className="group relative overflow-hidden bg-white text-pink-600 border-2 border-pink-200 px-12 py-5 rounded-full font-bold text-lg hover:border-pink-300 hover:scale-105 transition-all duration-500"
              >
                <span className="relative z-10">Book a Consultation</span>
                <div className="absolute inset-0 bg-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-up animation-delay-600">
              {[
                { value: "5000+", label: "Happy Customers" },
                { value: "4.9★", label: "Average Rating" },
                { value: "24/7", label: "Support" },
                { value: "2Hr", label: "Delivery*" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
