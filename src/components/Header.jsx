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
          <img className='object-cover rounded-full' src="https://img.freepik.com/premium-vector/pet-shop-logo-vector-art-illustration-8_666870-12534.jpg" alt="dog" height={100} width={100} />
          <h1 className='text-3xl font-semibold text-teal-400 '>Global <span className='text-black'>Pet Shop</span></h1>
        </div>
        <div className='flex  p-4  justify-between gap-8'>
          <span>  Email:  <a href="mailto:globalpet@gmail"> globalpet@gmail.com</a></span>
          <span> Phone: ++01-1234567</span>


        </div>
      </div>
      <div className='flex  pl-8 pr-8 justify-between gap-8 items-center bg-gray-200 '>
        <div>
          <nav className=' text-1xl  text-black flex gap-4 justify-center p-4'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-page">About Us</NavLink>
            <NavLink to="/all-product-page">Product</NavLink>
            {/* <NavLink to="/service-page">Service</NavLink> */}
            <NavLink to="/contact-page">Contact</NavLink>
            <NavLink to="/food">Food</NavLink>

          </nav>
        </div>
        <div>
          {user ? <ProfileMenu user={user} /> : <Button onClick={() => nav('/login')} size="sm" variant="text">
            <span>Log In</span>
          </Button>}

        </div>
      </div>
    </div >

  )
}
export default Header
