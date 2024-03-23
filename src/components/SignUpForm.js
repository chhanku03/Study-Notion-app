import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const SignUpForm = ({setIsLogedIn}) => {
    const[formData,setFormData]=useState({
        firstName:"",
        LastName:"",
        emails:"",
        passwords:"",
        confirmPassword:"",

    })
      const navigate=useNavigate();
      const[showpassword,setShowpassword]=useState(false);
    function changeHandler(event)
    {
         setFormData((prev) => ({
            ...prev,
            [event.target.name]:event.target.value
         }))
    }

      function submitHandler(event)
      {
        event.preventDefault();
         if(formData.passwords !=formData.confirmPassword)
         {
          toast.error("confirmed password is not match");
          return;
         }
         setIsLogedIn(true);
         toast.success("account created");
         navigate("/dashboard");

  

      }
  return (
    <div className=' w-11/12   max-w-[450px] '>
         <div className='flex gap-x-4'>
            <button  className='bg-richblack-700 py-1 px-2 mt-3 text-richblack-5 rounded-md  hover:bg-richblack-900 cursor-pointer text-bold   '>
                Student
            </button>
            
            <button className='bg-richblack-700 py-1 px-2 mt-3 text-richblack-5 rounded-md   hover:bg-richblack-900 cursor-pointer text-bold '>
                Instructor
            </button>
         </div>

         <form onSubmit={submitHandler}  className='flex  flex-col w-full gap-y-4 mt-3'>
            <div>
               <label className='w-full' >
                <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200 font-bold '> *</sup></p>
                <input required type="text" name="firstName"
                 id=""
                 value={formData.firstName}
                 placeholder='Enter your first name' 
                 onChange={changeHandler}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-[0.5px] border-t-0 border-r-0 border-l-0'
                 />

               </label>

                 <label  className='w-full'>
                    <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name </p>
                    <input type="text" 
                    name="LastName"
                     id=""
                       value={formData.LastName}
                       onChange={changeHandler}
                       placeholder='Enter your last name' 
                       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-[0.5px] border-t-0 border-r-0 border-l-0'
              
                     />
                  </label>
                 
                    <div>
                        <label className='w-full' >
                          <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]'>email <sup className='text-pink-200 font-bold '>*</sup></p>
                         <input type="email" name="emails"
                          id=""
                           value={formData.emails}
                          onChange={changeHandler}
                         placeholder='Enter your email'
                         required
                         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-[0.5px] border-t-0 border-r-0 border-l-0'
             
                          />
                        </label>
                    </div>
                   <div className='relative'>
                    <label  className='w-full '>
                     <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]'>create password <sup className='text-pink-200 font-bold '>*</sup></p>
                      <input type={showpassword ?("text"):("password")}
                       name="passwords" 
                       id=""
                        value={formData.passwords}
                        onChange={changeHandler}
                        placeholder='Enter your password'
                        required
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-[0.5px] border-t-0 border-r-0 border-l-0'
             
                       />
                         <span className='absolute inset-y-0 right-0 pr-3  top-10 '  onClick={() => setShowpassword((prev) =>!prev)}>
                {showpassword ? (<FaRegEyeSlash />):( <FaRegEye />)}
              </span>
                   </label>
                    
                     <label className='w-full relative' >
                          <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200 font-bold '>*</sup></p>
                           <input type="password" name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            placeholder='Enter your confirmed password'
                            required
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-[0.5px] border-t-0 border-r-0 border-l-0'
             
                           id="" />
                             <span className='absolute inset-y-0 right-0 pr-3  top-20 '  onClick={() => setShowpassword((prev) =>!prev)}>
                             {showpassword ? (<FaRegEyeSlash />):( <FaRegEye />)}
                             </span>
                     </label>
                     </div>
             </div>
             <button className='bg-yellow-500 border border-black text-black rounded-full text-xl text-bold py-1 px-2 mt-4 hover:bg-richblack-700 hover:text-richblack-5'>Create account</button>
         </form>
    </div>
  )
}

export default SignUpForm