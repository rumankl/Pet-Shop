import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { useGetOrderDetailQuery } from './orderApi'
import { base } from '../../data/apis'


const OrderDetail = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.userSlice);

  const { data, isLoading, error } = useGetOrderDetailQuery({
    id,
    token: user.token
  });

  console.log(data);

  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div className='p-4'>



      <div className="">
        <div >
          {data?.orderItems.map(({ qty, name, image, price, _id }) => {
            return <div key={_id} className="grid grid-cols-2">
              <div>
                <img src={`${base}/${image}`} alt="" className='h-[70px]  w-[90px]' />
              </div>
              <div>
                <h1>{name}</h1>
                <h1>{`Rs.${price}`}</h1>
              </div>

            </div>
          })}

          {<div className="flex justify-between mt-10">
            <h1 className="text-xl font-semibold">Sub Total</h1>
            <h1>Rs.{data?.totalAmount}</h1>
          </div>}
        </div>

      </div>


    </div>
  )
}

export default OrderDetail