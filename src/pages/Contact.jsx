import React, { useState} from "react";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUtensils, 
  FaUser, FaBuilding, FaComment, FaPaperPlane, FaCheck 
} from "react-icons/fa";

export default function Contact () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    country: 'US',
    message: '',
    inquiryType: 'general',
    agreeToPolicies: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsAnimating(false);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md transform scale-100 transition-all duration-500">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <FaCheck className="text-white text-3xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-8">Thank you for reaching out. Our culinary team will get back to you within 24 hours.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <FaUtensils className="text-4xl text-orange-500" />
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <FaUtensils className="text-4xl text-orange-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Ready to create something delicious together? Our culinary experts are here to help bring your vision to life.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <FaPhone className="text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-CHEF</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <FaEnvelope className="text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">hello@culinarymasters.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <FaMapMarkerAlt className="text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">123 Culinary Street, Foodie District, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <FaClock className="text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Types */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Catering', 'Private Events', 'Cooking Classes', 'Restaurant Booking'].map((service) => (
                  <button
                    key={service}
                    className="text-left p-3 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium transition-colors duration-200"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Form */}
          <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            {/* Inquiry Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-4">
                What are you interested in?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'catering', label: '🍽️ Catering', icon: '🍽️' },
                  { value: 'events', label: '🎉 Events', icon: '🎉' },
                  { value: 'classes', label: '👨‍🍳 Classes', icon: '👨‍🍳' },
                  { value: 'general', label: '💬 General', icon: '💬' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, inquiryType: option.value }))}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      formData.inquiryType === option.value
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-orange-300 text-gray-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* First Name */}
              <div className="relative">
                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900 mb-2">
                  First name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField('')}
                    className={`block w-full pl-10 pr-3.5 py-3 text-base text-gray-900 rounded-lg border-2 transition-all duration-200 ${
                      focusedField === 'firstName' 
                        ? 'border-orange-500 shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-orange-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
                    placeholder="Your first name"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="relative">
                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Last name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('lastName')}
                    onBlur={() => setFocusedField('')}
                    className={`block w-full pl-10 pr-3.5 py-3 text-base text-gray-900 rounded-lg border-2 transition-all duration-200 ${
                      focusedField === 'lastName' 
                        ? 'border-orange-500 shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-orange-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
                    placeholder="Your last name"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="relative">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company
                </label>
                <div className="relative">
                  <FaBuilding className="absolute left-3 top-3 text-gray-400" />
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField('')}
                    className={`block w-full pl-10 pr-3.5 py-3 text-base text-gray-900 rounded-lg border-2 transition-all duration-200 ${
                      focusedField === 'company' 
                        ? 'border-orange-500 shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-orange-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className={`block w-full pl-10 pr-3.5 py-3 text-base text-gray-900 rounded-lg border-2 transition-all duration-200 ${
                      focusedField === 'email' 
                        ? 'border-orange-500 shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-orange-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone number
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-3 text-gray-400" />
                  <div className="flex rounded-lg border-2 border-gray-200 hover:border-orange-300 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-opacity-50 transition-all duration-200">
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="bg-transparent pl-10 pr-7 py-3 text-base text-gray-700 focus:outline-none"
                    >
                      <option value="US">🇺🇸 US</option>
                      <option value="CA">🇨🇦 CA</option>
                      <option value="UK">🇬🇧 UK</option>
                      <option value="EU">🇪🇺 EU</option>
                    </select>
                    <input
                      id="phone-number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="block flex-1 min-w-0 py-3 pr-3 pl-1 text-base text-gray-900 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Tell us about your project
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    className={`block w-full pl-10 pr-3.5 py-3 text-base text-gray-900 rounded-lg border-2 transition-all duration-200 ${
                      focusedField === 'message' 
                        ? 'border-orange-500 shadow-lg' 
                        : 'border-gray-200 hover:border-orange-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 resize-none`}
                    placeholder="Tell us about your culinary vision, event details, or how we can help..."
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <input
                    id="agree-to-policies"
                    name="agreeToPolicies"
                    type="checkbox"
                    checked={formData.agreeToPolicies}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                  />
                </div>
                <label htmlFor="agree-to-policies" className="text-sm text-gray-600">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold text-orange-600 hover:text-orange-500">
                    privacy policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="font-semibold text-orange-600 hover:text-orange-500">
                    terms of service
                  </a>
                  .
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={!formData.agreeToPolicies || isAnimating}
                className={`w-full rounded-lg px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 ${
                  !formData.agreeToPolicies || isAnimating
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hover:shadow-xl transform hover:-translate-y-1'
                }`}
              >
                {isAnimating ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <FaPaperPlane />
                    Send Message
                  </div>
                )}
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Join over <span className="font-semibold text-orange-600">2,000+</span> satisfied clients who've trusted us with their culinary events
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}