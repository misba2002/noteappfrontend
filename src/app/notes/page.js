'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import API from '@/utils/api'

export default function NotesPage() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    API.get('/notes')
      .then((res) => setNotes(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8  bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Your Notes</h2>
          <p className="text-gray-500 mt-1">
            {notes.length} note{notes.length !== 1 ? 's' : ''}
          </p>
        </div>
        <Link 
          href="/notes/new" 
          className="mt-4 sm:mt-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium px-5 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-md hover:shadow-lg flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          New Note
        </Link>
      </div>
      
      {notes.length === 0 ? (
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-12 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-700">No notes yet</h3>
          <p className="mt-2 text-gray-500">Get started by creating your first note</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Link
              key={note._id}
              href={`/notes/${note._id}`}
              className="block bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200 hover:-translate-y-1"
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-2 truncate">{note.title || 'Untitled Note'}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {note.content && note.content.length > 0 
                  ? note.content.slice(0, 100) + (note.content.length > 100 ? '...' : '')
                  : 'No content yet...'
                }
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center">
                <span className="text-xs text-gray-400">
                  {new Date(note.updatedAt || note.createdAt).toLocaleDateString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}