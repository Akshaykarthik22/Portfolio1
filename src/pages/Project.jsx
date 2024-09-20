import React from 'react'

const Project = () => {
  return (
    <div className='h-screen w-screen bg-black text-white flex items-center justify-center'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-16'>
        {/* Project 1 */}
        <div className='flex flex-col items-center'>
          <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
            <img 
              src='https://img.freepik.com/free-photo/focused-students-using-tablet-discussing-information_1262-14929.jpg' 
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
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsRmXxaH2pdhDZhMZNpdX6c_BJacJOu9rAg&s' 
              alt='Project 2' 
              className='h-full w-full object-cover'
            />
          </div>
          <p className='text-xl mt-4 text-white'>Weather Forecaster</p>
        </div>

        {/* Project 3 */}
        <div className='flex flex-col items-center'>
          <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
            <img 
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4Wk4Pc-o8UNZjvoVH0UpMr_eRFGMwX8LJA&s' 
              alt='Project 3' 
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
