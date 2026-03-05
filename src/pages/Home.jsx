import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern & Premium */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left space-y-6">
              <div className="inline-block">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                  ⌚ Premium Timepieces
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Time Is
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Luxury
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                Discover exquisite timepieces from world's most prestigious watchmakers. Each piece tells a unique story of craftsmanship.
              </p>

              {/* User Greeting Card or CTA */}
              {user ? (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">Welcome back, {user.name}!</h3>
                      <p className="text-gray-300 text-sm">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.isAdmin
                        ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                        : "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                    }`}>
                      {user.isAdmin ? "👑 Admin Access" : "✨ Member"}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/products"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center shadow-lg"
                    >
                      Browse Collection
                    </Link>
                    {user.isAdmin && (
                      <Link
                        to="/admin"
                        className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 text-center shadow-lg"
                      >
                        Admin Panel
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    to="/products"
                    className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-center"
                  >
                    Explore Collection
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link
                    to="/register"
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 text-center"
                  >
                    Sign Up Free
                  </Link>
                </div>
              )}
            </div>

            {/* Right Content - Watch Display */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative text-9xl animate-bounce-slow">⌚</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600 mt-1">Premium Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600 mt-1">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">2Y</div>
              <div className="text-sm text-gray-600 mt-1">Warranty</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect timepiece for every occasion and style</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "⌚", name: "Luxury", desc: "High-end timepieces", color: "from-amber-500 to-orange-500" },
            { icon: "🏃", name: "Sport", desc: "Active lifestyle", color: "from-blue-500 to-cyan-500" },
            { icon: "💼", name: "Business", desc: "Professional elegance", color: "from-gray-700 to-gray-900" },
            { icon: "🎨", name: "Fashion", desc: "Trendy designs", color: "from-pink-500 to-rose-500" }
          ].map((category, index) => (
            <Link
              key={index}
              to="/products"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="p-8 text-center relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Collections - Premium Display */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Handpicked selections from the world's finest watchmakers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Collection Card 1 */}
            <Link
              to="/products"
              className="group relative bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-80"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-500">⌚</div>
                <h3 className="text-3xl font-bold mb-2">Swiss Masterpieces</h3>
                <p className="text-blue-100 mb-4">Precision crafted timepieces</p>
                <div className="inline-flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Explore Now <span className="ml-2">→</span>
                </div>
              </div>
            </Link>

            {/* Collection Card 2 */}
            <Link
              to="/products"
              className="group relative bg-gradient-to-br from-amber-900 to-orange-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-80"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-500">💎</div>
                <h3 className="text-3xl font-bold mb-2">Limited Editions</h3>
                <p className="text-amber-100 mb-4">Exclusive rare collections</p>
                <div className="inline-flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  View Collection <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience excellence in every aspect of your purchase</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🎯",
              title: "Authenticity Guaranteed",
              desc: "Every timepiece is certified authentic with manufacturer warranty and documentation",
              color: "blue"
            },
            {
              icon: "🚚",
              title: "Worldwide Shipping",
              desc: "Fast, secure, and insured delivery to your doorstep anywhere in the world",
              color: "green"
            },
            {
              icon: "💎",
              title: "Curated Selection",
              desc: "Handpicked luxury watches from the world's most prestigious brands",
              color: "purple"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2"
            >
              <div className={`text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Your Collection Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of watch enthusiasts who trust us for their timepiece investments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Browse All Watches
              </Link>
              {!user && (
                <Link
                  to="/register"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 border-2 border-white/30"
                >
                  Create Account
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Trust Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "🔒", text: "Secure Payment" },
              { icon: "↩️", text: "Easy Returns" },
              { icon: "✓", text: "Certified Authentic" },
              { icon: "24/7", text: "Expert Support" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm text-gray-400">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
