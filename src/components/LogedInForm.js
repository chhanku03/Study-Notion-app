import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const LogedInForm = ({setIsLogedIn}) => {
    const[formData,setFormData]=useState({
        emails:"",passwords:""
    })
     
      const navigate=useNavigate();

      const[showpassword,setShowpassword]=useState(false);
     function changeHandler(event)
     {

        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
     }

     function submitHandler(event){
      event.preventDefault();
      setIsLogedIn(true);
      toast.success("Logged In");
      navigate("/dashboard");


     }
  return (
    <div >
        <form onSubmit={submitHandler} className='flex  flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200 font-bold '>*</sup></p>
            
            <input 
             required
             type="email"
             name="emails" 
             id="emails"
             placeholder='Enter email address'
             value={formData.emails}
             onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-[0.5px] border-t-0 border-r-0 border-l-0'
             
              />
              </label>

              <label className='w-full relative'>
                <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]'>password<sup className='text-pink-200 font-bold '>*</sup></p>
                 
            <input 
             required
             type={showpassword ? ("text"):("password")}
             name="passwords" 
             id="passwords"
             placeholder='Enter your password'
             value={formData.passwords}
             onChange={changeHandler}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-[0.5px] border-t-0 border-r-0 border-l-0 '
            
             
              />
              <span className='absolute  right-3 top-[38px]' onClick={() => setShowpassword((prev) =>!prev)}>
                {showpassword ? (<FaRegEyeSlash />):( <FaRegEye />)}
              </span>

              <Link to="#">
                <p className='text-sm mt-2 text-blue-100 ml-[340px]   '>
                    forgot password
                </p>
              </Link>
              </label>
              <button className='bg-yellow-500 border border-black text-black rounded-full  text-xl text-bold py-1 px-2 mt-4 hover:bg-richblack-700 hover:text-richblack-5'>Sign In</button>
        </form>
    </div>
  )
}

export default LogedInForm