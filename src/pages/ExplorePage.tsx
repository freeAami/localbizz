import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ExplorePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('New York, NY');
  const [activeCollection, setActiveCollection] = useState('trending');
  const [activeNeighborhood, setActiveNeighborhood] = useState('downtown');

  const categories = [
    { id: 'restaurants', name: 'Restaurants', icon: 'fa-utensils', count: 248 },
    { id: 'shopping', name: 'Shopping', icon: 'fa-shopping-bag', count: 187 },
    { id: 'health', name: 'Health & Fitness', icon: 'fa-dumbbell', count: 112 },
    { id: 'beauty', name: 'Beauty & Spa', icon: 'fa-spa', count: 95 },
    { id: 'services', name: 'Services', icon: 'fa-concierge-bell', count: 156 },
    { id: 'freelancers', name: 'Freelancers', icon: 'fa-laptop-code', count: 78 },
    { id: 'nightlife', name: 'Nightlife', icon: 'fa-cocktail', count: 63 },
    { id: 'arts', name: 'Arts & Entertainment', icon: 'fa-theater-masks', count: 42 }
  ];

  const collections = [
    {
      id: 'trending',
      title: 'Trending Now',
      description: 'The most popular spots this month',
      count: 24,
      image: 'https://public.readdy.ai/ai/img_res/5745f7987b70eb18753863c2eb14c653.jpg'
    },
    {
      id: 'new',
      title: 'New & Notable',
      description: 'Recently opened businesses making waves',
      count: 18,
      image: 'https://public.readdy.ai/ai/img_res/0d9164058bd2a8d818c424d5602fc7e4.jpg'
    },
    {
      id: 'best',
      title: 'Best of New York',
      description: 'Top-rated local favorites',
      count: 32,
      image: 'https://public.readdy.ai/ai/img_res/b1c5a1acbb17c82e844f389afb5f6739.jpg'
    },
    {
      id: 'hidden',
      title: 'Hidden Gems',
      description: 'Undiscovered spots worth checking out',
      count: 15,
      image: 'https://public.readdy.ai/ai/img_res/8a4f3d893715225e6a1503fc0f74dcc1.jpg'
    }
  ];

  const neighborhoods = [
    {
      id: 'downtown',
      name: 'Downtown',
      count: 87,
      description: 'Urban hub with trendy spots',
      image: 'https://public.readdy.ai/ai/img_res/d8358092743f45af699485c76c9e976f.jpg'
    },
    {
      id: 'midtown',
      name: 'Midtown',
      count: 124,
      description: 'Business district with great lunch spots',
      image: 'https://public.readdy.ai/ai/img_res/a379f07338296d64dbedf518c23dabe5.jpg'
    },
    {
      id: 'uptown',
      name: 'Uptown',
      count: 63,
      description: 'Historic area with cultural venues',
      image: 'https://public.readdy.ai/ai/img_res/1e088b6e5b1be4ed1ba7cc15dc708438.jpg'
    },
    {
      id: 'eastside',
      name: 'East Side',
      count: 92,
      description: 'Diverse neighborhood with international cuisine',
      image: 'https://public.readdy.ai/ai/img_res/1b0a9476e2b6fa9f0d1393449ac2e4ee.jpg'
    }
  ];

  const trendingBusinesses = [
    {
      id: 1,
      name: 'Coastal Cuisine',
      category: 'Restaurant',
      rating: 4.7,
      reviews: 128,
      description: 'Fresh seafood and coastal dishes in a relaxed atmosphere with ocean views.',
      features: ['Outdoor Seating', 'Reservations'],
      isPremium: true,
      image: 'https://public.readdy.ai/ai/img_res/d96c080eb05b7a252fb9610009367e17.jpg'
    },
    {
      id: 2,
      name: 'Urban Fitness Center',
      category: 'Health & Fitness',
      rating: 4.5,
      reviews: 87,
      description: 'State-of-the-art equipment and expert trainers to help you reach your fitness goals.',
      features: ['Classes', '24/7 Access'],
      isPremium: false,
      image: 'https://public.readdy.ai/ai/img_res/3ae826be7ba8ee0e66a795a88f68f145.jpg'
    },
    {
      id: 3,
      name: 'Artisan Coffee House',
      category: 'Cafe',
      rating: 4.8,
      reviews: 214,
      description: 'Specialty coffee and homemade pastries in a cozy, artistic environment.',
      features: ['Free WiFi', 'Breakfast'],
      isPremium: true,
      image: 'https://public.readdy.ai/ai/img_res/5dee141bd960defb8db998c4c1efeec2.jpg'
    },
    {
      id: 4,
      name: 'Tech Solutions',
      category: 'Services',
      rating: 4.3,
      reviews: 56,
      description: 'Professional IT services for businesses and individuals with quick turnaround times.',
      features: ['Appointments', 'Same-day Service'],
      isPremium: false,
      image: 'https://public.readdy.ai/ai/img_res/71d06507e2aa3e5865990214a30af8f8.jpg'
    },
    {
      id: 5,
      name: 'Serenity Spa & Wellness',
      category: 'Beauty & Spa',
      rating: 4.9,
      reviews: 176,
      description: 'Luxurious spa treatments and wellness services in a tranquil setting.',
      features: ['Online Booking', 'Gift Cards'],
      isPremium: true,
      image: 'https://public.readdy.ai/ai/img_res/ebbfc8c2db850e2f47cfc06341311d0b.jpg'
    },
    {
      id: 6,
      name: 'Creative Design Studio',
      category: 'Freelancers',
      rating: 4.6,
      reviews: 92,
      description: 'Innovative graphic design and branding solutions for businesses of all sizes.',
      features: ['Consultations', 'Portfolio'],
      isPremium: false,
      image: 'https://public.readdy.ai/ai/img_res/8a01c34f072e8dea9e53286e8c9f0c90.jpg'
    }
  ];

  const seasonalRecommendations = [
    {
      id: 1,
      name: 'Spring Garden Cafe',
      description: 'Seasonal menu featuring fresh spring ingredients',
      image: 'https://public.readdy.ai/ai/img_res/378711add1cfad1bb3dc9cc97cab0bfc.jpg'
    },
    {
      id: 2,
      name: 'Outdoor Adventure Tours',
      description: 'Guided hiking and nature experiences for spring',
      image: 'https://public.readdy.ai/ai/img_res/54784f51297d69ca05f33a1afd244472.jpg'
    },
    {
      id: 3,
      name: 'Farmers Market Fresh',
      description: 'Local spring produce and artisanal goods',
      image: 'https://public.readdy.ai/ai/img_res/a435fcefd7e6eb7c27a9c292205ff5a5.jpg'
    }
  ];

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
              <Link to="/home" className="mx-3 text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/explore" className="mx-3 text-blue-600 font-medium">Explore</Link>
              <Link to="/business" className="mx-3 text-gray-600 hover:text-blue-600 transition-colors">For Business</Link>
              <a href="#" className="mx-3 text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-button hover:bg-blue-50 transition-colors mr-3 whitespace-nowrap cursor-pointer">
              Log In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Sign Up
            </button>
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
            <h2 className="text-4xl font-bold mb-4 text-white">Explore Local Gems</h2>
            <p className="text-xl text-white opacity-90 mb-8">Discover unique businesses, trending spots, and hidden treasures in your neighborhood</p>
            <div className="bg-white rounded-lg shadow-lg p-2 flex items-center">
              <div className="flex-1 flex items-center border-r border-gray-200 px-4">
                <i className="fas fa-search text-gray-400 mr-3"></i>
                <input
                  type="text"
                  placeholder="Search for businesses, categories, collections..."
                  className="w-full py-2 border-none outline-none text-gray-700 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-1 flex items-center px-4">
                <i className="fas fa-map-marker-alt text-gray-400 mr-3"></i>
                <input
                  type="text"
                  placeholder="Current location"
                  className="w-full py-2 border-none outline-none text-gray-700 text-sm"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6">Featured Collections</h3>
        <div className="relative">
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 space-x-4 scrollbar-hide">
            {collections.map((collection) => (
              <div 
                key={collection.id} 
                className={`flex-shrink-0 w-80 rounded-lg shadow-sm overflow-hidden cursor-pointer transition-transform hover:scale-105 ${activeCollection === collection.id ? 'ring-2 ring-blue-600' : ''}`}
                onClick={() => setActiveCollection(collection.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="text-xl font-bold mb-1">{collection.title}</h4>
                    <p className="text-sm opacity-90">{collection.description}</p>
                    <div className="mt-2 text-xs font-medium bg-white bg-opacity-20 inline-block px-2 py-1 rounded">
                      {collection.count} Businesses
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-80 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center h-48 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-plus text-blue-600 text-xl"></i>
                </div>
                <h4 className="font-medium text-gray-700">View All Collections</h4>
                <p className="text-sm text-gray-500 mt-1">Explore curated lists of top businesses</p>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
            <button className="bg-white rounded-full shadow-md p-3 hover:bg-gray-50 cursor-pointer">
              <i className="fas fa-chevron-right text-gray-600"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Popular Categories</h3>
          <a href="#" className="text-blue-600 hover:underline flex items-center cursor-pointer">
            View All <i className="fas fa-chevron-right ml-1 text-sm"></i>
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className={`fas ${category.icon} text-blue-600 text-xl`}></i>
              </div>
              <h4 className="font-medium">{category.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{category.count} places</p>
            </div>
          ))}
        </div>
      </section>

      {/* Neighborhood Guides */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Neighborhood Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64 bg-blue-100">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://public.readdy.ai/ai/img_res/a509ed1354ea6efba10e142257c5a2d9.jpg')" }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 px-6 py-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-lg mb-2">Explore by Area</h4>
                    <p className="text-sm text-gray-600">Discover the unique character of each neighborhood</p>
                  </div>
                </div>
                {neighborhoods.map((neighborhood) => {
                  // Generate random positions for demonstration
                  const top = 20 + Math.random() * 60; // between 20% and 80% from top
                  const left = 20 + Math.random() * 60; // between 20% and 80% from left
                  return (
                    <div
                      key={neighborhood.id}
                      className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${activeNeighborhood === neighborhood.id ? 'z-10' : ''}`}
                      style={{ top: `${top}%`, left: `${left}%` }}
                      onClick={() => setActiveNeighborhood(neighborhood.id)}
                    >
                      <div className="relative group">
                        <div className={`${activeNeighborhood === neighborhood.id ? 'bg-blue-600 scale-125' : 'bg-gray-600'} text-white w-6 h-6 rounded-full flex items-center justify-center shadow-lg transition-all duration-200`}>
                          <i className="fas fa-map-pin text-xs"></i>
                        </div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-white rounded-lg shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                          <div className="text-sm font-bold">{neighborhood.name}</div>
                          <div className="text-xs text-gray-600">{neighborhood.count} businesses</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                {neighborhoods.map((neighborhood) => (
                  <div 
                    key={neighborhood.id} 
                    className={`bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all ${activeNeighborhood === neighborhood.id ? 'ring-2 ring-blue-600' : ''}`}
                    onClick={() => setActiveNeighborhood(neighborhood.id)}
                  >
                    <div className="relative h-36 overflow-hidden">
                      <img 
                        src={neighborhood.image} 
                        alt={neighborhood.name} 
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                        <h4 className="font-bold">{neighborhood.name}</h4>
                        <p className="text-xs opacity-90">{neighborhood.count} spots</p>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-gray-600">{neighborhood.description}</p>
                      <a href="#" className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline cursor-pointer">
                        Explore <i className="fas fa-chevron-right ml-1 text-xs"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Recommendations */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">April 2025</span>
            <h3 className="text-2xl font-bold mt-2">Spring Recommendations</h3>
          </div>
          <a href="#" className="text-blue-600 hover:underline flex items-center cursor-pointer">
            View All <i className="fas fa-chevron-right ml-1 text-sm"></i>
          </a>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-contain bg-no-repeat opacity-10" style={{ backgroundImage: "url('https://public.readdy.ai/ai/img_res/82485e247f50a00edb637af09d938b96.jpg')" }}></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {seasonalRecommendations.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Spring Special</span>
                    <button className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Businesses */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6">Trending Businesses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingBusinesses.map((business) => (
            <div key={business.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
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
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{business.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {business.category}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {renderStars(business.rating)}
                  </div>
                  <span className="text-gray-600 text-sm">{business.rating} ({business.reviews} reviews)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{business.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {business.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-button text-sm cursor-pointer whitespace-nowrap">
                    <i className="fas fa-bookmark mr-1"></i> Save
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-button text-sm cursor-pointer whitespace-nowrap">
                    <i className="fas fa-directions mr-1"></i> Directions
                  </button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-button text-sm hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                    <i className="fas fa-info-circle mr-1"></i> Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-button hover:bg-gray-50 transition-colors inline-block cursor-pointer whitespace-nowrap">
            View All Businesses
          </a>
        </div>
      </section>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-10">
        <div className="flex justify-around">
          <Link to="/home" className="flex flex-col items-center py-3 px-2 text-gray-600 cursor-pointer">
            <i className="fas fa-home text-xl"></i>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/explore" className="flex flex-col items-center py-3 px-2 text-blue-600 cursor-pointer">
            <i className="fas fa-compass text-xl"></i>
            <span className="text-xs mt-1">Explore</span>
          </Link>
          <a href="#" className="flex flex-col items-center py-3 px-2 text-gray-600 cursor-pointer">
            <i className="fas fa-heart text-xl"></i>
            <span className="text-xs mt-1">Saved</span>
          </a>
          <a href="#" className="flex flex-col items-center py-3 px-2 text-gray-600 cursor-pointer">
            <i className="fas fa-user text-xl"></i>
            <span className="text-xs mt-1">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage; 