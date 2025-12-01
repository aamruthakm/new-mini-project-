"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function MachineryRental() {
  const [searchLocation, setSearchLocation] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [cart, setCart] = useState<any[]>([])
  const [days, setDays] = useState<{ [key: number]: number }>({})

  const machinery = [
    { id: 1, name: "Tractor", type: "tractor", pricePerDay: 500, location: "Punjab", owner: "Raj Kumar", image: "🚜" },
    { id: 2, name: "Plow", type: "plow", pricePerDay: 200, location: "Punjab", owner: "Singh Bros", image: "🌾" },
    {
      id: 3,
      name: "Harvester",
      type: "harvester",
      pricePerDay: 1500,
      location: "Haryana",
      owner: "Green Fields",
      image: "🚜",
    },
    {
      id: 4,
      name: "Sprayer",
      type: "sprayer",
      pricePerDay: 150,
      location: "Rajasthan",
      owner: "Farm Tech",
      image: "💧",
    },
    {
      id: 5,
      name: "Seed Drill",
      type: "seeder",
      pricePerDay: 300,
      location: "Punjab",
      owner: "Modern Farming",
      image: "🌱",
    },
    {
      id: 6,
      name: "Rotavator",
      type: "rotavator",
      pricePerDay: 400,
      location: "Haryana",
      owner: "Agri Solutions",
      image: "⚙️",
    },
  ]

  const filtered = machinery.filter(
    (m) =>
      (selectedType === "all" || m.type === selectedType) &&
      (searchLocation === "" || m.location.toLowerCase().includes(searchLocation.toLowerCase())),
  )

  const addToCart = (item: any) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)
    const daysCount = days[item.id] || 1

    if (!existingItem) {
      setCart([...cart, { ...item, days: daysCount }])
      setDays({ ...days, [item.id]: 1 })
    }
  }

  const removeFromCart = (machineId: number) => {
    setCart(cart.filter((item) => item.id !== machineId))
  }

  const updateDays = (machineId: number, newDays: number) => {
    if (newDays < 1) return
    setCart(cart.map((item) => (item.id === machineId ? { ...item, days: newDays } : item)))
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.pricePerDay * item.days, 0)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-primary">Farming Equipment Rental</h1>
          <p className="text-center text-foreground-secondary mb-12">
            Rent tractors, plows, harvesters and more at affordable prices
          </p>

          <div className="bg-surface rounded-lg shadow-md p-6 mb-12 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Search by location"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Equipment Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Equipment</option>
                  <option value="tractor">Tractor</option>
                  <option value="plow">Plow</option>
                  <option value="harvester">Harvester</option>
                  <option value="sprayer">Sprayer</option>
                  <option value="seeder">Seed Drill</option>
                  <option value="rotavator">Rotavator</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition font-semibold">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length > 0 ? (
              filtered.map((machine) => (
                <div
                  key={machine.id}
                  className="bg-surface rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition"
                >
                  <div className="bg-orange-50 h-32 flex items-center justify-center text-5xl">{machine.image}</div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{machine.name}</h3>
                    <p className="text-sm text-foreground-secondary mb-4">{machine.owner}</p>
                    <div className="mb-4 space-y-2">
                      <p className="text-sm">
                        <strong>Location:</strong> {machine.location}
                      </p>
                      <p className="text-lg font-bold text-accent">₹{machine.pricePerDay}/day</p>
                    </div>
                    <Button
                      onClick={() => addToCart(machine)}
                      className="w-full bg-primary text-white hover:bg-primary/90 font-semibold text-sm"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-foreground-secondary text-lg">No equipment found matching your criteria.</p>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-12 bg-surface rounded-lg shadow-md p-6 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Your Booking Cart ({cart.length} items)</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-4 bg-surface-secondary rounded-lg">
                    <div>
                      <p className="font-bold text-primary">{item.name}</p>
                      <p className="text-sm text-foreground-secondary">{item.location}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <label className="text-sm font-medium">Days:</label>
                        <input
                          type="number"
                          min="1"
                          value={item.days}
                          onChange={(e) => updateDays(item.id, Number.parseInt(e.target.value))}
                          className="w-16 px-2 py-1 border border-border rounded text-center"
                        />
                      </div>
                      <div className="text-right min-w-24">
                        <p className="font-bold">₹{item.pricePerDay * item.days}</p>
                        <p className="text-xs text-foreground-secondary">₹{item.pricePerDay}/day</p>
                      </div>
                      <Button
                        onClick={() => removeFromCart(item.id)}
                        variant="ghost"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-6 pt-4 border-t border-border">
                <p className="text-xl font-bold text-primary">Total: ₹{totalPrice}</p>
              </div>
              <Button className="w-full bg-primary text-white hover:bg-primary/90 font-semibold py-3 text-lg">
                Proceed to Booking
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
