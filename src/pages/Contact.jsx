import React from 'react'
import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone } from 'lucide-react'


const Contact = () => {
  return (

  
    <div className='h-screen w-screen bg-teal-950 flex justify-around items-center'>
      <div className='font-bold text-slate-50 *flex justify-start  items-start h-[80%] w-[10%] text-5xl'><h1>CONTACT</h1></div>
          <div><a href="mailto:jsakshaykarthik@gmail.com"><Mail className='text-white h-10 w-10 hover:animate-bounce' />MAIL</a></div>
          <div><a href="https://www.linkedin.com/in/akshay-karthik-s-041a26253/?originalSubdomain=in" target="_blank"><Linkedin className='text-white h-10 w-10 hover:animate-bounce' />LINKEDIN</a></div>
          <div><a href="https://github.com/Akshaykarthik22" target="_blank"><Github className='text-white h-10 w-10 hover:animate-bounce'/>GITHUB</a></div>
          <div><a href="tel:+917010160414"><Phone className='text-white h-10 w-10 hover:animate-bounce'/>PHONE</a></div>
        </div>

      
    


        )
}

export default Contact