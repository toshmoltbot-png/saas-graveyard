'use client'

import React, { useState, useRef } from 'react'
import { Download, Twitter, Linkedin, ArrowLeft } from 'lucide-react'
import html2canvas from 'html2canvas'
import GraveyardForm from '@/components/GraveyardForm'
import GraveyardCard, { type Subscription } from '@/components/GraveyardCard'

export default function Home() {
  const [showCard, setShowCard] = useState(false)
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleGenerate = (subs: Subscription[]) => {
    setSubscriptions(subs)
    setShowCard(true)
    // Scroll to card after a brief delay
    setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleDownload = async () => {
    const cardElement = document.getElementById('graveyard-card')
    if (!cardElement) return

    setIsGenerating(true)

    try {
      const canvas = await html2canvas(cardElement, {
        backgroundColor: '#0a0a0f',
        scale: 2,
        logging: false,
        useCORS: true,
      })

      const link = document.createElement('a')
      link.download = 'my-saas-graveyard.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Error generating image:', error)
      alert('Failed to generate image. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    const totalSaved = subscriptions.reduce(
      (sum, sub) => sum + sub.monthlyPrice * 12,
      0
    )
    const text = `I just canceled ${subscriptions.length} SaaS subscriptions and I'm saving $${totalSaved.toLocaleString()}/year! 💀\n\nSee your own graveyard at saasgraveyard.com`

    if (platform === 'twitter') {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
        '_blank'
      )
    } else {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://saasgraveyard.com')}`,
        '_blank'
      )
    }
  }

  const handleReset = () => {
    setShowCard(false)
    setSubscriptions([])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="cemetery-bg min-h-screen relative">
      {/* Background effects */}
      <div className="fog fog-1"></div>
      <div className="fog fog-2"></div>
      <div className="fog fog-3"></div>
      <div className="moon"></div>

      {/* Content */}
      <div className="relative z-10">
        {!showCard ? (
          /* Landing Page & Form */
          <div className="container mx-auto px-4 py-12 md:py-20">
            {/* Hero Section */}
            <div className="text-center mb-12 md:mb-16 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
                SaaS Graveyard 💀
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 font-serif italic">
                RIP to all the SaaS you forgot to cancel
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Create a beautiful graveyard card showing every subscription you've killed,
                how much you wasted, and how much you're saving now.
              </p>
            </div>

            {/* Form */}
            <GraveyardForm onGenerate={handleGenerate} />

            {/* Features */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <div className="text-4xl mb-4">🪦</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Beautiful Cards
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Cemetery-themed cards so gorgeous you'll want to share them
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Track Savings
                  </h3>
                  <p className="text-gray-400 text-sm">
                    See exactly how much you wasted and how much you're saving
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Graveyard Score
                  </h3>
                  <p className="text-gray-400 text-sm">
                    The higher your score, the more ruthless your optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Premium CTA */}
            <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-r from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
              <div className="text-center">
                <div className="premium-badge inline-block mb-4">PREMIUM</div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Unlock Premium Epitaphs
                </h3>
                <p className="text-gray-300 mb-6">
                  Get unwatermarked downloads + premium epitaphs for each tombstone
                </p>
                <a
                  href="#"
                  className="btn-primary inline-block"
                  onClick={(e) => {
                    e.preventDefault()
                    alert('Gumroad link will be added here - $5 one-time payment')
                  }}
                >
                  Unlock for $5 →
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Generated Card View */
          <div className="container mx-auto px-4 py-12">
            {/* Back Button */}
            <div className="mb-8">
              <button
                onClick={handleReset}
                className="btn-secondary flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Create Another
              </button>
            </div>

            {/* Graveyard Card */}
            <div ref={cardRef} className="mb-8">
              <GraveyardCard subscriptions={subscriptions} isPremium={false} />
            </div>

            {/* Actions */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-white text-center">
                  Share Your Graveyard
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={handleDownload}
                    disabled={isGenerating}
                    className="btn-primary flex items-center justify-center gap-2"
                  >
                    <Download size={20} />
                    {isGenerating ? 'Generating...' : 'Download PNG'}
                  </button>

                  <button
                    onClick={() => handleShare('twitter')}
                    className="btn-secondary flex items-center justify-center gap-2"
                  >
                    <Twitter size={20} />
                    Share on Twitter
                  </button>

                  <button
                    onClick={() => handleShare('linkedin')}
                    className="btn-secondary flex items-center justify-center gap-2"
                  >
                    <Linkedin size={20} />
                    Share on LinkedIn
                  </button>
                </div>

                {/* Premium Upgrade */}
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-gray-400 mb-4">
                    Want to remove the watermark and unlock premium epitaphs?
                  </p>
                  <a
                    href="#"
                    className="btn-primary inline-flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault()
                      alert('Gumroad link will be added here - $5 one-time payment')
                    }}
                  >
                    <span className="premium-badge">PREMIUM</span>
                    Upgrade for $5
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center text-gray-500 text-sm">
          <p>
            Made with 💀 by{' '}
            <a
              href="https://saasgraveyard.com"
              className="text-purple-400 hover:text-purple-300"
            >
              SaaS Graveyard
            </a>
          </p>
          <p className="mt-2">
            Stop paying for subscriptions you don't use. Give them a proper burial.
          </p>
        </footer>
      </div>
    </main>
  )
}
