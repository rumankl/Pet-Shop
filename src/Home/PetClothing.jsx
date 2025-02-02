
import React from 'react'

import Clothing from '../features/products/Clothing';

const PetClothing = () => {
  return (
    <div className=' '>
      <div className='mt-10 p-4 '>
        <div className='flex justify-center items-center p-2 '>
          <h1 className='text-5xl font-bold text-orange-400' >PetClothing</h1>

        </div>
        <Clothing />
      </div>
    </div>

  )
}

export default PetClothing
