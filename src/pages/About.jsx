import { useState, useEffect } from "react";
import "../assets/css/About.css";

// Team Images
import Team1 from "../assets/cake/c2.jpg";

import Team2 from "../assets/cake/c2.jpg";
import Team3 from "../assets/cake/c2.jpg";
import Team4 from "../assets/cake/c2.jpg";

// About Images
import AboutHero from "../assets/cake/c2.jpg";
import BakingProcess from "../assets/cake/c2.jpg"; 
import StoreFront from "../assets/cake/c2.jpg";

// Icon Images
import AwardIcon from "../assets/cake/c2.jpg";
import HeartIcon from "../assets/cake/c2.jpg";
import StarIcon from "../assets/cake/c2.jpg";
import CakeIcon from "../assets/cake/c2.jpg";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "Ashish Wadkar",
      role: "Master Pastry Chef",
      image: Team1,
      bio: "15+ years experience in French patisserie, trained in Paris",
      specialties: ["Wedding Cakes", "French Pastries"],
      experience: "15 Years",
    },
    {
      name: "Sharayu Tambvekar",
      role: "Head Baker",
      image: Team2,
      bio: "Specializes in artisanal bread and traditional baking methods",
      specialties: ["Sourdough", "Artisan Bread"],
      experience: "12 Years",
    },
    {
      name: "Sanskrusti Wadkar",
      role: "Creative Director",
      image: Team3,
      bio: "Creates stunning cake designs and edible art masterpieces",
      specialties: ["Cake Design", "Edible Art"],
      experience: "8 Years",
    },
    {
      name: "Raju Patil",
      role: "Operations Manager",
      image: Team4,
      bio: "Ensures every order is perfect and delivered on time",
      specialties: ["Logistics", "Customer Service"],
      experience: "10 Years",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Humble Beginnings",
      description: "Started as a small home bakery",
    },
    {
      year: "2013",
      title: "First Storefront",
      description: "Opened our first physical location",
    },
    {
      year: "2016",
      title: "Expansion",
      description: "Launched nationwide delivery service",
    },
    {
      year: "2019",
      title: "Award Winning",
      description: "Received 'Best Bakery' award",
    },
    {
      year: "2023",
      title: "Present Day",
      description: "Serving 10,000+ happy customers",
    },
  ];

  const values = [
    {
      icon: HeartIcon,
      title: "Passion in Every Bite",
      description: "We bake with love and attention to detail",
    },
    {
      icon: StarIcon,
      title: "Excellence",
      description: "Never compromising on quality or taste",
    },
    {
      icon: CakeIcon,
      title: "Creativity",
      description: "Innovative designs for every occasion",
    },
    {
      icon: AwardIcon,
      title: "Quality",
      description: "Only the finest ingredients are used",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110 transition-transform duration-1000"
          style={{
            backgroundImage: `url(${AboutHero})`,
            transform: `scale(${1 + scrollY * 0.0005})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Our <span className="text-amber-300">Sweet</span> Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up animation-delay-200">
            From a family passion to creating memorable celebrations for
            thousands
          </p>
          <div className="animate-slide-up animation-delay-400">
            <span className="inline-block w-24 h-1 bg-amber-400 mb-8"></span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-pink-500/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-amber-500/20 rounded-full animate-float-slow animation-delay-1000"></div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-pink-600">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                TCAKE began in 2010 as a small home bakery, born from a family's
                passion for creating beautiful, delicious treats. What started
                with simple birthday cakes for neighbors quickly grew into a
                beloved local bakery.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we're proud to serve thousands of customers across the
                region, bringing joy to birthdays, weddings, anniversaries, and
                everyday celebrations. Our commitment remains the same: every
                product is made with love, care, and the finest ingredients.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    13+
                  </div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    50K+
                  </div>
                  <div className="text-gray-600">Cakes Created</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={StoreFront}
                  alt="TCAKE Store Front"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-amber-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-pink-600">Core</span> Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at TCAKE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="inline-block w-8 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full group-hover:w-16 transition-all duration-500"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={BakingProcess}
                  alt="Our Baking Process"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/10 to-amber-600/10"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The <span className="text-pink-600">TCAKE</span> Process
              </h2>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Fresh Ingredients",
                    description:
                      "We source only the finest, freshest ingredients daily",
                  },
                  {
                    step: "02",
                    title: "Handcrafted Perfection",
                    description:
                      "Each cake and pastry is made by hand with precision",
                  },
                  {
                    step: "03",
                    title: "Quality Check",
                    description:
                      "Every item undergoes rigorous quality inspection",
                  },
                  {
                    step: "04",
                    title: "Beautiful Presentation",
                    description: "Carefully packaged and delivered with care",
                  },
                ].map((process, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-2xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                        {process.title}
                      </h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-pink-600">Dream</span> Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate bakers, designers, and creators behind every TCAKE
              masterpiece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                    {member.experience}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-pink-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <svg
                      className="w-5 h-5 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       

      {/* Final CTA Section */}
      <section className="py-24 bg-linear-to-br from-pink-600 via-rose-600 to-amber-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Ready to Create{" "}
            <span className="text-amber-300">Sweet Memories</span>?
          </h2>

          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 animate-fade-up animation-delay-200">
            Let us be part of your next celebration. Experience the TCAKE
            difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up animation-delay-400">
            <a
              href="/contact"
              className="bg-white text-pink-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Our Team
            </a>
            <a
              href="/shop"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Browse Collections
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-up animation-delay-600">
            {[
              { value: "100%", label: "Customer Satisfaction" },
              { value: "24/7", label: "Support Available" },
              { value: "Free", label: "Consultation" },
              { value: "5K+", label: "5-Star Reviews" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
