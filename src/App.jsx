import React from 'react'
import Course from './component/Course'
import User from './component/User'
import Navigation from './component/Navigation'


const App = () => {
  return (
    <div>
        <Navigation/>
           <h1 className="text-4xl text-red-400 text-center p-10">
        Our Courses
      </h1>
        <div className="flex gap-8 p-20 ps-28">
     
    <Course
    name="React"
    duration={3}
    price={15000}
    />
    <Course
    name="Node"
    duration={4}
    price={16000}
    />
    <Course
    name="Express"
    duration={5}
    price={17000}
    />
      </div>

      
      <h1 className="text-4xl text-red-400 text-center p-10">
        Our Users
      </h1>
      <div className="flex gap-8 justify-center">
        <User
          name="Ram"
          age="25"
          course="React"
          photoUrl="https://picsum.photos/200/200"
        />
        <User
          name="Shyam"
          age="22"
          course="Node"
          photoUrl="https://picsum.photos/200/200"
        />
        <User
          name="Hari"
          age="20"
          course="Express"
          photoUrl="https://picsum.photos/200/200"
        />
       
      </div>
    </div>
  )
}

export default App
