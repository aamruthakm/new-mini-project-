"use client"

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 px-4 md:py-32 md:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-6xl md:text-7xl font-bold mb-6 text-pretty">
          Smart Farming for <span className="text-primary">Modern Agriculture</span>
        </div>
        <p className="text-xl text-foreground-secondary mb-8 max-w-2xl mx-auto text-pretty">
          Get AI-powered crop recommendations, real-time weather alerts, rent farming equipment, and connect with
          agricultural experts all in one platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-light transition font-semibold text-lg"
          >
            Get Started Free
          </Link>
          <Link
            href="/crops"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-surface-secondary transition font-semibold text-lg"
          >
            Try Crop Recommendation
          </Link>
        </div>
      </div>
    </section>
  )
}
