import React from 'react'

const Advertisement = () => {
  return (
    <div className='flex  items-center flex-cols p-4 gap-6 border-spacing-3 border-r-brown-100 border-y-2 mb-28'>
      <div className="">
        <p className='lg:text-4xl text-2xl text-gray-500 pl-2'>UPTO <span className='lg:text-5xl text-3xl text-red-400'>70%</span> OFF </p>
        <h1 className='lg:text-8xl text-4xl'>Clearance <span className='text-orange-300'>Sale</span>!!!</h1>
      </div>
      <div >
        <img className='rounded-se-[80px] rounded-ee-[80px] lg:h-full lg:w-full w-[250px] h-[250px]' src="https://th.bing.com/th/id/OIP.Wy3gnqBjTRcxGoXUDxgyxwHaHa?rs=1&pid=ImgDetMain" alt="" />
      </div>
    </div>
  )
}

export default Advertisement
