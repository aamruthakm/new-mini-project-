"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    setIsLoggedIn(false)
    router.push("/")
  }

  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              🌾
            </div>
            <span className="font-bold text-lg text-primary">AgroHelper</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/crops" className="text-foreground-secondary hover:text-primary transition">
              Crop Recommendation
            </Link>
            <Link href="/machinery" className="text-foreground-secondary hover:text-primary transition">
              Machinery Rental
            </Link>
            <Link href="/marketplace" className="text-foreground-secondary hover:text-primary transition">
              Marketplace
            </Link>
            <Link href="/weather" className="text-foreground-secondary hover:text-primary transition">
              Weather & Alerts
            </Link>
            <Link href="/knowledge" className="text-foreground-secondary hover:text-primary transition">
              Knowledge
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/signin" className="px-4 py-2 text-primary hover:bg-surface-secondary rounded-lg transition">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition font-medium"
            >
              Sign Up
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/crops" className="block px-4 py-2 text-foreground-secondary hover:text-primary">
              Crop Recommendation
            </Link>
            <Link href="/machinery" className="block px-4 py-2 text-foreground-secondary hover:text-primary">
              Machinery Rental
            </Link>
            <Link href="/marketplace" className="block px-4 py-2 text-foreground-secondary hover:text-primary">
              Marketplace
            </Link>
            <Link href="/weather" className="block px-4 py-2 text-foreground-secondary hover:text-primary">
              Weather & Alerts
            </Link>
            <Link href="/knowledge" className="block px-4 py-2 text-foreground-secondary hover:text-primary">
              Knowledge
            </Link>
            <Link href="/signin" className="block px-4 py-2 text-primary">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
