import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div className=' flex flex-col min-h-screen  bg-gray-50 px-10'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Rootlayout
