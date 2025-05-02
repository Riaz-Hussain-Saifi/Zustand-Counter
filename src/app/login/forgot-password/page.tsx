import React from 'react'

export default function ForgotPassword() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Forgot Password?</h1>
          <p className="text-gray-600 mb-4">
            Do not worry! If you have forgotten your password, you can simply <strong>create a new account</strong>.
          </p>
          <a
            href="/signup"
            className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Up Again
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Make sure to remember your new login credentials this time 😊
          </p>
        </div>
      </div>
    )
  }