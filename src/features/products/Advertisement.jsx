import React from 'react'

const Advertisement = () => {
  return (
    <div className='flex  items-center flex-cols p-4 gap-6 border-spacing-3 border-r-brown-100 border-y-2 mb-28'>
      <div>
        <p className='text-4xl text-gray-500 pl-2'>UPTO <span className='text-5xl text-red-400'>70%</span> OFF </p>
        <h1 className='text-8xl'>Clearance <span className='text-orange-300'>Sale</span>!!!</h1>
      </div>
      <div className=''>
        <img className='rounded-se-[80px] rounded-ee-[80px]' src="https://th.bing.com/th/id/OIP.Wy3gnqBjTRcxGoXUDxgyxwHaHa?rs=1&pid=ImgDetMain" alt="" />
      </div>
    </div>
  )
}

export default Advertisement
