'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          AI-Powered Data Extraction
        </h1>
        <p className="mt-5 text-xl text-gray-500 max-w-2xl mx-auto">
          Convert unstructured PDFs into structured tables with our modular AI solution. 
          Customizable for various industries including finance, legal, and healthcare.
        </p>
        <div className="mt-8">
          <Link 
            href="/extract" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
          >
            Get Started
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}