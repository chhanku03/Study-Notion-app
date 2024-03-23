import React from 'react'
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const NavBar = (props) => {
    const isLogedIn=props.isLogedIn;
    const setIsLogedIn=props.setIsLogedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto  '>
        <Link to="/" >
            <img src={Logo} alt="logo" width={160} height={30} loading='lazy'  />
        </Link>

        <nav>
            <ul className='flex gap-6     '>
                <li  className='text-richblack-5   hover:font-extrabold duration-200  transition-all '>
                    <Link  to="/" >Home</Link>

                </li >
                <li className='text-richblack-5  hover:font-extrabold duration-200  transition-all '><Link  to="/" >About</Link></li>
                <li className=' text-richblack-5 hover:font-extrabold duration-200  transition-all '>  <Link  to="/" >Contact</Link></li>
            </ul>
        </nav>
          
          <div className='flex gap-8'>
              { !isLogedIn &&
                <Link to="/login">
                  <button  className='border border-2px py-1 px-2 text-white font-sans rounded-full hover:font-extrabold shadow-lg duration-200 transition-all '
                  >Login</button>
                </Link>
              }
              { !isLogedIn &&
                <Link to="/signup">
                  <button   className='border border-2px py-1 px-2 text-white font-sans rounded-full hover:font-extrabold shadow-lg duration-200 transition-all  '>SignUp</button>
                </Link>
              }
              {  isLogedIn &&
                <Link to="/">
                  <button className='border border-2px py-1 px-2 text-white font-sans rounded-full hover:font-extrabold shadow-lg duration-200 transition-all  ' onClick={() => {
                    setIsLogedIn(false);
                    toast.success("Loged Out");
                  }} >Logout</button>
                </Link>
              }
              {  isLogedIn &&
                <Link to="/dashboard">
                  <button className='border border-2px py-1 px-2 text-white font-sans rounded-full hover:font-extrabold shadow-lg duration-200 transition-all  '>Dashboard</button>
                </Link>
              }
          </div>
    </div>
  )
}

export default NavBar