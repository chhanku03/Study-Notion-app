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
    <div>
        <form onSubmit={submitHandler}>
            <label >
                <p>Email Address <sup>*</sup></p>
            
            <input 
             required
             type="email"
             name="emails" 
             id="emails"
             placeholder='Enter email address'
             value={formData.emails}
             onChange={changeHandler}
             
              />
              </label>

              <label>
                <p>password<sup>*</sup></p>
                 
            <input 
             required
             type={showpassword ? ("text"):("password")}
             name="passwords" 
             id="passwords"
             placeholder='Enter your password'
             value={formData.passwords}
             onChange={changeHandler}
            
             
              />
              <span onClick={() => setShowpassword((prev) =>!prev)}>
                {showpassword ? (<FaRegEyeSlash />):( <FaRegEye />)}
              </span>

              <Link to="#">
                <p>
                    forgot password
                </p>
              </Link>
              </label>
              <button>SignIn</button>
        </form>
    </div>
  )
}

export default LogedInForm