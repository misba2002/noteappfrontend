'use client'
import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import API from '@/utils/api'

export default function NoteDetailPage() {
  const [note, setNote] = useState(null)
  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    if (params?.id) {
      API.get(`/notes/${params.id}`)
        .then((res) => setNote(res.data))
        .catch((err) => console.error(err))
    }
  }, [params?.id])

  const handleUpdate = async () => {
    try {
      await API.put(`/notes/${params.id}`, note)
      alert('Note updated successfully!')
    } catch (err) {
      alert('Update failed')
    }
  }

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this note? This action cannot be undone.')) {
      try {
        await API.delete(`/notes/${params.id}`)
        router.push('/notes')
      } catch (err) {
        alert('Delete failed')
      }
    }
  }

  if (!note) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading your note...</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <button 
            onClick={() => router.push('/notes')}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Notes
          </button>
          
          <h1 className="text-3xl font-bold text-gray-800">Edit Note</h1>
          <p className="text-gray-500 mt-1">Make changes to your note</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Note title"
              />
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                id="content"
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                rows="8"
                placeholder="Write your note content here..."
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button 
                onClick={handleUpdate}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Update Note
              </button>
              
              <button 
                onClick={handleDelete}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium py-3 px-4 rounded-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Delete Note
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-sm text-gray-500 text-center">
          Last updated: {new Date(note.updatedAt).toLocaleString()}
        </div>
      </div>
    </div>
  )
}