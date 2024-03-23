import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

const Login = ({setIsLogedIn}) => {
  return (
    <div className='overflow-auto'>
        <Template
          title="Welcome Back"
          desc1="Build skills for today,tomorrow ,and beyond"
          desc2="Education to future proof your career"
          image={loginImg}
          formtype="login"
          setIsLogedIn={setIsLogedIn}
        
        />
    </div>
  )
}

export default Login