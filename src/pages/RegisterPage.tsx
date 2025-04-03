import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    address: '',
    phone: '',
    category: '',
    description: '',
    businessHours: {
      monday: { open: '9:00 AM', close: '5:00 PM', isOpen: true },
      tuesday: { open: '9:00 AM', close: '5:00 PM', isOpen: true },
      wednesday: { open: '9:00 AM', close: '5:00 PM', isOpen: true },
      thursday: { open: '9:00 AM', close: '5:00 PM', isOpen: true },
      friday: { open: '9:00 AM', close: '5:00 PM', isOpen: true },
      saturday: { open: '10:00 AM', close: '3:00 PM', isOpen: true },
      sunday: { open: '10:00 AM', close: '3:00 PM', isOpen: false }
    },
    services: [''],
    selectedPlan: 'professional',
    payment: {
      cardName: '',
      cardNumber: '',
      expDate: '',
      cvv: '',
      zip: ''
    }
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setFormData({ ...formData, password });
    // Simple password strength calculation
    let strength = 0;
    if (password.length > 6) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]/)) strength += 1;
    setPasswordStrength(strength);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent as keyof typeof formData],
          [child]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleBusinessHoursChange = (day: string, field: 'open' | 'close', value: string) => {
    setFormData({
      ...formData,
      businessHours: {
        ...formData.businessHours,
        [day]: {
          ...formData.businessHours[day as keyof typeof formData.businessHours],
          [field]: value
        }
      }
    });
  };

  const handleDayToggle = (day: string) => {
    setFormData({
      ...formData,
      businessHours: {
        ...formData.businessHours,
        [day]: {
          ...formData.businessHours[day as keyof typeof formData.businessHours],
          isOpen: !formData.businessHours[day as keyof typeof formData.businessHours].isOpen
        }
      }
    });
  };

  const handleServiceChange = (index: number, value: string) => {
    const updatedServices = [...formData.services];
    updatedServices[index] = value;
    setFormData({ ...formData, services: updatedServices });
  };

  const addService = () => {
    setFormData({ ...formData, services: [...formData.services, ''] });
  };

  const removeService = (index: number) => {
    const updatedServices = formData.services.filter((_, i) => i !== index);
    setFormData({ ...formData, services: updatedServices });
  };

  const handlePlanSelect = (plan: string) => {
    setFormData({ ...formData, selectedPlan: plan });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleRegistrationComplete = () => {
    setShowSuccessModal(true);
    document.body.classList.add('overflow-hidden');
  };

  const handleContinueToDashboard = () => {
    navigate('/dashboard');
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
          </div>
          <Link
            to="/business"
            className="text-blue-600 hover:text-blue-800 flex items-center transition-colors cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Business
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Your Business Account</h2>
          <p className="text-gray-600">Join thousands of businesses and start growing with LocalBiz today.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep === step
                    ? 'bg-blue-600 text-white'
                    : currentStep > step
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {currentStep > step ? (
                  <i className="fas fa-check"></i>
                ) : (
                  step
                )}
              </div>
            ))}
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div
              className="absolute h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep - 1) * 33.33}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <div className={currentStep >= 1 ? 'text-blue-600 font-medium' : ''}>Account</div>
            <div className={currentStep >= 2 ? 'text-blue-600 font-medium' : ''}>Business Info</div>
            <div className={currentStep >= 3 ? 'text-blue-600 font-medium' : ''}>Profile Setup</div>
            <div className={currentStep >= 4 ? 'text-blue-600 font-medium' : ''}>Plan Selection</div>
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Step 1: Account Creation */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Create Your Account</h3>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Create a strong password"
                  required
                />
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            passwordStrength === 0 ? 'bg-red-500' :
                            passwordStrength === 1 ? 'bg-orange-500' :
                            passwordStrength === 2 ? 'bg-yellow-500' :
                            passwordStrength === 3 ? 'bg-blue-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${passwordStrength * 25}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-xs text-gray-500">
                        {passwordStrength === 0 && 'Weak'}
                        {passwordStrength === 1 && 'Fair'}
                        {passwordStrength === 2 && 'Good'}
                        {passwordStrength === 3 && 'Strong'}
                        {passwordStrength === 4 && 'Very Strong'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Use at least 8 characters with uppercase letters, numbers, and symbols.
                    </p>
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Confirm your password"
                  required
                />
                {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                )}
              </div>
              <div>
                <label htmlFor="businessName" className="block text-gray-700 text-sm font-medium mb-2">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your business name"
                  required
                />
              </div>
              <div className="pt-4">
                <button
                  onClick={nextStep}
                  className="w-full bg-blue-600 text-white py-3 !rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Next: Business Information
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Business Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Business Information</h3>
              <div>
                <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">Business Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123 Main St, City, State, ZIP"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  <i className="fas fa-info-circle mr-1"></i>
                  This address will be displayed on your business profile
                </p>
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-gray-700 text-sm font-medium mb-2">Business Category</label>
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="retail">Retail</option>
                    <option value="health">Health & Wellness</option>
                    <option value="professional">Professional Services</option>
                    <option value="home">Home Services</option>
                    <option value="beauty">Beauty & Spa</option>
                    <option value="automotive">Automotive</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-2">Business Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Tell customers about your business, services, and what makes you unique..."
                  required
                ></textarea>
                <p className="text-xs text-gray-500 mt-1 flex justify-between">
                  <span>
                    <i className="fas fa-info-circle mr-1"></i>
                    This description will appear on your business profile
                  </span>
                  <span>{formData.description.length}/500</span>
                </p>
              </div>
              <div className="flex justify-between pt-4">
                <button
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-800 px-6 py-3 !rounded-button hover:bg-gray-300 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-6 py-3 !rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Next: Profile Setup
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Profile Setup */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Profile Setup</h3>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Upload Photos</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="mb-4">
                    <i className="fas fa-cloud-upload-alt text-gray-400 text-4xl"></i>
                  </div>
                  <p className="text-gray-600 mb-2">Drag and drop your photos here, or</p>
                  <button className="bg-blue-100 text-blue-600 px-4 py-2 !rounded-button hover:bg-blue-200 transition-colors whitespace-nowrap cursor-pointer">
                    Browse Files
                  </button>
                  <input type="file" className="hidden" multiple accept="image/*" />
                  <p className="text-xs text-gray-500 mt-2">
                    Upload up to 10 photos. Max file size: 5MB each. Supported formats: JPG, PNG
                  </p>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Business Hours</label>
                <div className="space-y-3 border border-gray-200 rounded-lg p-4">
                  {Object.entries(formData.businessHours).map(([day, hours]) => (
                    <div key={day} className="flex items-center justify-between">
                      <div className="w-1/4">
                        <div className="flex items-center">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={hours.isOpen}
                              onChange={() => handleDayToggle(day)}
                              className="sr-only peer"
                            />
                            <div className="relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                            <span className="ml-2 capitalize">{day}</span>
                          </label>
                        </div>
                      </div>
                      {hours.isOpen ? (
                        <div className="w-3/4 flex items-center space-x-2">
                          <input
                            type="text"
                            value={hours.open}
                            onChange={(e) => handleBusinessHoursChange(day, 'open', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm w-1/3"
                          />
                          <span className="text-gray-500">to</span>
                          <input
                            type="text"
                            value={hours.close}
                            onChange={(e) => handleBusinessHoursChange(day, 'close', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm w-1/3"
                          />
                        </div>
                      ) : (
                        <div className="w-3/4 text-gray-500 text-sm italic">
                          Closed
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Services/Products</label>
                <div className="space-y-3">
                  {formData.services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={service}
                        onChange={(e) => handleServiceChange(index, e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={`Service/Product ${index + 1}`}
                      />
                      {formData.services.length > 1 && (
                        <button
                          onClick={() => removeService(index)}
                          className="text-red-500 hover:text-red-700 cursor-pointer"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addService}
                    className="text-blue-600 hover:text-blue-800 flex items-center text-sm cursor-pointer"
                  >
                    <i className="fas fa-plus mr-1"></i> Add Another Service/Product
                  </button>
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <button
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-800 px-6 py-3 !rounded-button hover:bg-gray-300 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-6 py-3 !rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Next: Plan Selection
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Plan Selection */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Choose Your Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Basic Plan */}
                <div
                  className={`border rounded-lg p-6 cursor-pointer transition-all ${
                    formData.selectedPlan === 'basic'
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                  }`}
                  onClick={() => handlePlanSelect('basic')}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">Basic</h4>
                    {formData.selectedPlan === 'basic' && (
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <i className="fas fa-check text-xs"></i>
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">Free</span>
                    <p className="text-gray-500 text-sm mt-1">Perfect for getting started</p>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Basic business profile</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Customer reviews</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Basic analytics</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Listing in 1 category</span>
                    </li>
                  </ul>
                </div>

                {/* Professional Plan */}
                <div
                  className={`border rounded-lg p-6 cursor-pointer transition-all relative ${
                    formData.selectedPlan === 'professional'
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                  }`}
                  onClick={() => handlePlanSelect('professional')}
                >
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">Professional</h4>
                    {formData.selectedPlan === 'professional' && (
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <i className="fas fa-check text-xs"></i>
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$29</span>
                    <span className="text-gray-500 ml-1">/month</span>
                    <p className="text-gray-500 text-sm mt-1">For growing businesses</p>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Everything in Basic</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Enhanced business profile</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Priority in search results</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Detailed analytics dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Promotional offers</span>
                    </li>
                  </ul>
                </div>

                {/* Premium Plan */}
                <div
                  className={`border rounded-lg p-6 cursor-pointer transition-all ${
                    formData.selectedPlan === 'premium'
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                  }`}
                  onClick={() => handlePlanSelect('premium')}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">Premium</h4>
                    {formData.selectedPlan === 'premium' && (
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <i className="fas fa-check text-xs"></i>
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$79</span>
                    <span className="text-gray-500 ml-1">/month</span>
                    <p className="text-gray-500 text-sm mt-1">For established businesses</p>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Everything in Professional</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Featured business profile</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Top placement in results</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Advanced analytics & reports</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 text-sm">Dedicated account manager</span>
                    </li>
                  </ul>
                </div>
              </div>

              {formData.selectedPlan !== 'basic' && (
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium mb-4">Payment Information</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cardName" className="block text-gray-700 text-sm font-medium mb-2">Name on Card <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-medium mb-2">Card Number <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            onChange={(e) => {
                              // Format card number with spaces
                              const value = e.target.value.replace(/\s/g, '');
                              const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
                              e.target.value = formattedValue;
                            }}
                            required
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                            <i className="fab fa-cc-visa text-blue-800"></i>
                            <i className="fab fa-cc-mastercard text-red-600"></i>
                            <i className="fab fa-cc-amex text-blue-500"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-1">
                        <label htmlFor="expDate" className="block text-gray-700 text-sm font-medium mb-2">Expiration Date <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="expDate"
                          name="expDate"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="MM/YY"
                          maxLength={5}
                          onChange={(e) => {
                            // Format expiration date (MM/YY)
                            const value = e.target.value.replace(/\D/g, '');
                            if (value.length <= 2) {
                              e.target.value = value;
                            } else {
                              e.target.value = value.slice(0, 2) + '/' + value.slice(2, 4);
                            }
                          }}
                          required
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="cvv" className="block text-gray-700 text-sm font-medium mb-2">CVV <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="123"
                          maxLength={4}
                          onChange={(e) => {
                            // Only allow numbers
                            e.target.value = e.target.value.replace(/\D/g, '');
                          }}
                          required
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="zip" className="block text-gray-700 text-sm font-medium mb-2">ZIP Code <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="12345"
                          maxLength={10}
                          onChange={(e) => {
                            // Allow numbers and dashes for international zip codes
                            e.target.value = e.target.value.replace(/[^\d-]/g, '');
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <div className="w-full bg-gray-100 p-3 rounded-md flex items-center">
                        <i className="fas fa-lock text-green-600 mr-2"></i>
                        <span className="text-sm text-gray-600">Your payment information is secure and encrypted</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                    />
                  </div>
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                  </label>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="bg-gray-200 text-gray-800 px-6 py-3 !rounded-button hover:bg-gray-300 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // Validate form
                      const termsCheckbox = document.getElementById('terms') as HTMLInputElement;
                      if (!termsCheckbox.checked) {
                        const termsError = document.createElement('div');
                        termsError.className = 'text-red-500 text-sm mt-2';
                        termsError.textContent = 'You must agree to the Terms of Service and Privacy Policy';
                        // Remove any existing error message
                        const existingError = termsCheckbox.parentElement?.parentElement?.querySelector('.text-red-500');
                        if (existingError) {
                          existingError.remove();
                        }
                        termsCheckbox.parentElement?.parentElement?.appendChild(termsError);
                        return;
                      }
                      // If payment is required, validate payment fields
                      if (formData.selectedPlan !== 'basic') {
                        const requiredFields = ['cardName', 'cardNumber', 'expDate', 'cvv', 'zip'];
                        let isValid = true;
                        requiredFields.forEach(field => {
                          const input = document.getElementById(field) as HTMLInputElement;
                          if (!input.value.trim()) {
                            input.classList.add('border-red-500');
                            isValid = false;
                          } else {
                            input.classList.remove('border-red-500');
                          }
                        });
                        if (!isValid) {
                          // Show payment validation error
                          const paymentSection = document.querySelector('.border.border-gray-200.rounded-lg.p-6');
                          const existingError = paymentSection?.querySelector('.text-red-500.text-center');
                          if (!existingError) {
                            const errorMsg = document.createElement('div');
                            errorMsg.className = 'text-red-500 text-center text-sm mt-4';
                            errorMsg.textContent = 'Please fill in all required payment fields';
                            paymentSection?.appendChild(errorMsg);
                          }
                          return;
                        }
                      }
                      // Show processing state
                      const button = e.currentTarget;
                      const originalText = button.innerHTML;
                      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Processing...';
                      button.setAttribute('disabled', 'true');
                      button.classList.add('opacity-75');
                      // Simulate payment processing
                      setTimeout(() => {
                        // Show success modal
                        handleRegistrationComplete();
                      }, 2000);
                    }}
                    className="bg-blue-600 text-white px-6 py-3 !rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Complete Registration
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-12">
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

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                <i className="fas fa-check-circle text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Registration Complete!</h3>
              <p className="text-gray-600 mt-2">Your business account has been successfully created.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Plan:</span>
                <span className="font-medium text-gray-800 capitalize">{formData.selectedPlan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Business:</span>
                <span className="font-medium text-gray-800">{formData.businessName}</span>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handleContinueToDashboard}
                className="text-sm bg-blue-600 text-white px-4 py-2 !rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Continue to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage; 