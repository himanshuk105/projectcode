'use client'

import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'

interface NavItem {
  name: string
  href: string
}

interface NavbarProps {
  brandName?: string
  brandLogo?: string
  navItems?: NavItem[]
  showAuthButtons?: boolean
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({
  brandName = 'NoCode',
  brandLogo,
  navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Templates', href: '#templates' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
  ],
  showAuthButtons = true,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const pathname = usePathname()
  console.log(pathname)
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Element
      if (!target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (): void => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (href: string): void => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <nav
        className={` ${pathname == '/pages' ? 'hidden' : ''} fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        } ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              {brandLogo ? (
                <img src={brandLogo} alt={brandName} className="h-8 w-8 sm:h-10 sm:w-10" />
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">
                    {brandName.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <span className="text-white font-bold text-lg sm:text-xl hidden xs:block">
                {brandName}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            {showAuthButtons && (
              <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
                <button className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 lg:py-2.5 lg:px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-sm lg:text-base">
                  Get Started
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 mobile-menu-button"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden mobile-menu-container ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-4 bg-white/10 backdrop-blur-md rounded-2xl mt-4 px-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href)
                    handleNavClick()
                  }}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}

              {showAuthButtons && (
                <div className="pt-4 space-y-3 border-t border-white/20">
                  <button
                    className="w-full text-left text-white/80 hover:text-white transition-colors duration-300 font-medium py-2"
                    onClick={handleNavClick}
                  >
                    Sign In
                  </button>
                  <button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                    onClick={handleNavClick}
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" />
      )}
    </>
  )
}

export default Navbar
export type { NavbarProps, NavItem }
