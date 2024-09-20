import { SquareUserRound } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-white flex justify-center gap-4 font-bold items-center h-full w-screen bg-teal-950 ' >
      <div className=' h-[90%] w-[80%] flex  justify-between items-center'>
        <div className='flex justify-center items-start font-light text-5xl'> Akshay Karthik S</div>
        <div className='flex justify-center items-center gap-4'>
          <Link className='text-xl mx-2' to="/">Profile</Link>
          <Link className='text-xl mx-2' to="/project">Project</Link>
          <Link className='text-xl mx-2' to="/contact">Contact</Link>
          <Link className='text-xl ' to="/contact"><SquareUserRound className='h-10 w-10'/></Link>
          </div>

      </div>
    </div>
  )
}

export default Navbar