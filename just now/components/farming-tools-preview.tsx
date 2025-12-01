"use client"

export function FarmingToolsPreview() {
  return (
    <section className="py-16 px-4 md:py-24 bg-surface-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-pretty">Why Choose AgroHelper?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">For Farmers</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-success text-xl flex-shrink-0">✓</span>
                <span>Get crop recommendations based on real data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl flex-shrink-0">✓</span>
                <span>Access affordable machinery rental</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl flex-shrink-0">✓</span>
                <span>Direct marketplace for selling crops</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl flex-shrink-0">✓</span>
                <span>Real-time weather and pest alerts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl flex-shrink-0">✓</span>
                <span>Learn from expert advice and community</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-accent text-xl flex-shrink-0">⚡</span>
                <span className="font-semibold">AI-Powered Recommendations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent text-xl flex-shrink-0">📱</span>
                <span className="font-semibold">Mobile-Friendly Interface</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent text-xl flex-shrink-0">🔔</span>
                <span className="font-semibold">Instant Notifications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent text-xl flex-shrink-0">🌍</span>
                <span className="font-semibold">Location-Based Services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent text-xl flex-shrink-0">👥</span>
                <span className="font-semibold">Community Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
