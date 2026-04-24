'use client'

import { useState } from 'react'
import { Send, CheckCircle, GraduationCap, Briefcase } from 'lucide-react'
import type { JobRole } from '../data'

interface ApplicationFormProps {
  job: JobRole
}

export function ApplicationForm({ job }: ApplicationFormProps) {
  const isTrainee = job.type === 'Graduate Trainee'

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [projects, setProjects] = useState('')
  const [university, setUniversity] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const data = new FormData(e.currentTarget)
    try {
      await fetch('https://formspree.io/f/xpwzgqkl', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 text-center">
        <CheckCircle className="w-14 h-14 text-teal-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
        <p className="text-sm text-gray-600">
          Thank you for applying for the{' '}
          <span className="font-semibold">{job.title}</span> position. We will review your
          application and get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        {isTrainee ? (
          <GraduationCap className="w-5 h-5 text-teal-600" />
        ) : (
          <Briefcase className="w-5 h-5 text-purple-600" />
        )}
        <h3 className="text-lg font-bold text-gray-900">Apply Now</h3>
      </div>
      <p className="text-sm text-red-600 font-medium mb-6">Deadline: {job.deadline}</p>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        {/* Hidden fields */}
        <input type="hidden" name="_subject" value={`Application: ${job.title}`} />
        <input type="hidden" name="role" value={job.title} />
        <input type="hidden" name="program" value={job.type} />

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="+256 7XX XXX XXX"
          />
        </div>

        {isTrainee ? (
          <>
            {/* Projects */}
            <div>
              <label htmlFor="projects" className="block text-sm font-medium text-gray-700 mb-1">
                Projects You Have Worked On <span className="text-red-500">*</span>
              </label>
              <textarea
                id="projects"
                name="projects"
                required
                rows={4}
                value={projects}
                onChange={(e) => setProjects(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                placeholder="Describe projects you have built or contributed to..."
              />
            </div>

            {/* Resume / CV */}
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                Resume / CV <span className="text-red-500">*</span>
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
              />
              <p className="text-xs text-gray-400 mt-1">PDF or DOC, max 5 MB</p>
            </div>

            {/* Bio Data */}
            <div>
              <label htmlFor="bioData" className="block text-sm font-medium text-gray-700 mb-1">
                Bio Data <span className="text-red-500">*</span>
              </label>
              <input
                id="bioData"
                name="bioData"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
              />
              <p className="text-xs text-gray-400 mt-1">PDF or DOC, max 5 MB</p>
            </div>
          </>
        ) : (
          <>
            {/* University Name */}
            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                University Name <span className="text-red-500">*</span>
              </label>
              <input
                id="university"
                name="university"
                type="text"
                required
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Makerere University"
              />
            </div>

            {/* University Introductory Letter */}
            <div>
              <label htmlFor="introLetter" className="block text-sm font-medium text-gray-700 mb-1">
                University Introductory Letter <span className="text-red-500">*</span>
              </label>
              <input
                id="introLetter"
                name="introductoryLetter"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
              />
              <p className="text-xs text-gray-400 mt-1">PDF or DOC, max 5 MB</p>
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={`w-full flex items-center justify-center gap-2 ${
            isTrainee
              ? 'bg-teal-600 hover:bg-teal-700'
              : 'bg-purple-600 hover:bg-purple-700'
          } text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60`}
        >
          {submitting ? (
            'Submitting...'
          ) : (
            <>
              <Send className="w-4 h-4" /> Submit Application
            </>
          )}
        </button>
      </form>
    </div>
  )
}
