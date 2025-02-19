
import React from 'react'
import { useGetTop5Query } from './productApi'
import { base } from '../../data/apis';
import ProductDetail, { AddCart } from './ProductDetail';
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
          <h1 className='text-5xl font-bold text-orange-400' >PetClothing</h1>

        </div>
        <div>
          {data &&
            <div className='flex justify-center items-center gap-6 text-center '>
              {data.products.map(({ _id, image, title, price, description, rating }) => {
                return (
                  <div className=' p-4 bg-orange-200'>

                    <img
                      key={_id}
                      src={`${base}/${image}`}
                      alt="image 1"
                      height={150}
                      width={200}
                      className="object-cover border-2 border-white rounded-se-2xl rounded-es-2xl "
                    />
                    <h1 className='text-xl font-semibold pt-6'>{title}</h1>
                    {/* <p>{description}</p> */}
                    <p>{`Rs.${price}`}</p>
                    <p> Rating: {rating}</p>
                    <div className='flex justify-center pt-7'>
                      <Button
                        onClick={() => nav(`/product-detail/${_id}`)}
                        size="sm"
                        color="deep-orange"
                        className="flex items-center gap-2"
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