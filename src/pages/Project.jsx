import React from 'react'

const Project = () => {
  return (
    <div className='h-screen w-screen bg-teal-950 text-white flex items-center justify-center'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-16'>
        {/* Project 1 */}
        <div className='flex flex-col items-center'>
          <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md hover:shadow-xl  overflow-hidden hover:shadow-8xl'>
            <img 
              src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D'
              alt='Project 1' 
              className='h-full w-full object-cover'
            />
          </div>
          <p className='text-xl mt-4 text-white'>Student's File Manager</p>
        </div>

        {/* Project 2 */}
        <div className='flex flex-col items-center'>
          <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
            <img 
              src='https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Project 2' 
              className='h-full w-full object-cover'
            />
          </div>
          <p className='text-xl mt-4 text-white'>Weather Forecaster</p>
        </div>

         {/* Project 2 */}
         <div className='flex flex-col items-center'>
          <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
            <img 
              src='https://plus.unsplash.com/premium_photo-1680503587331-d8d4f8047393?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Project 3' 
              className='h-full w-full object-cover'
            />
          </div>
          <p className='text-xl mt-4 text-white'>Gesture Detected Mouse Control</p>
        </div>

        {/* Project 3 */}
        <div className='flex flex-col items-center'>
          <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
            <img 
              src='https://images.unsplash.com/photo-1521989116480-519a01ffeb2d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
              alt='Project 4' 
              className='h-full w-full object-cover'
            />
          </div>
          <p className='text-xl mt-4 text-white'>Youtube Summarizer</p>
        </div>
      </div>
    </div>
  )
}

export default Project
