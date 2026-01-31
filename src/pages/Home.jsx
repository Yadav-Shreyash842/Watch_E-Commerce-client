import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to WatchShop
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover the finest collection of luxury watches
          </p>

          {user ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}!
              </h2>
              <p className="text-gray-600 mb-4">{user.email}</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    user.isAdmin
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {user.isAdmin ? "Admin User" : "Regular User"}
                </span>
              </div>
              <div className="space-y-3">
                <Link
                  to="/products"
                  className="block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Browse Products
                </Link>
                {user.isAdmin && (
                  <Link
                    to="/admin"
                    className="block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
                  >
                    Go to Admin Dashboard
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="space-x-4">
              <Link
                to="/register"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition border-2 border-blue-600"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">⌚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Handpicked luxury watches from top brands
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and secure shipping worldwide
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Authentic Guarantee
            </h3>
            <p className="text-gray-600">
              100% genuine products with warranty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
