import React from 'react';

const DisplaySingleImage = () => {
  return (
    <div className='flex justify-evenly items-center flex-cols bg-gray-200 lg:gap-8  gap-4 lg:h-[500px] w-full h-[250px] '>

      <h1 className='text-xl font-extrabold text-left text-whblackite lg:text-6xl '>
        Find the <span className='text-red-300'>Best</span> <br />
        <span className="lg:text-[46px] text-[30px]" >Products for your</span>  <br />
        <span className='text-red-300 '> Pet</span>  Animal
      </h1>

      <img
        className='rounded-se-[187px] rounded-es-[200px]   rounded-t-[197px]  lg:w-80 lg:h-80 w-40 h-40  border-2 p-4  border-gray-400 border-s-[33px] border-r-8 border-r-red-300'
        src='https://wallpaperaccess.com/full/1447496.jpg'
        alt='pet'
      />

    </div>

  );
};

export default DisplaySingleImage;


