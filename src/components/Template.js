import React from 'react'
import frameImage from '../assets/frame.png';
import LogedInForm from './LogedInForm';
import SignUpForm from './SignUpForm';

const Template = ({title,desc1,desc2,image, formtype,setIsLogedIn}) => {
  return (
    <div>
          <div>
          <h1>{title}</h1>
          <p> 
            <span>{desc1}</span>
            <span>{desc2}</span>
          </p>
          {formtype==="signup" ?(<SignUpForm setIsLogedIn={setIsLogedIn}/>):(<LogedInForm  setIsLogedIn={setIsLogedIn} />)}
           
           <div>
                <div></div>
                <p>Or</p>
                <div></div>
           </div>
            
             <button>
                <p>Sign Up With google</p>
             </button>

         </div>  

           <div>
               <img src={frameImage} alt="pattern" width={558} height={504} loading='lazy' />
               <img src={image} alt="picture" width={558} height={498} loading='lazy' />
            </div>  


    </div>
  )
}

export default Template