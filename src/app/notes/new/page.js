'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import API from '@/utils/api'

export default function NewNotePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      await API.post('/notes', { title, content })
      router.push('/notes')
    } catch (err) {
      alert(err.response?.data?.msg || 'Failed to create note')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Create New Note</h1>
          <p className="mt-2 text-gray-500">Capture your thoughts and ideas</p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <form onSubmit={handleCreate} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                id="title"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Note title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                id="content"
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                placeholder="Write your note here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-3 pt-2">
              <button
                type="button"
                onClick={() => router.push('/notes')}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-md hover:shadow-lg"
              >
                Save Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}