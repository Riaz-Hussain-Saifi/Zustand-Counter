import React from 'react'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-50 to-indigo-100 text-center px-6">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all"
      >
        Go to Home
      </Link>
    </div>
  )
}