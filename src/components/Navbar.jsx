import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between gap-5 font-bold items-center h-[100%] bg-teal-950 ' >
     <div className='flex justify-center items-start font-light text-5xl'> Akshay Karthik S</div>
     <div>
      <Link className='text-xl mx-2' to="/">Profile      </Link>
      <Link className='text-xl mx-2' to="/project">Project     </Link>
      <Link className='text-xl mx-2' to="/contact">Contact     </Link>
      </div>
    </div>
  )
}

export default Navbar