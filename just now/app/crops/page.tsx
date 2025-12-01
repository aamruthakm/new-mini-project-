"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CropRecommendation() {
  const [formData, setFormData] = useState({
    soilType: "loamy",
    phLevel: "6.5",
    temperature: "25",
    rainfall: "1200",
    season: "monsoon",
    location: "",
  })
  const [recommendation, setRecommendation] = useState<any>(null)

  const cropDatabase = {
    loamy: {
      monsoon: ["Rice", "Wheat", "Corn", "Sugarcane", "Cotton"],
      summer: ["Tomato", "Cucumber", "Cabbage", "Carrot", "Onion"],
      winter: ["Mustard", "Barley", "Lentil", "Peas", "Radish"],
    },
    clayey: {
      monsoon: ["Rice", "Cotton", "Groundnut", "Sugarcane", "Wheat"],
      summer: ["Tomato", "Cabbage", "Onion", "Carrot", "Potato"],
      winter: ["Barley", "Lentil", "Mustard", "Peas", "Chickpea"],
    },
    sandy: {
      monsoon: ["Groundnut", "Corn", "Watermelon", "Muskmelon", "Sesame"],
      summer: ["Cucumber", "Watermelon", "Muskmelon", "Okra", "Chili"],
      winter: ["Carrot", "Radish", "Turnip", "Peas", "Gram"],
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const soil = formData.soilType as keyof typeof cropDatabase
    const season = formData.season as keyof (typeof cropDatabase)[typeof soil]
    const crops = cropDatabase[soil][season]

    const fertility =
      Number.parseFloat(formData.phLevel) >= 6 && Number.parseFloat(formData.phLevel) <= 7.5 ? "Excellent" : "Fair"

    setRecommendation({
      recommendedCrops: crops,
      fertility,
      rainfallSuitable: Number.parseInt(formData.rainfall) > 800,
      temperatureSuitable: Number.parseInt(formData.temperature) > 15 && Number.parseInt(formData.temperature) < 35,
      fertilizers: ["NPK 20:20:0", "Potassium Chloride", "DAP"],
      pestControl: ["Neem Oil Spray", "Copper Fungicide", "Sulfur Dust"],
      sowingTime: `Best sowing in ${formData.season}`,
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-primary">Smart Crop Recommendation System</h1>
          <p className="text-center text-foreground-secondary mb-12">
            Get AI-powered crop suggestions based on your soil, weather, and location
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-surface rounded-lg shadow-md p-8 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Enter Your Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Soil Type</label>
                  <select
                    name="soilType"
                    value={formData.soilType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="loamy">Loamy Soil</option>
                    <option value="clayey">Clayey Soil</option>
                    <option value="sandy">Sandy Soil</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Soil pH Level (4-9)</label>
                  <input
                    type="number"
                    name="phLevel"
                    min="4"
                    max="9"
                    step="0.1"
                    value={formData.phLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Average Temperature (°C)</label>
                  <input
                    type="number"
                    name="temperature"
                    min="0"
                    max="50"
                    value={formData.temperature}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Annual Rainfall (mm)</label>
                  <input
                    type="number"
                    name="rainfall"
                    min="0"
                    value={formData.rainfall}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Season</label>
                  <select
                    name="season"
                    value={formData.season}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="monsoon">Monsoon</option>
                    <option value="summer">Summer</option>
                    <option value="winter">Winter</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="City, State"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-light transition font-semibold text-lg"
                >
                  Get Recommendations
                </button>
              </form>
            </div>

            {recommendation && (
              <div className="bg-surface rounded-lg shadow-md p-8 border border-border">
                <h2 className="text-2xl font-bold text-primary mb-6">Recommended Results</h2>

                <div className="mb-6">
                  <h3 className="font-bold text-primary mb-3">Recommended Crops</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {recommendation.recommendedCrops.map((crop: string) => (
                      <div
                        key={crop}
                        className="bg-background px-3 py-2 rounded-lg border border-primary/30 text-sm font-medium text-primary"
                      >
                        {crop}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <p className="text-sm">
                      <strong>Soil Fertility:</strong>{" "}
                      <span className="text-green-600">{recommendation.fertility}</span>
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <p className="text-sm">
                      <strong>Rainfall Suitable:</strong>{" "}
                      <span className={recommendation.rainfallSuitable ? "text-green-600" : "text-red-600"}>
                        {recommendation.rainfallSuitable ? "Yes" : "No"}
                      </span>
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <p className="text-sm">
                      <strong>Temperature Suitable:</strong>{" "}
                      <span className={recommendation.temperatureSuitable ? "text-green-600" : "text-red-600"}>
                        {recommendation.temperatureSuitable ? "Yes" : "No"}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-primary mb-2">Recommended Fertilizers</h3>
                  <ul className="space-y-2">
                    {recommendation.fertilizers.map((fert: string) => (
                      <li key={fert} className="text-sm flex items-center gap-2">
                        <span className="text-accent">•</span> {fert}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-2">Pest Control</h3>
                  <ul className="space-y-2">
                    {recommendation.pestControl.map((pest: string) => (
                      <li key={pest} className="text-sm flex items-center gap-2">
                        <span className="text-accent">•</span> {pest}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
