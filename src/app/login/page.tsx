'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      if (!data.success) throw new Error(data.message)

      router.push('/dashboard')
    } catch {
      setError('Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-600">Welcome Back</h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          Log in with your account to continue
        </p>
        {error && <p className="text-center text-sm text-red-500">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Forgot your password?{' '}
          <Link href="./login/forgot-password" className="text-indigo-600 hover:underline">
            Click here
          </Link>
        </p>
      </div>
    </div>
  )
}
