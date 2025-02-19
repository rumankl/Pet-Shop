import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "@material-tailwind/react";
import ProfileMenu from '../ui/ProfileMenu';


const Header = () => {
  const nav = useNavigate();

  const { user } = useSelector((state) => state.userSlice);

  return (
    <div>
      <div className='flex  p-4  justify-between gap-8 items-center'>

        <div className='flex  justify-center items-center'>
          <img className='border rounded-full  border-e-white border-orange-400 border-s-8  border-s-black' src="R-removebg-preview.png" alt="dog" height={100} width={100} />
          <h1 className='text-3xl font-semibold  text-orange-600'>Global <span className='text-black'>Pet Shop</span></h1>
        </div>
        <div className='flex  p-4  justify-between gap-8'>
          <span>  Email: globalpet@gmail.com</span>
          <span> Phone: ++01-1234567</span>

        </div>
      </div>
      <nav className=' text-1xl text-black bg-orange-300 flex gap-4 justify-center p-4'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-page">About Us</NavLink>
        <NavLink to="/product-page">Product</NavLink>
        <NavLink to="/service-page">Service</NavLink>
        <NavLink to="/contact-page">Contact</NavLink>
        <NavLink to="/food">Food</NavLink>

      </nav>
      <div>
        {user ? <ProfileMenu user={user} /> : <Button onClick={() => nav('/login')} size="sm" variant="text">
          <span>Log In</span>
        </Button>}

      </div>
    </div >

  )
}
export default Header
