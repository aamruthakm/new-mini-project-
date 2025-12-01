"use client"

import Link from "next/link"

export function FeatureCards() {
  const features = [
    {
      icon: "🌱",
      title: "Smart Crop Recommendation",
      description: "AI-powered system recommends best crops based on soil, weather, and location",
      href: "/crops",
      color: "bg-green-50",
    },
    {
      icon: "🚜",
      title: "Machinery Rental",
      description: "Rent tractors, plows, harvesters and other equipment by location and time",
      href: "/machinery",
      color: "bg-orange-50",
    },
    {
      icon: "🛒",
      title: "Marketplace",
      description: "Buy and sell seeds, fertilizers, crops directly from farmers",
      href: "/marketplace",
      color: "bg-blue-50",
    },
    {
      icon: "⛅",
      title: "Weather & Pest Alerts",
      description: "Real-time weather updates and pest outbreak notifications",
      href: "/weather",
      color: "bg-purple-50",
    },
    {
      icon: "📚",
      title: "Knowledge Portal",
      description: "Expert guidance, articles, tutorials, and community forums",
      href: "/knowledge",
      color: "bg-yellow-50",
    },
    {
      icon: "🛡️",
      title: "Farmer Dashboard",
      description: "Track your crops, bookings, and performance metrics",
      href: "/dashboard",
      color: "bg-emerald-50",
    },
  ]

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-pretty">
          All Tools You Need in One Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href}>
              <div
                className={`${feature.color} p-8 rounded-lg cursor-pointer transition hover:shadow-lg hover:scale-105`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-foreground-secondary">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
