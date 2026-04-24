import Link from 'next/link'
import { ArrowRight, Server, Code, Brain, Cloud, Monitor, Megaphone, TrendingUp, ClipboardList } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Server, Code, Brain, Cloud, Monitor, Megaphone, TrendingUp, ClipboardList,
}

const ICON_COLORS: Record<string, { bg: string; text: string }> = {
  Server:      { bg: 'bg-blue-100',   text: 'text-blue-600' },
  Code:        { bg: 'bg-teal-100',   text: 'text-teal-600' },
  Brain:       { bg: 'bg-purple-100', text: 'text-purple-600' },
  Cloud:       { bg: 'bg-orange-100', text: 'text-orange-600' },
  Monitor:     { bg: 'bg-blue-100',   text: 'text-blue-600' },
  Megaphone:   { bg: 'bg-pink-100',   text: 'text-pink-600' },
  TrendingUp:  { bg: 'bg-green-100',  text: 'text-green-600' },
  ClipboardList: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
}

// Inline snapshot of open roles — keeps this a server component with no data import needed
const OPEN_ROLES = [
  { slug: 'backend-developer',    title: 'Backend (Django) Developer', iconName: 'Server',       department: 'Engineering',          type: 'Graduate Trainee' },
  { slug: 'frontend-developer',   title: 'Frontend (React) Developer',  iconName: 'Code',         department: 'Engineering',          type: 'Graduate Trainee' },
  { slug: 'ai-ml-developer',      title: 'AI/ML Developer',             iconName: 'Brain',        department: 'AI & Machine Learning', type: 'Graduate Trainee' },
  { slug: 'devops-cloud-engineer', title: 'DevOps/Cloud Engineer',      iconName: 'Cloud',        department: 'Engineering',          type: 'Graduate Trainee' },
  { slug: 'it-intern',            title: 'IT Intern',                   iconName: 'Monitor',      department: 'Engineering',          type: 'Internship' },
  { slug: 'marketing-intern',     title: 'Marketing Intern',            iconName: 'Megaphone',    department: 'Marketing',            type: 'Internship' },
  { slug: 'sales-intern',         title: 'Sales Intern',                iconName: 'TrendingUp',   department: 'Sales',                type: 'Internship' },
  { slug: 'admin-intern',         title: 'Admin Intern',                iconName: 'ClipboardList', department: 'Operations',          type: 'Internship' },
]

export default function CareersSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              We are hiring
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
              Join the Team
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl">
              Help build Uganda's digital health infrastructure. {OPEN_ROLES.length} open roles across engineering, AI, marketing, and operations.
            </p>
          </div>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 border border-teal-600 text-teal-600 hover:bg-teal-50 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shrink-0"
          >
            View All Roles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Role cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {OPEN_ROLES.map((role) => {
            const Icon = ICON_MAP[role.iconName] ?? Server
            const colors = ICON_COLORS[role.iconName] ?? { bg: 'bg-gray-100', text: 'text-gray-600' }
            return (
              <Link
                key={role.slug}
                href={`/careers/${role.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md hover:border-teal-200 transition-all"
              >
                <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon className={`h-5 w-5 ${colors.text}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-teal-600 transition-colors">
                  {role.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    role.type === 'Graduate Trainee'
                      ? 'bg-teal-50 text-teal-700'
                      : 'bg-purple-50 text-purple-700'
                  }`}>
                    {role.type}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                    {role.department}
                  </span>
                </div>
              </Link>
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-red-700 font-medium">
            Application deadline: <span className="font-bold">May 15, 2025</span>. All programs start June 2025.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shrink-0"
          >
            Apply Now <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
