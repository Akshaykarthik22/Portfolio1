import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone } from 'lucide-react'
import React from 'react'
import Img from '../assets/Image/akpic.jpg'
const Profile = () => {
  return (
    <div className='h-screen w-screen bg-black flex  flex-col items-center'>
      <div className='h-[80%] w-screen flex justify-center'>
            <div className='h-screen w-screen flex flex-col justify-center ml-6'>
                <div className=' text-white w-[60%] h-[10%] my-5 font-extralight text-5xl'>Hello! I'am Akshay</div>
                <div className=' w-[80%]  text-white h-[20%] my-5 font-thin text-3xl'>I am a Computer Science Engineering student with a passion for AI/ML and web development. I've worked on diverse projects, including AI-based YouTube summarizers and Telegram bots. Currently interning at Real AI Dynamics.</div>
            </div>
            <div className='h-screen w-screen flex justify-center items-center'>
                <div className='h-[40%] w-[40%]  rounded-full'><img src={Img} className='rounded-full border-2 border-r-emerald-600'></img></div>
            </div>
      </div>
        <div className='h-screen w-[40%]  flex justify-around items-center'>
          <div><Mail className='text-white h-10 w-10' /></div>
          <div><Linkedin className='text-white h-10 w-10'/></div>
          <div><Github className='text-white h-10 w-10'/></div>
          <div><Phone className='text-white h-10 w-10'/></div>
        </div>
    </div>
  )
}
export default Profile