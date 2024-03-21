import React from 'react'
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const NavBar = (props) => {
    const isLogedIn=props.isLogedIn;
    const setIsLogedIn=props.setIsLogedIn;
  return (
    <div className='flex justify-evenly'>
        <Link to="/" >
            <img src={Logo} alt="logo" width={160} height={30} loading='lazy'  />
        </Link>

        <nav>
            <ul className='flex gap-4'>
                <li >
                    <Link  to="/" >Home</Link>

                </li>
                <li><Link  to="/" >About</Link></li>
                <li>  <Link  to="/" >Contact</Link></li>
            </ul>
        </nav>
          
          <div className='flex gap-6'>
              { !isLogedIn &&
                <Link to="/login">
                  <button 
                  >Login</button>
                </Link>
              }
              { !isLogedIn &&
                <Link to="/signup">
                  <button>SignUp</button>
                </Link>
              }
              {  isLogedIn &&
                <Link to="/">
                  <button onClick={() => {
                    setIsLogedIn(false);
                    toast.success("Loged Out");
                  }} >Logout</button>
                </Link>
              }
              {  isLogedIn &&
                <Link to="/dashboard">
                  <button>Dashboard</button>
                </Link>
              }
          </div>
    </div>
  )
}

export default NavBar