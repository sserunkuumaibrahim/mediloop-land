'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="Mediloop home">
              <img
                src="/assets/mediloop.png"
                alt="Mediloop logo"
                className="h-32 w-auto sm:h-32 lg:h-32"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main navigation links for Mediloop's core pages */}
            <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About Us</a>
            <a href="/platform" className="text-gray-700 hover:text-gray-900 font-medium">Platform</a>
            <a href="/uhid" className="text-gray-700 hover:text-gray-900 font-medium">Universal Health ID</a>
            <a href="/providers" className="text-gray-700 hover:text-gray-900 font-medium">Provider Network</a>
            <a href="/services" className="text-gray-700 hover:text-gray-900 font-medium">Digital Services</a>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a href="https://developers.mediloop.co" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Developer Portal</a>
                <a href="https://docs.mediloop.co" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">API Documentation</a>
                <div className="border-t border-gray-200"></div>
                <a href="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Team</a>
                <a href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Blog</a>
                <a href="/careers" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Careers</a>
                <a href="/press" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Press</a>
                <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Contact</a>
              </div>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mounted && isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <a href="/about" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">About Us</a>
              <a href="/platform" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Platform</a>
              <a href="/uhid" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Universal Health ID</a>
              <a href="/providers" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Provider Network</a>
              <a href="/services" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Digital Services</a>
              
              <div className="border-t border-gray-200 pt-2 mt-2">
                <p className="text-sm font-medium text-gray-500 mb-2">More</p>
                <a href="https://developers.mediloop.co" target="_blank" rel="noopener noreferrer" className="block py-1 text-gray-700 hover:text-gray-900">Developer Portal</a>
                <a href="https://docs.mediloop.co" target="_blank" rel="noopener noreferrer" className="block py-1 text-gray-700 hover:text-gray-900">API Documentation</a>
                <a href="/team" className="block py-1 text-gray-700 hover:text-gray-900">Team</a>
                <a href="/blog" className="block py-1 text-gray-700 hover:text-gray-900">Blog</a>
                <a href="/careers" className="block py-1 text-gray-700 hover:text-gray-900">Careers</a>
                <a href="/press" className="block py-1 text-gray-700 hover:text-gray-900">Press</a>
                <a href="/contact" className="block py-1 text-gray-700 hover:text-gray-900">Contact</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
