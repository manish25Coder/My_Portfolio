import React from 'react'
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { BiSolidPhoneCall } from "react-icons/bi";

function Footer() {
  return (
    <div>
        <div className='w-[screen] bg-black'>
            <div className='flex flex-row p-2 flex-wrap justify-around'>
                <a href='https://in.linkedin.com/in/manish-singh-84a944262' target='blank' className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'> 
                        <GrLinkedinOption className='text-white' />
                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>
                        ManishSingh
                    </span>
                </a>        
           

                <a href='https://mail.google.com' target='blank' className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'> 
                        <GrMail className='text-white' />
                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>
                        manishsingh59766@gmail.com
                    </span>
                </a>        
           

                <a href='phone' target='blank' className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'> 
                        <BiSolidPhoneCall className='text-white' />
                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>
                        9967131079
                    </span>
                </a>        
           
            
                <a href='https://github.com/manish25Coder' target='blank' className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'> 
                        <GrGithub className='text-white' />
                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>
                        GitHub
                    </span>
                </a>        
            </div>

        </div>
    </div>
  )
}

export default Footer