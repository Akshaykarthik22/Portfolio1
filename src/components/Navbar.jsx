import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-white flex justify-end gap-5 font-bold items-center h-[100%] bg-slate-950 ' >
      <Link className='text-xl' to="/profile">Profile  </Link>
      <Link className='text-xl' to="/project">Project  </Link>
      <Link className='text-xl' to="/contact">Contact  </Link>
    </div>
  )
}

export default Navbar