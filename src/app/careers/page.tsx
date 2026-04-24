'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import {
  Briefcase,
  Clock,
  Calendar,
  MapPin,
  ArrowRight,
  Mail,
  CheckCircle,
  Server,
  Code,
  Brain,
  Cloud,
  Monitor,
  Megaphone,
  TrendingUp,
  ClipboardList,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { allJobs, departments, jobTypes } from './data'

const ICON_MAP: Record<string, LucideIcon> = {
  Server,
  Code,
  Brain,
  Cloud,
  Monitor,
  Megaphone,
  TrendingUp,
  ClipboardList,
}

const ICON_COLORS: Record<string, { bg: string; text: string }> = {
  Server: { bg: 'bg-blue-100', text: 'text-blue-600' },
  Code: { bg: 'bg-teal-100', text: 'text-teal-600' },
  Brain: { bg: 'bg-purple-100', text: 'text-purple-600' },
  Cloud: { bg: 'bg-orange-100', text: 'text-orange-600' },
  Monitor: { bg: 'bg-blue-100', text: 'text-blue-600' },
  Megaphone: { bg: 'bg-pink-100', text: 'text-pink-600' },
  TrendingUp: { bg: 'bg-green-100', text: 'text-green-600' },
  ClipboardList: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
}

export default function CareersPage() {
  const [deptFilter, setDeptFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')

  const filtered = allJobs.filter((job) => {
    const deptMatch = deptFilter === 'All' || job.department === deptFilter
    const typeMatch = typeFilter === 'All' || job.type === typeFilter
    return deptMatch && typeMatch
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/africa-humanitarian-aid-doctor-taking-care-patient.jpg"
            alt="Healthcare professionals"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">We&apos;re Hiring</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Join the Team Building Uganda&apos;s Digital Health Future
            </h1>
            <p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Mediloop is building the infrastructure that connects every hospital, clinic, pharmacy, and lab in Uganda.
              Come build technology that matters.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                'Impactful work in healthcare tech',
                'Real production projects from day one',
                'Mentorship from experienced engineers',
                'Fast-growing health-tech startup',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400 shrink-0" />
                  <span className="text-gray-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#openings"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
              >
                See Open Positions
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:careers@mediloop.co"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold transition-colors"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-teal-600 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '8', label: 'Open Roles', sub: 'Across all programs' },
              { value: '2', label: 'Programs', sub: 'Trainee & Internship' },
              { value: 'June 2025', label: 'Start Date', sub: 'For all programs' },
              { value: 'May 15', label: 'Deadline', sub: 'Application closes' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-teal-100 font-semibold text-sm sm:text-base">{stat.label}</div>
                <div className="text-teal-200 text-xs sm:text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Board */}
      <section id="openings" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our open roles across engineering, AI, operations, marketing, and sales.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Department filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-gray-700 mr-1 shrink-0">Department:</span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setDeptFilter(dept)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    deptFilter === dept
                      ? 'bg-teal-600 text-white border-teal-600'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-teal-300'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Type filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-gray-700 mr-1 shrink-0">Type:</span>
              {jobTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    typeFilter === type
                      ? 'bg-teal-600 text-white border-teal-600'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-teal-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-500 mb-6">
            Showing <span className="font-semibold text-gray-800">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'role' : 'roles'}
          </p>

          {/* Job cards */}
          {filtered.length > 0 ? (
            <div className="space-y-4">
              {filtered.map((job) => {
                const Icon = ICON_MAP[job.iconName] ?? Briefcase
                const colors = ICON_COLORS[job.iconName] ?? { bg: 'bg-gray-100', text: 'text-gray-600' }
                return (
                  <Link
                    key={job.slug}
                    href={`/careers/${job.slug}`}
                    className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 hover:shadow-md hover:border-teal-200 transition-all"
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`h-6 w-6 ${colors.text}`} />
                    </div>

                    {/* Middle content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                          {job.department}
                        </span>
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                            job.type === 'Graduate Trainee'
                              ? 'bg-teal-50 text-teal-700'
                              : 'bg-purple-50 text-purple-700'
                          }`}
                        >
                          {job.type}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {job.duration}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{job.summary}</p>
                    </div>

                    {/* Right: Apply + deadline */}
                    <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 shrink-0 w-full sm:w-auto">
                      <span className="inline-flex items-center gap-1.5 border border-teal-600 text-teal-600 hover:bg-teal-50 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        Apply <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-xs text-red-600 flex items-center gap-1 whitespace-nowrap">
                        <Calendar className="w-3 h-3" /> {job.deadline}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 mb-4">No roles match your filters. Try adjusting the filters above.</p>
              <button
                onClick={() => {
                  setDeptFilter('All')
                  setTypeFilter('All')
                }}
                className="inline-flex items-center gap-2 border border-teal-600 text-teal-600 hover:bg-teal-50 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide how we build and work together.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: 'Move Fast, Build Right',
                desc: 'We ship fast but we build things that last. Healthcare software must be reliable.',
              },
              {
                title: 'Patient First',
                desc: 'Every feature we build ultimately serves patients. We never lose sight of that.',
              },
              {
                title: 'Grow Together',
                desc: 'We invest in our team. Your growth is our growth.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-base sm:text-lg text-teal-100 mb-10 max-w-2xl mx-auto">
            We are always looking for talented people. Send your CV to careers@mediloop.co
          </p>
          <a
            href="mailto:careers@mediloop.co"
            className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            <Mail className="w-5 h-5" /> Email careers@mediloop.co
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
