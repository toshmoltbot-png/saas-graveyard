'use client'

import React from 'react'

interface TombstoneProps {
  name: string
  monthlyPrice: number
  monthsPaid: number
  deathReason: string
  isPremium?: boolean
}

const epitaphs: Record<string, string> = {
  'too-expensive': 'Priced itself out of existence',
  'never-used': 'Died of neglect. Nobody noticed.',
  'found-better': 'Replaced by someone younger and cheaper',
  'company-died': 'The startup gods claimed another',
  'rage-quit': 'Killed in cold blood after one too many bugs',
}

const premiumEpitaphs: Record<string, string[]> = {
  'too-expensive': [
    'Death by a thousand price increases',
    'The final invoice was one too many',
    'Greed killed the golden goose',
  ],
  'never-used': [
    'Paid monthly, logged in never',
    'The ghost subscription nobody needed',
    'Expired before ever living',
  ],
  'found-better': [
    'Outcompeted and forgotten',
    'The circle of life (and SaaS)',
    'Evolution claimed another victim',
  ],
  'company-died': [
    'Startup graveyard, meet subscription graveyard',
    'VC money ran out, so did patience',
    'Another unicorn becomes a corpse',
  ],
  'rage-quit': [
    'The bugs won this battle',
    'Support tickets went unanswered. Forever.',
    'One breaking change too many',
  ],
}

export default function Tombstone({ 
  name, 
  monthlyPrice, 
  monthsPaid, 
  deathReason,
  isPremium = false 
}: TombstoneProps) {
  const totalWasted = monthlyPrice * monthsPaid
  const startYear = new Date().getFullYear() - Math.floor(monthsPaid / 12)
  const endYear = new Date().getFullYear()
  
  // Get epitaph
  let epitaph = epitaphs[deathReason] || 'Rest in peace'
  
  if (isPremium && premiumEpitaphs[deathReason]) {
    const premiumOptions = premiumEpitaphs[deathReason]
    // Pick one based on name hash for consistency
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    epitaph = premiumOptions[hash % premiumOptions.length]
  }

  return (
    <div className="tombstone relative w-full max-w-[200px] h-[280px] p-6 flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
      {/* RIP icon */}
      <div className="absolute top-4 text-4xl opacity-20">☠️</div>
      
      {/* SaaS Name */}
      <h3 className="text-xl font-bold mb-2 mt-8 text-white font-serif">
        {name}
      </h3>
      
      {/* Dates */}
      <p className="text-sm text-gray-400 mb-3 font-serif italic">
        {startYear} - {endYear}
      </p>
      
      {/* Total Wasted */}
      <div className="mb-3">
        <p className="text-xs text-gray-500 uppercase tracking-wider">Wasted</p>
        <p className="text-2xl font-bold text-red-400">
          ${totalWasted.toLocaleString()}
        </p>
      </div>
      
      {/* Epitaph */}
      <p className="text-xs text-gray-400 italic font-serif leading-relaxed mt-auto">
        "{epitaph}"
      </p>
    </div>
  )
}
