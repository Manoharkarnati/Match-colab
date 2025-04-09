import profiles from './data/profilesData'; // ✅ only if you saved in src/data/profilesData.js
import React from 'react'
import FeaturedProfiles from './components/FeaturedProfiles'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Match Colab</h1>
      <p className="mb-6">Connect and build your professional network effortlessly.</p>
      <button className="bg-white text-black font-bold py-2 px-4 rounded mb-10">
        Get Started
      </button>

      <FeaturedProfiles />
    </div>
  )
}

export default App
