'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    // if (token) {
    //   router.push('/notes')
    // } else {
      router.push('/login')
    // }
  }, [router])

  return <p className="text-center">Redirecting...</p>
}
