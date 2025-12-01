"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">AgroHelper</h4>
            <p className="text-sm text-primary-light">Smart farming platform for modern agriculture</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/crops">Crop Recommendation</Link>
              </li>
              <li>
                <Link href="/machinery">Machinery Rental</Link>
              </li>
              <li>
                <Link href="/marketplace">Marketplace</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/knowledge">Knowledge Portal</Link>
              </li>
              <li>
                <Link href="/weather">Weather Alerts</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-light pt-8 text-center text-sm">
          <p>&copy; 2025 AgroHelper. All rights reserved. | Smart Farming for Modern Agriculture</p>
        </div>
      </div>
    </footer>
  )
}
