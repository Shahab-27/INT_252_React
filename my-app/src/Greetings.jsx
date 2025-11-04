import React from 'react'

function Greetings() {
  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
        <div className="text-center">
          <img 
            src="data:image/jpeg;base64,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"
            alt="Profile"
            className="rounded-full mx-auto w-32 h-32 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Shahab Fardeen</h2>
          <p className="text-gray-600">Software Developer</p>
        </div>
        <div className="mt-4 text-gray-600">
          <p>Computer Science and Engineering</p>
          <p className='ml-5'>Web Development Enthusiast</p>
        </div>
      </div>
    </div>
  )
}

export default Greetings