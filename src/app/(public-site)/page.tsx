// import React from 'react'
// import Image from 'next/image'
// import '../global.css'
// import HeroBackground from '@/components/PuckBlocks/HeroBlocks/HeroBackground'

// export default function LandingPage() {
//   return (
//     <div className="">

//     </div>
//   )
// }

import React from 'react'
import Image from 'next/image'
import '../global.css'
import HeroBackground from '@/components/PuckBlocks/HeroBlocks/HeroBackground'
import WebsitePage from '@/components/Example'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

interface TestimonialProps {
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

interface PricingTierProps {
  name: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
)

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, company, content, avatar }) => (
  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold">
        {avatar}
      </div>
      <div className="ml-4">
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-gray-600 text-sm">
          {role} at {company}
        </p>
      </div>
    </div>
    <p className="text-gray-700 italic">"{content}"</p>
  </div>
)

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  period,
  features,
  highlighted = false,
}) => (
  <div
    className={`relative rounded-3xl p-8 ${
      highlighted
        ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white scale-105 shadow-2xl'
        : 'bg-white text-gray-900 shadow-xl hover:shadow-2xl'
    } transition-all duration-300`}
  >
    {highlighted && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-purple-900 px-4 py-2 rounded-full text-sm font-semibold">
        Most Popular
      </div>
    )}
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="flex items-baseline justify-center">
        <span className="text-4xl font-bold">{price}</span>
        <span className={`ml-2 ${highlighted ? 'text-purple-200' : 'text-gray-500'}`}>
          /{period}
        </span>
      </div>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg
            className={`w-5 h-5 mr-3 ${highlighted ? 'text-purple-200' : 'text-green-500'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
        highlighted
          ? 'bg-white text-purple-600 hover:bg-purple-50'
          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
      }`}
    >
      Get Started
    </button>
  </div>
)

export default function LandingPage() {
  const features: FeatureCardProps[] = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description:
        'Build professional websites in minutes, not months. Our drag-and-drop interface makes web development accessible to everyone.',
    },
    {
      icon: '🎨',
      title: 'Beautiful Templates',
      description:
        'Choose from hundreds of stunning, responsive templates designed by professional designers. Customize every element to match your brand.',
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description:
        'All websites automatically adapt to any screen size. Your site will look perfect on desktop, tablet, and mobile devices.',
    },
    {
      icon: '🔧',
      title: 'No Code Required',
      description:
        'Build complex websites without writing a single line of code. Focus on your business while we handle the technical details.',
    },
    {
      icon: '⚡',
      title: 'Instant Publishing',
      description:
        'Deploy your website instantly with our global CDN. Your site will load fast anywhere in the world with 99.9% uptime.',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description:
        'Enterprise-grade security and automated backups ensure your website is always protected and available.',
    },
  ]

  const testimonials: TestimonialProps[] = [
    {
      name: 'Sarah Johnson',
      role: 'Founder',
      company: 'TechStart',
      content:
        'This platform transformed how we build websites. What used to take weeks now takes hours. The results are stunning and professional.',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'GrowthCo',
      content:
        'The ease of use is incredible. Our entire team can now create landing pages without bothering the dev team. Game changer!',
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      company: 'Local Cafe',
      content:
        'As someone with zero technical skills, I was amazed at how quickly I could build a beautiful website for my business.',
      avatar: 'ER',
    },
  ]

  const pricingTiers: PricingTierProps[] = [
    {
      name: 'Starter',
      price: '$19',
      period: 'month',
      features: [
        '5 Websites',
        'Basic Templates',
        'Mobile Responsive',
        'SSL Certificate',
        'Email Support',
      ],
    },
    {
      name: 'Professional',
      price: '$49',
      period: 'month',
      highlighted: true,
      features: [
        'Unlimited Websites',
        'Premium Templates',
        'Advanced Customization',
        'Custom Domain',
        'Priority Support',
        'Analytics Dashboard',
        'SEO Tools',
      ],
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'month',
      features: [
        'Everything in Pro',
        'White Label Solution',
        'API Access',
        'Advanced Integrations',
        'Dedicated Support',
        'Custom Development',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-6 animate-fade-in">
            Build Websites
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Without Code
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into stunning websites in minutes. No coding skills required. Just
            drag, drop, and deploy with our revolutionary no-code platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
              Start Building Free
            </button>
            <button className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>

          <div className="mt-16 flex justify-center items-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-sm">Websites Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Everything You Need to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {' '}
                Succeed
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful features designed to help you create professional websites without any
              technical expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Loved by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Thousands
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers are saying about their experience with our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Simple,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include our core features with no
              hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Ideas?</h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Join thousands of creators who have already built amazing websites with our platform.
            Start your journey today with our free trial.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white/10">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NoCode Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
