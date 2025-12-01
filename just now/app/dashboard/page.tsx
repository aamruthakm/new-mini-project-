"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser")
    if (!currentUser) {
      router.push("/signin")
    } else {
      setUser(JSON.parse(currentUser))
    }
  }, [router])

  if (!user) return null

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Welcome, {user.name}!</h1>
            <p className="text-foreground-secondary">Your personalized farming dashboard</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-surface rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-primary mb-4">Account Info</h3>
              <p className="text-sm text-foreground-secondary mb-2">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-sm text-foreground-secondary mb-2">
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="text-sm text-foreground-secondary mb-2">
                <strong>Location:</strong> {user.location}
              </p>
              <p className="text-sm text-foreground-secondary">
                <strong>Type:</strong> {user.userType}
              </p>
            </div>

            <div className="bg-surface rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-primary mb-4">Quick Stats</h3>
              <p className="text-sm text-foreground-secondary mb-2">
                Active Crops: <span className="font-bold">0</span>
              </p>
              <p className="text-sm text-foreground-secondary mb-2">
                Machinery Bookings: <span className="font-bold">0</span>
              </p>
              <p className="text-sm text-foreground-secondary mb-2">
                Marketplace Listings: <span className="font-bold">0</span>
              </p>
              <p className="text-sm text-foreground-secondary">
                Community Points: <span className="font-bold">0</span>
              </p>
            </div>

            <div className="bg-surface rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-primary mb-4">Notifications</h3>
              <p className="text-sm text-foreground-secondary mb-4">No new notifications</p>
              <Link href="/weather" className="text-accent hover:underline text-sm">
                Check weather alerts
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/crops">
              <div className="bg-green-50 rounded-lg p-8 cursor-pointer hover:shadow-lg transition border border-border">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-primary mb-2">Get Crop Recommendation</h3>
                <p className="text-foreground-secondary">Find the best crops for your conditions</p>
              </div>
            </Link>

            <Link href="/machinery">
              <div className="bg-orange-50 rounded-lg p-8 cursor-pointer hover:shadow-lg transition border border-border">
                <div className="text-4xl mb-4">🚜</div>
                <h3 className="text-xl font-bold text-primary mb-2">Rent Machinery</h3>
                <p className="text-foreground-secondary">Find and book farming equipment</p>
              </div>
            </Link>

            <Link href="/marketplace">
              <div className="bg-blue-50 rounded-lg p-8 cursor-pointer hover:shadow-lg transition border border-border">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-primary mb-2">Marketplace</h3>
                <p className="text-foreground-secondary">Buy or sell agricultural products</p>
              </div>
            </Link>

            <Link href="/knowledge">
              <div className="bg-yellow-50 rounded-lg p-8 cursor-pointer hover:shadow-lg transition border border-border">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-primary mb-2">Knowledge Portal</h3>
                <p className="text-foreground-secondary">Learn from experts and community</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
