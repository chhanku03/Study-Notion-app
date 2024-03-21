import React from 'react'
import signUpImg from '../assets/signup.png';
import Template from '../components/Template';

const SignUp = ({setIsLogedIn}) => {
  return (
    <div>
      <Template
        title="Joins the milions learning to code with study notion for free"
        desc1="Build skills for today , tomorrow , and beyond"
        desc2="Education to future-proof for your career"
        image={signUpImg}
        formtype="signup"
        setIsLogedIn={setIsLogedIn}

      
      />
    </div>
  )
}

export default SignUp