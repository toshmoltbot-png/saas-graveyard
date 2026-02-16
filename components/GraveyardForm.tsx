'use client'

import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'
import type { Subscription } from './GraveyardCard'

interface GraveyardFormProps {
  onGenerate: (subscriptions: Subscription[]) => void
}

const deathReasons = [
  { value: 'too-expensive', label: 'Too expensive 💸' },
  { value: 'never-used', label: 'Never used 😴' },
  { value: 'found-better', label: 'Found better 🔄' },
  { value: 'company-died', label: 'Company died ⚰️' },
  { value: 'rage-quit', label: 'Rage quit 😤' },
]

// Demo data
const demoSubscriptions: Subscription[] = [
  {
    id: '1',
    name: 'Notion',
    monthlyPrice: 8,
    monthsPaid: 14,
    deathReason: 'found-better',
  },
  {
    id: '2',
    name: 'Heroku',
    monthlyPrice: 25,
    monthsPaid: 36,
    deathReason: 'too-expensive',
  },
  {
    id: '3',
    name: 'Evernote',
    monthlyPrice: 10,
    monthsPaid: 60,
    deathReason: 'never-used',
  },
  {
    id: '4',
    name: 'Clubhouse',
    monthlyPrice: 0,
    monthsPaid: 2,
    deathReason: 'company-died',
  },
]

export default function GraveyardForm({ onGenerate }: GraveyardFormProps) {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const [currentSub, setCurrentSub] = useState({
    name: '',
    monthlyPrice: '',
    monthsPaid: '',
    deathReason: 'too-expensive',
  })

  const handleAddSubscription = () => {
    if (!currentSub.name || !currentSub.monthlyPrice || !currentSub.monthsPaid) {
      alert('Please fill in all fields')
      return
    }

    const newSub: Subscription = {
      id: Date.now().toString(),
      name: currentSub.name,
      monthlyPrice: parseFloat(currentSub.monthlyPrice),
      monthsPaid: parseInt(currentSub.monthsPaid),
      deathReason: currentSub.deathReason,
    }

    setSubscriptions([...subscriptions, newSub])
    setCurrentSub({
      name: '',
      monthlyPrice: '',
      monthsPaid: '',
      deathReason: 'too-expensive',
    })
  }

  const handleRemoveSubscription = (id: string) => {
    setSubscriptions(subscriptions.filter((sub) => sub.id !== id))
  }

  const handleGenerate = () => {
    if (subscriptions.length === 0) {
      alert('Add at least one subscription to generate your graveyard!')
      return
    }
    onGenerate(subscriptions)
  }

  const loadDemo = () => {
    setSubscriptions(demoSubscriptions)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Add Subscription Form */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Add a Dead Subscription 💀
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Subscription Name
            </label>
            <input
              type="text"
              value={currentSub.name}
              onChange={(e) =>
                setCurrentSub({ ...currentSub, name: e.target.value })
              }
              placeholder="e.g., Netflix, Notion, Heroku"
              className="input-field w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Monthly Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                value={currentSub.monthlyPrice}
                onChange={(e) =>
                  setCurrentSub({ ...currentSub, monthlyPrice: e.target.value })
                }
                placeholder="9.99"
                className="input-field w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Months Paid
              </label>
              <input
                type="number"
                value={currentSub.monthsPaid}
                onChange={(e) =>
                  setCurrentSub({ ...currentSub, monthsPaid: e.target.value })
                }
                placeholder="12"
                className="input-field w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Why did you kill it?
            </label>
            <select
              value={currentSub.deathReason}
              onChange={(e) =>
                setCurrentSub({ ...currentSub, deathReason: e.target.value })
              }
              className="input-field w-full"
            >
              {deathReasons.map((reason) => (
                <option key={reason.value} value={reason.value}>
                  {reason.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAddSubscription}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            Add to Graveyard
          </button>
        </div>

        {subscriptions.length === 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={loadDemo}
              className="text-purple-400 hover:text-purple-300 text-sm underline"
            >
              Or load demo subscriptions
            </button>
          </div>
        )}
      </div>

      {/* Current Subscriptions List */}
      {subscriptions.length > 0 && (
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 mb-6">
          <h3 className="text-xl font-bold mb-4 text-white">
            Your Dead Subscriptions ({subscriptions.length})
          </h3>
          
          <div className="space-y-3">
            {subscriptions.map((sub) => (
              <div
                key={sub.id}
                className="flex items-center justify-between bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <div className="flex-1">
                  <p className="font-semibold text-white">{sub.name}</p>
                  <p className="text-sm text-gray-400">
                    ${sub.monthlyPrice}/mo × {sub.monthsPaid} months = $
                    {(sub.monthlyPrice * sub.monthsPaid).toFixed(2)} wasted
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveSubscription(sub.id)}
                  className="ml-4 p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                  aria-label="Remove subscription"
                >
                  <X size={20} className="text-red-400" />
                </button>
              </div>
            ))}
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="btn-primary w-full mt-6 text-lg py-4"
          >
            🪦 Generate My Graveyard
          </button>
        </div>
      )}
    </div>
  )
}
