import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BusinessPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              <i className="fas fa-map-marker-alt mr-2"></i>
              LocalBiz
            </h1>
            <nav className="hidden md:flex ml-10">
              <Link to="/home" className="mx-3 text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/explore" className="mx-3 text-gray-600 hover:text-blue-600 transition-colors">Explore</Link>
              <Link to="/business" className="mx-3 text-blue-600 font-medium">For Business</Link>
              <a href="#" className="mx-3 text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-button hover:bg-blue-50 transition-colors mr-3 whitespace-nowrap cursor-pointer">
              Log In
            </button>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Sign Up
            </Link>
            <button className="md:hidden ml-4 text-gray-600 cursor-pointer">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://public.readdy.ai/ai/img_res/519c3dcaa8fafabbc54b6294f3409dd9.jpg')" }}></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Grow Your Business with LocalBiz</h1>
            <p className="text-xl text-white opacity-90 mb-8">Join thousands of businesses reaching new customers and growing their presence in the community</p>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-8 py-4 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer text-lg font-medium inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LocalBiz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-users text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Reach More Customers</h3>
              <p className="text-gray-600">Connect with local customers actively looking for businesses like yours.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Grow Your Business</h3>
              <p className="text-gray-600">Increase visibility and attract new customers with our powerful tools.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-star text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Build Your Reputation</h3>
              <p className="text-gray-600">Manage reviews and showcase your best qualities to potential customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Free</span>
                <p className="text-gray-600 mt-2">Perfect for getting started</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Basic business profile</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Customer reviews</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Basic analytics</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="block text-center bg-gray-100 text-gray-800 px-6 py-3 rounded-button hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-600">/month</span>
                <p className="text-gray-600 mt-2">For growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Enhanced business profile</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Priority in search results</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Detailed analytics dashboard</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-gray-600">/month</span>
                <p className="text-gray-600 mt-2">For established businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Featured business profile</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Top placement in results</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="block text-center bg-gray-100 text-gray-800 px-6 py-3 rounded-button hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Business Partners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://public.readdy.ai/ai/img_res/8a4f3d893715225e6a1503fc0f74dcc1.jpg"
                  alt="Business Owner"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Owner, Coastal Cafe</p>
                </div>
              </div>
              <p className="text-gray-600">
                "LocalBiz has helped us reach new customers and grow our business. The platform is easy to use and the results have been amazing!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://public.readdy.ai/ai/img_res/b1c5a1acbb17c82e844f389afb5f6739.jpg"
                  alt="Business Owner"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">Founder, Tech Solutions</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The analytics and customer insights have been invaluable. We've seen a 40% increase in new customers since joining LocalBiz."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses on LocalBiz and start reaching new customers today.
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 px-8 py-4 rounded-button hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer text-lg font-medium inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-blue-600 transition-colors cursor-pointer">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors cursor-pointer">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors cursor-pointer">Help Center</a>
            <a href="#" className="hover:text-blue-600 transition-colors cursor-pointer">Contact Us</a>
          </div>
          <p>&copy; 2025 LocalBiz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BusinessPage; 