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
    <div>
         <div>
            <button>
                Student
            </button>
            
            <button>
                Instructor
            </button>
         </div>

         <form onSubmit={submitHandler}>
            <div>
               <label >
                <p>First Name <sup>*</sup></p>
                <input required type="text" name="firstName"
                 id=""
                 value={formData.firstName}
                 placeholder='Enter your first name' 
                 onChange={changeHandler}/>
               </label>

                 <label >
                    <p>Last Name </p>
                    <input type="text" 
                    name="LastName"
                     id=""
                       value={formData.LastName}
                       onChange={changeHandler}
                       placeholder='Enter your last name'  
                     />
                  </label>
                 
                    <div>
                        <label >
                          <p>email <sup>*</sup></p>
                         <input type="email" name="emails"
                          id=""
                           value={formData.emails}
                          onChange={changeHandler}
                         placeholder='Enter your email'
                         required
                          />
                        </label>
                    </div>
                   <div>
                    <label >
                     <p>create password <sup>*</sup></p>
                      <input type={showpassword ?("text"):("password")}
                       name="passwords" 
                       id=""
                        value={formData.passwords}
                        onChange={changeHandler}
                        placeholder='Enter your password'
                        required
                       />
                         <span onClick={() => setShowpassword((prev) =>!prev)}>
                {showpassword ? (<FaRegEyeSlash />):( <FaRegEye />)}
              </span>
                   </label>
                    
                     <label >
                          <p>Confirm Password <sup>*</sup></p>
                           <input type="password" name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            placeholder='Enter your confirmed password'
                            required
                           id="" />
                             <span onClick={() => setShowpassword((prev) =>!prev)}>
                             {showpassword ? (<FaRegEyeSlash />):( <FaRegEye />)}
                             </span>
                     </label>
                     </div>
             </div>
             <button>Create account</button>
         </form>
    </div>
  )
}

export default SignUpForm