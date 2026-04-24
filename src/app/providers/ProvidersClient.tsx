'use client'

import { useState } from 'react'
import { CheckCircle, Minus, Plus } from 'lucide-react'

// ─── Pricing Calculator ───────────────────────────────────────────────────────

const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    monthlyPerSeat: 25000,
    yearlyPerSeat: 250000,
    yearlyMonthlyEquiv: Math.round(250000 / 12),
    yearlySavingPct: 17,
    badge: null,
    comingSoon: false,
    description: 'Core EMR. No AI features.',
    color: 'border-gray-200',
    activeColor: 'border-teal-500 ring-2 ring-teal-500',
  },
  {
    id: 'premium',
    name: 'Premium',
    monthlyPerSeat: 45000,
    yearlyPerSeat: 459000,
    yearlyMonthlyEquiv: Math.round(459000 / 12),
    yearlySavingPct: 15,
    badge: 'WITH AI',
    comingSoon: true,
    description: 'Full EMR + AI clinical support.',
    color: 'border-gray-200',
    activeColor: 'border-teal-500 ring-2 ring-teal-500',
  },
]

export function PricingCalculator() {
  const [seats, setSeats] = useState(5)
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic')

  const plan = PLANS.find((p) => p.id === selectedPlan)!

  const pricePerSeat = billing === 'monthly' ? plan.monthlyPerSeat : plan.yearlyMonthlyEquiv
  const total = seats * pricePerSeat
  const yearlyTotal = seats * plan.yearlyPerSeat
  const monthlySaving = seats * (plan.monthlyPerSeat - plan.yearlyMonthlyEquiv)

  function fmt(n: number) {
    return 'UGX ' + n.toLocaleString('en-UG')
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden max-w-2xl mx-auto">
      {/* Header */}
      <div className="bg-teal-600 px-6 py-4">
        <h3 className="text-white font-bold text-lg">Pricing Calculator</h3>
        <p className="text-teal-100 text-sm">See your exact cost in real time</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Plan selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Select Plan</label>
          <div className="grid grid-cols-2 gap-3">
            {PLANS.map((p) => (
              <button
                key={p.id}
                onClick={() => !p.comingSoon && setSelectedPlan(p.id as 'basic' | 'premium')}
                className={`relative rounded-xl border-2 p-4 text-left transition-all ${
                  p.comingSoon
                    ? 'opacity-50 cursor-not-allowed border-gray-200'
                    : selectedPlan === p.id
                    ? 'border-teal-500 ring-2 ring-teal-200 bg-teal-50'
                    : 'border-gray-200 hover:border-teal-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-gray-900 text-sm">{p.name}</span>
                  {p.badge && (
                    <span className="text-xs bg-teal-100 text-teal-700 font-bold px-1.5 py-0.5 rounded">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500">{p.description}</div>
                {p.comingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/60">
                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Billing cycle */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Billing Cycle</label>
          <div className="flex rounded-xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => setBilling('monthly')}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                billing === 'monthly'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                billing === 'yearly'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Yearly
              <span className="ml-1.5 text-xs bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded font-bold">
                Save {plan.yearlySavingPct}%
              </span>
            </button>
          </div>
        </div>

        {/* Seat counter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Number of Seats (Staff Members)
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSeats(Math.max(1, seats - 1))}
              className="w-10 h-10 rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-teal-400 hover:bg-teal-50 transition-colors"
            >
              <Minus className="h-4 w-4 text-gray-600" />
            </button>
            <div className="flex-1">
              <input
                type="range"
                min={1}
                max={100}
                value={seats}
                onChange={(e) => setSeats(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1</span>
                <span>25</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>
            <button
              onClick={() => setSeats(Math.min(100, seats + 1))}
              className="w-10 h-10 rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-teal-400 hover:bg-teal-50 transition-colors"
            >
              <Plus className="h-4 w-4 text-gray-600" />
            </button>
            <div className="w-16 text-center">
              <span className="text-2xl font-bold text-teal-600">{seats}</span>
              <div className="text-xs text-gray-400">seats</div>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
          <div className="flex items-end justify-between mb-3">
            <div>
              <div className="text-sm text-gray-500 mb-1">
                {billing === 'monthly' ? 'Monthly total' : 'Monthly equivalent'}
              </div>
              <div className="text-3xl font-bold text-teal-600">{fmt(total)}</div>
              <div className="text-sm text-gray-500">
                {fmt(pricePerSeat)} per seat
              </div>
            </div>
            {billing === 'yearly' && (
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Billed annually</div>
                <div className="text-xl font-bold text-gray-900">{fmt(yearlyTotal)}</div>
                <div className="text-sm text-teal-600 font-semibold">
                  Save {fmt(monthlySaving * 12)}/year
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-teal-200 pt-3 mt-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-teal-500 shrink-0" />
              {seats} staff member{seats > 1 ? 's' : ''} on {plan.name} plan
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <CheckCircle className="h-4 w-4 text-teal-500 shrink-0" />
              {billing === 'yearly' ? 'Annual billing, cancel anytime' : 'Monthly billing, cancel anytime'}
            </div>
          </div>
        </div>

        <a
          href={selectedPlan === 'premium' ? undefined : 'https://providers.mediloop.co/facility-registration'}
          target={selectedPlan === 'premium' ? undefined : '_blank'}
          rel="noopener noreferrer"
          className={`block w-full text-center py-3.5 rounded-xl font-bold text-base transition-colors ${
            selectedPlan === 'premium'
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-teal-600 hover:bg-teal-500 text-white'
          }`}
        >
          {selectedPlan === 'premium' ? 'Coming Soon' : 'Register Your Facility'}
        </a>
      </div>
    </div>
  )
}
