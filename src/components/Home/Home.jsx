import React from 'react'
import Link from 'next/link'

const Home = () => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 mt-10">
          <h2 className="text-xl font-bold mb-2">The title</h2>
          <h3 className="text-md text-gray-600 mb-4">Subtitle</h3>
          <Link href="/details/1">
            <p className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md inline-block">
              View
            </p>
          </Link>
        </div>
    )
}

export default Home
