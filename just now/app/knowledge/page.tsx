"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function KnowledgePortal() {
  const [activeTab, setActiveTab] = useState("articles")
  const [chatMessages, setChatMessages] = useState<any[]>([
    { role: "assistant", content: "Hello! I am AgroBot. Ask me anything about farming!" },
  ])
  const [userInput, setUserInput] = useState("")

  const articles = [
    { title: "Sustainable Farming Practices", author: "Dr. Sharma", date: "2024-01-15", category: "Sustainability" },
    { title: "Crop Rotation Benefits", author: "Prof. Singh", date: "2024-01-10", category: "Techniques" },
    { title: "Organic Pest Management", author: "Dr. Patel", date: "2024-01-05", category: "Pest Control" },
  ]

  const handleSendMessage = () => {
    if (!userInput.trim()) return

    setChatMessages([...chatMessages, { role: "user", content: userInput }])

    const responses = [
      "For best crop yield, ensure proper soil pH levels between 6.0-7.5.",
      "Crop rotation helps maintain soil fertility and reduce pest pressure.",
      "Water your crops early morning or late evening to minimize evaporation.",
      "Use organic compost for better soil health and improved yields.",
    ]

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", content: responses[Math.floor(Math.random() * responses.length)] },
      ])
    }, 500)

    setUserInput("")
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-primary">Knowledge Portal</h1>
          <p className="text-center text-foreground-secondary mb-12">
            Learn from experts and connect with farming community
          </p>

          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {["articles", "chatbot", "forum"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg transition font-medium ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "bg-surface border border-border text-foreground-secondary hover:bg-surface-secondary"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === "articles" && (
            <div className="space-y-6">
              {articles.map((article, idx) => (
                <div
                  key={idx}
                  className="bg-surface rounded-lg shadow-md p-6 border border-border hover:shadow-lg transition cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{article.title}</h3>
                      <p className="text-sm text-foreground-secondary">
                        {article.author} • {article.date}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-surface-secondary text-foreground-secondary text-xs rounded-lg">
                      {article.category}
                    </span>
                  </div>
                  <p className="text-foreground-secondary mb-4">
                    Learn best practices and expert insights on {article.title.toLowerCase()}...
                  </p>
                  <button className="text-primary font-semibold hover:underline">Read More →</button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "chatbot" && (
            <div className="bg-surface rounded-lg shadow-md border border-border overflow-hidden flex flex-col h-96">
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.role === "user" ? "bg-primary text-white" : "bg-surface-secondary text-foreground"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-border p-4 flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ask AgroBot..."
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition font-semibold"
                >
                  Send
                </button>
              </div>
            </div>
          )}

          {activeTab === "forum" && (
            <div className="space-y-6">
              <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Community Forum</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <h4 className="font-bold text-foreground mb-2">Best practices for rice cultivation?</h4>
                    <p className="text-sm text-foreground-secondary mb-2">
                      Posted by Ram Kumar • 2 days ago • 12 replies
                    </p>
                    <p className="text-foreground-secondary">Any tips for improving rice yield in monsoon season?</p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <h4 className="font-bold text-foreground mb-2">Dealing with common crop diseases</h4>
                    <p className="text-sm text-foreground-secondary mb-2">
                      Posted by Priya Singh • 1 week ago • 8 replies
                    </p>
                    <p className="text-foreground-secondary">What's your experience with organic pest control?</p>
                  </div>
                  <div className="pb-4">
                    <h4 className="font-bold text-foreground mb-2">Equipment maintenance guide</h4>
                    <p className="text-sm text-foreground-secondary mb-2">
                      Posted by Farmer's Collective • 1 week ago • 5 replies
                    </p>
                    <p className="text-foreground-secondary">Tips for maintaining farming equipment...</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
