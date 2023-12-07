import React from 'react'

const User = ({ name, age, course, photoUrl }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full rounded-full" src={photoUrl} alt="User" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            Age: {age}
          </p>
          <p className="text-gray-700 text-base">
            Course: {course}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </div>
      </div>
    )
  }
  
export default User