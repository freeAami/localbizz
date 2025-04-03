import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState(0);
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  
  const categories = [
    { id: 'restaurants', name: 'Restaurants', icon: 'fa-utensils' },
    { id: 'shopping', name: 'Shopping', icon: 'fa-shopping-bag' },
    { id: 'health', name: 'Health & Fitness', icon: 'fa-dumbbell' },
    { id: 'beauty', name: 'Beauty & Spa', icon: 'fa-spa' },
    { id: 'services', name: 'Services', icon: 'fa-concierge-bell' },
    { id: 'freelancers', name: 'Freelancers', icon: 'fa-laptop-code' }
  ];
  
  const businesses = [
    {
      id: 1,
      name: 'Coastal Cuisine',
      category: 'restaurants',
      rating: 4.7,
      reviews: 128,
      description: 'Fresh seafood and coastal dishes in a relaxed atmosphere with ocean views.',
      distance: '0.8 mi',
      isPremium: true,
      image: 'https://public.readdy.ai/ai/img_res/e501376466974845497df53e18bf9590.jpg'
    },
    {
      id: 2,
      name: 'Urban Fitness Center',
      category: 'health',
      rating: 4.5,
      reviews: 87,
      description: 'State-of-the-art equipment and expert trainers to help you reach your fitness goals.',
      distance: '1.2 mi',
      isPremium: false,
      image: 'https://public.readdy.ai/ai/img_res/42e75f7ba033299e2a47dbe486417522.jpg'
    },
    {
      id: 3,
      name: 'Artisan Coffee House',
      category: 'restaurants',
      rating: 4.8,
      reviews: 214,
      description: 'Specialty coffee and homemade pastries in a cozy, artistic environment.',
      distance: '0.5 mi',
      isPremium: true,
      image: 'https://public.readdy.ai/ai/img_res/fda0bd9544cd028916b25de05941bbb3.jpg'
    },
    {
      id: 4,
      name: 'Tech Solutions',
      category: 'services',
      rating: 4.3,
      reviews: 56,
      description: 'Professional IT services for businesses and individuals with quick turnaround times.',
      distance: '1.7 mi',
      isPremium: false,
      image: 'https://public.readdy.ai/ai/img_res/39fc3911825e021c3d3eb54a876ab3f9.jpg'
    },
    {
      id: 5,
      name: 'Serenity Spa & Wellness',
      category: 'beauty',
      rating: 4.9,
      reviews: 176,
      description: 'Luxurious spa treatments and wellness services in a tranquil setting.',
      distance: '2.1 mi',
      isPremium: true,
      image: 'https://public.readdy.ai/ai/img_res/ea5899fa10736f636e34bf2c2cef0f8f.jpg'
    },
    {
      id: 6,
      name: 'Creative Design Studio',
      category: 'freelancers',
      rating: 4.6,
      reviews: 92,
      description: 'Innovative graphic design and branding solutions for businesses of all sizes.',
      distance: '1.4 mi',
      isPremium: false,
      image: 'https://public.readdy.ai/ai/img_res/6417bafd34b92ba5278806844a2d9aa7.jpg'
    }
  ];
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };
  
  const toggleFilter = () => {
    setShowFilters(!showFilters);
  };
  
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };
  
  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<i key={i} className="fas fa-star-half-alt text-yellow-400"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-yellow-400"></i>);
      }
    }
    return stars;
  };
  
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
              <Link to="/home" className="mx-3 text-blue-600 font-medium">Home</Link>
              <Link to="/explore" className="mx-3 text-gray-600 hover:text-blue-600 transition-colors">Explore</Link>
              <Link to="/business" className="mx-3 text-gray-600 hover:text-blue-600 transition-colors">For Business</Link>
              <a href="#" className="mx-3 text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleLoginModal}
              className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-button hover:bg-blue-50 transition-colors mr-3 whitespace-nowrap cursor-pointer"
            >
              Log In
            </button>
            <button
              onClick={() => {
                setShowLoginModal(true);
                setActiveTab('signup');
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Sign Up
            </button>
            <button className="md:hidden ml-4 text-gray-600">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Discover Local Businesses Near You</h2>
            <p className="text-xl opacity-90 mb-8">Find, review, and connect with the best local businesses in your area</p>
            <div className="bg-white rounded-lg shadow-lg p-2 flex items-center">
              <div className="flex-1 flex items-center border-r border-gray-200 px-4">
                <i className="fas fa-search text-gray-400 mr-3"></i>
                <input
                  type="text"
                  placeholder="Search for businesses..."
                  className="w-full py-2 border-none outline-none text-gray-700"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex-1 flex items-center px-4">
                <i className="fas fa-map-marker-alt text-gray-400 mr-3"></i>
                <input
                  type="text"
                  placeholder="Current location"
                  className="w-full py-2 border-none outline-none text-gray-700"
                  defaultValue="New York, NY"
                />
              </div>
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Browse by Category</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div
              className={`bg-white rounded-lg shadow-sm p-4 text-center cursor-pointer hover:shadow-md transition-shadow ${selectedCategory === 'all' ? 'border-2 border-blue-600' : ''}`}
              onClick={() => handleCategorySelect('all')}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-th text-blue-600 text-xl"></i>
              </div>
              <h4 className="font-medium">All</h4>
            </div>
            {categories.map(category => (
              <div
                key={category.id}
                className={`bg-white rounded-lg shadow-sm p-4 text-center cursor-pointer hover:shadow-md transition-shadow ${selectedCategory === category.id ? 'border-2 border-blue-600' : ''}`}
                onClick={() => handleCategorySelect(category.id)}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`fas ${category.icon} text-blue-600 text-xl`}></i>
                </div>
                <h4 className="font-medium">{category.name}</h4>
              </div>
            ))}
          </div>
        </div>
        
        {/* Map and Listings */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Filters</h3>
                <button className="text-blue-600 text-sm font-medium">Reset All</button>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">$</span>
                  <span className="text-sm text-gray-600">$$$$</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-3">Rating</h4>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="text-2xl mr-1 cursor-pointer"
                      onClick={() => setRating(star)}
                    >
                      <i className={`${star <= rating ? 'fas' : 'far'} fa-star ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">& Up</span>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-3">Distance</h4>
                <div className="relative">
                  <select className="w-full p-2 border border-gray-300 rounded-md appearance-none bg-white pr-8 cursor-pointer">
                    <option>Any distance</option>
                    <option>Within 1 mile</option>
                    <option>Within 5 miles</option>
                    <option>Within 10 miles</option>
                    <option>Within 25 miles</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Features</h4>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4" />
                    <span className="ml-2 text-gray-700">Open Now</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4" />
                    <span className="ml-2 text-gray-700">Offers Delivery</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4" />
                    <span className="ml-2 text-gray-700">Accepts Reservations</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4" />
                    <span className="ml-2 text-gray-700">Free Wi-Fi</span>
                  </label>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-button mt-6 hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Apply Filters
              </button>
            </div>
          </div>
          
          {/* Map and Listings */}
          <div className="lg:w-3/4">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4 flex justify-between items-center">
              <button
                onClick={toggleFilter}
                className="bg-white px-4 py-2 rounded-button shadow-sm flex items-center cursor-pointer whitespace-nowrap"
              >
                <i className="fas fa-filter mr-2"></i>
                Filters
              </button>
              <div className="relative">
                <select
                  className="bg-white px-4 py-2 rounded-button shadow-sm appearance-none pr-8 cursor-pointer"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="popularity">Sort: Popular</option>
                  <option value="rating">Sort: Rating</option>
                  <option value="distance">Sort: Distance</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-gray-200 rounded-lg mb-6 h-96 overflow-hidden relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=detailed city map view with streets, buildings, and landmarks visible from above, clean modern cartography style, light color scheme with blue highlights for water features, subtle terrain details, perfect for navigation interface&width=1200&height=800&seq=7&orientation=landscape')" }}>
                {/* Map markers would be added here */}
              </div>
              <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                <button className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer">
                  <i className="fas fa-plus text-gray-700"></i>
                </button>
                <button className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer">
                  <i className="fas fa-minus text-gray-700"></i>
                </button>
              </div>
              <div className="absolute top-4 right-4">
                <button className="bg-white px-4 py-2 rounded-button shadow-md flex items-center cursor-pointer whitespace-nowrap">
                  <i className="fas fa-expand-alt mr-2"></i>
                  Full Screen
                </button>
              </div>
            </div>
            
            {/* Sort and Results Count - Desktop */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing {businesses.length} results</p>
              <div className="relative">
                <select
                  className="bg-white px-4 py-2 rounded-button shadow-sm appearance-none pr-8 cursor-pointer"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="popularity">Sort: Popular</option>
                  <option value="rating">Sort: Rating</option>
                  <option value="distance">Sort: Distance</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </div>
              </div>
            </div>
            
            {/* Business Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businesses.map(business => (
                <div key={business.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={business.image}
                      alt={business.name}
                      className="w-full h-full object-cover object-top"
                    />
                    {business.isPremium && (
                      <div className="absolute top-3 right-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded text-gray-800">
                        PREMIUM
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-white bg-opacity-90 text-xs font-medium px-2 py-1 rounded text-gray-800">
                      {business.distance}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{business.name}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {categories.find(c => c.id === business.category)?.name}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {renderStars(business.rating)}
                      </div>
                      <span className="text-gray-600 text-sm">{business.rating} ({business.reviews} reviews)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{business.description}</p>
                    <div className="flex space-x-2">
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-button text-sm cursor-pointer whitespace-nowrap">
                        <i className="fas fa-phone-alt mr-1"></i> Call
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-button text-sm cursor-pointer whitespace-nowrap">
                        <i className="fas fa-directions mr-1"></i> Directions
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-button text-sm cursor-pointer whitespace-nowrap">
                        <i className="fas fa-globe mr-1"></i> Website
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-10">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-button hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
                Load More Results
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Login/Signup Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="flex border-b">
              <button
                className={`flex-1 py-4 font-medium text-center ${activeTab === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => switchTab('login')}
              >
                Log In
              </button>
              <button
                className={`flex-1 py-4 font-medium text-center ${activeTab === 'signup' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => switchTab('signup')}
              >
                Sign Up
              </button>
              <button
                className="p-4 text-gray-400 hover:text-gray-600"
                onClick={toggleLoginModal}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-6">
              {activeTab === 'login' ? (
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                    <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-3/4"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Strong password</p>
                  </div>
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-button hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Log In
                  </button>
                </form>
              ) : (
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                    <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-3/4"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Strong password</p>
                  </div>
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-button hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Create Account
                  </button>
                </form>
              )}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-button shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                    <i className="fab fa-google text-red-500"></i>
                  </button>
                  <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-button shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                    <i className="fab fa-facebook-f text-blue-600"></i>
                  </button>
                  <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-button shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                    <i className="fab fa-apple text-gray-800"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-10">
        <div className="flex justify-around">
          <Link to="/home" className="flex flex-col items-center py-3 px-2 text-blue-600">
            <i className="fas fa-home text-xl"></i>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/explore" className="flex flex-col items-center py-3 px-2 text-gray-600">
            <i className="fas fa-compass text-xl"></i>
            <span className="text-xs mt-1">Explore</span>
          </Link>
          <a href="#" className="flex flex-col items-center py-3 px-2 text-gray-600">
            <i className="fas fa-heart text-xl"></i>
            <span className="text-xs mt-1">Favorites</span>
          </a>
          <a href="#" className="flex flex-col items-center py-3 px-2 text-gray-600">
            <i className="fas fa-user text-xl"></i>
            <span className="text-xs mt-1">Profile</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          Made by{' '}
          <a 
            href="https://instagram.com/free.aami" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Ammar Jeevunjee
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 