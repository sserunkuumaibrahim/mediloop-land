import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import {
  ArrowLeft,
  Clock,
  Calendar,
  MapPin,
  CheckCircle,
  Sparkles,
  BookOpen,
  Mail,
  Briefcase,
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
import { allJobs, getJobBySlug } from '../data'
import { ApplicationForm } from './ApplicationForm'

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

export function generateStaticParams() {
  return allJobs.map((job) => ({ slug: job.slug }))
}

export default async function RoleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const job = getJobBySlug(slug)

  if (!job) {
    notFound()
  }

  const isTrainee = job.type === 'Graduate Trainee'
  const Icon = ICON_MAP[job.iconName] ?? Briefcase
  const colors = ICON_COLORS[job.iconName] ?? { bg: 'bg-gray-100', text: 'text-gray-600' }

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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-teal-300 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Positions
          </Link>

          <div className="flex items-start gap-4 sm:gap-6 mb-6">
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}
            >
              <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${colors.text}`} />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    isTrainee
                      ? 'bg-teal-500/20 text-teal-300'
                      : 'bg-purple-500/20 text-purple-300'
                  }`}
                >
                  {job.type}
                </span>
                <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                  {job.department}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">{job.title}</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-4 py-2 text-gray-200">
              <Clock className="w-4 h-4 text-teal-400" /> {job.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-4 py-2 text-gray-200">
              <Calendar className="w-4 h-4 text-teal-400" /> Starts {job.startDate}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-4 py-2 text-gray-200">
              <MapPin className="w-4 h-4 text-teal-400" /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-2 text-red-300 font-semibold">
              <Calendar className="w-4 h-4" /> Deadline: {job.deadline}
            </span>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Left col - job details */}
            <div className="lg:col-span-2 space-y-10">

              {/* About This Role */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">About This Role</h2>
                <p className="text-gray-600 leading-relaxed">{job.about}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {isTrainee ? 'Responsibilities' : 'What You Will Do'}
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-5 h-5 ${isTrainee ? 'text-teal-600' : 'text-purple-600'} mt-0.5 flex-shrink-0`}
                      />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to Have */}
              {job.niceToHave.length > 0 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-teal-600" /> Nice to Have
                  </h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What You Will Learn */}
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-teal-600" /> What You Will Learn
                </h2>
                <ul className="space-y-3">
                  {job.whatYouWillLearn.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right col - sticky application form */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <ApplicationForm job={job} />

                {/* Questions */}
                <div className="mt-6 bg-gray-50 rounded-2xl p-6 text-center">
                  <p className="text-sm text-gray-600 mb-3">Questions about this role?</p>
                  <a
                    href="mailto:careers@mediloop.co"
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm"
                  >
                    <Mail className="w-4 h-4" /> careers@mediloop.co
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
