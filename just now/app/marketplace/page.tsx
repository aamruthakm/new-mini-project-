"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Marketplace() {
  const [filter, setFilter] = useState("all")
  const [cart, setCart] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      id: 1,
      name: "Premium Rice Seeds",
      type: "seeds",
      price: 450,
      seller: "Seed Masters",
      rating: 4.8,
      reviews: 234,
      image: "🌾",
    },
    {
      id: 2,
      name: "Organic Fertilizer (50kg)",
      type: "fertilizer",
      price: 800,
      seller: "Green Earth",
      rating: 4.6,
      reviews: 156,
      image: "🧪",
    },
    {
      id: 3,
      name: "Wheat Crop (Per Quintal)",
      type: "crop",
      price: 2500,
      seller: "Harvest Plus",
      rating: 4.9,
      reviews: 89,
      image: "🌾",
    },
    {
      id: 4,
      name: "Cotton Seeds Bundle",
      type: "seeds",
      price: 600,
      seller: "AgriTech",
      rating: 4.7,
      reviews: 145,
      image: "🌾",
    },
    {
      id: 5,
      name: "Neem Pesticide (1L)",
      type: "pesticide",
      price: 350,
      seller: "Bio Defence",
      rating: 4.5,
      reviews: 203,
      image: "🛡️",
    },
    {
      id: 6,
      name: "Corn Crop (Per Quintal)",
      type: "crop",
      price: 2200,
      seller: "Farm Direct",
      rating: 4.8,
      reviews: 112,
      image: "🌾",
    },
    {
      id: 7,
      name: "NPK Fertilizer (25kg)",
      type: "fertilizer",
      price: 1200,
      seller: "ChemAg",
      rating: 4.4,
      reviews: 98,
      image: "🧪",
    },
    {
      id: 8,
      name: "Sugarcane Saplings",
      type: "seeds",
      price: 150,
      seller: "Green Valley",
      rating: 4.7,
      reviews: 176,
      image: "🌾",
    },
  ]

  const filtered = products.filter((p) => {
    const matchesFilter = filter === "all" || p.type === filter
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.seller.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const addToCart = (product: any) => {
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId)
      return
    }
    setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)))
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-primary">Agricultural Marketplace</h1>
          <p className="text-center text-foreground-secondary mb-12">
            Buy and sell seeds, fertilizers, and crops directly from farmers
          </p>

          <div className="mb-8 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search products or sellers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="bg-surface rounded-lg shadow-md p-6 mb-12 border border-border">
            <h3 className="font-bold mb-4 text-primary">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {["all", "seeds", "fertilizer", "crop", "pesticide"].map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  variant={filter === cat ? "default" : "outline"}
                  className={filter === cat ? "bg-primary text-white" : ""}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.length > 0 ? (
              filtered.map((product) => (
                <div
                  key={product.id}
                  className="bg-surface rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition"
                >
                  <div className="bg-orange-50 h-32 flex items-center justify-center text-6xl">{product.image}</div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
                    <p className="text-sm text-foreground-secondary mb-1">{product.seller}</p>
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-foreground-secondary">({product.reviews} reviews)</span>
                    </div>
                    <p className="text-2xl font-bold text-accent mb-4">₹{product.price}</p>
                    <Button
                      onClick={() => addToCart(product)}
                      className="w-full bg-primary text-white hover:bg-primary/90"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-foreground-secondary text-lg">No products found matching your search.</p>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Shopping Cart ({totalItems} items)</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-4 bg-surface-secondary rounded-lg">
                    <div className="flex-1">
                      <p className="font-bold text-primary">{item.name}</p>
                      <p className="text-sm text-foreground-secondary">{item.seller}</p>
                      <p className="text-xs text-foreground-secondary mt-1">₹{item.price} each</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <label className="text-sm font-medium">Qty:</label>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                          className="w-16 px-2 py-1 border border-border rounded text-center"
                        />
                      </div>
                      <div className="text-right min-w-24">
                        <p className="font-bold">₹{item.price * item.quantity}</p>
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
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 bg-transparent">
                  Continue Shopping
                </Button>
                <Button className="flex-1 bg-primary text-white hover:bg-primary/90 font-semibold">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
