'use client'

import React from 'react'
import Tombstone from './Tombstone'

export interface Subscription {
  id: string
  name: string
  monthlyPrice: number
  monthsPaid: number
  deathReason: string
}

interface GraveyardCardProps {
  subscriptions: Subscription[]
  isPremium?: boolean
}

export default function GraveyardCard({ subscriptions, isPremium = false }: GraveyardCardProps) {
  // Calculate stats
  const totalWasted = subscriptions.reduce(
    (sum, sub) => sum + sub.monthlyPrice * sub.monthsPaid,
    0
  )
  
  const annualSavings = subscriptions.reduce(
    (sum, sub) => sum + sub.monthlyPrice * 12,
    0
  )
  
  // Graveyard Score: Higher = more ruthless optimizer
  // Based on: number of subscriptions killed + money saved per year / 100
  const graveyardScore = Math.round(
    subscriptions.length * 10 + annualSavings / 100
  )

  // Generate random stars
  const stars = React.useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 60}%`,
      delay: `${Math.random() * 3}s`,
    }))
  }, [])

  return (
    <div
      id="graveyard-card"
      className="graveyard-card relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
      style={{ minHeight: '800px' }}
    >
      {/* Background effects */}
      <div className="fog fog-1"></div>
      <div className="fog fog-2"></div>
      <div className="fog fog-3"></div>
      <div className="moon"></div>
      
      {/* Stars */}
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            My SaaS Graveyard 💀
          </h1>
          <p className="text-lg text-gray-300 font-serif italic">
            Where subscriptions go to rest in peace
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
              Total Wasted
            </p>
            <p className="text-3xl md:text-4xl font-bold text-red-400">
              ${totalWasted.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
              Saved Per Year
            </p>
            <p className="text-3xl md:text-4xl font-bold text-green-400">
              ${annualSavings.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
              Graveyard Score
            </p>
            <p className="text-3xl md:text-4xl font-bold text-purple-400">
              {graveyardScore}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {graveyardScore > 200 ? 'Ruthless Optimizer 🔥' : 
               graveyardScore > 100 ? 'Budget Master 💪' : 
               graveyardScore > 50 ? 'Getting There 📈' : 
               'Baby Steps 🐣'}
            </p>
          </div>
        </div>

        {/* Tombstones Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {subscriptions.map((sub) => (
            <Tombstone
              key={sub.id}
              name={sub.name}
              monthlyPrice={sub.monthlyPrice}
              monthsPaid={sub.monthsPaid}
              deathReason={sub.deathReason}
              isPremium={isPremium}
            />
          ))}
        </div>

        {/* Watermark (only if not premium) */}
        {!isPremium && (
          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-500">
              Made with{' '}
              <a
                href="https://saasgraveyard.com"
                className="text-purple-400 hover:text-purple-300 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                saasgraveyard.com
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
