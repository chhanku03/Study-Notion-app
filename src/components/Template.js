import React from 'react'
import frameImage from '../assets/frame.png';
import LogedInForm from './LogedInForm';
import SignUpForm from './SignUpForm';
import { FcGoogle } from "react-icons/fc";

const Template = ({title,desc1,desc2,image, formtype,setIsLogedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px]  mx-auto py-12 gap-x-12 justify-between gap-y-0 h-full text-white '>
          <div className='w-11/12 max-w-[450px] mx-0  '>
          <h1
             className='text-richblack-5 font-bold text-[1.075rem] leading-[2.375rem]'>{title}</h1>
          <p className='text-[1.25rem] leading-[1.625rem] mt-4'> 
            <span  className='text-richblack-100'>{desc1}</span>
             <br />
            <span className='text-blue-100 italic'>{desc2}</span>
          </p>
          {formtype==="signup" ?(<SignUpForm setIsLogedIn={setIsLogedIn}/>):(<LogedInForm  setIsLogedIn={setIsLogedIn} />)}
           
           <div className='flex items-center w-full my-4 gap-x-2'>
                <div className='bg-richblack-700 h-[1px] w-full'></div>
                <p className='text-richblack-700'>Or</p>
                <div className='bg-richblack-700 h-[1px] w-full'></div>
           </div>
            
             <button className=' w-full flex justify-center items-center gap-x-2 font-medium text-richblack-100  border border-richblack-100 rounded-full py-[8px] px-[12px]  
            mt-6 '>
                <FcGoogle className='text-xl' />
                <p>
                Sign Up With google</p>
             </button>

         </div>  

           <div className='w-11/12 max-w-[450px] relative
              h-screen mt-4'>
               <img src={frameImage} alt="pattern" width={558} height={504} loading='lazy' />
               <img src={image} alt="picture" width={500} height={498} loading='lazy ' className='absolute  -top-4 -left-4  ' />
            </div>  


    </div>
  )
}

export default Template