import React from 'react'

const Course = ({name,price,duration}) => {
  return (
    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="https://picsum.photos/400/200" alt="Course Image"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <p className="text-gray-700 text-base">
      Price: Rs.{price}
    </p>
    <p className="text-gray-700 text-base">
      Duration: {duration} months.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Enroll
    </button>
  </div>
</div>

    </div>
  )
}

export default Course