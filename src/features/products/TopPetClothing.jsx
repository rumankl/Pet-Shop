
import React from 'react'
import { useGetTop5Query } from './productApi'
import { base } from '../../data/apis';
// import ProductDetail, { AddCart } from './ProductDetail';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const TopPetClothing = () => {
  const { data, isLoading, error, isError } = useGetTop5Query();
  const nav = useNavigate();
  if (isLoading) {
    return <h1>Loading....</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  // const { user } = useSelector((state) => state.userSlice);
  return (
    <div className=' '>
      <div className='mt-10 p-4 '>
        <div className='flex justify-center items-center p-4 '>
          <h1 className='text-5xl font-bold text-teal-600 shadow-sm  mb-10' >Pet<span className="text-gray-600">Clothing</span></h1>

        </div>
        <div>
          {data &&
            <div className='lg:flex  lg:justify-center lg:items-center  justify-center items-center gap-6 text-center  lg:m-4 m-4 '>
              {data.products.map(({ _id, image, title, price, description, rating }) => {
                return (
                  <div className='pt-5 pb-5 pl-3 pr-3 border-2 0 rounded-3xl shadow-lg '>
                    <div className='flex justify-center items-center'>
                      <img
                        key={_id}
                        src={`${base}/${image}`}
                        alt="image 1"
                        height={150}
                        width={200}
                        className="object-cover rounded-2xl h-[150px]  "
                      />
                    </div>
                    <h1 className='lg:text-[18px] text-xl font-semibold pt-6 '>{title}</h1>
                    {/* <p>{description}</p> */}
                    <p>{`Rs.${price}`}</p>
                    {/* <p> Rating: {rating}</p> */}
                    <div className='flex justify-center pt-7'>
                      <Button
                        onClick={() => nav(`/product-detail/${_id}`)}
                        size="sm"
                        // color="deep-orange"
                        className="flex justify-between items-center  bg-gray-200  text-gray-800 "
                      >
                        View More
                      </Button>
                    </div>
                  </div>

                )
              })}
            </div>
          }
        </div>
      </div>
    </div >

  )
}

export default TopPetClothing