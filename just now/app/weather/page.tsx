"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function WeatherAlerts() {
  const [location, setLocation] = useState("Punjab")
  const [loading, setLoading] = useState(false)

  const weatherData = {
    location: location,
    temperature: 28,
    humidity: 65,
    rainfall: 120,
    windSpeed: 15,
    soilMoisture: 45,
    uvIndex: 7,
    alerts: [
      {
        id: 1,
        type: "warning",
        title: "Heat Wave Alert",
        description: "Temperature expected to reach 38°C. Increase irrigation frequency.",
        date: "Today",
        severity: "high",
      },
      {
        id: 2,
        type: "info",
        title: "Heavy Rainfall Expected",
        description: "Prepare your fields for waterlogging. Ensure proper drainage.",
        date: "Tomorrow",
        severity: "medium",
      },
      {
        id: 3,
        type: "pest",
        title: "Fall Armyworm Alert",
        description: "Pest outbreak detected in nearby farms. Begin preventive spraying.",
        date: "Yesterday",
        severity: "high",
      },
      {
        id: 4,
        type: "info",
        title: "Frost Warning",
        description: "Night temperature may drop to 2°C. Protect sensitive crops.",
        date: "Next 3 days",
        severity: "medium",
      },
    ],
    spraySchedule: [
      {
        id: 1,
        name: "Fungicide Spray",
        reason: "High humidity (65%) creates favorable conditions for fungal diseases",
        recommendedDate: "Today evening",
        priority: "high",
      },
      {
        id: 2,
        name: "Pest Control - Armyworm",
        reason: "Fall armyworm outbreak detected in surrounding areas",
        recommendedDate: "Tomorrow morning",
        priority: "critical",
      },
      {
        id: 3,
        name: "Fertilizer Application",
        reason: "Upcoming heat wave requires nutrient boost",
        recommendedDate: "Day after tomorrow",
        priority: "medium",
      },
    ],
  }

  const handleLocationSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  const getAlertColor = (type: string) => {
    switch (type) {
      case "warning":
        return "border-red-400 bg-red-50"
      case "pest":
        return "border-orange-400 bg-orange-50"
      case "info":
        return "border-blue-400 bg-blue-50"
      default:
        return "border-gray-400 bg-gray-50"
    }
  }

  const getSeverityBadge = (severity: string) => {
    const colors = {
      critical: "bg-red-600 text-white",
      high: "bg-orange-500 text-white",
      medium: "bg-yellow-500 text-white",
      low: "bg-green-500 text-white",
    }
    return colors[severity as keyof typeof colors] || colors.low
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-primary">Weather & Pest Alerts</h1>
          <p className="text-center text-foreground-secondary mb-12">
            Real-time weather updates and agricultural alerts for your region
          </p>

          <form onSubmit={handleLocationSearch} className="mb-8 max-w-md mx-auto flex gap-2">
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location (e.g., Punjab, Maharashtra)"
              disabled={loading}
              className="flex-1"
            />
            <Button type="submit" disabled={loading} className="bg-primary text-white hover:bg-primary/90">
              {loading ? "Searching..." : "Search"}
            </Button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
              <div className="text-sm text-foreground-secondary mb-2 font-medium">Temperature</div>
              <div className="text-4xl font-bold text-primary">{weatherData.temperature}°C</div>
              <div className="text-xs text-foreground-secondary mt-2">Current conditions</div>
            </div>
            <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
              <div className="text-sm text-foreground-secondary mb-2 font-medium">Humidity</div>
              <div className="text-4xl font-bold text-primary">{weatherData.humidity}%</div>
              <div className="text-xs text-foreground-secondary mt-2">Air moisture level</div>
            </div>
            <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
              <div className="text-sm text-foreground-secondary mb-2 font-medium">Rainfall</div>
              <div className="text-4xl font-bold text-primary">{weatherData.rainfall}mm</div>
              <div className="text-xs text-foreground-secondary mt-2">Expected this month</div>
            </div>
            <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
              <div className="text-sm text-foreground-secondary mb-2 font-medium">Wind Speed</div>
              <div className="text-4xl font-bold text-primary">{weatherData.windSpeed}km/h</div>
              <div className="text-xs text-foreground-secondary mt-2">Current wind speed</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">Active Alerts ({weatherData.alerts.length})</h2>
          <div className="space-y-4 mb-12">
            {weatherData.alerts.map((alert) => (
              <div key={alert.id} className={`rounded-lg shadow-md p-6 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg text-primary">{alert.title}</h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${getSeverityBadge(alert.severity)}`}>
                        {alert.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-foreground mb-2">{alert.description}</p>
                    <p className="text-xs text-foreground-secondary">{alert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6">Spray Schedule Recommendations</h2>
            <div className="space-y-4">
              {weatherData.spraySchedule.map((schedule) => (
                <div
                  key={schedule.id}
                  className="flex items-center justify-between p-4 bg-surface-secondary rounded-lg border border-border"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-bold text-primary">{schedule.name}</p>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${getSeverityBadge(schedule.priority)}`}>
                        {schedule.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-foreground-secondary">{schedule.reason}</p>
                    <p className="text-xs text-foreground-secondary mt-2">Recommended: {schedule.recommendedDate}</p>
                  </div>
                  <Button className="ml-4 bg-primary text-white hover:bg-primary/90">Schedule</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
