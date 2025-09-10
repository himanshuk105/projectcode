'use client'

import React, { useState } from 'react'

// Types for form data
interface LoginFormData {
  email: string
  password: string
}

interface BusinessDetails {
  businessName: string
  businessType: string
  industry: string
  businessSize: string
  website: string
  phoneNumber: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  description: string
  targetAudience: string
  services: string[]
  socialMedia: {
    facebook: string
    instagram: string
    twitter: string
    linkedin: string
  }
}

interface SignupFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  businessDetails: BusinessDetails
  agreeToTerms: boolean
  subscribeNewsletter: boolean
}

interface FormErrors {
  [key: string]: string
}

// Login Page Component
const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('Login data:', formData)
      alert('Login successful!')
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">N</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-300">Sign in to your NoCode account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-white font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878L12 12m6.121-3.172a3 3 0 00-2.828 0M21.878 14.828L12 5.657"
                      />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
              >
                Forgot your password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Don't have an account?{' '}
              <a
                href="#signup"
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Signup Page Component
const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessDetails: {
      businessName: '',
      businessType: '',
      industry: '',
      businessSize: '',
      website: '',
      phoneNumber: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      description: '',
      targetAudience: '',
      services: [],
      socialMedia: {
        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: '',
      },
    },
    agreeToTerms: false,
    subscribeNewsletter: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const businessTypes = [
    'Sole Proprietorship',
    'Partnership',
    'LLC',
    'Corporation',
    'Non-Profit',
    'Other',
  ]

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Retail',
    'Manufacturing',
    'Real Estate',
    'Food & Beverage',
    'Travel & Tourism',
    'Entertainment',
    'Professional Services',
    'Construction',
    'Agriculture',
    'Other',
  ]

  const businessSizes = [
    'Solo (Just me)',
    'Small (2-10 employees)',
    'Medium (11-50 employees)',
    'Large (51-200 employees)',
    'Enterprise (200+ employees)',
  ]

  const availableServices = [
    'Website Development',
    'E-commerce',
    'Blog/Content Management',
    'Online Booking',
    'Customer Portal',
    'Inventory Management',
    'Payment Processing',
    'Analytics & Reporting',
    'Email Marketing',
    'Social Media Integration',
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): void => {
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else if (name.startsWith('businessDetails.')) {
      const field = name.replace('businessDetails.', '')
      if (field.startsWith('socialMedia.')) {
        const socialField = field.replace('socialMedia.', '')
        setFormData((prev) => ({
          ...prev,
          businessDetails: {
            ...prev.businessDetails,
            socialMedia: {
              ...prev.businessDetails.socialMedia,
              [socialField]: value,
            },
          },
        }))
      } else {
        setFormData((prev) => ({
          ...prev,
          businessDetails: {
            ...prev.businessDetails,
            [field]: value,
          },
        }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleServiceToggle = (service: string): void => {
    setFormData((prev) => ({
      ...prev,
      businessDetails: {
        ...prev.businessDetails,
        services: prev.businessDetails.services.includes(service)
          ? prev.businessDetails.services.filter((s) => s !== service)
          : [...prev.businessDetails.services, service],
      },
    }))
  }

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.businessDetails.businessName.trim()) {
      newErrors['businessDetails.businessName'] = 'Business name is required'
    }

    if (!formData.businessDetails.businessType) {
      newErrors['businessDetails.businessType'] = 'Business type is required'
    }

    if (!formData.businessDetails.industry) {
      newErrors['businessDetails.industry'] = 'Industry is required'
    }

    if (!formData.businessDetails.businessSize) {
      newErrors['businessDetails.businessSize'] = 'Business size is required'
    }

    if (!formData.businessDetails.phoneNumber) {
      newErrors['businessDetails.phoneNumber'] = 'Phone number is required'
    }

    if (!formData.businessDetails.description.trim()) {
      newErrors['businessDetails.description'] = 'Business description is required'
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = (): void => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
    }
  }

  const handleBack = (): void => {
    if (currentStep === 2) {
      setCurrentStep(1)
    }
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

    if (!validateStep2()) return

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000))
      console.log('Signup data:', formData)
      alert('Account created successfully!')
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">N</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Create Your Account</h1>
          <p className="text-gray-300">Join NoCode and start building your website today</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= 1 ? 'bg-purple-600 border-purple-600 text-white' : 'border-white/30 text-gray-400'}`}
            >
              1
            </div>
            <div
              className={`w-20 h-1 rounded ${currentStep >= 2 ? 'bg-purple-600' : 'bg-white/30'}`}
            ></div>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= 2 ? 'bg-purple-600 border-purple-600 text-white' : 'border-white/30 text-gray-400'}`}
            >
              2
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleNext()
              }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Personal Information</h2>
                <p className="text-gray-300">Let's start with your basic details</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-white font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-white font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-white font-medium mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 pr-12"
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878L12 12m6.121-3.172a3 3 0 00-2.828 0M21.878 14.828L12 5.657"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                <p className="text-gray-400 text-sm mt-1">
                  Must contain uppercase, lowercase, and number
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-white font-medium mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Next Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Continue to Business Details
              </button>

              {/* Sign In Link */}
              <div className="text-center">
                <p className="text-gray-300">
                  Already have an account?{' '}
                  <a
                    href="#login"
                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Sign in here
                  </a>
                </p>
              </div>
            </form>
          )}

          {/* Step 2: Business Information */}
          {currentStep === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Business Information</h2>
                <p className="text-gray-300">
                  Tell us about your business to create the perfect website
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-white font-medium mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessDetails.businessName"
                    value={formData.businessDetails.businessName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your business name"
                  />
                  {errors['businessDetails.businessName'] && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors['businessDetails.businessName']}
                    </p>
                  )}
                </div>

                {/* Business Type */}
                <div>
                  <label htmlFor="businessType" className="block text-white font-medium mb-2">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessDetails.businessType"
                    value={formData.businessDetails.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className="bg-gray-800">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors['businessDetails.businessType'] && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors['businessDetails.businessType']}
                    </p>
                  )}
                </div>

                {/* Industry */}
                <div>
                  <label htmlFor="industry" className="block text-white font-medium mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="businessDetails.industry"
                    value={formData.businessDetails.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry} className="bg-gray-800">
                        {industry}
                      </option>
                    ))}
                  </select>
                  {errors['businessDetails.industry'] && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors['businessDetails.industry']}
                    </p>
                  )}
                </div>

                {/* Business Size */}
                <div>
                  <label htmlFor="businessSize" className="block text-white font-medium mb-2">
                    Business Size *
                  </label>
                  <select
                    id="businessSize"
                    name="businessDetails.businessSize"
                    value={formData.businessDetails.businessSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select business size</option>
                    {businessSizes.map((size) => (
                      <option key={size} value={size} className="bg-gray-800">
                        {size}
                      </option>
                    ))}
                  </select>
                  {errors['businessDetails.businessSize'] && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors['businessDetails.businessSize']}
                    </p>
                  )}
                </div>

                {/* Current Website */}
                <div>
                  <label htmlFor="website" className="block text-white font-medium mb-2">
                    Current Website (Optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="businessDetails.website"
                    value={formData.businessDetails.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-white font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="businessDetails.phoneNumber"
                    value={formData.businessDetails.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your business phone number"
                  />
                  {errors['businessDetails.phoneNumber'] && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors['businessDetails.phoneNumber']}
                    </p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-white font-medium mb-2">
                  Business Address (Optional)
                </label>
                <input
                  type="text"
                  id="address"
                  name="businessDetails.address"
                  value={formData.businessDetails.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Street address"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-white font-medium mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="businessDetails.city"
                    value={formData.businessDetails.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="City"
                  />
                </div>

                {/* State */}
                <div>
                  <label htmlFor="state" className="block text-white font-medium mb-2">
                    State/Province
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="businessDetails.state"
                    value={formData.businessDetails.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="State/Province"
                  />
                </div>

                {/* Zip Code */}
                <div>
                  <label htmlFor="zipCode" className="block text-white font-medium mb-2">
                    Zip/Postal Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="businessDetails.zipCode"
                    value={formData.businessDetails.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Zip code"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-white font-medium mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="businessDetails.country"
                  value={formData.businessDetails.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Country"
                />
              </div>

              {/* Business Description */}
              <div>
                <label htmlFor="description" className="block text-white font-medium mb-2">
                  Business Description *
                </label>
                <textarea
                  id="description"
                  name="businessDetails.description"
                  value={formData.businessDetails.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Describe your business, products, and services..."
                />
                {errors['businessDetails.description'] && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors['businessDetails.description']}
                  </p>
                )}
              </div>

              {/* Target Audience */}
              <div>
                <label htmlFor="targetAudience" className="block text-white font-medium mb-2">
                  Target Audience (Optional)
                </label>
                <textarea
                  id="targetAudience"
                  name="businessDetails.targetAudience"
                  value={formData.businessDetails.targetAudience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Describe your ideal customers and target market..."
                />
              </div>

              {/* Services Needed */}
              <div>
                <label className="block text-white font-medium mb-4">
                  What services do you need for your website? (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {availableServices.map((service) => (
                    <label key={service} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.businessDetails.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-5 h-5 text-purple-600 bg-white/10 border-white/30 rounded focus:ring-purple-500 focus:ring-2"
                      />
                      <span className="text-white text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-white font-medium mb-4">Social Media Profiles (Optional)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Facebook */}
                  <div>
                    <label htmlFor="facebook" className="block text-white font-medium mb-2">
                      Facebook
                    </label>
                    <input
                      type="url"
                      id="facebook"
                      name="businessDetails.socialMedia.facebook"
                      value={formData.businessDetails.socialMedia.facebook}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="https://facebook.com/yourpage"
                    />
                  </div>

                  {/* Instagram */}
                  <div>
                    <label htmlFor="instagram" className="block text-white font-medium mb-2">
                      Instagram
                    </label>
                    <input
                      type="url"
                      id="instagram"
                      name="businessDetails.socialMedia.instagram"
                      value={formData.businessDetails.socialMedia.instagram}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="https://instagram.com/yourprofile"
                    />
                  </div>

                  {/* Twitter */}
                  <div>
                    <label htmlFor="twitter" className="block text-white font-medium mb-2">
                      Twitter
                    </label>
                    <input
                      type="url"
                      id="twitter"
                      name="businessDetails.socialMedia.twitter"
                      value={formData.businessDetails.socialMedia.twitter}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="https://twitter.com/yourhandle"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label htmlFor="linkedin" className="block text-white font-medium mb-2">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="businessDetails.socialMedia.linkedin"
                      value={formData.businessDetails.socialMedia.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="https://linkedin.com/company/yourcompany"
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Newsletter */}
              <div className="space-y-4">
                {/* Terms Agreement */}
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-purple-600 bg-white/10 border-white/30 rounded focus:ring-purple-500 focus:ring-2 mt-0.5"
                  />
                  <span className="text-white text-sm">
                    I agree to the{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                      Privacy Policy
                    </a>{' '}
                    *
                  </span>
                </label>
                {errors.agreeToTerms && (
                  <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>
                )}

                {/* Newsletter Subscription */}
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-purple-600 bg-white/10 border-white/30 rounded focus:ring-purple-500 focus:ring-2 mt-0.5"
                  />
                  <span className="text-white text-sm">
                    Subscribe to our newsletter for tips, updates, and exclusive offers
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 border-2 border-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating Account...
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

// Export both components and their types
export { LoginPage, SignupPage }
export type { LoginFormData, SignupFormData, BusinessDetails }
