import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { Link } from 'react-router-dom';
import type { EChartsOption } from 'echarts';

const DashboardPage: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const businessName = "Local Coffee Shop";

  useEffect(() => {
    // Initialize visitor chart
    const visitorChartDom = document.getElementById('visitor-chart');
    if (visitorChartDom) {
      const visitorChart = echarts.init(visitorChartDom);
      const visitorOption: EChartsOption = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category' as const,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: 'value' as const
        },
        series: [
          {
            name: 'Visitors',
            type: 'bar',
            barWidth: '60%',
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
              color: '#3B82F6'
            }
          }
        ]
      };
      visitorChart.setOption(visitorOption);
      
      // Handle resize
      window.addEventListener('resize', () => {
        visitorChart.resize();
      });
    }

    // Initialize revenue chart
    const revenueChartDom = document.getElementById('revenue-chart');
    if (revenueChartDom) {
      const revenueChart = echarts.init(revenueChartDom);
      const revenueOption: EChartsOption = {
        animation: false,
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category' as const,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          boundaryGap: false
        },
        yAxis: {
          type: 'value' as const,
          axisLabel: {
            formatter: '${value}'
          }
        },
        series: [
          {
            name: 'Revenue',
            type: 'line',
            data: [1200, 1350, 1800, 2100, 2400, 2600],
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(59, 130, 246, 0.5)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(59, 130, 246, 0.1)'
                  }
                ]
              }
            },
            lineStyle: {
              color: '#3B82F6'
            },
            itemStyle: {
              color: '#3B82F6'
            },
            smooth: true
          }
        ]
      };
      revenueChart.setOption(revenueOption);
      
      // Handle resize
      window.addEventListener('resize', () => {
        revenueChart.resize();
      });
    }

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-64'} fixed h-full z-10`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className={`flex items-center ${sidebarCollapsed ? 'justify-center w-full' : ''}`}>
            <i className="fas fa-map-marker-alt text-blue-600 text-xl"></i>
            {!sidebarCollapsed && (
              <span className="ml-2 font-bold text-xl text-blue-600">LocalBiz</span>
            )}
          </div>
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700 cursor-pointer">
            <i className={`fas ${sidebarCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
          </button>
        </div>
        <nav className="mt-6">
          <div className={`px-4 ${sidebarCollapsed ? 'text-center' : ''}`}>
            <span className={`text-xs font-semibold text-gray-400 uppercase tracking-wider ${sidebarCollapsed ? 'hidden' : 'block'}`}>
              Main
            </span>
            <ul className="mt-4 space-y-2">
              <li>
                <a 
                  href="#" 
                  onClick={() => setActiveTab('dashboard')}
                  className={`flex items-center px-4 py-3 text-sm rounded-lg cursor-pointer transition-colors ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <i className="fas fa-tachometer-alt"></i>
                  {!sidebarCollapsed && <span className="ml-3">Dashboard</span>}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => setActiveTab('analytics')}
                  className={`flex items-center px-4 py-3 text-sm rounded-lg cursor-pointer transition-colors ${activeTab === 'analytics' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <i className="fas fa-chart-line"></i>
                  {!sidebarCollapsed && <span className="ml-3">Analytics</span>}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center px-4 py-3 text-sm rounded-lg cursor-pointer transition-colors ${activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <i className="fas fa-store"></i>
                  {!sidebarCollapsed && <span className="ml-3">Business Profile</span>}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => setActiveTab('appointments')}
                  className={`flex items-center px-4 py-3 text-sm rounded-lg cursor-pointer transition-colors ${activeTab === 'appointments' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <i className="fas fa-calendar-alt"></i>
                  {!sidebarCollapsed && <span className="ml-3">Appointments</span>}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => setActiveTab('reviews')}
                  className={`flex items-center px-4 py-3 text-sm rounded-lg cursor-pointer transition-colors ${activeTab === 'reviews' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <i className="fas fa-star"></i>
                  {!sidebarCollapsed && <span className="ml-3">Reviews</span>}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => setActiveTab('marketing')}
                  className={`flex items-center px-4 py-3 text-sm rounded-lg cursor-pointer transition-colors ${activeTab === 'marketing' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <i className="fas fa-bullhorn"></i>
                  {!sidebarCollapsed && <span className="ml-3">Marketing</span>}
                </a>
              </li>
            </ul>
          </div>
          <div className={`px-4 mt-8 ${sidebarCollapsed ? 'text-center' : ''}`}>
            <span className={`text-xs font-semibold text-gray-400 uppercase tracking-wider ${sidebarCollapsed ? 'hidden' : 'block'}`}>
              Settings
            </span>
            <ul className="mt-4 space-y-2">
              <li>
                <a 
                  href="#" 
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center px-4 py-3 text-sm rounded-lg cursor-pointer transition-colors ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <i className="fas fa-cog"></i>
                  {!sidebarCollapsed && <span className="ml-3">Settings</span>}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => setActiveTab('help')}
                  className={`flex items-center px-4 py-3 text-sm rounded-lg cursor-pointer transition-colors ${activeTab === 'help' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <i className="fas fa-question-circle"></i>
                  {!sidebarCollapsed && <span className="ml-3">Help & Support</span>}
                </a>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className="flex items-center px-4 py-3 text-sm rounded-lg cursor-pointer transition-colors text-gray-600 hover:bg-gray-100"
                >
                  <i className="fas fa-arrow-left"></i>
                  {!sidebarCollapsed && <span className="ml-3">Back to Registration</span>}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarCollapsed ? 'ml-20' : 'ml-64'} transition-all duration-300`}>
        <div className="min-h-screen overflow-y-auto">
          {/* Top Navigation */}
          <div className="bg-white shadow-sm">
            <div className="flex items-center justify-between h-16 px-6">
              <h1 className="text-xl font-semibold text-gray-800">Welcome back, {businessName}</h1>
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-bell"></i>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-cog"></i>
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-blue-600"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Admin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* Welcome Banner */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-blue-600">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Welcome to your business dashboard, John!</h2>
                  <p className="text-gray-600 mt-1">Here's an overview of your business performance and recent activities.</p>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="https://public.readdy.ai/ai/img_res/d4ba95f3cd4a1d93d59e6c66d30375e4.jpg" 
                    alt="Welcome illustration" 
                    className="h-24 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Setup Progress */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Complete Your Business Setup</h3>
                <span className="text-sm font-medium text-blue-600">3/7 completed</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '42%' }}></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Create Account</p>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Business Info</p>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Select Plan</p>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <i className="fas fa-image"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Upload Photos</p>
                    <button className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer">Complete now</button>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                    <i className="fas fa-list"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Add Services</p>
                    <button className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer">Complete now</button>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Set Business Hours</p>
                    <button className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer">Complete now</button>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                    <i className="fas fa-share-alt"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Connect Social Media</p>
                    <button className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer">Complete now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Visitors</p>
                    <h4 className="text-2xl font-bold text-gray-800 mt-1">1,247</h4>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="text-green-500 flex items-center">
                        <i className="fas fa-arrow-up mr-1"></i> 12.5%
                      </span>
                      <span className="text-gray-500 ml-2">vs last month</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <i className="fas fa-users"></i>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">New Bookings</p>
                    <h4 className="text-2xl font-bold text-gray-800 mt-1">28</h4>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="text-green-500 flex items-center">
                        <i className="fas fa-arrow-up mr-1"></i> 8.2%
                      </span>
                      <span className="text-gray-500 ml-2">vs last month</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <i className="fas fa-calendar-check"></i>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Reviews</p>
                    <h4 className="text-2xl font-bold text-gray-800 mt-1">4.8/5</h4>
                    <div className="flex items-center mt-2 text-sm">
                      <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <span className="text-gray-500 ml-2">(42 reviews)</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Revenue</p>
                    <h4 className="text-2xl font-bold text-gray-800 mt-1">$2,845</h4>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="text-green-500 flex items-center">
                        <i className="fas fa-arrow-up mr-1"></i> 15.3%
                      </span>
                      <span className="text-gray-500 ml-2">vs last month</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts and Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Visitor Statistics</h3>
                  <div className="relative">
                    <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center cursor-pointer">
                      Last 7 days <i className="fas fa-chevron-down ml-1"></i>
                    </button>
                  </div>
                </div>
                <div id="visitor-chart" className="w-full h-64"></div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Recent Reviews</h3>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">View all</a>
                </div>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">"Great service and amazing coffee! Will definitely be back."</p>
                    <p className="text-sm font-medium text-gray-800">- Sarah Johnson</p>
                  </div>
                  <div className="border-b border-gray-100 pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <span className="text-gray-500 text-sm">5 days ago</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">"Love the atmosphere and friendly staff. The pastries are delicious!"</p>
                    <p className="text-sm font-medium text-gray-800">- Michael Brown</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <span className="text-gray-500 text-sm">1 week ago</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">"Perfect spot for a morning coffee. The staff is very attentive."</p>
                    <p className="text-sm font-medium text-gray-800">- Emily Wilson</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue and Appointments */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Revenue Trend</h3>
                  <div className="relative">
                    <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center cursor-pointer">
                      Last 6 months <i className="fas fa-chevron-down ml-1"></i>
                    </button>
                  </div>
                </div>
                <div id="revenue-chart" className="w-full h-64"></div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Upcoming Appointments</h3>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">View all</a>
                </div>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-4">
                    <p className="text-sm font-medium text-gray-800">Coffee Tasting Event</p>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="far fa-calendar mr-2"></i>
                      <span>April 5, 2025 • 3:00 PM</span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="far fa-user mr-2"></i>
                      <span>12 attendees</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-100 pb-4">
                    <p className="text-sm font-medium text-gray-800">Barista Training Session</p>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="far fa-calendar mr-2"></i>
                      <span>April 8, 2025 • 10:00 AM</span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="far fa-user mr-2"></i>
                      <span>3 attendees</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Supplier Meeting</p>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="far fa-calendar mr-2"></i>
                      <span>April 10, 2025 • 1:30 PM</span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="far fa-user mr-2"></i>
                      <span>2 attendees</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Campaigns */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Active Marketing Campaigns</h3>
                <button className="text-sm bg-blue-600 text-white px-4 py-2 !rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                  <i className="fas fa-plus mr-1"></i> New Campaign
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reach</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Spring Coffee Special</div>
                        <div className="text-sm text-gray-500">Email Campaign</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,245 people</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.8%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">April 30, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3 cursor-pointer">Edit</a>
                        <a href="#" className="text-red-600 hover:text-red-900 cursor-pointer">Pause</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Loyalty Program</div>
                        <div className="text-sm text-gray-500">SMS Campaign</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">876 people</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7.2%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 15, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3 cursor-pointer">Edit</a>
                        <a href="#" className="text-red-600 hover:text-red-900 cursor-pointer">Pause</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Weekend Brunch Promo</div>
                        <div className="text-sm text-gray-500">Social Media</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Scheduled</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">--</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">--</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">June 1, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3 cursor-pointer">Edit</a>
                        <a href="#" className="text-red-600 hover:text-red-900 cursor-pointer">Cancel</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 